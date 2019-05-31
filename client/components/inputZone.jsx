import React from 'react';
import axios from 'axios';

let verifier = 0;
class InputZone extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            date: undefined,
            currentWeight: -1,
            caloriesConsumed: -1,
            notes: ''
        }
        this.changeDate = this.changeDate.bind(this);
        this.enterWeight = this.enterWeight.bind(this);
        this.enterCalories = this.enterCalories.bind(this);
        this.enterNotes = this.enterNotes.bind(this);
        this.addToTail = this.addToTail.bind(this);
        this.nodeGenerator = this.nodeGenerator.bind(this);
        this.dateGenerator = this.dateGenerator.bind(this);
    }

    changeDate(event){
        this.setState({date: event.target.value}
            ,() => {console.log('STATE OF DATE: ' + this.state.date)}
        );
    }

    enterWeight(event){
        this.setState({currentWeight: Number(event.target.value)}
            ,() => {console.log('STATE OF WEIGHT: ' + this.state.currentWeight)}
        );
    }

    enterCalories(event){
        this.setState({caloriesConsumed: Number(event.target.value)}
            ,() => {console.log('STATE OF CALORIES: ' + this.state.caloriesConsumed)}
        );
    }

    enterNotes(event){
        this.setState({notes: event.target.value.toString()}
            ,() => {console.log('STATE OF NOTES: ' + this.state.notes)}
        );
    }

    addToTail(){
        let tailNode;
        if(this.state.currentWeight < 1 || this.state.caloriesConsumed < 0){
            alert('Invalid weight/calories consumed! Please verify!')
        } else if(verifier === 0){
            alert('Please verify information and click enter again!');
            verifier++;
        } else if(verifier === 1){
            alert('VALID. GENERATING NEW ENTRY NOW!')
            tailNode = this.nodeGenerator();
            verifier = 0;
            axios.post('/addToTail', {newNode: tailNode})
            .then((data) => {
                alert(data.data)
            })
        }
    }

    dateGenerator(){
        let dateInfo = new Date();
        let day = dateInfo.getDate();
        let month = dateInfo.getMonth()+1;              //Jan is month 0
        let year = dateInfo.getFullYear();
        if(day < 10){
            day = '0' + day
        }
        if(month < 10){
            month = '0' + month;
        }
        return(month + '/' + day + '/' + year);
    }

    nodeGenerator(){
        let newNode = {
            date: this.state.date || this.dateGenerator(),
            weight: this.state.currentWeight,
            caloriesConsumed: this.state.caloriesConsumed,
            notes: this.state.notes,
            nextNode: null
        }
        return newNode;
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
                <button onClick={this.addToTail}>Enter</button>
            </div>
        )
    }
}

export default InputZone