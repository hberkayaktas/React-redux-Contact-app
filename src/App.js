import './App.css';
import Contacts from './components/Contacts';
import Edit from './components/Edit';

import { BrowserRouter, Routes, Route } from "react-router-dom";



function App() {
  return (
    <div className="App">
      <div id='container'>
      <BrowserRouter>
      <Routes>
      <Route path="/" exact element={<Contacts />} />
      <Route path="/edit/:id" element={<Edit/>} />
      <Route path="*" element={<> Error </>} />
      </Routes>
      </BrowserRouter>
      </div>
      
    </div>
  );
}

export default App;
