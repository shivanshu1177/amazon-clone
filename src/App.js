import './App.css';
import Header from './Header';
import Home from './Home';
function App() {
  return (
    //BEM
    <div className="App">
      {/* Header */}
      <Header info="Echo Dot (3rd Gen) - Smart speaker with Alexa (Black)"  rating="5"/>
      {/* Home */}
      <Home />
    </div>
  );
}

export default App;
