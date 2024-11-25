import React, { useState } from 'react';

function Changer() {
    const [color, setColor] = useState('black');

    const handleChange = (e) => {
        setColor(e.target.value.trim());
    };

    return (
        <div 
            style={{  backgroundColor: color,  height: '100vh', }}>
            <h1 style={{ color: "white",}}>Change Background Color</h1>
            <div style={{ marginBottom: "20px" }}>
                <button style={{  border:"4px solid black", margin: "0 10px", padding: "10px 20px", backgroundColor:'red' }} onClick={() => setColor('red')} >Red </button>
                <button style={{  border:"4px solid black",margin: "0 10px", padding: "10px 20px", backgroundColor:'yellow',color:"black"}} onClick={() => setColor('yellow')} >Yellow</button>
                <button style={{  border:"4px solid black",margin: "0 10px", padding: "10px 20px", backgroundColor:"green"}} onClick={() => setColor('green')}>Green</button>
                <button style={{ border:"4px solid black",margin: "0 10px", padding: "10px 20px", backgroundColor:"blue"}} onClick={() => setColor('blue')}>Blue</button>
            </div>
            <input style={{ border:"4px solid black",backgroundColor:"white", color:"black"}}  type="text" onChange={handleChange}  placeholder="Enter a color "/>
        </div>
    );
}

export default Changer;
