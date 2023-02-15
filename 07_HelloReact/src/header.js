import React from "react"; 

function Header(props){
    return (
        <header>
            <h1>{props.title}</h1>
            <h3>Counter value: {props.counter}</h3>
        </header>
    )
}

export default Header;