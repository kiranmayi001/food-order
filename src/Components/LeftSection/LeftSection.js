import React, {useState,useEffect } from 'react'
// import classedatas from "./LeftSection.module.css"
import axios from "axios"
import classes from './LeftSection.module.css';

function LeftSection({order}) {
    const [data,setData] = useState(order);
    console.log(data)
    useEffect(() => {
        // axios.get("https://60375ca8543504001772228a.mockapi.io/foodApp")
        //     .then(response => {
        //         console.log("from left section"+response.data)
               
        //         setData(response.data)
        //     })
        //     .catch(err => {
        //         console.log("error")
        //     })
        setData(order)
        console.log("left bitch")
    },[data.length]);


    return (
        <div className={classes.leftSection}>
          
            {
                data && data.map(item => {
                    return (<p key={item.id + item.itemName} className={classes.iteamsName}>{item.itemName} :$ {item.itemPrice} </p>)

                })
            }


            {/* 
        <p>Total Price:{arr.reduce((acc, item) => {
            return (acc + parseInt(item.itemPrice))
        }, 0)}  </p> */}
        </div>
    )
}

export default LeftSection
