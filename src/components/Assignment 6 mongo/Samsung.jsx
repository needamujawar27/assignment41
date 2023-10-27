import React,{useState,useEffect} from "react";
import {Grid,Card,CardContent,Typography} from "@mui/material"
import axios from "axios";

export const Samsung=()=>{
    const[data,setData]=useState([]);
    const getdata=async()=>{
        const result=await axios.get("http://localhost:3050/allsumsungs");
        setData(result.data)
    }
    useEffect(()=>{
       getdata()
    },[]);
    return(
   <Grid container spacing={2}>
            {
                data.map((item)=>{
                    return(
                   <Grid item xs={4} sx={{textAlign:"center"}}>
         <Card sx={{bgcolor:"lavender",borderRadius:"35px 0 35px 0",marginTop:"40px",margin:"10px",border:"dotted purple",height:"250px"}}>
            <CardContent>
                <Typography variant="h5" color={"purple"}>{item.name}</Typography>
                <Typography variant="h4" color={"hotpink"}>{item.model}</Typography>
                   <p>{item.description.slice(0,150)}</p>
                   <Typography variant="h5" color={"palevioletred"}>{`₹${item.price}`}</Typography>
        </CardContent>
    </Card>
                    </Grid>

                    )
    
                })
            }
   </Grid>
    )
}