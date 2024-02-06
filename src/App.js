import './App.css';
import {LeftSection} from './components/LeftSection/LeftSection';
import {RightSection} from './components/RightSection/RightSection';
import uniphoreline from './assets/uniphoreline.png';


function App() {
  return (
    <div className="App">
      <div id='leftrightsection'> 
        <LeftSection />
        <RightSection />
      </div>
      <img id ='line' src={uniphoreline} alt ="line"></img>
    </div>
  );
}

export default App;
