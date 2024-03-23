import React from 'react'
import { Container, Box, Typography, Grid, Stack,FormControl, Input, InputBase, TextField } from '@mui/material'

const Checkout = () => {

  return (

    <Box p={3} >

      <Container >
        {/* shipping */}
        <Stack direction={{lg:'row',md:'row',sm:'column'}} gap={3}>

        <Box width='70%'>  

        <Box p={3} bgcolor='yellow'  >

          <Box py={1}>

            <Typography variant='h6' component='h4' sx={{ fontSize: '14px', color: '#2c2c2c' }} fontWeight='600'>Shipping Address</Typography>

          </Box>

          <Grid container spacing={4}>

            <Grid item lg={6}  >

              {/* <FormControl variant='standard'> */}
              <Grid item mt={2}>

                <TextField
                  size='small'
                  fullWidth
                  id="fullname"
                  label="Full Name"
                // value={first}
                // onChange={e => setFirst(e.target.value)}
                />
              </Grid>

              <Grid item mt={2}>
                <TextField
                  size='small'
                  fullWidth
                  id="phoone"
                  label="Phone Number"

                // value={second}
                // onChange={e => setSecond(e.target.value)}
                />
              </Grid>

              <Grid item mt={2}>
                <TextField
                  size='small'
                  fullWidth
                  id="zip"
                  label="Zip Code"

                // value={third}
                // onChange={e => setThird(e.target.value)}
                />


              </Grid>
              <Grid item mt={2}>
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





            <Grid item lg={6}>


              <Grid item mt={2}>

                <TextField
                  size='small'
                  fullWidth
                  id="email"
                  label="Email Address"
                // value={first}
                // onChange={e => setFirst(e.target.value)}
                />
              </Grid>

              <Grid item mt={2}>
                <TextField
                  size='small'
                  fullWidth
                  id="company"
                  label="Company"

                // value={second}
                // onChange={e => setSecond(e.target.value)}
                />
              </Grid>

              <Grid item mt={2}>
                <TextField
                  size='small'
                  fullWidth
                  id="country"
                  label="Country"

                // value={third}
                // onChange={e => setThird(e.target.value)}
                />


              </Grid>
              <Grid item mt={2}>
                <TextField
                  size='small'
                  fullWidth
                  id="address"
                  label="Address 2"

                // value={third}
                // onChange={e => setThird(e.target.value)}
                />


              </Grid>

            </Grid>


          </Grid>

        </Box>
        {/* shipping end */}












        {/* Billing Addresss */}
        <Box p={3} bgcolor='yellow'  mt={4} >
          <Box py={1}>

            <Typography variant='h6' component='h4' sx={{ fontSize: '14px', color: '#2c2c2c' }} fontWeight='600'>Shipping Address</Typography>

          </Box>

          <Grid container spacing={4}>





            <Grid item lg={6}  >

              {/* <FormControl variant='standard'> */}
              <Grid item mt={2}>

                <TextField
                  size='small'
                  fullWidth
                  id="fullname"
                  label="Full Name"
                // value={first}
                // onChange={e => setFirst(e.target.value)}
                />
              </Grid>

              <Grid item mt={2}>
                <TextField
                  size='small'
                  fullWidth
                  id="phoone"
                  label="Phone Number"

                // value={second}
                // onChange={e => setSecond(e.target.value)}
                />
              </Grid>

              <Grid item mt={2}>
                <TextField
                  size='small'
                  fullWidth
                  id="zip"
                  label="Zip Code"

                // value={third}
                // onChange={e => setThird(e.target.value)}
                />


              </Grid>
              <Grid item mt={2}>
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















            <Grid item spacing={2} lg={6}>


              <Grid item mt={2}>

                <TextField
                  size='small'
                  fullWidth
                  id="email"
                  label="Email Address"
                // value={first}
                // onChange={e => setFirst(e.target.value)}
                />
              </Grid>

              <Grid item mt={2}>
                <TextField
                  size='small'
                  fullWidth
                  id="company"
                  label="Company"

                // value={second}
                // onChange={e => setSecond(e.target.value)}
                />
              </Grid>

              <Grid item mt={2}>
                <TextField
                  size='small'
                  fullWidth
                  id="country"
                  label="Country"

                // value={third}
                // onChange={e => setThird(e.target.value)}
                />


              </Grid>
              <Grid item mt={2}>
                <TextField
                  size='small'
                  fullWidth
                  id="address"
                  label="Address 2"

                // value={third}
                // onChange={e => setThird(e.target.value)}
                />


              </Grid>

            </Grid>


          </Grid>

        </Box>
        </Box>
        <Box width="30%" bgcolor='red'>
          Cart Summary
        </Box>
        
        </Stack>
        {/* Billing Address end */}


        {/* Start Cart Summary  */}

        
      </Container>
    </Box>

  )
}

export default Checkout
