import { Grid } from '@mui/material'
import React from 'react'
import OrderCard from './OrderCard'

function Order() {
    const orderStatus =[
        {lable:"On The Way", value:"on_the_way"},
        {lable:"Delivered", value:"delivered"},
        {lable:"Cancled", value:"cancel"},
        {lable:"Returned", value:"returned"},
]
  return (
    <div className='lg:px-20 px-5'>
        <Grid container sx={{justifyContent:"space-between" , marginTop:"2rem"}}>
            <Grid item xs={2.5}>
                <div className='h-auto shadow-lg bg-white p-5 stick top-5'>
                    <h1 className='font-bold text-large text-left'>Filter</h1>
                    <h1 className='font-semibold mt-10 text-left'>ORDER STATUS</h1>
                    {orderStatus.map((Option) => <div className='space-y-4 mt-5'>
                        <div className='flex items-center'>
                            <input type="Checkbox" defaultValue={Option.value} className='h-4 w-4 border-gray-300 text-indigo-300 focus:ring-indigo-500'/>
                            <label className='ml-3  text-sm text-gray-600' htmlFor={Option.value}>
                            {Option.lable}</label>
                        </div>
                    </div>)}

                </div>
            </Grid>
            <Grid item xs={9} className='text-left'>
                    {[1, 1, 1, 1, 1, 1, 1, 1].map(() => <OrderCard />)}
            </Grid>
        </Grid>
    </div>
  )
}

export default Order