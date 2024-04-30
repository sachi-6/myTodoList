
import './App.css';
import Main from './conpornent/Main';
import Clock from './conpornent/Time';
import Timer from './conpornent/Timer';

function App() {
  return (
    <div　style={{padding: "50px"}}>
      <h1 style={{marginLeft: "30px"}}>やることリスト📝</h1>   
      <Clock />
      <Main />  
      <Timer />
    </div>
  );
}

export default App;
