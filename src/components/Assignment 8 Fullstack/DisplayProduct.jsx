import React,{useState,useEffect} from "react";
import {Grid,Card,CardContent,Rating} from "@mui/material";
import axios from "axios";

export const DisplayProduct=()=>{
    const[data,setData]=useState([]);
    const getData=async()=>{
    const result=await axios.get("http://localhost:4040/product");
    setData(result.data)
    }
    useEffect(()=>{
    getData()
    },[])
    return(
   <Grid container spacing={2}>
    {
        data.map((item)=>{
            return(
                <Grid item xs={4}>
                    <Card sx={{bgcolor:"honeydew",margin:"20px",textAlign:"center",borderRadius:"25px"}}>
                        <CardContent>
                            <img src={item.img} alt="" height={250} width={250}/>
                            <h3>{item.title}</h3>
                            <h5>{item.des}</h5>
                            <h4>{`₹${item.price}`}</h4>
                            <Rating value={item.rate}/>
                            <h4>{item.cat}</h4>
                        </CardContent>
                    </Card>
                </Grid>
            )
        })
    }
   </Grid>
    )
}