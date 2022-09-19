import React from "react";
import { Box, Grid, Typography, Button, makeStyles } from '@material-ui/core'
import { DialogActions } from "@material-ui/core"


const useStyle = makeStyles((theme) => ({
    wrapper: {
        // border: "5px solid #e8e8e",
        // border: "10px",
        cursor: "pointer",
        borderRadius: "15px",
        transition: "0.5s",
        margin: "20px",
        boxShadow: "0px 10px 25px",
        width: "30%",

    },
    wrapper2: {
        // border: "5px solid #e8e8e",
        // border: "10px",
        cursor: "pointer",
        borderRadius: "15px",
        transition: "0.5s",
        margin: "20px",
        boxShadow: "0px 10px 25px",
        width: "60%",

    },
    companyName: {
        fontSize: "15.5px",
        backgroundColor: theme.palette.primary.main,
        padding: theme.spacing(0.75),
        borderRadius: "5px",
        display: "inline-block",
        fontWeight: 600,

    },
    skillchip: {
        margin: theme.spacing(0.25),
        padding: theme.spacing(0.75),
        fontSize: "14.5px",
        borderRadius: "30px",
        transition: "3s",
        cursor: "pointer",
        fontWeight: 600,
        backgroundColor: theme.palette.secondary.main,
        color: "#fff",
    },

}));

export default (props) => {

    const classes = useStyle();
    let endDate = parseInt(props.deadline);
    return (
    <Grid container spacing={2}>
        <Box p={4} xs={4} borderLeft={endDate <= 14 && endDate > 3 ? "10px solid yellow" : (endDate > 21 ? "10px solid green" : "10px solid red")} 
            bgcolor={endDate <= 14 && endDate > 3 ? "#FCFF6F" : (endDate > 21 ? "#6FFFAA" : "#FFAF9E")} 
            borderTop={endDate <= 14 && endDate > 3 ? "10px solid yellow" : (endDate > 21 ? "10px solid green" : "10px solid red")}
            borderBottom={endDate <= 14 && endDate > 3 ? "10px solid yellow" : (endDate > 21 ? "10px solid green" : "10px solid red")}
            className={classes.wrapper}>
            <Grid container alignItems="center">
                <Grid item xs>
                    <Typography variant="subtitle1"><left><strong>{props.companyName}</strong></left></Typography>
                    <Typography variant="subtitle1"><h2><strong>{props.title}</strong></h2></Typography>
                    <Typography><strong><u>Closing in {props.deadline} days</u></strong></Typography>
                    <Typography><strong><u>Job Location:</u>{props.location}</strong></Typography>
                    
                </Grid>
                <Grid item container xs>
                    {/* {props.skills.map((skill) => (
                        <Grid className={classes.skillchip} key={skill} item>{skill}</Grid>
                    ))} */}
                </Grid>
                <Grid item container direction="column" alignItems="flex-end" xs>
                    <Grid item>
                        {/* <Typography ><strong>Closing in {props.deadline} days,</strong> <strong>{props.location},</strong>  <strong>{props.phone},</strong> <strong>{props.email}</strong> </Typography> */}
                    </Grid>
                    <Grid item>
                        {/* <Box >
                            <Button className="mx-2" onClick={props.open} variant="outlined">Check</Button>
                            <Button variant="outlined">Interest</Button>
                        </Box> */}
                        <Box mt={2}>

                        </Box>
                    </Grid>
                </Grid>

            </Grid>

        </Box>
        <Box p={4} xs={4} borderRight={endDate <= 14 && endDate > 3 ? "10px solid yellow" : (endDate > 21 ? "10px solid green" : "10px solid red")} bgcolor={endDate <= 14 && endDate > 3 ? "#FCFF6F" : (endDate > 21 ? "#6FFFAA" : "#FFAF9E")}
             borderTop={endDate <= 14 && endDate > 3 ? "10px solid yellow" : (endDate > 21 ? "10px solid green" : "10px solid red")}
             borderBottom={endDate <= 14 && endDate > 3 ? "10px solid yellow" : (endDate > 21 ? "10px solid green" : "10px solid red")}   
            className={classes.wrapper2}>
            <Grid container alignItems="center" >
                <Grid item xs>
                    <Typography variant="subtitle1"><u><strong>Description:</strong></u></Typography>
                    <Typography variant="subtitle1"><strong>{props.description}</strong></Typography>
                    <Typography><strong><u>Contact Detail: </u>{props.phone}</strong></Typography>
                    <Typography><strong><u>Email ID:</u> {props.email}</strong></Typography>
                    <DialogActions>
                        <Button variant="outlined" component="a" href={props.link} target="_blank"><strong>Apply</strong></Button>
                    </DialogActions>
                </Grid>
                {/* <Grid item container xs>
                    <Typography variant="subtitle1"><h6><strong>{props.title}</strong></h6></Typography>
                    <Typography variant="subtitle1"><strong>{props.companyName}</strong></Typography>
                </Grid> */}
                <Grid item container direction="column" alignItems="flex-end" xs>
                    {/* <Grid item>
                        <Typography ><strong>Closing in {props.deadline} days,</strong> <strong>{props.location},</strong>  <strong>{props.phone},</strong> <strong>{props.email}</strong> </Typography>
                    </Grid> */}
                    <Grid item>
                        <Box >
                            {/* <Button className="mx-2" onClick={props.open} variant="outlined">Check</Button>
                            <Button variant="outlined">Interest</Button> */}
                            {props.skills.map((skill) => (
                            <Grid className={classes.skillchip} key={skill} item>{skill}</Grid>
                    ))}
                        </Box>
                        <Box mt={2}>

                        </Box>
                    </Grid>
                </Grid>

            </Grid>

        </Box>
        </Grid>

    )
}