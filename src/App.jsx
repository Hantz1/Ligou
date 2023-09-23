import Header from './components/header/header';
import Sidebar from './components/sidebar/sidebar';
import './utils/style/App.css';

function App() {
  return (
    <div className="App">
      <div className='header'>
        <Header/>
      </div>
      <div className='sidebar'>
        <Sidebar/>
      </div>
      <div className='main'>
        main
      </div>
    </div>
  );
}

export default App;
