import{useNavigate} from 'react-router-dom';
import {Nav,Col} from 'react-bootstrap';

function Product(props){
    let navigate=useNavigate();
    return(
      <Col md={4}>
        <Nav.Link onClick={()=>{
          navigate('/detail/'+props.res[props.i])
        }} className='c1'>
          <img src={props.shoes.imgUrl} width='80%' alt='item'/>
          <h4>{props.shoes.title}</h4>
          <p>{props.shoes.price}</p>
        </Nav.Link>
      </Col>
    )
  }

  export default Product;