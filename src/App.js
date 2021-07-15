import React, { useState} from "react";
import "./app.css"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import TopMenu from "./Navbar/TopMenu";
import Home from "./Home/Home";
import Add from "./Add/Add";


const getDataFromLs = () => {

  const data = localStorage.getItem('input');
  // console.log(data);
  if (data) {
    return JSON.parse(data)
  }
  else {
    console.log("nothing is added");
  }
}
function App() {

  const [input, setInput] = useState(getDataFromLs());
  const [fname, setFname] = useState("")
  const [role, setRole] = useState("")
  const [mobile, setMobile] = useState("")
  const [manager, setManager] = useState("")
  const [office, setOffice] = useState("")
  const [joing, setJoing] = useState("")

  // useEffect(() => {
  //   localStorage.setItem('input', JSON.stringify(input))
  // }, [input])

  // console.log(input);
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <TopMenu />
            <Home input={input} />
          </Route>
          <Route exact path="/home">
            <TopMenu />
            <Home input={input} />
          </Route>
          <Route path="/add">
            <TopMenu />
            <Add input={input} fname={fname} role={role} mobile={mobile} manager={manager}
              office={office} joing={joing}
              setInput={setInput} setFname={setFname} setRole={setRole} setMobile={setMobile} setManager={setManager}
              setOffice={setOffice} setJoing={setJoing}
            />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
