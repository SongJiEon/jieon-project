import { useState } from 'react';
import './App.css';
import Box from './component/Box.js'

//1.박스 두개(타이틀,사진,결과값)
//2.가위바위보 버튼
//3.버튼 클릭시 내가 클릭한 값이 박스에 나타남
//4.컴퓨터는 랜덤하게 아이템이 나타남
//5. 3,4결과로, 누가 이겼는지 승패가 나타남
//6. 승패 결과에 따라 테두리색 변경(초록 빨강 검정)


const choice = {
  rock:{
    name:'Rock',
    img:'https://nationaltoday.com/wp-content/uploads/2021/08/National-Pet-Rock-Day-1200x834.jpg'
  },
  scissors:{
    name:'Scissors',
    img:'https://i5.walmartimages.com/seo/Fiskars-7-Student-Scissors-Assorted-Colors_2237a31b-2cab-481a-9cac-409d9e610349_1.fa7c509f8dfa4486ca8d97d5913ca6a3.jpeg'
  },
  paper:{
    name:'Paper',
    img:'https://res.cloudinary.com/env-imgs/images/f_auto/shopimages/products/1200/a4_ivory_card_/.jpg'
  }
}
function App() {
  const [userSelect,setUserSelect] = useState(null);
  const [computerSelect,setComputerSelect] = useState(null);
  const [result,setResult] = useState('')
  const [computerResult, setComputerResult] = useState('');

  const play = (userChoice) => {
    setUserSelect(choice[userChoice]);

    let computerChoice = randomChoice();
    setComputerSelect(computerChoice);
    
    setResult(judgement(choice[userChoice],computerChoice));
    setComputerResult(computerJudgement(choice[userChoice], computerChoice));
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

  const computerJudgement = (user, computer) => {
    if (user.name == computer.name) {
      return 'tie';
    } else if (computer.name == 'Rock')
      return user.name == 'Scissors' ? 'win' : 'lose';
    else if (computer.name == 'Scissors')
      return user.name == 'Paper' ? 'win' : 'lose';
    else if (computer.name == 'Paper')
      return user.name == 'Scissors' ? 'lose' : 'win';
  };

  const randomChoice=()=>{
    let itemArray = Object.keys(choice)//객체의 키값만 뽑아서 배열로 만든다
    let randomItem = Math.floor(Math.random() * itemArray.length);//소수점 아래 숫자 버림
    let final = itemArray[randomItem];
    return choice[final];
  }

  return (
    <div>
      <div className='main'>
        <Box title='You' item={userSelect} result={result}/>
        <Box title='Computer' item={computerSelect}result={computerResult}/>
      </div>
      <div className='main'>
        <button className='btn' onClick={() => play('scissors')}>가위</button>
        <button className='btn' onClick={() => play('rock')}>바위</button>
        <button className='btn' onClick={() => play('paper')}>보</button>
      </div>
    </div>
  );
}

export default App;
