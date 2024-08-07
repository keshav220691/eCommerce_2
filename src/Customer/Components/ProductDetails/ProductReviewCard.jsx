import { Height } from '@mui/icons-material'
import { Avatar, Box, Grid, Rating } from '@mui/material'
import React from 'react'

function ProductReviewCard() {
  return (
    <div>
        <Grid container spacing={2} gap={3}>
            
                <Grid item xs={1}>
                    <Box>
                        <Avatar className='text-white ' sx={{height:56, width:56,bgcolor:"#9155fd"}}>
                            R
                        </Avatar>
                    </Box>
                </Grid>
                <Grid item xs={9}>
                    
                        <div className='flex flex-col items-start'>
                            <p>Ramm</p>
                            <p>July 5, 2023</p>
                            <Rating value={4.5} name='half-rating' readOnly precision={0.5} className='flex items-start'/>
                            <p className='flex flex-col items-start opacity-70'>
                                Nice Product This is my one of the best Purchase.
                            </p>
                        </div>
                    
                </Grid>
                
        </Grid>
    </div>
  )
}

export default ProductReviewCard