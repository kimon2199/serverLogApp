import '../App.css';
import { AiOutlineDelete } from 'react-icons/ai';
import { FiEdit2 } from 'react-icons/fi';

function PastLogCard(props) {

    const delPopUp = () => {
      props.setDelModalShow(true);
      props.setCardSpotlight(props.my_id);
      console.log(6);
    }

    const editPopUp = () => {
      //props.setModalShow(true);
      console.log(6);
    }

    return (
      <div className="row mb-3 mt-5 bg">
        <div className="glass0 white-font">
          <div className="row mb-1 mt-1">
            <div className="col-11">
              <fieldset disabled>
                <div className="row">
                  <div className="col-2">
                    <label className="form-label">Server Type</label>
                    <input type="text" className="form-control" id="exampleFormControlInput1" placeholder={props.type}/>
                  </div>
                  <div className="col-2">
                    <label className="form-label">Host</label>
                    <input type="text" className="form-control" id="exampleFormControlInput2" placeholder={props.host}/>
                  </div>
                  <div className="col-2">
                    <label className="form-label">Hostname</label>
                    <input type="text" className="form-control" id="exampleFormControlInput3" placeholder={props.hostname}/>
                  </div>
                  <div className="col-2">
                    <label className="form-label">OS</label>
                    <input type="text" className="form-control" id="exampleFormControlInput4" placeholder={props.os}/>
                  </div>
                  <div className="col-2">
                    <label className="form-label">IP</label>
                    <input type="text" className="form-control" id="exampleFormControlInput5" placeholder={props.ip}/>
                  </div>
                  <div className="col-2">
                    <label className="form-label">Disk</label>
                    <input type="text" className="form-control" id="exampleFormControlInput6" placeholder={props.disk}/>
                  </div>
                </div>
              </fieldset>
            </div>
            <div className="col-1">
              <div><span type="button" className="badge glass0" onClick={()=> delPopUp()}><AiOutlineDelete/></span></div>
              <div><span type="button" className="badge glass0" onClick={()=> editPopUp() }><FiEdit2/></span></div>
            </div>
          </div>
          <fieldset disabled>
            <div className="row mb-3">
              <div className="col-2">
                <label className="form-label">Datastore</label>
                <input type="text" className="form-control" id="exampleFormControlInput7" placeholder={props.datastore}/>
              </div>
              <div className="col-2">
                <label className="form-label">RAM</label>
                <input type="text" className="form-control" id="exampleFormControlInput8" placeholder={props.ram}/>
              </div>
              <div className="col-2">
                <label className="form-label">Cores</label>
                <input type="text" className="form-control" id="exampleFormControlInput9" placeholder={props.cores}/>
              </div>
              <div className="col-2">
                <label className="form-label">VLAN</label>
                <input type="text" className="form-control" id="exampleFormControlInput10" placeholder={props.vlan}/>
              </div>
              <div className="col-2">
                <label className="form-label">SW</label>
                <input type="text" className="form-control" id="exampleFormControlInput11" placeholder={props.sw}/>
              </div>
              <div className="col-2">
                <label className="form-label">Physical Port</label>
                <input type="text" className="form-control" id="exampleFormControlInput12" placeholder={props.physPort}/>
              </div>
            </div>
          </fieldset>
        </div>
      </div>
    );
}

export default PastLogCard;