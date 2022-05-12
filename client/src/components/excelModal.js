import { Modal, Button } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import { sql_head } from '../commonVariablesReact';

function ExcelModal(props) {

    const {onFileUpload, whenFileChange, excelFileTypeError, excelHeaderError, ...others} = props;

    const upload = () => {
        let ret = onFileUpload(); 
        console.log(ret);
    };
    
    const [sql_head_string, setSql_head_string] = useState("");

    useEffect(() => {
        var str = "[";
        for (var i=0; i < sql_head.length; i++){
            str = str + " " + sql_head[i] + ",";
        }
        str = str.slice(0, -1) + ' ]';
        setSql_head_string(str);
    },[])

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
                        Upload .xlsx file
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div>
                        <div style={{color:(excelHeaderError && 'red') || 'black'}}>{`Make sure the headers of the first row are the following,
                            in this order: ` + sql_head_string}
                        </div>
                        {excelFileTypeError && <div className='pt-4' style={{color:'red'}}>Error: File must be of type .xlsx</div>}
                        <input className='pt-4' type="file" onChange={(e) => whenFileChange(e)} />
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