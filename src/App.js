import './App.css';
import Button from 'react-bootstrap/Button';
import setadd from './compo/profile/address';
import getfullname from './compo/profile/fullname';
import gettpic from './compo/profile/profilephoto';



function App() {
  return (
    <div className='mainbtn'>
<Button onClick={setadd}      className='btn1' variant="outline-primary" >GetAddress</Button>
<Button onClick={getfullname} className='btn2'  variant="outline-danger">GetFull-Name</Button>
<Button onClick={gettpic}     className='btn3'  variant="outline-info">ProfilePhoto</Button>

    </div>
  );
}

export default App;
