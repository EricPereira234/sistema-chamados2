import { BrowserRouter as Router } from "react-router-dom";
import RoutesApp from "./routes";

//importando arquivos
import AuthProvider from "./contexts/auth";

function App() {
  return (
    <Router>
      <AuthProvider>
        <RoutesApp />
      </AuthProvider>
    </Router>
  );
}

export default App;
