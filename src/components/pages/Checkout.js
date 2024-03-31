import React from 'react'
import { Container, Box, Typography, Grid, FormControl, Stack, TextField, InputLabel, MenuItem, Select, Button } from '@mui/material'
import CartSummary from '../CartSummary'


const Checkout = () => {

  const [countries, setCounties] = React.useState([
    { name: 'America', id: 1, category: 1 },
    { name: 'Algeria', id: 2, category: 1 },
    { name: 'Afghanistan', id: 3, category: 1 },
    { label: 'Australia', id: 9, category: 3 },
    { name: 'Bangladesh', id: 4, category: 2 },
    { name: 'Engaland', id: 5, category: 2 },
    { name: 'France', id: 6, category: 2 },
    { name: 'Germany', id: 7, category: 3 },
    { name: 'Iraq', id: 8, category: 3 },
    { name: 'Iran', id: 10, category: 3 },
    { name: 'Japan', id: 11, category: 3 },
    { name: 'Korea', id: 12, category: 3 },
    { name: 'Netherland', id: 13, category: 3 },
    { label: 'Newzland', id: 14, category: 3 },
    { name: 'Oman', id: 15, category: 3 },
    { name: 'Pakistan', id: 16, category: 3 },
    { name: 'Russia', id: 17, category: 3 },
    { name: 'Sirlanka', id: 18, category: 3 },
    { name: 'Syria', id: 19, category: 3 },
    { name: 'Korea', id: 20, category: 3 },

  ]);

  return (

    <Box>

      <Container>

        <Stack direction={{ lg: 'row', md: 'row', sm: 'column-reverse', xs: 'column-reverse' }} gap={{ lg: 3, sm: 4 }}>
          {/* shipping Address */}
          <Box width={{ lg: '70%', md: '70%', sm: '100%' }}>

            <Box p={{ lg: 3, sm: 0 }} mt={{ sm: 5 }} /*bgcolor='red'*/  >

              <Box py={1}>

                <Typography variant='h6' component='h4' sx={{ fontSize: '14px', color: '#2c2c2c' }} fontWeight='600'>Shipping Address</Typography>

              </Box>

              <Grid /*sx={{bgcolor:'red'}}*/ container spacing={{ lg: 4, sm: 2, xs: 2 }}>

                <Grid item lg={6} md={6} sm={6} xs={6}>

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




                <Grid item lg={6} md={6} sm={6} xs={6}>


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
                    <FormControl fullWidth size='small'>
                      <InputLabel id="demo-simple-select-label">Country</InputLabel>
                      <Select

                        // value='pakistan'
                        fullWidth
                        id="country"
                        label="Country"

                      // value={third}
                      // onChange={e => setThird(e.target.value)}
                      >
                        {countries.map(country => <MenuItem key={country.id} value={country.name}>{country.name}</MenuItem>)}



                      </Select>
                    </FormControl>


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
            <Box p={{ lg: 3, sm: 0 }} mt={{ lg: 4, md: 4, sm: 5, xs: 4 }}  /*bgcolor='red'*/>
              <Box py={1}>

                <Typography variant='h6' component='h4' sx={{ fontSize: '14px', color: '#2c2c2c' }} fontWeight='600'>Billing Address</Typography>

              </Box>

              <Grid container spacing={{ lg: 4, sm: 2, xs: 2 }}>



                <Grid item lg={6} md={6} sm={6} xs={6}>
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



                <Grid item lg={6} md={6} sm={6} xs={6}>


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

          <Box width={{ lg: '34%', md: "34%", sm: "100%" }} mt={{ lg: 8, md: 5, sm: 5 }} mb={{ xs: 4 }} >

            <CartSummary isCheckout={true} order={true} />

          </Box>
          {/* Order Summary end  */}
        </Stack>



      </Container>

    </Box>

  )
}

export default Checkout

