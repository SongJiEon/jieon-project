import { useState } from 'react';
import './App.css';
import Box from "./component/Box.js"

//1.박스 두개(타이틀,사진,결과값)
//2.가위바위보 버튼
//3.버튼 클릭시 내가 클릭한 값이 박스에 나타남
//4.컴퓨터는 랜덤하게 아이템이 나타남
//5. 3,4결과로, 누가 이겼는지 승패가 나타남
//6. 승패 결과에 따라 테두리색 변경(초록 빨강 검정)


const choice = {
  rock:{
    name:'Rock',
    img:"https://nationaltoday.com/wp-content/uploads/2021/08/National-Pet-Rock-Day-1200x834.jpg"
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
  const [userSelect,setUserSelect] = useState(null)

  const play = (userChoice) => {
    setUserSelect(choice[userChoice])
  };
  return (
    <div>
      <div className='main'>
        <Box title="You" item={userSelect}/>
        <Box title="Computer"/>
      </div>
      <div className='main'>
        <button onClick={() => play("scissors")}>가위</button>
        <button onClick={() => play("rock")}>바위</button>
        <button onClick={() => play("paper")}>보</button>
      </div>
    </div>
  );
}

export default App;
