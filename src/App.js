/* eslint-disable */

import './App.css';
import { useState } from 'react';

function App() {

  let post= '강남 우동 맛집';
  let [title, setTitle] = useState( ['남자코트 추천', '강남 우동 맛집', '파이썬 독학'] );
  let [따봉, 따봉변경] = useState(0);
  let [woman, setWoman] = useState('남자 코트 추천');

  
  return (
    <div className="App">
      <div className="black-nav">
        <h4 style={ {color:'red', fontSize:'20px'} }>ReactBlog</h4>
      </div>

      <div className='change'><span onClick={ () => { setWoman('여자 코트 추천') } }>여자로 바꿈</span></div>
      
      <div className="list">
        <h4>{ woman } <span onClick={ () => { 따봉변경(따봉+1) } }>👍</span> {따봉} </h4>
        <p>2월 17일 발행</p>
      </div>

      <div className="list">
        <h4>{ title[1] }</h4>
        <p>2월 17일 발행</p>
      </div>

      <div className="list">
        <h4>{ title[2] }</h4>
        <p>2월 17일 발행</p>
      </div>

    </div>
  );
  
}

export default App;
