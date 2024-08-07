import { Button } from '@headlessui/react'
import { AddCircleOutline, RemoveCircleOutline } from '@mui/icons-material'
import { IconButton } from '@mui/material'
import React from 'react'

function CartItem() {
  return (
    <div className='p-5 shadow-lg border rounded-md'>
        <div className='flex item-center'>
            <div className='w-[5rem] h-[5rem] lg:w-[9rem] lg:h-[9rem] border'>
                <img className='w-full h-full object-cover object-top' src="https://rukminim2.flixcart.com/image/612/612/l4hcx3k0/kurta/y/z/l/m-06-kpd-original-imagdgzckv5xtgyj.jpeg?q=70" alt="img" />
            </div>
            <div className='ml-5 space-y-1 flex flex-col items-start'>
              <p className='font-semibold'>Men Silk Kurta</p>
              <p className='opacity-70'>size : L , white</p>
              <p className='opacity-70 mt-2'>Seller : Wedding Kurta</p>
              <div className="mt-4 lg:row-span-3 lg:mt-0">
                <h2 className="sr-only">Product information</h2>
                <div className="flex space-x-5 items-center  text-gray-900 mt-6">
                  <p className="font-semibold">$500</p>
                  <p className="opacity-50 line-through">$2000</p>
                  <p className=" text-green-600 font-semibold">25% off</p>
                </div>
              </div>
            </div>
        </div>
            <div className='lg:flex items-center lg:space-x-10 pt-4'>
              <div className='flex items-center space-x-2'>
                <IconButton sx={{color:"#6c21a8"}} >
                    <RemoveCircleOutline />
                </IconButton>
                <span className='py-1 px-7 border rounded-sm'>3</span>
                <IconButton  sx={{color:"#6c21a8"}}>
                    <AddCircleOutline />
                </IconButton>
              </div>
              <div>
                <Button className=' text-[#6c21a8]'>Remove</Button>
              </div>
            </div>
    </div>
  )
}

export default CartItem 