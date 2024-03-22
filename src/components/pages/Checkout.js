import React from 'react'
import { Container, Box, Typography,Grid, FormControl, Input, InputBase, TextField } from '@mui/material'

const Checkout = () => {
  return (
    

     <Box bgcolor='whitesmoke'>
       <Container >

      <Box bgcolor='white' >


      <Typography variant='h6' component='h3'>Shipping Address</Typography>
        <Grid container  spacing={4}>
          



          {/* shipping */}
          <Grid item lg={4}  >

            {/* <FormControl variant='standard'> */}
            <Grid item>

              <TextField
                size='small'
                fullWidth
                id="fullname"
                label="Full Name"
              // value={first}
              // onChange={e => setFirst(e.target.value)}
              />
            </Grid>

            <Grid item>
              <TextField
                size='small'
                fullWidth
                id="phoone"
                label="Phone Number"

              // value={second}
              // onChange={e => setSecond(e.target.value)}
              />
            </Grid>

            <Grid item>
              <TextField
                size='small'
                fullWidth
                id="zip"
                label="Zip Code"

              // value={third}
              // onChange={e => setThird(e.target.value)}
              />


            </Grid>
            <Grid item>
              <TextField
                size='small'
                fullWidth
                id="address"
                label="Address 1"

              // value={third}
              // onChange={e => setThird(e.target.value)}
              />


            </Grid>

            {/* </FormControl> */}


          </Grid>

          {/* shipping end */}























          {/* Billing Address */}
          <Grid item spacing={2} lg={4}>


            <Grid item>

              <TextField
                size='small'
                fullWidth
                id="fullname"
                label="Full Name"
              // value={first}
              // onChange={e => setFirst(e.target.value)}
              />
            </Grid>

            <Grid item>
              <TextField
                size='small'
                fullWidth
                id="phoone"
                label="Phone Number"

              // value={second}
              // onChange={e => setSecond(e.target.value)}
              />
            </Grid>

            <Grid item>
              <TextField
                size='small'
                fullWidth
                id="zip"
                label="Zip Code"

              // value={third}
              // onChange={e => setThird(e.target.value)}
              />


            </Grid>
            <Grid item>
              <TextField
                size='small'
                fullWidth
                id="address"
                label="Address 1"

              // value={third}
              // onChange={e => setThird(e.target.value)}
              />


            </Grid>

          </Grid>


        </Grid>

      </Box>
      </Container>
      </Box>
    
  )
}

export default Checkout
