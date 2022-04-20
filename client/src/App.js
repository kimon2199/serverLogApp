import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import InsertPage from './components/insertPage';
import Navbar from './components/navbar';
import PastLogsPage from './components/pastLogsPage';


function App() {

  return (
    <div className="App background">
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<InsertPage/>}>
          {/* <Route index element={<Home />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} /> */}
        </Route>
        <Route path="/logs" element={<PastLogsPage/>}/>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
