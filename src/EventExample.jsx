import React from "react";

const EventExample = () => {
  //   const handleEvent = () => {
  //     alert("You have clicked Button");
  //   };
  return (
    <div>
      {/* <button onClick={handleEvent}>Click Me </button> */}
      <button onClick={() => alert("Clicked on Button")}>Click Me </button>
    </div>
  );
};

export default EventExample;
