import { configureStore, createSlice } from '@reduxjs/toolkit'

let user=createSlice({
    name:"user",
    initialState:{name:'kim',age:20},
    reducers:{
        changeName(state){
            state.name='john kim'
        },
        increase(state,action){
            state.age+=action.payload
        }
    }
})

let cart=createSlice({
    name:"cart",
    initialState:[
        {id:0,name:"White and Black",count:2},
        {id:2,name:"Grey Yordan",count:1},
        {id:5,name:"Red Herring",count:1},
        {id:3,name:"Flowey",count:1}
    ],
    reducers:{
        addCount(state,action){
            let num=state.findIndex((a)=>{return a.id===action.payload})
            state[num].count++
        },
        minusCount(state,action){
            let num=state.findIndex((a)=>{return a.id===action.payload})
            state[num].count--
        },
        addItem(state,action){
            state.push(action.payload)
        },
        sortName(state,action){
            state.sort((a,b)=>
            a.name>b.name?1:-1)
        }
    }
})

export let {changeName,increase}=user.actions
export let {addCount,minusCount,addItem,sortName}=cart.actions

export default configureStore({
    reducer:{
        user:user.reducer,
        cart:cart.reducer
    }
})