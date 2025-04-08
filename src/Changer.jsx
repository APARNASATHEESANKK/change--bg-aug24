import React, { useState } from "react";

function Changer() {
  const [color, setColor] = useState("black");

  const handleChange = (e) => {
    setColor(e.target.value.trim());
  };

  return (
    <div style={{backgroundColor:"black",maxHeight:"100vh",Width:"700vh"}}>
        <div style={{ backgroundColor: color, height: "85vh",width:"70vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent:"center", padding: "20px" }}>

           <h1 style={{ color: "white", textAlign: "center" }}> Change Background Color</h1>

     <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", marginBottom: "20px", gap: "10px",}} >

        <button style={{ border: "4px solid black", padding: "10px 20px", backgroundColor: "red"}} onClick={() => setColor("red")} > Red</button>

        <button style={{  border: "4px solid black",  padding: "10px 20px",  backgroundColor: "yellow",  color: "black",}}
         onClick={() => setColor("yellow")} > Yellow </button>

        <button style={{border: "4px solid black", padding: "10px 20px", backgroundColor: "green" }} onClick={() => setColor("green")}>Green </button>

        <button style={{border: "4px solid black", padding: "10px 20px", backgroundColor: "blue" }} onClick={() => setColor("blue")}> Blue</button>

    </div>

      <input style={{ border: "4px solid black", backgroundColor: "white", color: "black", padding: "10px", textAlign: "center", width: "80%", maxWidth: "400px",}} type="text" onChange={handleChange}placeholder="Enter a color"/>

      <img style={{marginTop: "20px", maxWidth: "50vh", height: "auto" }} className="align-items-center justify-content-center" src="http://clipart-library.com/images_k/transparent-smiley-face-emoji/transparent-smiley-face-emoji-16.png"alt="Smiley Face"width={250}/>

       </div>
    </div>
  );
}

export default Changer;
