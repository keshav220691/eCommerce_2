import { Box, Button, Grid, TextField } from "@mui/material";
import React from "react";
import AddressCard from "../AddressCard/AddressCard";

function DeliveryAddressForm() {

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("address");
        const data = new FormData(e.currentTarget);
        const address = {
            firstname: data.get("firstname"),
            lastname: data.get("lastname"),
            address: data.get("address"),
            city: data.get("city"),
            state: data.get("state"),
            zip: data.get("zip"),
            phone: data.get("phone")
        }
        console.log("address", address);
    }

    return (
        <div>
            <Grid container spacing={4}>
                <Grid
                    xs={12}
                    lg={5}
                    item
                    className="border rounded-md shadow-md height-[30.5rem] overflow-y-scroll text-left"
                >
                    <div className="p-5 py-7 border-b cursor-pointer">
                        <AddressCard />
                        <Button
                            sx={{ mt: 2, bgcolor: "RGB(145 , 85 , 253)" }}
                            size="large"
                            variant="contained"
                        >
                            Deliver here
                        </Button>
                    </div>
                </Grid>

                <Grid item xs={12} lg={7}>
                    <Box className="border rounded-s-md shadow-md p-5">
                        <form onSubmit={handleSubmit}>
                            <Grid container spacing={3}>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        required
                                        id="firstname"
                                        name="firstname"
                                        label="First Name"
                                        fullWidth
                                        autoComplete="given-name"
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        required
                                        id="lastname"
                                        name="lastname"
                                        label="Last Name"
                                        fullWidth
                                        autoComplete="family-name"
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        required
                                        id="address"
                                        name="address"
                                        label="Address"
                                        fullWidth
                                        autoComplete="street-address"
                                        multiline
                                        rows={4}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        required
                                        id="city"
                                        name="city"
                                        label="City"
                                        fullWidth
                                        autoComplete="address-level2"
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        required
                                        id="state"
                                        name="state"
                                        label="State"
                                        fullWidth
                                        autoComplete="address-level1"
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        required
                                        id="zip"
                                        name="zip"
                                        label="Zip"
                                        fullWidth
                                        autoComplete="postal-code"
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        required
                                        id="phone"
                                        name="phone"
                                        label="Phone No."
                                        fullWidth
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <Button
                                        sx={{ mt: 2, p: 1.5, bgcolor: "RGB(145 , 85 , 253)" }}
                                        size="large"
                                        variant="contained"
                                        type="submit"
                                    >
                                        Deliver here
                                    </Button>
                                </Grid>
                            </Grid>
                        </form>
                    </Box>
                </Grid>
            </Grid>
        </div>
    );
}

export default DeliveryAddressForm;
