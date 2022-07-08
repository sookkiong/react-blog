import logo from './logo.svg';
import './App.css';

function App() {

  let post= '강남 우동 맛집';

  return (
    <div className="App">
      <div className="black-nav">
        <h4 style={ {color:'red', fontSize:'20px'} }>블로그임</h4>
      </div>

      <div className="list">
        <h4>글제목</h4>
        <p>2월 17일 발행</p>
      </div>

      <h4>{ post }</h4>

    </div>
  );
}

export default App;
