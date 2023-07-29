
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Nom from './nom';
import Description from './description';
import Image from './image';
import Prix from './prix';

const firstName = "iphone"

function App() {
  return (
    <>
    <div className="App">
      <Card style={{ width: '50rem' }} border="primary">
      <Image/> 
      <Card.Body>
        <Card.Title><Nom/></Card.Title>
        <Card.Text>
          <Description/>
          <br/>
          <Prix/>
        </Card.Text>
        <Button variant="primary">Achetez maintenant</Button>
      </Card.Body>
    </Card>
    </div>
    {firstName? <Image/>:"no image"},
    </>
  );
}

export default App;
