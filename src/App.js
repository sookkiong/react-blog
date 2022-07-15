/* eslint-disable */

import './App.css';
import { useState } from 'react';

function App() {

  let post= '강남 우동 맛집';
  let [title, setTitle] = useState( ['남자코트 추천', '강남 우동 맛집', '파이썬 독학'] );
  let [따봉, 따봉변경] = useState([0,0,0]);
  let [onModal, setOnModal] = useState(false);
  let [title2, setTitle2] = useState(0);
  let [입력값, 입력값변경] = useState('');

  return (
    <div className="App">
      <div className="black-nav">
        <h4 style={ {color:'red', fontSize:'20px'} }>ReactBlog</h4>
      </div>

      <button onClick={ () => {
        let arr = [...title];
        arr.sort();
        setTitle(arr);

      } }>가나다순 정렬</button>

      <button onClick={ () => {
        let copy = [...title];
        copy[0] = '여자 코트 추천';
        setTitle(copy);

      } }>성별변경</button>


      {// v=['남자코트 추천', '강남 우동 맛집', '파이썬 독학'] i=[0,1,2]
        title.map(function(v,i){
          return(
            <div className="list" key={i}>
            <h4 onClick={ () => {setOnModal(true); setTitle2(i)} }>{ v } <span onClick={(e) => {
              e.stopPropagation();
              const mapArr = [...따봉];
              mapArr[i]++;
              따봉변경(mapArr);
            }}>👍 {따봉[i]}</span></h4>
            <p>2월 17일 발행</p>
          </div>
          )
        })
      }

      <input onChange={(e) => { 
        입력값변경(e.target.value);
        console.log(입력값)
        }} />

      {
        onModal === true 
        ? <Modal title2={title2} 글제목={title} 글제목2={setTitle}/>
        : null
      }
      
    </div>
  );
}

const Modal = (props) => {
  return(
    <div className='modal'>
      <h4>{ props.글제목[props.title2] }</h4>
      <h4>나이: 25세</h4>
      <h4>직업: 학생</h4>
      <button>글수정</button>
    </div>
  ) 
}

export default App;
