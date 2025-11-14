import Button from "./components/Button";
import { useState } from "react";
import Alert from "./components/Alert";
import ListGroup from "./components/ListGroup";

function App() {
  const [alertVisible, setAlertVisible] = useState(false);
  const list = ['New York', 'Los Angeles', 'San Francisco', 'Chicago']
  

  return (
    <div>
      <ListGroup items={list} onSelectItem={() => console.log(list)}heading='Miami'></ListGroup>
      {alertVisible && <Alert onClose={() => setAlertVisible(false)}>My Alert</Alert>}
      <Button
        onClick={() => setAlertVisible(true)}
        color="primary"
        children="My Button"
      />
    </div>
  );
}

export default App;
