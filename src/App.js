import { useState } from 'react';
import './App.css';
import Box from './component/Box.js'
import scissors from './images/realScissors.png'
import rock from './images/realRock.png'
import paper from './images/realPaper.png'
import scissorsImg from './images/scissors.png'
import rockImg from './images/rock.png'
import paperImg from './images/paper.png'

//1.박스 두개(타이틀,사진,결과값)
//2.가위바위보 버튼
//3.버튼 클릭시 내가 클릭한 값이 박스에 나타남
//4.컴퓨터는 랜덤하게 아이템이 나타남
//5. 3,4결과로, 누가 이겼는지 승패가 나타남
//6. 승패 결과에 따라 테두리색 변경(초록 빨강 검정)


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
  }
}
function App() {
  const [userSelect,setUserSelect] = useState(null);
  const [computerSelect,setComputerSelect] = useState(null);
  const [result,setResult] = useState('')

  const play = (userChoice) => {
    setUserSelect(choice[userChoice]);

    let computerChoice = randomChoice();
    setComputerSelect(computerChoice);
    
    setResult(judgement(choice[userChoice],computerChoice));
  };

  const judgement = (user,computer) =>{
    if(user.name == computer.name){
      return'tie';
    }else if(user.name=='Rock')
      return computer.name === 'Scissors'?'win':'lose';
    else if (user.name=='Scissors')
      return computer.name === 'Paper'?'win':'lose';
    else if (user.name=='Paper')
      return computer === 'Rock'?'win':'lose';
  };  

  const randomChoice=()=>{
    let itemArray = Object.keys(choice)//객체의 키값만 뽑아서 배열로 만든다
    let randomItem = Math.floor(Math.random() * itemArray.length);//소수점 아래 숫자 버림
    let final = itemArray[randomItem];
    return choice[final];
  }

  return (
    <div className='wrap'>    
      <h2>Let's play Rock Paper Scissors!</h2>
      <div className='main-box'>
        <Box title='You' item={userSelect} result={result}/>
        <Box title='Computer' item={computerSelect}result={result}/>
      </div>
      <div className='choice-btn'>
        <button onClick={() => play('scissors')}><img src={scissorsImg}></img></button>
        <button onClick={() => play('rock')}><img src={rockImg}></img></button>
        <button onClick={() => play('paper')}><img src={paperImg}></img></button>
      </div>     
    </div>

    
    
  );
}

export default App;
