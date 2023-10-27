import React,{useState,useEffect} from "react";
import {Grid,Card,CardContent} from "@mui/material"
import axios from "axios"
export const DisplayUser=()=>{
    const[data,setData]=useState([]);
    const getData=async()=>{
    const result=await axios.get("http://localhost:4040/user");
    setData(result.data);
    }
    useEffect(()=>{
        getData()
    },[])
    return(
        <Grid container spacing={2}>
            {
                data.map((item)=>{
                    return(
                        <Grid item xs={12}>
                            <Card sx={{textAlign:"center",bgcolor:"lavender",color:"purple"}}>
                                <CardContent>
                                    <h2>{item.user.toUpperCase()}</h2>
                                </CardContent>
                            </Card>
                        </Grid>
                    )
                })
            }
        </Grid>
    )
}