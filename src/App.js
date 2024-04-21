import Signin from "./pages/Signin";
import McqPage from "./pages/McqPage";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";
function App() {
  const user = useSelector(selectUser);

  return (
    <div>
      {user ? <McqPage /> : <Signin />}
    </div>
  );
}

export default App;
