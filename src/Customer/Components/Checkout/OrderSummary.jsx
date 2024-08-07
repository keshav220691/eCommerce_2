import React from 'react'
import AddressCard from '../AddressCard/AddressCard'
import CartItem from '../Cart/CartItem'

function OrderSummary() {
  return (
    <div>

    <div className='p-5 shadow-lg rounded-s-md border'>
        <AddressCard />
    </div>
    <div className="mt-5">
      <div className="lg:grid grid-cols-3 lg:px-16 relative">
        <div className="col-span-2 space-y-2">
          {[1 , 1 , 1 , 1].map(() => (<CartItem />))}
        </div>
        <div className=" px-5 sticky top-0 h-screen mt-5 lg:mt-0">
          <div className="border rounded-lg p-1">
            <p className="UpperCase opacity-60 font-bold py-2">Price Details</p>
            <hr />
            <div className="space-y-3 font-semibold">
              <div className="flex justify-between pt-3 px-2 text-black">
                <span>Price</span>
                <span>₹4697</span>
              </div>
              <div className="flex justify-between pt-3 px-2">
                <span>Discount</span>
                <span className="text-green-600">-₹3419</span>
              </div>
              <div className="flex justify-between pt-3 px-2 text-black">
                <span>Delivery Charge</span>
                <span className="text-green-600">Free</span>
              </div>
              <hr />
              <div className="flex justify-between pt-3 px-2 font-bold">
                <span>Total Amount</span>
                <span className="text-green-600">₹1278</span>
              </div>
            </div>
            <button
              type="submit"
              className=" w-full mt-8 flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default OrderSummary