import React,{useState,useEffect} from "react";
import { Grid,Card,CardContent,Typography} from "@mui/material";
import axios from "axios";

export const Students=()=>{
    const[data,setData]=useState([]);
    const getData=async()=>{
    const result= await axios.get("http://localhost:3060/students");
    setData(result.data);
    }
    useEffect(()=>{
     getData()
    },[]);
    return(
<Grid container spacing={2} sx={{marginTop:"20px"}}>
    <Grid item xs={12} sx={{color:"darkblue"}}>
    <Typography variant="h3" textAlign={"center"}>Students</Typography>
    </Grid>
{
    data.map((item)=>{
        return(
         <Grid item xs={6}>
            <Card sx={{bgcolor:"black",margin:"10px",color:"white",boxShadow:"5px 5px 5px darkolivegreen",borderRadius:"500%",textAlign:"center"}}>
                <CardContent>
              <Typography variant="h5" ><span>Name:</span>{item.name}</Typography>
              <Typography variant="h5" ><span>Class:</span>{item.class}</Typography>
              <Typography variant="h5"><span>Div:</span>{item.div}</Typography>
              <Typography variant="h5"><span>Age:</span>{item.age}</Typography>
              <Typography variant="h5"><span>Gender:</span>{item.gender}</Typography>
            </CardContent>
        </Card>
            
         </Grid>
            )
    })
}
</Grid>

    )
}