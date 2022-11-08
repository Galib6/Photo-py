import './App.css';
import { RouterProvider } from 'react-router-dom';
import router from './Routes/Routes';


function App() {
  return (
    <div data-theme="emerald" className=" px-10 ">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
