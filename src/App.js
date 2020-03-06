import React from 'react';
import { Component } from 'react';
import './css/custom.scss';
import axios from 'axios';
// import style from './style.css'

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            setup: [],
            punchline: [],
            currentDateTime: []
        }
        this.axiosTwoTimes = this.axiosTwoTimes.bind(this);
        this.axiosGetJoke = this.axiosGetJoke.bind(this);
        this.axiosGetTime = this.axiosGetTime.bind(this);
        this.showSetup = this.showSetup.bind(this);
        this.showPunchline = this.showPunchline.bind(this);
        this.showcurrentDateTime = this.showcurrentDateTime.bind(this);
        
    }

    axiosTwoTimes() {

        this.axiosGetJoke(),
        this.axiosGetTime()
        
    }

    axiosGetJoke() {
    axios.get('https://official-joke-api.appspot.com/random_joke')
    .then((response) => { 
        this.setState({
            setup: [...this.state.setup, response.data.setup],
            punchline: [...this.state.punchline, response.data.punchline]
                        })
        console.log(response.data.setup);
        console.log(response.data.punchline);
    });
    }

    axiosGetTime() {
        axios.get('http://worldclockapi.com/api/json/utc/now')
        .then((response) => { 
            this.setState({
                currentDateTime: [...this.state.currentDateTime, response.data.currentDateTime]
                            })
        console.log(response.data.currentDateTime);

        });
        }

    showSetup(setup) {
        this.setState({
        setup: [...this.state.setup, {setup: setup}]
                     })
    }
    showPunchline(punchline) {
        this.setState({
        punchline: [...this.state.punchline, {punchline: punchline}]
                     })
    }
    showcurrentDateTime(currentDateTime) {
        this.setState({
        currentDateTime: [...this.state.currentDateTime, {currentDateTime: currentDateTime}]
                     })
                     console.log(currentDateTime)
    }


render() {

    
  return (

    <div className='container'>
    <div className='jumbotron jumbotron-fluid'>
    <h2 className='page-title' align='center'>"Let's Hear What You've Got..."</h2>
    <p align='center'>Joke Generator</p>
    
    <div className='container'>
    <button className="button" onClick={this.axiosTwoTimes}>What's So Funny, Huh?</button>
    </div>
    </div>
    <hr></hr>
    <br></br>
    <div className="setup" align='center'> {this.state.setup}
    </div>
    <br></br>
    <div className ="punchline" align='center'> {this.state.punchline}
    </div>
    <br></br>
    <div className="currentDateTime" align='center'>{this.state.currentDateTime}</div>
    <hr></hr>
    <p align='center'>Refresh The Page and Tell Me a New Joke!</p>
    </div>
  
    
    
    
    )
}
};

export default App;


