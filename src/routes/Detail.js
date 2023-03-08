import {Container,Row,Col,Button,Nav,Alert} from 'react-bootstrap';
import {useParams} from 'react-router-dom';
import{useState,useEffect,useContext}from 'react';
import styled from 'styled-components';
import{Context1} from '../App';
import{addItem}from "./../store.js";
import{useDispatch}from "react-redux";
import dispatch from './../Cart.js';

function Detail(props){
    let{id}=useParams();
    let[tab,setTab]=useState(0);
    let selproduct=props.shoes.find((x)=>x.id==id);
    let[alert,setAlert]=useState(true);
    let[scale,setScale]=useState('');

    let{remain}=useContext(Context1);

    useEffect(()=>{
      setTimeout(()=>{setAlert(false)},2000)
      setTimeout(()=>{setScale('after')},50)
      return()=>{
        setScale('')
      }
    },[])

    let Box= styled.div`
      padding:20px;
      color:gray;
    `;
    let YellowBtn = styled.button`
      background : gold;
      color : white;
      font-size:30px;
      width:100%;
      padding : 100px 100px;
      border:1px solid #ccc;
      background-image:url("https://images.unsplash.com/photo-1549298916-b41d501d3772?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1112&q=80");
      background-size:cover;
      background-position:center;
    `;

    return(
      <>
      <Container className={"before "+scale}>
        {
          alert===true? <Alert key={'warning'} variant={'warning'}>
          2초 후에 사라지는 배너
        </Alert> :null
        }
        <Box>
          <YellowBtn>지금 구매하면 10% 할인</YellowBtn>
        </Box>

      <Row>
        <Col md={6}>
          <img src={'/img/shoes'+(Number(id)+1)+'.jpg'} width="100%" alt='product'/>
        </Col>
        <Col md={6}>
          <h4 className="pt-5">{selproduct.title}</h4>
          <p>{selproduct.content}</p>
          <p>{selproduct.price}</p>
          <Button variant="primary" onClick={()=>{dispatch(addItem({id:selproduct.id,name:selproduct.title,count:1}))}}>주문하기</Button>
        </Col>
      </Row>
      <Nav variant="tabs" defaultActiveKey="link-0">
        <Nav.Item>
          <Nav.Link eventKey="link-0" onClick={()=>{setTab(0)}}>Tab1</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-1" onClick={()=>{setTab(1)}}>Tab2</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-2" onClick={()=>{setTab(2)}}>
            Tab2
          </Nav.Link>
        </Nav.Item>
      </Nav>
      <TabContent tab={tab} shoes={props.shoes}></TabContent>
    </Container>
    </>
    )
  }
  function TabContent({tab,shoes}){
    let [fade, setFade] = useState('');
    let{remain}=useContext(Context1);
    useEffect(()=>{
        setTimeout(()=>{setFade('end')},50)
        return ()=>{
          setFade('');
          }
    }, [tab])
    return(
        <div className={"start " + fade}>
            {[<div>내용0{remain[0]}</div>, <div>내용1</div>, <div>내용2</div>][tab]}
        </div>
    )
}
export default Detail;
