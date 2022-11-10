import './App.css';
import { RouterProvider } from 'react-router-dom';
import router from './Routes/Routes';


function App() {
  return (
    <div data-theme="emerald" >
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
