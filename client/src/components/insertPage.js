import '../App.css';
import { useState } from 'react';
import InsertionCard from '../components/insertionCard';
import { useNavigate } from "react-router-dom";
import * as XLSX from 'xlsx';
import { SiMicrosoftexcel } from "react-icons/si";
import ExcelModal from "./excelModal.js";

function InsertPage() {

  let navigate = useNavigate();

  const [type, setType] = useState(['BM'])
  const [host, setHost] = useState([''])
  const [hostname, setHostname] = useState([''])
  const [os, setOs] = useState([''])
  const [ip, setIp] = useState([''])
  const [disk, setDisk] = useState([''])
  const [datastore, setDatastore] = useState([''])
  const [ram, setRam] = useState([''])
  const [cores, setCores] = useState([''])
  const [vlan, setVlan] = useState([''])
  const [sw, setSw] = useState([''])
  const [physPort, setPhysPort] = useState([''])
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
            var expectedHeaders = [ "server_type", "host", "hostname", "os", "ip", "disk", 
              "datastore", "ram", "cores", "vlan", "sw", "physical_port"];
            for (var i=0; i < headers.length && i < expectedHeaders.length; i++){
              if (headers[i] !== expectedHeaders[i]){
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
              body: JSON.stringify({  type: rows[i].server_type,
                                      host: rows[i].host,
                                      hostname: rows[i].hostname,
                                      os: rows[i].os,
                                      ip: rows[i].ip,
                                      disk: rows[i].disk,
                                      datastore: rows[i].datastore,
                                      ram: rows[i].ram,
                                      cores: rows[i].cores,
                                      vlan: rows[i].vlan,
                                      sw: rows[i].sw,
                                      physPort: rows[i].physical_port
          })
          })
          .then(response => response.json())
          .then((data) => {
            console.log(data);
          })
    }
  }

  const submitLog = async () => {
    for (let index = 0; index < host.length; index++) {
      await fetch('http://localhost:' + process.env.REACT_APP_NODE_PORT + '/api/insert', {
              method: 'post', 
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({  type: type[index],
                                      host: host[index],
                                      hostname: hostname[index],
                                      os: os[index],
                                      ip: ip[index],
                                      disk: disk[index],
                                      datastore: datastore[index],
                                      ram: ram[index],
                                      cores: cores[index],
                                      vlan: vlan[index],
                                      sw: sw[index],
                                      physPort: physPort[index]
          })
          })
          .then(response => response.json())
          .then((data) => {
            console.log(data);
            navigate("../logs", {replace:true});
          })
    }
  }

  const addCard = () => {
    setType(type => [...type,'BM']);
    setHost(host => [...host,'']);
    setHostname(hostname => [...hostname,'']);
    setOs(os => [...os,'']);
    setIp(ip => [...ip,'']);
    setDisk(disk => [...disk,'']);
    setDatastore(datastore => [...datastore,'']);
    setRam(ram => [...ram,'']);
    setCores(cores => [...cores,'']);
    setVlan(vlan => [...vlan,'']);
    setSw(sw => [...sw,'']);
    setPhysPort(physPort => [...physPort,'']);
  }
  
  const delCard = () => {
    if (type.length > 1) {
      setType(type => type.slice(0,type.length-1));
      setHost(host => host.slice(0,host.length-1));;
      setHostname(hostname => hostname.slice(0,hostname.length-1));;
      setOs(os => os.slice(0,os.length-1));;
      setIp(ip => ip.slice(0,ip.length-1));;
      setDisk(disk => disk.slice(0,disk.length-1));;
      setDatastore(datastore => datastore.slice(0,datastore.length-1));;
      setRam(ram => ram.slice(0,ram.length-1));;
      setCores(cores => cores.slice(0,cores.length-1));;
      setVlan(vlan => vlan.slice(0,vlan.length-1));;
      setSw(sw => sw.slice(0,sw.length-1));;
      setPhysPort(physPort => physPort.slice(0,physPort.length-1));;
    }
  }

  let cardList = type.map((item,index)=>{
    return <InsertionCard key={"cd-"+index} index={index} setType={setType} type={type} setHost={setHost} 
    host={host} setHostname={setHostname} hostname={hostname} setOs={setOs} os={os} setIp={setIp} 
    ip={ip} setDisk={setDisk} disk={disk} setDatastore={setDatastore} datastore={datastore} 
    setRam={setRam} ram={ram} setCores={setCores} cores={cores} setVlan={setVlan} vlan={vlan} 
    setSw={setSw} sw={sw} setPhysPort={setPhysPort} physPort={physPort}/>
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
            {(type.length > 1) && (<span type="button" className="badge glass0" onClick={()=>{delCard()}}>-</span>)}
          </div>
          <div className='col-8'>
            <h5 className="white-font glass0 badge">Records to be added: {type.length}</h5>
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
