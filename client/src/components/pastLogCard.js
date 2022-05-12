import '../App.css';
import { AiOutlineDelete } from 'react-icons/ai';
import { FiEdit2 } from 'react-icons/fi';
import { sql_head, titles } from '../commonVariablesReact';

function PastLogCard(props) {

    const delPopUp = () => {
      props.setDelModalShow(true);
      props.setCardSpotlight(props.row.id);
    }

    const editPopUp = () => {
      props.setEditModalShow(true);
      props.setCardSpotlight(props.row.id);
      props.setWholeCard(props.row);
    }

    return (
      <div>
        {((props.row[props.searchKey] && props.row[props.searchKey].includes(props.searchTerm)) || props.searchTerm === "") &&
          <div className="row mb-3 mt-5 bg">
            <div className="glass0 white-font">
              <div className="row mt-1">
                <div className="col-11">
                  <fieldset disabled>
                    <div className="row">
                    { titles.slice(0,6).map((item,index)=>{
                        return (
                          <div className="col-2" key={'pastLogCard'+index}>
                            <label className="form-label">{item}</label>
                            <input type="text" className="form-control" id={"imField"+index} placeholder={props.row[sql_head[index]]}/>
                          </div>
                        );})
                    }
                    </div>
                  </fieldset>
                </div>
                <div className="col-1">
                  <div className='mt-1'><span type="button" className="badge glass0" onClick={()=> delPopUp()}><AiOutlineDelete/></span></div>
                  <div className='mt-2'><span type="button" className="badge glass0" onClick={()=> editPopUp()}><FiEdit2/></span></div>
                </div>
              </div>
              <fieldset disabled>
                <div className="row mb-3">
                  { titles.slice(6,titles.length).map((item,index)=>{
                      return (
                        <div className="col-2 mt-1" key={'pastLogCard'+(index+6)}>
                          <label className="form-label">{item}</label>
                          <input type="text" className="form-control" id={"imField"+index} placeholder={props.row[sql_head[index+6]]}/>
                        </div>
                      );})
                  }
                </div>
              </fieldset>
            </div>
          </div>}
      </div>
    );
}

export default PastLogCard;