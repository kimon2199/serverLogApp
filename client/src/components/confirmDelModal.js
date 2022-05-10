import { Modal, Button } from 'react-bootstrap'

function ConfirmDelModal(props) {

    const {removeCard, ...others} = props;

    const deleteRow = () => {
        fetch('http://localhost:' + process.env.REACT_APP_NODE_PORT + '/api/delete/' + props.card, {
            method: 'delete'
        })
            .then(res => res.json())
            .then((data) => {
                if (data.affectedRows === 1){
                    console.log("Successfull deletion");
                    removeCard();
                    others.onHide();
                }
            })
    }

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
                        Delete Confirmation
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Are you sure you want to delete?
                </Modal.Body>
                <Modal.Footer>
                    <Button className="mybtn" variant="outline-warning" onClick={others.onHide}>Cancel</Button>
                    <Button className="mybtn" variant="danger" onClick={() => deleteRow()}>Delete</Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default ConfirmDelModal;