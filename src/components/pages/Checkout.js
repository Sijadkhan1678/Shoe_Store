import React from 'react'
import { Container, Box, Typography, Grid, Stack, TextField, Button } from '@mui/material'
import CartSummary from '../CartSummary'


const Checkout = () => {

  return (

    <Box>

      <Container>

        <Stack direction={{ lg: 'row', md: 'row', sm: 'column-reverse', xs: 'column' }} /*gap={{lg:3,sm:0}}*/>
          {/* shipping Address */}
          <Box width={{ lg: '70%', sm: '100%' }}>

            <Box p={{ lg: 3, sm: 0 }} mt={{ sm: 5 }} /*bgcolor='red'*/  >

              <Box py={1}>

                <Typography variant='h6' component='h4' sx={{ fontSize: '14px', color: '#2c2c2c' }} fontWeight='600'>Shipping Address</Typography>

              </Box>

              <Grid /*sx={{bgcolor:'red'}}*/ container spacing={{ lg: 4, sm: 2 }}>

                <Grid item lg={6} md={6} sm={6}  >

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




                <Grid item lg={6} md={6} sm={6}>


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
            <Box p={{ lg: 3, sm: 0 }} mt={{ lg: 4, md: 4, sm: 5 }} width={{ lg: '70%', md: '70%', sm: '100%' }}>
              <Box py={1}>

                <Typography variant='h6' component='h4' sx={{ fontSize: '14px', color: '#2c2c2c' }} fontWeight='600'>Billing Address</Typography>

              </Box>

              <Grid container spacing={{ lg: 4, sm: 2 }}>



                <Grid item lg={6} md={6} sm={6}>
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



                <Grid item lg={6} md={6} sm={6}>


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

            {/* Billing Address end */}


            {/* Checkout Action Buttons */}
            <Stack direction='row' gap={4} mt={4} >

              <Button variant='outlined' size="small"
                sx={{
                  width: '48%',
                  p: '10px 0px',
                  fontWeight: 'bold',
                  fontSize: '13px',
                  borderRadius: '6px',
                  borderColor: '#ff7800',
                  color: '#ff7800',
                  '&:hover': { bgcolor: '#ff7800', color: 'white', borderColor: '#ff7800' }
                }}>Back To Cart</Button>

              <Button variant="contained" size="small"
                sx={{
                  width: '48%',
                  p: '10px 0px',
                  fontWeight: 'bold',
                  fontSize: '13px',
                  borderRadius: '6px',
                  bgcolor: "#524938",
                  '&:hover': { bgcolor: '#ff7800' }
                }}>Proceed To Payment</Button>
            </Stack>
            {/* Checkout Action Buttons End */}
          </Box>

          {/* Order Sumamary */}

          <Box width={{ lg: '34%', sm: "100%" }} mt={3}>

            <CartSummary isCheckout={true} order={true} />

          </Box>
          {/* Order Summary end  */}
        </Stack>



      </Container>

    </Box>

  )
}

export default Checkout

