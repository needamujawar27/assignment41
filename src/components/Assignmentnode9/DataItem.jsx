import React from "react";
import {Grid,Button,Card,CardContent} from "@mui/material"

export const DataItem=({item,handleDelete})=>{
    return(

<Grid item xs={3}>
        <Card sx={{bgcolor:item.Mah==false? "coral":"green",height:"200px"}}>
            <CardContent>
    <h2>{item.city}</h2>
    <h5>{item.state}</h5>
    <Button onClick={()=>handleDelete(item)} variant="contained" color="secondary">Delete</Button>
            </CardContent>
        </Card>
</Grid>
    )
}