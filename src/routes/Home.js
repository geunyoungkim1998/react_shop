import {Container,Row,Col} from 'react-bootstrap';
import Product from '../Component/Product';
import Button from 'react-bootstrap/Button';
import axios from 'axios';

import {useState} from 'react';
import Title from '../Component/Title';
import Title2 from '../Component/Title2';
import nike from '../nike';

function Home(props){
    // let[res,setRes]=useState([0,1,2,3,4,5,6,7,8]);
    let[nike1,setNike1]=useState(nike);
    let[count,setCount]=useState(1);
    return(
      <div>
        <div className='slider'>
        </div>
        <Title/>
        <Button variant="outline-primary"
        onClick={()=>{
            let copy=[...props.shoes].sort((a,b)=>a.title>b.title ? 1:-1);
            props.setShoes(copy);
            props.shoes=copy;
            let res1=[];
            for(let i in copy){
                res1.push(copy[i].id)
            }
            props.setRes1(res1);
        }}
        >이름순 정렬</Button>{' '}
        <Button variant="outline-primary"
        onClick={()=>{
            let copy=[...props.shoes].sort((a,b)=>a.price>b.price ? 1:-1);
            props.setShoes(copy);
            props.shoes=copy;
            let res1=[];
            for(let i in copy){
                res1.push(copy[i].id)
            }
            props.setRes1(res1);
        }}>낮은 가격순 정렬</Button>{' '}
        <Button variant="outline-primary"
        onClick={()=>{
            let copy=[...props.shoes].sort((a,b)=>a.price<b.price ? 1:-1);
            props.setShoes(copy);
            props.shoes=copy;
            let res1=[];
            for(let i in copy){
                res1.push(copy[i].id)
            }
            props.setRes1(res1);
        }}>높은 가격순 정렬</Button>{' '}
        <Container>
          <Row>
            {
              props.shoes.map((v,i)=>{
              return(
              <Product shoes={props.shoes[i]} i={i} res={props.res}/>
            )
            })
          }
        </Row>
        </Container>
        <Title2/>
        <Button variant="outline-primary" 
        onClick={()=>{
            if(count===1){
                axios.get('https://jungwoonan.github.io/react_data/nike2.json').then((result)=>{
                    let copy=[...nike1,...result.data];
                    setNike1(copy);
                    setCount(2);
                })
            }else if(count===2){
                axios.get('https://jungwoonan.github.io/react_data/nike3.json').then((result)=>{
                    let copy=[...nike1,...result.data];
                    setNike1(copy);
                    setCount(3);
                })
            }else{
                alert("더이상 상품이 없습니다.")
            }
        }}
        >+ 상품 3개 더 보기</Button>{' '}
        <Container style={{marginTop:'30px'}}>
            <Row>
                {
                    nike1.map((ele,i)=>{
                        return(
                            <Nike nike1={nike1[i]}/>
                        )
                    })
                }
            </Row>
        </Container>
      </div>
    )
  }

  function Nike(props){
    return(
        <Col md={4}>
            <img alt='item2' src={props.nike1.imgUrl} width="80%"></img>
            <h5>{props.nike1.title}</h5>
            <p>{props.nike1.content}</p>
            <p>{props.nike1.price}</p>
        </Col>
    )
  }
  

export default Home;
