import React from "react";
import AddressCard from "../AddressCard/AddressCard";
import OrderTracker from "./OrderTracker";
import { Box, Grid } from "@mui/material";
import { purple } from "@mui/material/colors";
import StarOutlineIcon from "@mui/icons-material/StarOutline";

function OrderDetails() {
  return (
    <div className="lg:px-20 px-5 text-left">
      <div>
        <h1 className="font-bold text-xl py-7">Delivery Address</h1>
        <AddressCard />
      </div>
      <div className="py-20">
        <OrderTracker activeStep={3} />
      </div>
      <Grid container className="space-y-5">
        {[1, 1, 1, 1].map(() => (
          <Grid
            item
            container
            className="shadow-xl rounded-md p-5 border"
            sx={{ alignItem: "center", justifyContent: "space-between" }}
          >
            <Grid item xs={6}>
              <div className="flex items-center space-x-4">
                <div>
                  <img
                    className="w-[5rem] h-[5rem] object-cover object-top"
                    src="https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQovdT48uYws-MrJBb-ufkFlYbNwckfZJ-o_ufBGpOXm-pE8dkCfEhkO7bb4bH6wEWjqrlG3v1lvGeTwaO9yGmGPe_VZ6J7MbA_uljNVXrFxpTUEGBxe4cFrdRHp7f9ma3VZpWhWpI&usqp=CAc"
                    alt="black jeans"
                  />
                </div>
                <div className="space-y-2 ml-5">
                  <p className="font-semibold">Men Slim Mid Rise Black Jeans</p>
                  <p className="space-x-5  opacity-50 text-xs">
                    {" "}
                    <span>Color: Pink</span> Size: M
                  </p>
                  <p>Seller: Linaria</p>
                  <p>₹1099</p>
                </div>
              </div>
            </Grid>
            <Grid alignContent={"center"}>
              <Box sx={{ color: purple[500] }}>
                <StarOutlineIcon
                  sx={{ fontSize: "2rem" }}
                  className="px-2 text-5xl"
                />
                <span>Rate and Review Product</span>
              </Box>
            </Grid>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default OrderDetails;
