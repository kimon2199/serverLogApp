import { Modal, Button } from 'react-bootstrap';

function ExcelModal(props) {

    const upload = () => {
        let ret = props.onFileUpload(); 
        console.log(ret);
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
                        <div style={{color:(props.excelHeaderError && 'red') || 'black'}}>Make sure the headers of the first row are the following,
                            in this order: [ server_type, host, hostname, os, ip, disk, datastore, ram, cores, vlan, sw, physical_port]
                        </div>
                        {props.excelFileTypeError && <div className='pt-4' style={{color:'red'}}>Error: File must be of type .xlsx</div>}
                        <input className='pt-4' type="file" onChange={props.onFileChange} />
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