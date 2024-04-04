import React from 'react'
import { Container, Box, Typography, Grid, FormControl, Stack, TextField, InputLabel, MenuItem, Select, Button } from '@mui/material'
import CartSummary from '../CartSummary'


const Checkout = () => {

  const countries = [
    { name: 'America', id: 1, },
    { name: 'Algeria', id: 2, },
    { name: 'Afghanistan', id: 3, },
    { label: 'Australia', id: 4, },
    { name: 'Bangladesh', id: 5, },
    { name: 'Engaland', id: 6, },
    { name: 'France', id: 7, },
    { name: 'Germany', id: 8, },
    { name: 'Iraq', id: 9, },
    { name: 'Iran', id: 10, },
    { name: 'Irland', id: 11 },
    { name: 'Japan', id: 12, },
    { name: 'Korea', id: 13, },
    { name: 'Netherland', id: 14, },
    { label: 'Newzland', id: 15, },
    { name: 'Oman', id: 16, },
    { name: 'Pakistan', id: 17, },
    { name: 'Russia', id: 18, },
    { name: 'Sirlanka', id: 19, },
    { name: 'Syria', id: 20, },
    { name: 'Ukrain', id: 21 },
    { name: 'United state Emerat', id: 22 },

  ]

  const [shippingForm, setShippingform] = React.useState({
    fullName: '',
    phone: '',
    zipCode: '',
    email: '',
    company: '',
    country: '',
    address1: '',
    address2: '',

  })

  const [errors, setErrors] = React.useState({
    fullName: false,
    phone: false,
    zipCode: false,
    email: false,
    company: false,
    country: false,
    address1: false,
    address2: false,

  })
  // isValid: value => /\S+@\S+\.\S+/.test(value) for email
  // isValid: value =>
  //^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/.test( value)

  const { fullName, phone, zipCode, email, address1, company, country, address2 } = shippingForm



  const handlechange = (e) => {

    const { value, name } = e.target


    setShippingform({ ...shippingForm, [name]: value });

    // if(!/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)){
    //   setErrors({ ...errors, 'email': true });

    // }else{
    //   setErrors({...errors,'email':false})
    // }
    console.log('reg valid', !/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email))
    console.log('email error =>', errors.email)
    console.log('nameError =>', errors.fullName)

  }

  const shippingFormValidation = () => {

    // console.log()
    if (fullName.length === 4) {
      setErrors({ ...errors, 'fullName': true });
    }

    if (phone.length === 4) {
      setErrors({ ...errors, 'phone': true });
    } else {
      setErrors({ ...errors, 'phone': false })
    }

    if (zipCode.length === 4) {
      setErrors({ ...errors, 'zipCode': true });
    } else {
      setErrors({ ...errors, 'zipCode': false })
    }

    if (!/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)) {
      setErrors({ ...errors, 'email': true });

    } else {
      setErrors({ ...errors, 'email': false })
    }
    if (country === '') {
      setErrors({ ...errors, 'country': true })
    } else {

      setErrors({ ...errors, 'country': false })

    }
    if (address1 === '') {

      setErrors({ ...errors, 'address1': true })

    } else {
      setErrors({ ...errors, 'adddress1': false })
    }
    if (address2 === '') {
      setErrors({ ...errors, 'address2': true })
    } else {
      setErrors({ ...errors, 'address2': false })
    }

  }
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
                        fullWidth
                        error={errors.fullName}
                        size='small'
                        name='fullName'
                        id="fullname"
                        label="Full Name"
                        value={fullName}
                        onChange={handlechange}
                      />

                    </Grid>

                    <Grid item mt={2}>
                      <TextField
                        fullWidth
                        size='small'
                        name='phone'
                        id="phone"
                        label="Phone Number"
                        value={phone}
                        onChange={handlechange}
                      />
                    </Grid>

                    <Grid item mt={2}>
                      <TextField
                        fullWidth
                        size='small'
                        name='zipCode'
                        id="zip"
                        label="Zip Code"
                        value={zipCode}
                        onChange={handlechange}
                      />


                    </Grid>

                    <Grid item mt={2}>

                      <TextField
                        fullWidth
                        size='small'
                        name='address1'
                        id="address"
                        label="Address 1"
                        value={address1}
                        onChange={handlechange}
                      />

                    </Grid>

                    {/* </FormControl> */}


                  </Grid>


                  <Grid item lg={6} md={6} sm={6} xs={6}>


                    <Grid item mt={2}>

                      <TextField
                        fullWidth
                        size='small'
                        name='email'
                        id="email"
                        label="Email Address"
                        error={errors.email}
                        value={email}
                        onChange={handlechange}
                      />
                    </Grid>

                    <Grid item mt={2}>
                      <TextField
                        fullWidth
                        size='small'
                        name="company"
                        id="company"
                        label="Company"
                        value={company}
                        onChange={handlechange}
                      />
                    </Grid>

                    <Grid item mt={2}>
                      <FormControl fullWidth size='small'>
                        <InputLabel id="country-select-label">Country</InputLabel>
                        <Select

                          fullWidth
                          name="country"
                          id="country"
                          label="Country"
                          value={country}
                          onChange={handlechange}
                        >
                          {countries.map(country => <MenuItem key={country.id} value={country.name}>{country.name}</MenuItem>)}

                        </Select>
                      </FormControl>


                    </Grid>
                    <Grid item mt={2}>
                      <TextField
                        fullWidth
                        size='small'
                        name='address2'
                        id="address"
                        label="Address 2"
                        value={address2}
                        onChange={handlechange}
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

