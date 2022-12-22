import './App.css';
import Card from './components/Card';

function App() {
  const img =
    'https://www.vorkaccountants.nl/wp-content/uploads/2018/01/placeholder.png';

  return (
    <>
      <div className='container'>
        <Card img={img}>
          <h5 className='card-title'>Card title</h5>

          <p className='card-text'>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
        </Card>
        <Card>
          <h5 className='card-title'>Special title treatment</h5>

          <p className='card-text'>
            With supporting text below as a natural lead-in to additional
            content.
          </p>
        </Card>
      </div>
    </>
  );
}

export default App;
