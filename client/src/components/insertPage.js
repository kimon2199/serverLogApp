import '../App.css';
import { useState } from 'react';
import InsertionCard from '../components/insertionCard';
import { useNavigate } from "react-router-dom";
import * as XLSX from 'xlsx';
import { SiMicrosoftexcel } from "react-icons/si";
import ExcelModal from "./excelModal.js";
import { sql_head, emptyRow } from '../commonVariablesReact';

function InsertPage() {

  let navigate = useNavigate();

  const [myState,setMyState] = useState([{...emptyRow}]);
  const [selectedFile, setSelectedFile] = useState(null)

  const [excelModalShow, setExcelModalShow] = useState(false)
  const [excelHeaderError, setExcelHeaderError] = useState(false)
  const [excelFileTypeError, setExcelFileTypeError] = useState(false)
  
  const whenFileChange = event => {
    setSelectedFile(event.target.files[0]);
  };
  
  const onFileUpload = () => {
    let xl2json = new ExcelToJSON();
    xl2json.parseExcel(selectedFile);
    return !excelFileTypeError && !excelHeaderError;
  };
  
  var ExcelToJSON = function() {

    this.parseExcel = function(file) {
        var reader = new FileReader();
  
        reader.onload = function(e) {
          var data = e.target.result;
          try {
            var workbook = XLSX.read(data, {
              type: 'binary'
            });
          } catch(err) {
            setExcelFileTypeError(true);
            return;
          }
          setExcelFileTypeError(false);
  
          workbook.SheetNames.forEach(function(sheetName) {
            var row_object = XLSX.utils.sheet_to_row_object_array(workbook.Sheets[sheetName]);
            var headers = XLSX.utils.sheet_to_json(workbook.Sheets[sheetName], { header: 1 })[0];
            for (var i=0; i < headers.length && i < sql_head.length; i++){
              if (headers[i] !== sql_head[i]){
                setExcelHeaderError(true);
                return;
              }
            }
            submitLogExcel(row_object);
            setExcelHeaderError(false);
            setExcelModalShow(false);
          });
        };
  
        reader.onerror = function(ex) {
            console.log(ex);
        };
  
        reader.readAsBinaryString(file);
    };
  };

  const submitLogExcel = async rows => {
    for (let i = 0; i < rows.length; i++) {
      await fetch('http://localhost:' + process.env.REACT_APP_NODE_PORT + '/api/insert', {
              method: 'post', 
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify(rows[i])
          })
          .then(response => response.json())
          .then((data) => {
            console.log(data);
          })
    }
  }

  const submitLog = async () => {
    for (let index = 0; index < myState.length; index++) {
      await fetch('http://localhost:' + process.env.REACT_APP_NODE_PORT + '/api/insert', {
              method: 'post', 
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify(myState[index])
          })
          .then(response => response.json())
          .then((data) => {
            console.log(data);
          })
        }
    navigate("../logs", {replace:true});
  }

  const addCard = () => {
    setMyState(myState => [...myState, {...emptyRow}]);
  }
  
  const delCard = () => {
    if (myState.length > 1) {
      setMyState(myState => myState.slice(0,myState.length-1));
    }
  }

  let cardList = myState.map((item,index)=>{
    return <InsertionCard key={"cd-"+index} index={index} row={myState} setMyState={setMyState}/>
  })

  return (
    <div>
      <div className='pt-5'/>
      <h5 className="card-title  mb-5 white-font">Server Management Web App</h5>
      <div className="container">

        <div className='row'>
          <div className='col'>
            <span type="button" className="badge glass0 flex" style={{float:'right'}} onClick={()=>{setExcelModalShow(true)}}>Import <SiMicrosoftexcel/></span>
          </div>
        </div>

        {cardList} 

        <div className='row mb-5'>
          <div className='col-1'>
            <span type="button" className="badge glass0" onClick={()=>{addCard()}}>+</span>
          </div>
          <div className='col-1'>
            {(myState.length > 1) && (<span type="button" className="badge glass0" onClick={()=>{delCard()}}>-</span>)}
          </div>
          <div className='col-8'>
            <h5 className="white-font glass0 badge">Records to be added: {myState.length}</h5>
          </div>
        </div>
        <div className='row'>
          <div className='col'>
            <button type="button" className="btn btn-primary glass0" onClick={()=>{submitLog()}}>Submit</button>
          </div>
        </div>
        <div className='pb-5'/>
      </div>
      <ExcelModal show={excelModalShow} onHide={() => setExcelModalShow(false)} whenFileChange={(e) => whenFileChange(e)} 
        onFileUpload={onFileUpload} excelHeaderError={excelHeaderError} excelFileTypeError={excelFileTypeError}/>
    </div>
  );
}

export default InsertPage;
