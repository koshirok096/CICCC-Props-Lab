import data from './data.json';
import './App.css';
import Card from './components/Card';

function App() {
  return (
    <div className='App'>
      {data.map((person, index) => (
        <Card key={index} data={person} />
      ))}
    </div>
  );
}

export default App;
