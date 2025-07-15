import Button from "./components/Button";
import { useState } from "react";
import Alert from "./components/Alert";

function App() {
  const [alert, setAlert] = useState("d-none");

  function handleAlert() {
    setAlert(prev => (prev === "d-none" ? "d-block show" : "d-none"));
  }

  return (
    <div>
      <Alert vis={alert} onClick={handleAlert}>Hello World!</Alert>
      <Button
        onClick={handleAlert}
        classProp="btn btn-primary"
        namea="Primary Button"
      />
    </div>
  );
}

export default App;
