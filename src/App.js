import './App.css';

import {Container,Nav,Navbar} from 'react-bootstrap';
import data from './data';
import {useState,createContext} from 'react';
import{Routes,Route,Link,useNavigate} from 'react-router-dom';

import Home from './routes/Home';
import About from './routes/About';
import Detail from './routes/Detail';
import Cart from './Cart';

export let Context1=createContext();

function App() {
  let[shoes,setShoes]=useState(data);
  let navigate=useNavigate();
  let[res,setRes]=useState([0,1,2,3,4,5,6,7,8]);
  let[remain,setRemain]=useState([10,11,12]);

  return (
    <div className='App'>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand onClick={()=>{navigate('/')}}>NIKE</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={()=>{navigate('/')}}>Home</Nav.Link>
            <Nav.Link onClick={()=>{navigate('/detail/0')}}>Detail</Nav.Link>
            <Nav.Link onClick={()=>{navigate('/Cart')}}>Cart</Nav.Link>
            <Nav.Link onClick={()=>{navigate('/About')}}>About</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      
      {/* <Link to='/'>홈</Link>
      <Link to='/detail'>상세페이지</Link> */}

      <Routes>
        <Route path='/' element={<Home shoes={shoes} setShoes={setShoes} setRes={setRes} res={res}/>}>
        </Route>
        <Route path='/detail/:id' element={
          <Context1.Provider value={{remain}}>
            <Detail shoes={shoes}/>
            </Context1.Provider>
        }></Route>
        <Route path='/cart' element={<Cart/>}></Route>
        <Route path='/about' element={<About/>}>
          <Route path='member' element={<div>멤버입니다.</div>}></Route>
          <Route path='location' element={<div>위치입니다.</div>}></Route>
        </Route>
        <Route path='*' element={<div>없는페이지입니다.</div>}></Route>
      </Routes>

      <Footer/>
    </div>
  );
}
function Footer(){
  let fcss={
      backgroundColor:'#333',
      color:'#fff',
      padding:'20px 0',
      marginTop:'80px',
      marginBottom:'0'
  }
  return(
    <>
      <p style={fcss}>
        COPYRIGHT(C) 2022 Nike, Inc. All Rights Reserved
      </p>
    </>
  )
}

export default App;
