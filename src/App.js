import { BrowserRouter , Routes , Route } from 'react-router-dom';
import './App.css';
import Home from "./Pages/Home";
import EditorPage from './Pages/EditorPage';
import {Toaster} from "react-hot-toast" ;


function App() {

  window.addEventListener("contextmenu", (e) => e.preventDefault());
  return (
    <>
      <div>
        <Toaster
          position='top-right'
          toastOptions={
            {
              success:{
                theme:{
                  primary:'#4aed88',
                },
              },
            }
          }
          ></Toaster>
      </div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/editor/:roomId' element={<EditorPage/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
