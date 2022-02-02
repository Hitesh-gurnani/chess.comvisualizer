import React from 'react';
import '../Styles/userprofile.css';
import { useEffect, useState } from 'react';
import king from '../images/king.jpg'
function Userprofile(props) {
    const [url, seturl] = useState("")
    const [nameof, setnameof] = useState("")
    useEffect(() => {
        fetch('https://api.chess.com/pub/player/').then(response => response.json()).then(data => {
            seturl(data.avatar);
            setnameof(data.name);
            console.log(url, nameof)
        });
    }, [])

    return (
        <>

            <div className="card">
                <div className="content">
                    <div>
                        {url}
                    </div>
                    <div className="post main">
                        <div className="preview">

                        </div>
                        <div className="counter">This</div>
                        <div className="detail">is</div>
                        <div className="detail">itoka</div>
                        <div className="details">Hello</div>
                        <div className="details">Hello1</div>
                    </div>
                    <div className="post sec">
                        <div className="preview">Hello</div>
                        <div className="counter">Hello2</div>
                        <div className="detail">Hello3</div>
                    </div>
                    <div className="post sec">
                        <div className="preview">Hello</div>
                        <div className="counter">Hello2</div>
                        <div className="detail">Hello3</div>
                    </div>
                    <div className="post ter">
                        <div className="preview">Hello</div>
                        <div className="counter">Hello2</div>
                        <div className="detail">Hello3</div>
                    </div>
                    <div className="post ter">
                        <div className="preview">Hello</div>
                        <div className="counter">Hello2</div>
                        <div className="detail">Hello3</div>
                    </div>
                    <div className="post ter">
                        <div className="preview">Hello </div>
                        <div className="counter">Hello2</div>
                        <div className="detail">Hello3</div>
                    </div>


                </div>
            </div>


        </>
    );
}

export default Userprofile;