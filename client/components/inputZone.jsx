import React from 'react';

class InputZone extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            date: '',
            currentWeight: undefined,
            caloriesConsumed: undefined,
            notes: ''
        }
        this.changeDate = this.changeDate.bind(this);
        this.enterWeight = this.enterWeight.bind(this);
        this.enterCalories = this.enterCalories.bind(this);
        this.enterNotes = this.enterNotes.bind(this);
        this.nodeGenerator = this.nodeGenerator.bind(this);
    }

    changeDate(event){
        this.setState({date: event.target.value}, () => {
            console.log('STATE OF DATE: ' + this.state.date)
        });
    }

    enterWeight(event){
        this.setState({currentWeight: event.target.value}, () => {
            console.log('STATE OF WEIGHT: ' + this.state.currentWeight)
        });
    }

    enterCalories(event){
        this.setState({caloriesConsumed: event.target.value}, () => {
            console.log('STATE OF CALORIES: ' + this.state.caloriesConsumed)
        });
    }

    enterNotes(event){
        this.setState({notes: event.target.value}, () => {
            console.log('STATE OF NOTES: ' + this.state.notes)
        });
    }

    nodeGenerator(event){
        console.log(this.state)
        //Check to see if the state is default
        //Check to see if any of the fields are empty
        //If both conditions pass, run an axios post req to create a new node and attach to linkedList of user
    }

    render(){
        return(
            <div id='newDataEntry'>
                <h2>Today's Information</h2>
                <h5>Date: </h5>
                <input type='date' onChange={this.changeDate} />
                <br></br>
                <h5>Current Weight: </h5>
                <input type='number' onChange={this.enterWeight}/>
                <br></br>
                <h5>Calories Consumed: </h5>
                <input type='number' onChange={this.enterCalories}/>
                <br></br>
                <h5>Notes: </h5>
                <input type='text' onChange={this.enterNotes}/> 
                <br></br>
                <button onClick={this.nodeGenerator}>Enter</button>
            </div>
        )
    }
}

export default InputZone