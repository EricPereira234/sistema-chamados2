import { BrowserRouter as Router } from "react-router-dom";
import RoutesApp from "./routes";

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

//importando arquivos
import AuthProvider from "./contexts/auth";

function App() {
  return (
    <Router>
         <ToastContainer 
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="colored"
         />
      <AuthProvider>
        <RoutesApp />
      </AuthProvider>
    </Router>
  );
}

export default App;
