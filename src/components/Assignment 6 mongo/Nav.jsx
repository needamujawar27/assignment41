import React from "react";
import {Grid,Button,Card,CardContent} from "@mui/material";
import { NavData } from "./NavData";
import { Link } from "react-router-dom";

export const Nav=()=>{
    return(
            <Card>
                <CardContent>
     <Grid container spacing={2}>
        {
            NavData.map((item)=>
            <Grid item xs={item.xs}>
            <Link to={item.path}>
                <Button variant="contained" color="secondary" fullWidth>{item.label}</Button>
            </Link>
            </Grid>
            )
        }
     </Grid>
        </CardContent>
    </Card>
    )
}