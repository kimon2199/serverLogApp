import '../App.css';
import { useState, useEffect } from 'react';


const CountBox = (props) => {

  const [count, setCount] = useState(' ')

  useEffect(()=>{
    fetch('http://localhost:' + process.env.REACT_APP_NODE_PORT + '/api/get/count', {
            method: 'get'
          })
          .then(res => res.json())
          .then((data) => {
            console.log(data);
            setCount(data[0]["COUNT(*)"]);
          })
    },[props.showDel]);


  return (
    <span className="badge glass0 flex" style={{float:'left', height:'23px'}}>
      Total entries: {count}
    </span>
  );
};

export default CountBox;