import React, { useEffect, useState } from "react";
import "./App.css";
import Clock from "./components/Clock";
import List1 from "./components/List1";
import List2 from "./components/List2";
import useClock from './hooks/useClock';

function App() {
  const { hours, minutes, seconds } = useClock();
  const [list1, setList1] = useState([])
  return (
    <div className="App">
      {/* Clock */}
      <Clock hours={hours} minute={minutes} second={seconds}/>
      {/* List 1  initialValues [1, 2, 3] */}
      <List1 initialValues={[1, 2, 3]}/>
      {/* List 2  initialValues [4, 5] */}
      <List2 initialValues={[4, 5]}/>
    </div>
  );
}

export default App;
