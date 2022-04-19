import './App.css';
import { useState, useEffect } from 'react';
import InsertionCard from './components/insertionCard';

function App() {

  const [type, setType] = useState('BM')
  const [host, setHost] = useState('')
  const [hostname, setHostname] = useState('')
  const [os, setOs] = useState('')
  const [ip, setIp] = useState('')
  const [disk, setDisk] = useState('')
  const [datastore, setDatastore] = useState('')
  const [ram, setRam] = useState('')
  const [cores, setCores] = useState('')
  const [vlan, setVlan] = useState('')
  const [sw, setSw] = useState('')
  const [physPort, setPhysPort] = useState('')

  // useEffect(()=>{
  //   fetch('http://localhost:3001/api/get', {
  //               method: 'get'
  //           })
  //               .then(res => res.json())
  //               .then((data) => {
  //                  console.log(data);
  //               })
  // })

  const submitLog = () => {
    fetch('http://localhost:3001/api/insert', {
            method: 'post', 
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({  type: type,
                                    host: host,
                                    hostname: hostname,
                                    os: os,
                                    ip: ip,
                                    disk: disk,
                                    datastore: datastore,
                                    ram: ram,
                                    cores: cores,
                                    vlan: vlan,
                                    sw: sw,
                                    physPort: physPort
        })
        })
        .then(response => response.json())
        .then((data) => {console.log(data)})
        
  }

  const [cards,setCards] = useState([1])

  const addCard = () => {
    setCards(cards => [...cards, 1]);
  }
  
  const delCard = () => {
    if (cards.length > 1) {
      setCards(cards => cards.slice(0,cards.length-1));
    }
  }


  let cardList = cards.map((item,index)=>{

    return <InsertionCard key={"cd-"+index} setType={setType} setHost={setHost} setHostname={setHostname}
    setOs={setOs} setIp={setIp} setDisk={setDisk} setDatastore={setDatastore} setRam={setRam}
    setCores={setCores} setVlan={setVlan} setSw={setSw} setPhysPort={setPhysPort}/>
  
  })

  return (
    <div className="App">
      <h5 className="card-title mt-5 mb-5">Server Management Web App</h5>
      <h5 className="card-title mt-5 mb-5">to be {cards.length}</h5>
      <div className="container mb-5">

        {cardList}
        {/* <div className="row mb-3 mt-5">
          <div className="card">
            <div className="row mb-3 mt-3">
              <div className="col-2">
                <label className="form-label">Server Type</label>
                <select className="form-select" defaultValue="BM">
                  <option onClick={()=>{setType('BM')}} value="BM">BM</option>
                  <option onClick={()=>{setType('VM')}} value="VM">VM</option>
                  <option onClick={()=>{setType('APP')}} value="APP">APP</option>
                </select>
              </div>
              <div className="col-2">
                <label className="form-label">Host</label>
                <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Host" onChange={(e)=>{setHost(e.target.value)}}/>
              </div>
              <div className="col-2">
                <label className="form-label">Hostname</label>
                <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Hostname" onChange={(e)=>{setHostname(e.target.value)}}/>
              </div>
              <div className="col-2">
                <label className="form-label">OS</label>
                <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="OS" onChange={(e)=>{setOs(e.target.value)}}/>
              </div>
              <div className="col-2">
                <label className="form-label">IP</label>
                <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="IP" onChange={(e)=>{setIp(e.target.value)}}/>
              </div>
              <div className="col-2">
                <label className="form-label">Disk</label>
                <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Disk" onChange={(e)=>{setDisk(e.target.value)}}/>
              </div>
            </div>
            <div className="row mb-5">
              <div className="col-2">
                <label className="form-label">Datastore</label>
                <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Datastore" onChange={(e)=>{setDatastore(e.target.value)}}/>
              </div>
              <div className="col-2">
                <label className="form-label">RAM</label>
                <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="RAM" onChange={(e)=>{setRam(e.target.value)}}/>
              </div>
              <div className="col-2">
                <label className="form-label">Cores</label>
                <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Cores" onChange={(e)=>{setCores(e.target.value)}}/>
              </div>
              <div className="col-2">
                <label className="form-label">VLAN</label>
                <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="VLAN" onChange={(e)=>{setVlan(e.target.value)}}/>
              </div>
              <div className="col-2">
                <label className="form-label">SW</label>
                <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="SW" onChange={(e)=>{setSw(e.target.value)}}/>
              </div>
              <div className="col-2">
                <label className="form-label">Physical Port</label>
                <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Physical Port" onChange={(e)=>{setPhysPort(e.target.value)}}/>
              </div>
            </div>
          </div>
        </div> */}

        <div className='row mb-5'>
          <div className='col-1'>
            <span type="button" className="badge bg-success" onClick={()=>{addCard()}}>+</span>
          </div>
          <div className='col-1'>
            <span type="button" className="badge bg-danger" onClick={()=>{delCard()}}>-</span>
          </div>
        </div>
        <div className='row mb-5'>
          <div className='col'>
            <button type="button" className="btn btn-primary" onClick={()=>{submitLog()}}>Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
