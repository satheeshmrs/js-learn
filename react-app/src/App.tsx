import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";
import Button from "./components/button";

function App() {
  const [selectedItem, setSelectedItem] = useState("");
  const [clicked, setClicked] = useState(false);

  let items = ["London", "Paris", "New York", "Tokyo", "Berlin"];

  return (
    <div>
      <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={(item) => setSelectedItem(item)}
      />
      <p>Selected City: {selectedItem}</p>
      <Alert onClose={() => {}}>
        <h2>Hello World!</h2>
      </Alert>

      <br />
      <Button color="danger" onClick={() => setClicked(true)}>
        Click Me
      </Button>

      {clicked && (
        <Alert onClose={() => setClicked(false)}>Button was clicked!</Alert>
      )}
    </div>
  );
}

export default App;
