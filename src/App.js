import React, { useState, useCallback } from "react";
import Button from "./components/UI/Button/Button";
import Demooutput from "./Demooutput/DemoOutput";
import "./App.css";

function App() {
  const [showParaGraph, setShowParaGraph] = useState(false);
  const [allowtoggle, setAllowToggle] = useState(false);
  const toggleParaHandler = useCallback(() => {
    if (allowtoggle) {
      setShowParaGraph((prevState) => !prevState);
    }
  }, [allowtoggle]);

  console.log("App Running");

  const allowTogglingHandler = useCallback(() => {
    setAllowToggle(true);
  }, []);

  return (
    <div className='app'>
      <h1>Hi there!</h1>
      <Demooutput show={showParaGraph} />
      <Button onClick={allowTogglingHandler}>allow toggle</Button>
      <Button onClick={toggleParaHandler}>Toggle para</Button>
    </div>
  );
}

export default App;
