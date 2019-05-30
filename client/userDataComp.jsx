import React from 'react';
import ReactDOM from 'react-dom';
import Axios from 'axios';

class UserDataComp extends React.Component{
    constructor(props){
        super(props)
        this.state = {

        }
    }

    ComponentDidMount(){

    };

    render(){
        return(
            <h1>
                hello world!
            </h1>
        )
    }
}

ReactDOM.render(<UserDataComp />, document.getElementById('UserData'))