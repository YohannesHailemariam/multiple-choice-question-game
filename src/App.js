import Signin from "./pages/Signin";
import McqPage from "./pages/McqPage";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom/cjs/react-router-dom.min";
import { Redirect } from "react-router-dom/cjs/react-router-dom";


function App() {
  const user = useSelector(selectUser);

  

  return (
    <Router>
      <div>
        <Switch>
          <Route exact path='/' component={Signin} />
          <Route exact path='/mcq' component={McqPage} />
        </Switch>
      </div>
    </Router>
    
  );

  

}

export default App;
