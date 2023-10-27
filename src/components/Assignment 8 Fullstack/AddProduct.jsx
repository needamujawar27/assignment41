import React,{useState} from "react";
import {Grid,Card,CardContent,TextField,Button,Alert} from "@mui/material"
import axios from "axios";

export const AddProduct=()=>{
    const[img,setImg]=useState("");
    const[title,setTitle]=useState("");
    const[des,setDes]=useState("");
    const[price,setPrice]=useState("");
    const[rate,setRate]=useState("");
    const[cat,setCat]=useState("");
    const[msg,setMsg]=useState("");
   const handleSubmit=async()=>{
  const payload={img,title,des,price,rate,cat};
  const result=await axios.post("http://localhost:4040/addproduct",payload)
  setMsg(result.data);
  setImg("");
  setDes("");
  setTitle("");
  setPrice("");
  setCat("");
   }
   setTimeout(()=>{
    setMsg("")
   },1000)
    
    return(
            <Grid container spacing={2}>
                <Grid item xs={4}></Grid>
                <Grid item xs={4}>
    <Card sx={{marginTop:"30px",bgcolor:"azure"}}>
        <CardContent>
                    {msg && <Alert severity="success">{msg}</Alert>}
                    <TextField onChange={(e)=>setImg(e.target.value)} variant="outlined" label="Enter Image Url" fullWidth></TextField>
                    <br />
                    <br />
                    <TextField onChange={(e)=>setTitle(e.target.value)} variant="outlined" label="Enter Title" fullWidth/>
                    <br />
                    <br />
                    <TextField onChange={(e)=>setDes(e.target.value)} variant="outlined" label="Enter Description" fullWidth/>
                    <br />
                    <br />
                    <TextField onChange={(e)=>setPrice(e.target.value)} variant="outlined" label="Enter Price" fullWidth/>
                    <br />
                    <br />
                    <TextField onChange={(e)=>setRate(e.target.value)} variant="outlined" label="Enter Rating Rate" fullWidth/>
                    <br />
                    <br />
                    <TextField onChange={(e)=>setCat(e.target.value)} variant="outlined" label="Enter Category" fullWidth/>
                    <br />
                    <br />
                    <Button onClick={handleSubmit} variant="contained" color="warning" fullWidth>submit</Button>
        </CardContent>
    </Card>
                </Grid>
                <Grid item xs={4}></Grid>
            </Grid>
    )
}