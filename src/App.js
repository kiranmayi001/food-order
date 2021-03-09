import logo from './logo.svg';
import classes from './App.module.css';
import MenuPage from './Components/MenuPage/MenuPage';
import React, {useState,useEffect } from 'react'
import axios from 'axios';
import LeftSection from './Components/LeftSection/LeftSection'

function App() {
const [order,setOrder]=useState([]);
const [dat,setDat]=useState([]);
const [id,setId]=useState("")
  useEffect(()=>{
    axios.get("https://60375ca8543504001772228a.mockapi.io/foodApp")
    .then(response=>{
      if(response.data.length>order.length)
      // console.log(response.data)
      // setOrderData([...response.data])
      // console.log(orderData)
      setOrder(response.data)
      console.log("App sucess")
      console.log(order)
    })
    .catch(err=>{
      console.log("App err")
    })
    axios.get("https://5ee249468b27f300160948f0.mockapi.io/newvideo")
    .then(response => {
        console.log(response.data)
        setDat(response.data)

    })
    .catch(err => {
        console.log("Error")
    })
    console.log("food items")

  },[id])



  const HandleAddButton = (id) => {
    alert("Cliked " + id)
    let clikedCart = dat.filter(item => {
        return (id === item.id)
    })
    console.log(clikedCart)
    clikedCart.foodid = id
    axios.post("https://60375ca8543504001772228a.mockapi.io/foodApp",...clikedCart)
    setId(id)

}

  return (
    <div className={classes.App}>
       <LeftSection order={order}/>
      <MenuPage HandleAddButton={HandleAddButton}/>
      
    </div>
  );
}

export default App;
