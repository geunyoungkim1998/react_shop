import React from "react";
import {Table,Button} from "react-bootstrap";
import {useDispatch,useSelector}from 'react-redux';
import{changeName,increase,addCount,minusCount,sortName} from "./store.js";

const Cart=()=>{
    let state =useSelector((state)=>{return state})
    let dispatch =useDispatch()
    return(
        <div>
            <Table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>상품명</th>
                        <th>수량</th>
                        <th>수량변경하기</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        state.cart.map((v,i)=>
                            <tr key={i}>
                                <td>{state.cart[i].id}</td>
                                <td>{state.cart[i].name}</td>
                                <td>{state.cart[i].count}</td>
                                <td><button onClick={()=>
                                dispatch(addCount(state.cart[i].id))
                                }>+</button><button onClick={()=>
                                    dispatch(minusCount(state.cart[i].id))
                                    }>-</button></td>
                            </tr>
                        )
                    }
                </tbody>
            </Table>
            <Button variant="outline-danger" onClick={()=>{dispatch(sortName(state.cart.Name))}}>이름순정렬</Button>{''}
        </div>
    );
};
export default Cart;