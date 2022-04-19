function InsertionCard(props) {
    return (
        <div className="row mb-3 mt-5">
          <div className="card">
            <div className="row mb-3 mt-3">
              <div className="col-2">
                <label className="form-label">Server Type</label>
                <select className="form-select" defaultValue="BM">
                  <option onClick={()=>{props.setType('BM')}} value="BM">BM</option>
                  <option onClick={()=>{props.setType('VM')}} value="VM">VM</option>
                  <option onClick={()=>{props.setType('APP')}} value="APP">APP</option>
                </select>
              </div>
              <div className="col-2">
                <label className="form-label">Host</label>
                <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Host" onChange={(e)=>{props.setHost(e.target.value)}}/>
              </div>
              <div className="col-2">
                <label className="form-label">Hostname</label>
                <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Hostname" onChange={(e)=>{props.setHostname(e.target.value)}}/>
              </div>
              <div className="col-2">
                <label className="form-label">OS</label>
                <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="OS" onChange={(e)=>{props.setOs(e.target.value)}}/>
              </div>
              <div className="col-2">
                <label className="form-label">IP</label>
                <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="IP" onChange={(e)=>{props.setIp(e.target.value)}}/>
              </div>
              <div className="col-2">
                <label className="form-label">Disk</label>
                <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Disk" onChange={(e)=>{props.setDisk(e.target.value)}}/>
              </div>
            </div>
            <div className="row mb-5">
              <div className="col-2">
                <label className="form-label">Datastore</label>
                <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Datastore" onChange={(e)=>{props.setDatastore(e.target.value)}}/>
              </div>
              <div className="col-2">
                <label className="form-label">RAM</label>
                <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="RAM" onChange={(e)=>{props.setRam(e.target.value)}}/>
              </div>
              <div className="col-2">
                <label className="form-label">Cores</label>
                <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Cores" onChange={(e)=>{props.setCores(e.target.value)}}/>
              </div>
              <div className="col-2">
                <label className="form-label">VLAN</label>
                <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="VLAN" onChange={(e)=>{props.setVlan(e.target.value)}}/>
              </div>
              <div className="col-2">
                <label className="form-label">SW</label>
                <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="SW" onChange={(e)=>{props.setSw(e.target.value)}}/>
              </div>
              <div className="col-2">
                <label className="form-label">Physical Port</label>
                <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Physical Port" onChange={(e)=>{props.setPhysPort(e.target.value)}}/>
              </div>
            </div>
          </div>
        </div>
    );
}

export default InsertionCard;