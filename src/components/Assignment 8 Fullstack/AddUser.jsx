import React,{useState} from "react";
import {Grid,Card,CardContent,TextField,Button} from "@mui/material"
import axios from "axios";
import {useNavigate} from "react-router-dom"
export const AddUser=()=>{
    const[user,setUser]=useState("");
    const navigate=useNavigate();
     
    const handleAdd=async()=>{
    const payload={user};
    await axios.post("http://localhost:4040/adduser",payload)
    navigate("/disuse");

    }

    return(
        <Card sx={{bgcolor:"floralwhite"}}>
        <CardContent>

        <Grid container spacing={2}>
         <Grid item xs={8}>
           <TextField onChange={(e)=>setUser(e.target.value)} variant="outlined" label="Enter User Name" fullWidth></TextField>
         </Grid>
        <Grid item xs={4}>
           <Button onClick={handleAdd} variant="contained" color="success" fullWidth sx={{height:55}}>ADD</Button>
        </Grid>
       </Grid>
        </CardContent>
        </Card>
    )
}