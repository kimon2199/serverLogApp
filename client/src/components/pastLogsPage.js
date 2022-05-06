import '../App.css';
import { useEffect, useState } from 'react';
import PastLogCard from './pastLogCard';
import ConfirmDelModal from './confirmDelModal';
import EditModal from './editModal';
import ExcelExport from './excelExport';


function PastLogsPage() {

    useEffect(()=>{
        fetch('http://localhost:' + process.env.REACT_APP_NODE_PORT + '/api/get', {
                    method: 'get'
                })
                    .then(res => res.json())
                    .then((data) => {
                    console.log(data);
                    setCards(data.slice().reverse());
                    })
    },[]);

    const [delModalShow, setDelModalShow] = useState(false);
    const [editModalShow, setEditModalShow] = useState(false);
    const [cardSpotlight, setCardSpotlight] = useState(0);
    const [cards,setCards] = useState([])
    const [wholeCard,setWholeCard] = useState({server_type: '', host: '', 
        hostname: '', os: '', ip: '', disk: '', datastore: '', ram: '', 
        cores: '', vlan: '', sw: '', physical_port: ''})

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
            setCardSpotlight={setCardSpotlight} setWholeCard={setWholeCard}/>
    })

    return (
        <div className="container">
            <div className="row pt-5">
                <div className='col'>
                    {cards.length !== 0 && (<ExcelExport csvData={cards} fileName="text-excel-doc" />)}
                </div>
            </div>
            {cardList}
            <div className='pt-5'/>
            <ConfirmDelModal show={delModalShow} onHide={() => setDelModalShow(false)} card={cardSpotlight} removeCard={removeCard}/>
            <EditModal show={editModalShow} onHide={() => setEditModalShow(false)} card={cardSpotlight} row={wholeCard} editCard={editCard}/>
        </div>
    );
}

export default PastLogsPage;
