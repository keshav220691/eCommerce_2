import { Grid } from '@mui/material'
import React from 'react'
import AdjustIcon from '@mui/icons-material/Adjust';
import { useNavigate } from 'react-router-dom';

function OrderCard() {
    const navigate = useNavigate();
  return (
    <div onClick={() => navigate(`/account/order/5`)} className='p-5 shadow-md hover:shadow-2xl border'>
        <Grid container spacing={2} sx={{justifyContent:"space-between"}}>
            <Grid item xs={6}>
                <div className='flex cursor-pointer'>
                    <img className='w-[5rem] h-[5rem] object-cover object-top' src="https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQovdT48uYws-MrJBb-ufkFlYbNwckfZJ-o_ufBGpOXm-pE8dkCfEhkO7bb4bH6wEWjqrlG3v1lvGeTwaO9yGmGPe_VZ6J7MbA_uljNVXrFxpTUEGBxe4cFrdRHp7f9ma3VZpWhWpI&usqp=CAc" alt="" />
                    <div className='ml-5 space-y-2'>
                        <p className=''>Men slim mid rise black jeans</p>
                        <p className='opacity-50 text-xs font-semibold'>size: M</p>
                        <p className='opacity-50 text-xs font-semibold'>color : Black</p>
                    </div>
                </div>
            </Grid>
            <Grid item xs={2}>
                <p>₹1099</p>
            </Grid>
            <Grid item xs={4}>
                {true && <div>
                    <p>
                    <AdjustIcon sx={{width:"15px", height:"15px"}} className='text-green-600 mr-2 text-sm'/>
                    <span>
                        Expected Delivery on 03 March
                    </span>
                    </p>
                    <p className='text-xs'>
                        Your order is on the way..
                    </p>
                </div>}
                {false && <p>
                    <span>
                        Delivered on march 03
                    </span>
                </p>}
            </Grid>
        </Grid>
    </div>
  )
}

export default OrderCard    