import Signin from "./pages/Signin";
import McqPage from "./pages/McqPage";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom/cjs/react-router-dom.min";
import { Redirect } from "react-router-dom/cjs/react-router-dom";
import ProtectedRoute from "./ProtectedRoutes";
import useAuth from "./useAuth";


function App() {
  const user = useSelector(selectUser);
  
  const [isAuth, signedin, signedout] = useAuth(false);
  

  

  return (
    <Router>
      <div>
        <Switch>
          <Route exact path='/' component={Signin} />
          <ProtectedRoute path="/mcq" component={McqPage} auth={isAuth} />
        </Switch>
      </div>
    </Router>
    
  );

  

}

export default App;
