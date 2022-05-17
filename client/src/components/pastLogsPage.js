import '../App.css';
import { useEffect, useState } from 'react';
import PastLogCard from './pastLogCard';
import ConfirmDelModal from './confirmDelModal';
import EditModal from './editModal';
import ExcelExport from './excelExport';
import CountBox from './countBox';
import PageSelector from './pageSelector'
import { emptyRow } from '../commonVariablesReact';


function PastLogsPage(props) {

    const itemsPerPage = 50;
    const [pageNumber, setPageNumber] = useState(1);
    const [numberOfRows, setNumberOfRows] = useState(' ')

    useEffect(() => {
        async function fetchRows() {
            let nor = 0;
            await fetch('http://localhost:' + process.env.REACT_APP_NODE_PORT + '/api/get/count', {
                method: 'get'
            })
            .then(res => res.json())
            .then((data) => {
                console.log(data);
                nor = data[0]["COUNT(*)"];
                setNumberOfRows(nor);
            })

            fetch('http://localhost:' + process.env.REACT_APP_NODE_PORT + '/api/get/all/' + nor + '/' + itemsPerPage + '/' + pageNumber, {
                method: 'get'
            })
            .then(res => res.json())
            .then((data) => {
                console.log(data);
                setCards(data.slice().reverse());
            })
        }
        fetchRows();
    },[pageNumber]);
    
    const [delModalShow, setDelModalShow] = useState(false);
    const [editModalShow, setEditModalShow] = useState(false);
    const [cardSpotlight, setCardSpotlight] = useState(0);
    const [cards,setCards] = useState([]);
    const [wholeCard,setWholeCard] = useState({...emptyRow});

    const checkId = (card) => {
        return card.id !== cardSpotlight;
    }

    const removeCard = () => {
        const result = cards.filter(checkId);
        setCards(result);
    }

    const editCard = (idd,card) => {
        let result = cards;
        for (let index = 0; index < result.length; index++) {
            if (result[index].id === idd){
                result[index] = card;
                break;
            }
        }
        setCards(result);
    } 

    let cardList = cards.map((item,index)=>{
        return <PastLogCard key={"cd-"+index} index={index} row={item}
            setDelModalShow={setDelModalShow} setEditModalShow={setEditModalShow} 
            setCardSpotlight={setCardSpotlight} setWholeCard={setWholeCard}
            searchKey={props.searchKey} searchTerm={props.searchTerm}/>
    })

    return (
        <div className="container">
            <div className="row pt-5">
                <div className='col'>
                    <CountBox showDel={delModalShow}/>
                </div>
                <div className='col'>
                    {cards.length !== 0 && (<ExcelExport csvData={cards} fileName="text-excel-doc" />)}
                </div>
            </div>
            {cardList}
            <PageSelector setPageNumber={setPageNumber} numberOfRows={numberOfRows} itemsPerPage={itemsPerPage}/>
            <div className='pt-5'/>
            <ConfirmDelModal show={delModalShow} onHide={() => setDelModalShow(false)} card={cardSpotlight} removeCard={() => removeCard()}/>
            <EditModal show={editModalShow} onHide={() => setEditModalShow(false)} card={cardSpotlight} row={wholeCard} editCard={editCard}/>
        </div>
    );
}

export default PastLogsPage;
