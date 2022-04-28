import '../App.css';
import { useState, useEffect } from 'react';
import InsertionCard from '../components/insertionCard';
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";

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
          .then((data) => {
            console.log(665);
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
    console.log(99);
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
      <h5 className="card-title mt-5 mb-5 white-font">to be {type.length}</h5>
      <div className="container">

        {cardList} 

        <div className='row mb-5'>
          <div className='col-1'>
            <span type="button" className="badge glass0" onClick={()=>{addCard()}}>+</span>
          </div>
          <div className='col-1'>
            {(type.length > 1) && (<span type="button" className="badge glass0" onClick={()=>{delCard()}}>-</span>)}
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

export default InsertPage;
