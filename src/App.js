import Navbar from "./component/Navbar";
import {BrowserRouter as Router} from "react-router-dom";
import {GlobalStyle} from "./globalStyle";

function App() {
  return (
    <div className="App">
    <GlobalStyle />
    <Router>
     <Navbar />
     </Router>
    </div>
  );
}

export default App;
