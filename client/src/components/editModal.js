import { Modal, Button } from 'react-bootstrap';
import { useState, useEffect } from 'react';

function EditModal(props) {

    const {editCard, row, ...others} = props;

    const editRow = () => {
        fetch('http://localhost:' + process.env.REACT_APP_NODE_PORT + '/api/edit/' + row.id, {
            method: 'put', 
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
        .then(res => res.json())
        .then((data) => {
            if (data.affectedRows === 1){
                console.log("Successfull edit");
                editCard(props.card, {  id: props.card,
                    server_type: type,
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
                    physical_port: physPort });
                props.onHide();
            }
        })
    }
    
    const [type, setType] = useState(row.server_type)
    const [host,setHost] = useState(row.host)
    const [hostname, setHostname] = useState(row.host)
    const [os, setOs] = useState(row.os)
    const [ip, setIp] = useState(row.ip)
    const [disk, setDisk] = useState(row.disk)
    const [datastore, setDatastore] = useState(row.datastore)
    const [ram, setRam] = useState(row.ram)
    const [cores, setCores] = useState(row.cores)
    const [vlan, setVlan] = useState(row.vlan)
    const [sw, setSw] = useState(row.sw)
    const [physPort, setPhysPort] = useState(row.physical_port)
    
    useEffect(()=>{
        setType(row.server_type);
        setHost(row.host);
        setHostname(row.hostname);
        setOs(row.os);
        setIp(row.ip);
        setDisk(row.disk);
        setDatastore(row.datastore);
        setRam(row.ram);
        setCores(row.cores);
        setVlan(row.vlan);
        setSw(row.sw);
        setPhysPort(row.physical_port);
    },[row])
    
    return (
        <div>
            <Modal
                {...others}
                size="md"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                >
                <Modal.Header>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Edit Information
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className='row'>
                        <div className='col-4'>
                            <label className="form-label">Type:</label>
                            <input type="text" className="form-control" id="exampleFormControlInput1" value={type} onChange={(e)=>{setType(e.target.value)}}/>
                        </div>
                        <div className='col-4'>
                            <label className="form-label">Host:</label>
                            <input type="text" className="form-control" id="exampleFormControlInput2" value={host} onChange={(e)=>{setHost(e.target.value)}}/>
                        </div>
                        <div className='col-4'>
                            <label className="form-label">Hostname:</label>
                            <input type="text" className="form-control" id="exampleFormControlInput3" value={hostname} onChange={(e)=>{setHostname(e.target.value)}}/>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-4'>
                            <label className="form-label">OS:</label>
                            <input type="text" className="form-control" id="exampleFormControlInput4" value={os} onChange={(e)=>{setOs(e.target.value)}}/>
                        </div>
                        <div className='col-4'>
                            <label className="form-label">IP:</label>
                            <input type="text" className="form-control" id="exampleFormControlInput5" value={ip} onChange={(e)=>{setIp(e.target.value)}}/>
                        </div>
                        <div className='col-4'>
                            <label className="form-label">Disk:</label>
                            <input type="text" className="form-control" id="exampleFormControlInput6" value={disk} onChange={(e)=>{setDisk(e.target.value)}}/>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-4'>
                            <label className="form-label">Datastore:</label>
                            <input type="text" className="form-control" id="exampleFormControlInput7" value={datastore} onChange={(e)=>{setDatastore(e.target.value)}}/>
                        </div>
                        <div className='col-4'>
                            <label className="form-label">RAM:</label>
                            <input type="text" className="form-control" id="exampleFormControlInput8" value={ram} onChange={(e)=>{setRam(e.target.value)}}/>
                        </div>
                        <div className='col-4'>
                            <label className="form-label">Cores:</label>
                            <input type="text" className="form-control" id="exampleFormControlInput9" value={cores} onChange={(e)=>{setCores(e.target.value)}}/>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-4'>
                            <label className="form-label">VLAN:</label>
                            <input type="text" className="form-control" id="exampleFormControlInput10" value={vlan} onChange={(e)=>{setVlan(e.target.value)}}/>
                        </div>
                        <div className='col-4'>
                            <label className="form-label">SW:</label>
                            <input type="text" className="form-control" id="exampleFormControlInput11" value={sw} onChange={(e)=>{setSw(e.target.value)}}/>
                        </div>
                        <div className='col-4'>
                            <label className="form-label">Physical Port:</label>
                            <input type="text" className="form-control" id="exampleFormControlInput12" value={physPort} onChange={(e)=>{setPhysPort(e.target.value)}}/>
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button className="mybtn" variant="outline-danger" onClick={others.onHide}>Cancel</Button>
                    <Button className="mybtn" variant="primary" onClick={() => editRow()}>Make Changes</Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default EditModal;