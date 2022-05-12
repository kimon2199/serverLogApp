import '../App.css';
import { sql_head, titles } from '../commonVariablesReact';

function InsertionCard(props) {

    const changeSpecificValue = (fieldIndex,changedValue) => {
      let i = props.index;
      props.setMyState(myState => myState.slice(0,i).concat({...myState[i], [sql_head[fieldIndex]]:changedValue}).concat(myState.slice(i+1,myState.length)));
    }

    return (
        <div className="row mb-3 mt-5 bg">
          <div className="glass0 white-font">
            <div className="row mb-3 mt-3">
              <div className="col-2">
                <label className="form-label">Server Type</label>
                <select className="form-select" defaultValue="BM">
                  <option onClick={() => {changeSpecificValue(0, 'BM')}} value="BM">BM</option>
                  <option onClick={() => {changeSpecificValue(0, 'VM')}} value="VM">VM</option>
                  <option onClick={() => {changeSpecificValue(0, 'APP')}} value="APP">APP</option>
                </select>
              </div>
              { titles.slice(1,titles.length).map((item,index)=>{
                  return (
                    <div className="col-2 mb-3" key={"inCr"+index}>
                      <label className="form-label">{item}</label>
                      <input type="text" className="form-control" placeholder={item} onChange={e => changeSpecificValue(index+1, e.target.value)}/>
                    </div>
                  );})
              }
            </div>
          </div>
        </div>
    );
}

export default InsertionCard;