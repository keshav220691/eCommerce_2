import { Grid, Typography } from "@mui/material";
import React from "react";
export default function Footer() {
  return (
    <div>
      <footer
        className="flex flex-col gap-8 bg-black text-gray-400 text-center mt-10 px-10 pt-10 pb-2"
        container="true"
        sx={{ bgcolor: "black", color: "white", py: 3 }}
      >
        <div className="flex justify-around">
          <div className="flex-1 flex flex-col justify-start items-start">
            <Typography className="pb-5 " variant="h6">
              Company
            </Typography>
            <button className="hover:underline">About</button>
            <button className="hover:underline">Blog</button>
            <button className="hover:underline">Press</button>
            <button className="hover:underline">Jobs</button>
            <button className="hover:underline">Partners</button>
          </div>
          <div className="flex-1 flex flex-col justify-start items-start">
            <Typography className="pb-5 " variant="h6">
              Solutions
            </Typography>
            <button className="hover:underline">Marketing</button>
            <button className="hover:underline">Analytics</button>
            <button className="hover:underline">E-commerce</button>
            <button className="hover:underline">Insights</button>
            <button className="hover:underline">Support</button>
          </div>
          <div className="flex-1 flex flex-col justify-start items-start">
            <Typography className="pb-5 " variant="h6">
              Documentations
            </Typography>
            <button className="hover:underline">Guides</button>
            <button className="hover:underline">API status</button>
          </div>
          <div className="flex-1 flex flex-col justify-start items-start">
            <Typography className="pb-5 " variant="h6">
              Legal
            </Typography>
            <button className="hover:underline">Claim</button>
            <button className="hover:underline">Privacy</button>
            <button className="hover:underline">Terms</button>
          </div>
        </div>
        <div className="text-sm font-light">
          <p>@ 2023 My Company. All rights reserved.</p>
          <p>Made with love by @KeshavSharma</p>
          <p>Icons made by Material Ui/Hero Icons/WWW.flatin.com</p>
        </div>
      </footer>
    </div>
  );
}
