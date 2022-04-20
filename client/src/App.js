import './App.css';
import { useState, useEffect } from 'react';
import InsertionCard from './components/insertionCard';

function App() {

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
    for (let index = 0; index < host.length; index++) {
      fetch('http://localhost:3001/api/insert', {
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
          .then((data) => {console.log(data)})
    }
  }

  const [cards,setCards] = useState([1])

  const addCard = () => {
    setCards(cards => [...cards, 1]);
    setType(type => [...type,'BM']);
    setHost(host => [...host,'']);;
    setHostname(hostname => [...hostname,'']);;
    setOs(os => [...os,'']);;
    setIp(ip => [...ip,'']);;
    setDisk(disk => [...disk,'']);;
    setDatastore(datastore => [...datastore,'']);;
    setRam(ram => [...ram,'']);;
    setCores(cores => [...cores,'']);;
    setVlan(vlan => [...vlan,'']);;
    setSw(sw => [...sw,'']);;
    setPhysPort(physPort => [...physPort,'']);;
  }
  
  const delCard = () => {
    if (cards.length > 1) {
      setCards(cards => cards.slice(0,cards.length-1));
    }
  }

  let cardList = cards.map((item,index)=>{
    return <InsertionCard key={"cd-"+index} index={index} setType={setType} type={type} setHost={setHost} 
    host={host} setHostname={setHostname} hostname={hostname} setOs={setOs} os={os} setIp={setIp} 
    ip={ip} setDisk={setDisk} disk={disk} setDatastore={setDatastore} datastore={datastore} 
    setRam={setRam} ram={ram} setCores={setCores} cores={cores} setVlan={setVlan} vlan={vlan} 
    setSw={setSw} sw={sw} setPhysPort={setPhysPort} physPort={physPort}/>
  })

  return (
    <div className="App background" key="6">
      <div className='pt-5'/>
      <h5 className="card-title  mb-5 white-font">Server Management Web App</h5>
      <h5 className="card-title mt-5 mb-5 white-font">to be {cards.length}</h5>
      <div className="container">

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
        <div className='row'>
          <div className='col'>
            <button type="button" className="btn btn-primary" onClick={()=>{submitLog()}}>Submit</button>
          </div>
        </div>
        <div className='pb-5'/>
      </div>
    </div>
  );
}

export default App;
