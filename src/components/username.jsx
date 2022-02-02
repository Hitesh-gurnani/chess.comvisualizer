import React from 'react';
import '../Styles/username.css';
import { useState } from 'react'

function Username(props) {
    const [player, setplayer] = useState("");
    const [show, setshow] = useState(false);
    const onusernamechange = (e) => {
        setplayer(e.target.value);
        console.log(player)
    }
    const onLoginclick = (event) => {
        props.updatedusername(player);
        props.setistoggled(show);
    }

    return (
        <div className="box-username">
            <h3>Enter Username</h3>
            <input type="text" onChange={onusernamechange} />
            <div className="button" onClick={onLoginclick} >
                Click me!
                <div id="splash"></div>
            </div>
        </div>
    );
}

export default Username;