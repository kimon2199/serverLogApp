import { Modal, Button } from 'react-bootstrap'

function ConfirmDelModal(props) {

    const deleteRow = () => {
        fetch('http://localhost:3001/api/delete/' + props.card, {
            method: 'delete'
        })
            .then(res => res.json())
            .then((data) => {
                if (data.affectedRows == 1){
                    console.log("Successfull deletion");
                    props.removeCard(props.card);
                    props.onHide();
                }
            })
    }

    return (
        <div>
            <Modal
                {...props}
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
                    Are you sure you want to delete? {props.card}
                </Modal.Body>
                <Modal.Footer>
                    <Button className="mybtn" variant="outline-warning" onClick={props.onHide}>Cancel</Button>
                    <Button className="mybtn" variant="danger" onClick={() => deleteRow()}>Delete</Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default ConfirmDelModal;