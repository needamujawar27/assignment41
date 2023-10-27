import React from "react";
import {Grid,Card,CardContent,Button} from "@mui/material";
import { NavData } from "./NavData";
import { Link } from "react-router-dom";
export const Nav=()=>{
    return(
        <Card>
            <CardContent>

     <Grid container spacing={2}>
        {
            NavData.map((item)=>{
                return(
                    <Grid item xs={item.xs} >
                        <Link to={item.path}>
                            <Button sx={{bgcolor:"black",fontWeight:"bolder",color:"red"}} variant="outlined"  fullWidth>{item.label}</Button>
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