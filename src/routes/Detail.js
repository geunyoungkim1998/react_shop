import {Container,Row,Col,Button} from 'react-bootstrap';
import {useParams} from 'react-router-dom';

function Detail(props){
    let{id}=useParams();
    return(
    <Container>
      <Row>
        <Col md={6}>
          <img src={'/img/shoes'+(Number(id)+1)+'.jpg'} width="100%" />
        </Col>
        <Col md={6}>
          <h4 className="pt-5">{props.shoes[id].title}</h4>
          <p>{props.shoes[id].content}</p>
          <p>{props.shoes[id].price}</p>
          <Button variant="primary">주문하기</Button>
        </Col>
      </Row>
    </Container>
    )
  }
  
export default Detail;
