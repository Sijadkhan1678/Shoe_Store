import React from 'react'
import { Container, Box, Typography, Grid, FormControl, Stack, TextField, InputLabel, MenuItem, Select, Button } from '@mui/material'
import CartSummary from '../CartSummary'


const Checkout = () => {

  const countries = [
    { name: 'America', id: 1, },
    { name: 'Algeria', id: 2, },
    { name: 'Afghanistan', id: 3, },
    { name: 'Australia', id: 4, },
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
    { name: 'Newzland', id: 15, },
    { name: 'Oman', id: 16, },
    { name: 'Pakistan', id: 17, },
    { name: 'Russia', id: 18, },
    { name: 'Sirlanka', id: 19, },
    { name: 'Syria', id: 20, },
    { name: 'Ukrain', id: 21 },
    { name: 'United state Emerat', id: 22 },

  ]

  const [shippingForm, setShippingForm] = React.useState({
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


  const { fullName, phone, zipCode, email, address1, company, country, address2 } = shippingForm


  const handlechange = (e) => {

    const { value, name } = e.target

    if (name === 'phone' && !isNaN(value) && value.length <= 11) {

      setShippingForm({ ...shippingForm, [name]: value });

      shippingFormValidation(name, value)
      return

    } else if (name !== 'phone') {

      setShippingForm({ ...shippingForm, [name]: value });

      shippingFormValidation(name, value)

    }

  }

  const shippingFormValidation = (inputField, inputValue) => {

    let isError = false

    if (inputField === 'fullName' && (inputValue === '' || inputValue.length <= 4)) {

      setErrors({ ...errors, 'fullName': true });
      isError = true

    } else if (inputField === 'fullName') {
      setErrors({ ...errors, 'fullName': false });
      isError = false
    }

    if (inputField === 'phone' && parseInt(inputValue) !== 'number') {
      if (inputValue.length < 11) {
        setErrors({ ...errors, 'phone': true });
        isError = true
      }
      // console.log('inputValue type',typeof inputValue)
      // console.log('inputValue type', parseInt(inputValue))

    } else if (inputField === 'phone') {
      setErrors({ ...errors, 'phone': false });
      isError = false;
    };

    if (inputField === 'zipCode') {
      if (inputValue.length < 4) {
        setErrors({ ...errors, 'zipCode': true });
        isError = true;
      }

    } else if (inputField === 'zipCode') {
      setErrors({ ...errors, 'zipCode': false })
      isError = false
    }

    if (/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(inputValue) && inputValue.endsWith('@gmail.com') && inputField === 'email') {
      setErrors({ ...errors, 'email': false });
      isError = false

    } else if (inputField === 'email') {
      setErrors({ ...errors, 'email': true })
      isError = true
    }
    if (inputValue === '' && inputField === 'country' && country.length === 0) {
      setErrors({ ...errors, 'country': true })
      isError = true
    } else if (inputField === 'country') {

      setErrors({ ...errors, 'country': false })
      isError = false
    }
    if (inputField === 'address1' && (inputValue === '' || inputValue.length < 5)) {

      setErrors({ ...errors, 'address1': true })
      isError = true

    } else if (inputField === 'address') {
      setErrors({ ...errors, 'adddress1': false })
      isError = false
    }
    if (inputField === 'address2' && (inputValue === '' || inputValue.length < 5)) {
      setErrors({ ...errors, 'address2': true })
      isError = true
    } else if (inputField === 'address2') {
      setErrors({ ...errors, 'address2': false })
      isError = false
    }
    return isError
  }

  const onSubmit = () => {

    //  console.log('country :',country)
    const newErrors = { ...errors }
    if (country.length === 0 || country === '') {
      // console.log("country error",country)
      // setErrors({ ...errors, 'country': true })
      newErrors.country = true
    }
    if (fullName === '') {
      newErrors.fullName = true
    }
    if (phone === '') {
      // setErrors({ ...errors, phone: true })
      newErrors.phone = true
    }
    if (zipCode === '') {
      // setErrors({ ...errors, zipCode: true })
      newErrors.zipCode = true
      console.log('zid')
    }
    if (address1 === '') {
      // setErrors({ ...errors, address1: true })
      newErrors.address1 = true
    }
    if (email === '') {
      // setErrors({ ...errors, email: true })
      newErrors.email = true
    }
    if (address2 === '') {
      // setErrors({ ...errors, address2: true })
      newErrors.address2 = true
    }
    setErrors({...errors,...newErrors})
    // console.log('isErrror',shippingFormValidation())
    // if (shippingFormValidation()) {
    //   console.log('no errors')
    // }
    // console.log('phone Status',phoneError)
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
                      size='small'
                      name='fullName'
                      id="fullname"
                      label="Full Name"
                      error={errors.fullName}
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
                      error={errors.phone}
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
                      error={errors.zipCode}
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
                      error={errors.address1}
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
                      error={errors.company}
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
                        error={errors.country}
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
                      error={errors.address2}
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

              <Button variant="contained" size="small" onClick={onSubmit}
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

