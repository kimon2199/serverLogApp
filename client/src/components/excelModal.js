import { Modal, Button } from 'react-bootstrap';

function ExcelModal(props) {

    const upload = () => {
        props.onFileUpload(); 
        props.onHide();
    };

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
                        Upload .xlsx file
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div>
                        <input type="file" onChange={props.onFileChange} />
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button className="mybtn" variant="primary" onClick={() => upload()}>Upload</Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default ExcelModal;