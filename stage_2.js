import React, { useContext } from "react";
import { MyContext } from "../context";

const Stage2 =  () => {
    const context = useContext(MyContext); 
  return (
    <>
    <div className="Stage2">
      {context.state.result}

      
    </div>
    <button onClick={context.generateLooser}>generate looser again</button>
    </>
  );
}

export default Stage2;
