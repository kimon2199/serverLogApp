import '../App.css';
import { useEffect, useState } from 'react';
import PastLogCard from './pastLogCard';
import { Link } from "react-router-dom";
import ConfirmDelModal from './confirmDelModal';


function PastLogsPage() {

  useEffect(()=>{
    fetch('http://localhost:3001/api/get', {
                method: 'get'
            })
                .then(res => res.json())
                .then((data) => {
                   console.log(data);
                   setCards(data.slice().reverse());
                })
  },[]);

  const checkId = (card) => {
    return card.id != cardSpotlight;
  }

  const removeCard = () => {
    const result = cards.filter(checkId);
    setCards(result);
  }

  const [delModalShow, setDelModalShow] = useState(false);
  const [cardSpotlight, setCardSpotlight] = useState(0);
  const [cards,setCards] = useState([])

  let cardList = cards.map((item,index)=>{
    return <PastLogCard key={"cd-"+index} index={index} my_id={item.id} type={item.server_type} host={item.host} 
    hostname={item.hostname} os={item.os} ip={item.ip} disk={item.disk} datastore={item.datastore} 
    ram={item.ram} cores={item.cores} vlan={item.vlan} sw={item.sw} physPort={item.physical_port} 
    setDelModalShow={setDelModalShow} setCardSpotlight={setCardSpotlight}/>
  })

  return (
    <div className="container">
        {cardList}
        <ConfirmDelModal show={delModalShow} onHide={() => setDelModalShow(false)} card={cardSpotlight} removeCard={removeCard}/>
    </div>
  );
}

export default PastLogsPage;
