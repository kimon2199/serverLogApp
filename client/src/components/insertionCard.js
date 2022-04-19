function InsertionCard(props) {

    const changeSpecificValue = (set,arr,index,changedValue) => {
      set(arr.slice(0,index).concat(changedValue).concat(arr.slice(index+1,arr.length)));
    }

    return (
        <div className="row mb-3 mt-5">
          <div className="card">
            <div className="row mb-3 mt-3">
              <div className="col-2">
                <label className="form-label">Server Type</label>
                <select className="form-select" defaultValue="BM">
                  <option onClick={()=>{changeSpecificValue(props.setType, props.type, props.index, 'BM')}} value="BM">BM</option>
                  <option onClick={()=>{changeSpecificValue(props.setType, props.type, props.index, 'VM')}} value="VM">VM</option>
                  <option onClick={()=>{changeSpecificValue(props.setType, props.type, props.index, 'APP')}} value="APP">APP</option>
                </select>
              </div>
              <div className="col-2">
                <label className="form-label">Host</label>
                <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Host" onChange={(e)=>{changeSpecificValue(props.setHost, props.host, props.index, e.target.value)}}/>
              </div>
              <div className="col-2">
                <label className="form-label">Hostname</label>
                <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Hostname" onChange={(e)=>{changeSpecificValue(props.setHostname, props.hostname, props.index, e.target.value)}}/>
              </div>
              <div className="col-2">
                <label className="form-label">OS</label>
                <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="OS" onChange={(e)=>{changeSpecificValue(props.setOs, props.os, props.index, e.target.value)}}/>
              </div>
              <div className="col-2">
                <label className="form-label">IP</label>
                <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="IP" onChange={(e)=>{changeSpecificValue(props.setIp, props.ip, props.index, e.target.value)}}/>
              </div>
              <div className="col-2">
                <label className="form-label">Disk</label>
                <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Disk" onChange={(e)=>{changeSpecificValue(props.setDisk, props.disk, props.index, e.target.value)}}/>
              </div>
            </div>
            <div className="row mb-5">
              <div className="col-2">
                <label className="form-label">Datastore</label>
                <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Datastore" onChange={(e)=>{changeSpecificValue(props.setDatastore, props.datastore, props.index, e.target.value)}}/>
              </div>
              <div className="col-2">
                <label className="form-label">RAM</label>
                <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="RAM" onChange={(e)=>{changeSpecificValue(props.setRam, props.ram, props.index, e.target.value)}}/>
              </div>
              <div className="col-2">
                <label className="form-label">Cores</label>
                <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Cores" onChange={(e)=>{changeSpecificValue(props.setCores, props.cores, props.index, e.target.value)}}/>
              </div>
              <div className="col-2">
                <label className="form-label">VLAN</label>
                <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="VLAN" onChange={(e)=>{changeSpecificValue(props.setVlan, props.vlan, props.index, e.target.value)}}/>
              </div>
              <div className="col-2">
                <label className="form-label">SW</label>
                <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="SW" onChange={(e)=>{changeSpecificValue(props.setSw, props.sw, props.index, e.target.value)}}/>
              </div>
              <div className="col-2">
                <label className="form-label">Physical Port</label>
                <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Physical Port" onChange={(e)=>{changeSpecificValue(props.setPhysPort, props.physPort, props.index, e.target.value)}}/>
              </div>
            </div>
          </div>
        </div>
    );
}

export default InsertionCard;