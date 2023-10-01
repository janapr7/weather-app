import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Practice from './components/Practice';

function App() {
  return (
    <Routes>
        <Route element={<Practice/>} path="/" />
    </Routes>
  );
}

export default App;
