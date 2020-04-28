import React from "react";
import "./style.css";

class Container extends React.Component{
    constructor(props){
        super(props);
        this.state = {}
    }
render(){
    return(
                <>
                <div class="container">
            <li class="list-item">
            <input class="item-checkbox" type="checkbox"/>
            <div class="eachtext">
                <p>{this.eachTodo}</p>
                </div>
                <button class="delete-button">X</button></li>
                </div>
                </>
    )
}
}

export default Container;
