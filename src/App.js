import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  let post= '강남 우동 맛집';
  let [womanCoat, setWomanCoat] = useState('여자 코트 추천');
  let [dining, setDining] = useState('강남 우동 맛집');
  let [study, setStudy] = useState('파이썬 독학');


  
  
  return (
    <div className="App">
      <div className="black-nav">
        <h4 style={ {color:'red', fontSize:'20px'} }>ReactBlog</h4>
      </div>

      <div className="list">
        <h4>{ womanCoat }</h4>
        <p>2월 17일 발행</p>
      </div>

      <div className="list">
        <h4>{ dining }</h4>
        <p>2월 17일 발행</p>
      </div>

      <div className="list">
        <h4>{ study }</h4>
        <p>2월 17일 발행</p>
      </div>

    </div>
  );
  
}

export default App;
