import './App.css';
import NewsPaper from './components/NewsPaper/NewsPaper';
import 'bootstrap/dist/css/bootstrap.min.css';
import News from './components/News/News';

function App() {
  return (
    <div className="App">
     <NewsPaper></NewsPaper>
     <News></News>
    </div>
  );
}

export default App;
