import './App.css';
import Modules from './components/modules/Modules';
import Pay from './components/payment/Pay';

function App() {
  return (
    <div className="App">
      <Modules className='modules'/>
      <Pay className='pay' />
    </div>
  );
}

export default App;
