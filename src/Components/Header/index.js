import React from 'react'
import { Box, Grid, Typography, Button } from '@material-ui/core'



export default (props) =>
    <Box py={8} bgcolor="#110140" color="white">
        <Grid container justifyContent="center">
            <Grid item xs={10}>

                <Box display="flex"justifyContent="space-between" >
                    <Typography variant="h3"> <strong>Seek-A-Job</strong></Typography>
                    <Grid>
                        {props.disable===false?<Button onClick={props.openNewJobModal} variant='contained' color="primary" disableElevation>Post Job</Button>:" "}
                        <Button /*onClick={props.openNewJobModal}*/ href='https://seek-a-job.netlify.app/' variant='contained' color="primary" style={{margin:"10px"}} disableElevation>Logout</Button>
                    </Grid>
                    {/* {props.disable===false?<Button onClick={props.openNewJobModal} variant='contained' color="primary" disableElevation>Post Job</Button>:" "}
                    <Button onClick={props.openNewJobModal} variant='contained' color="primary" disableElevation>Logout</Button> */}
                </Box>

            </Grid>
        </Grid>

    </Box>

