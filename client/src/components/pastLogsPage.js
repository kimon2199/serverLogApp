import '../App.css';
import { useEffect, useState } from 'react';
import PastLogCard from './pastLogCard';
import { Link } from "react-router-dom";


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
  })

  const [cards,setCards] = useState([])

  let cardList = cards.map((item,index)=>{
    return <PastLogCard key={"cd-"+index} index={index} type={item.server_type} host={item.host} 
    hostname={item.hostname} os={item.os} ip={item.ip} disk={item.disk} datastore={item.datastore} 
    ram={item.ram} cores={item.cores} vlan={item.vlan} sw={item.sw} physPort={item.physical_port}/>
  })

  return (
    <div className="container">
        {cardList}
    </div>
  );
}

export default PastLogsPage;
