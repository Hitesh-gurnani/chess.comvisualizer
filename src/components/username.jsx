import React from 'react';
import '../Styles/username.css';
import { useState } from 'react'
function Username(props) {
    const [player, setplayer] = useState("");
    const onusernamechange = (e) => {
        setplayer(e.target.value);
        console.log(player)
    }
    const onLoginclick = (event) => {
        props.updatedusername(player);
    }
    return (
        <div className="box-username">
            <h3>Enter Username</h3>
            <input type="text" onChange={onusernamechange} />
            <div class="button" onClick={onLoginclick}>
                Click me!
                <div id="splash"></div>
            </div>
        </div>
    );
}

export default Username;