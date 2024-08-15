import React, { Component } from 'react'
import "./App.css";
import BoxClass from "./component/BoxClass";
import scissors from './images/realScissors.png'
import rock from './images/realRock.png'
import paper from './images/realPaper.png'
import scissorsImg from './images/scissors.png'
import rockImg from './images/rock.png'
import paperImg from './images/paper.png'

const choice = {
  rock:{
    name:'Rock',
    img: rock
  },
  scissors:{
    name:'Scissors',
    img: scissors
  },
  paper:{
    name:'Paper',
    img: paper
  },
};

export default class AppClass extends Component {
    constructor() {
        super();
        this.state = {
          userSelect: null,
          computerSelect: null,
          result: "",
        };
      }
    
      play = (userChoice) => {
        let computerChoice = this.randomChoice();
        this.setState({
          userSelect: choice[userChoice],
          computerSelect: computerChoice,
          result: this.judgement(choice[userChoice], computerChoice),
        });
      };
      randomChoice = () => {
        let itemArray = Object.keys(choice); //객체에 키값만 뽑아서 어레이로 만들어주는 함수다
        let randomItem = Math.floor(Math.random() * itemArray.length);
        let final = itemArray[randomItem];
        return choice[final];
      };
      judgement = (user, computer) => {
        // user == computer tie
        // user == rock, computer == "scissors" user 이긴거지
        // user == "rock" computer == paper   user 진거지
        // user == scissors computer paper    user 이긴거지
        // user == scissors computer rock     user 진거지
        // user == paper computer rock   user 이긴거지
        // user paper computer scissors user 진거지
    
        if (user.name == computer.name) {
          return "tie";
        } else if (user.name == "Rock")
          return computer.name == "Scissors" ? "win" : "lose";
        else if (user.name == "Scissors")
          return computer.name == "Paper" ? "win" : "lose";
        else if (user.name == "Paper")
          return computer.name == "Rock" ? "win" : "lose";
      };
    

  render() {  
    return (
      <div className='wrap'>    
        <h2>Let's play Rock Paper Scissors!</h2>
        <div className='main-box'>
        <BoxClass
            title="You"
            item={this.state.userSelect}
            result={this.state.result}
          />
          <BoxClass
            title="Computer"
            item={this.state.computerSelect}
            result={this.state.result}
          />
        </div>
        <div className='choice-btn'>
          <button onClick={() => this.play('scissors')}><img src={scissorsImg}></img></button>
          <button onClick={() => this.play('rock')}><img src={rockImg}></img></button>
          <button onClick={() => this.play('paper')}><img src={paperImg}></img></button>
        </div>     
      </div>  
    )
  }
}
