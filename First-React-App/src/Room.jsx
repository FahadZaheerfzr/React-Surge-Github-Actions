import { useState } from "react";
import './Room.css'


const Room = () => {
    const [ light, setLight]  = useState(false);
    
    return (
        <div className={`room ${light ? "lit" : "dark"}`}>
            <h1>
                This room is {light ? "lit" : "dark"}
            </h1>
            <button onClick={()=>setLight(!light)}>Light Switch</button>
        </div>
    );
}



export default Room;