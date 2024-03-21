import React from 'react'
import { Box, Grid, FormControl, Input, InputBase, TextField } from '@mui/material'

const Checkout = () => {
  return (

    <Box>

      <FormControl variant='standard'>

        <Grid container spacing={4}>

          <Grid item>
            <TextField
              id="first"
              label="First Name"
            // value={first}
            // onChange={e => setFirst(e.target.value)}
            />
          </Grid>

          <Grid item>
            <TextField
              id="lastname"
              label="Last Name"
            // value={second}
            // onChange={e => setSecond(e.target.value)}
            />
          </Grid>

          <Grid item>
            <TextField
              id="email"
              label="Email"
            // value={third}
            // onChange={e => setThird(e.target.value)}
            />
          </Grid>

        </Grid>

      </FormControl>

    </Box>
  )
}

export default Checkout
