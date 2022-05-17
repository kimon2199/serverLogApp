import { Modal, Button } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import { sql_head, titles, emptyRow } from '../commonVariablesReact';

function EditModal(props) {

    const {editCard, row, ...others} = props;

    const editRow = () => {
        let putJson = {};
        for (var i=0; i < sql_head.length; i++){
            putJson[sql_head[i]] = myState[sql_head[i]];
        }
        fetch('http://localhost:' + process.env.REACT_APP_NODE_PORT + '/api/edit/' + row.id, {
            method: 'put', 
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(putJson)
        })
        .then(res => res.json())
        .then((data) => {
            if (data.affectedRows === 1){
                console.log("Successfull edit");
                let editJson = {  id: props.card };
                for (var i=0; i < sql_head.length; i++){
                    editJson[sql_head[i]] = myState[sql_head[i]];
                }
                editCard(props.card, editJson);
                props.onHide();
            }
        })
    }

    const [myState, setMyState] = useState({...emptyRow});
    
    useEffect(() => {
        setMyState(row);
    },[row,props.card])
    
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
                        { titles.slice(0,titles.length).map((item,index)=>{
                            return (
                                <div className='col-4' key={'editField'+index}>
                                    <label className="form-label">{item}:</label>
                                    <input type="text" className="form-control" value={myState[sql_head[index]]} onChange={e => setMyState(myState => {return { ...myState, [sql_head[index]]: e.target.value }})}/>

                                    
                                </div>
                            );})
                        }
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