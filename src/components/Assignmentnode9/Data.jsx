import React,{useState,useEffect} from "react";
import {Grid,Typography,Card,CardContent} from "@mui/material"
import axios from "axios";
import { DataItem } from "./DataItem";

export const Data=()=>{
    const [data,setData]=useState([]);
    const getData=async()=>{
    const result=await axios.get("http://localhost:4090/mahaData")
    setData(result.data);
    };
    const handleDelete=(item)=>{
        const filt=data.filter((elem)=>elem !==item);
        setData(filt)
    }
    useEffect(()=>{
     getData()
    },[])
    return(
   <Grid container spacing={2}sx={{textAlign:'center'}}>
    <Grid item xs={12}>
        <Typography variant="h3">Cities of Maharashtra and Andhra Pradesh</Typography>
    </Grid>
      {
        data.map((item)=>
            <DataItem handleDelete={handleDelete} item={item}/>

        )
      }
   </Grid>
    )
}