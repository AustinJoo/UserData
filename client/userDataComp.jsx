import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Grapher from './components/grapher.jsx';
import InputZone from './components/inputZone.jsx';

class UserDataComp extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            user: undefined,
            username: 'Demo User',
            ID: 'Demo ID',
            GraphData: undefined
        }
    }

    componentDidMount(){
        axios.get('/test')
        .then((data) => {
            console.log(data)
            this.setState({Notes: data.data})
        })
    };

    render(){
        return(
            <div>
                <div>
                    <div id='Banner'>
                        <h1 id='AppName'> Wait for Weight Loss! </h1>
                        <h2>Username: {this.state.username} - ID: {this.state.ID}</h2>
                        <h2>Member since: {this.state.CurrentDate}</h2>
                    </div>
                    {/* <Grapher/> */}
                    <InputZone />
                </div>
            </div>
        )
    }
}

ReactDOM.render(<UserDataComp />, document.getElementById('UserData'))