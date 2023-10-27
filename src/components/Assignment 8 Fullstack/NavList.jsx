import React from "react";
import {Grid,Card,CardContent,Button} from "@mui/material";
import { EightData } from "./EightData";
import {Link} from "react-router-dom"
export const NavList=()=>{
    return(
        <Card>
            <CardContent>

    <Grid container spacing={2}>
        {
            EightData.map((item)=>{
                return(
                <Grid item xs={item.xs}>
            <Link to={item.path}>
                <Button variant="contained" color="secondary" fullWidth>{item.label}</Button>
            </Link>
        </Grid>
                )
            })
        }
    </Grid>
        </CardContent>
    </Card>
    )
}