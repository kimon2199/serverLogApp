import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import InsertPage from './components/insertPage';
import Navbar from './components/navbar';
import PastLogsPage from './components/pastLogsPage';
import { useState } from 'react';


function App() {

  const [searchKey, setSearchKey] = useState("server_type");
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="App background">
    <BrowserRouter>
      <Navbar setSearchKey={setSearchKey} setSearchTerm={setSearchTerm}/>
      <Routes>
        <Route path="/" element={<InsertPage/>}/>
        <Route path="/logs" element={<PastLogsPage searchKey={searchKey} searchTerm={searchTerm}/>}/>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
