"use client"
import React from ""
import { useFormik } from "formik";
import { initialize } from "next/dist/server/lib/router-server";
import * as yup from "yup";
import { TextField, Button, Dialog, DialogContent, DialogActions } from "@mui/material";

const rules = yup.object().shape({
    title: yup.string().required().min(3),
    quantity: yup.number().required().min(1),
    initialPrice: yup.number().required(),
    newPrice: yup.number().required().min(1),
});
export default function Yeild() {
    const [assetValue, setAssetValue] = React.useState(undefined);
    const [percProfit, setperceProfit] = React.useState(undefined);
    const [open, setOpen] = React.useState(false);
    const handleClickOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const { values, handleBlur, handleSubmit, touched, errors, handleChange } = useFormik({
        initialValues: { title: '', quantity: 0, intialPrice: 0, newPrice: 0 },
        onSubmit: () => {
            setAssetValue(values.quantity * values.newPrice);

            const costPrice = values.newPrice * values.quantity;
            const sellingPrice = values.newPrice * quantity;
            const profit = selling - costPrice;
            const percentageProfit = (profit / costPrice) * 100;
            setPerceProfit(percentageProfit);
            handleClickOpen();
        },
        validationSchema: rules
    })

    return (
        <><main className=" min:h-[750px]px-3 md:px-12 lg:px-16 py-12 bg-gradient-to-b from-[#F0ECE5] via-white to-[#B6BBC4]">
            <section className="w-[320px] md:w-full min:h-screen md:h-screen flex justify-center rounded-lg p-6">
                <form onSubmit={handleSubmit} className="w-full md:w-[380px] flex flex-col gap-4 border border-gray-300 p-4">
                    <div classname="mb-3">
                        <TextField
                            id="title"
                            label="title"
                            variant="outlined"
                            placeholder="title"
                            className="w-full"
                            value={values.title}
                            onChange={handleChange}
                        />
                        {touched.title && errors.title ? <span className="text-xs text-red-500">{errors.title}</span> : null}
                    </div>
                    <div classname="mb-3">
                        <TextField
                            type="number"
                            id="title"
                            label="title"
                            variant="outlined"
                            placeholder="title"
                            className="w-full"
                            value={values.title}
                            onChange={handleChange}
                        />
                        {touched.title && errors.title ? <span className="text-xs text-red-500">{errors.title}</span> : null}
                    </div>
                    <div classname="mb-3">
                        <TextField
                            type="number"
                            id="quantity"
                            label="quantity"
                            variant="outlined"
                            placeholder="quantity"
                            className="w-full"
                            value={values.title}
                            onChange={handleChange}
                        />
                        {touched.title && errors.title ? <span className="text-xs text-red-500">{errors.title}</span> : null}
                    </div><div classname="mb-3">
                        <TextField
                            type="number"
                            id="newPrice"
                            label="newPrice"
                            variant="outlined"
                            placeholder="quantity"
                            className="w-full"
                            value={values.title}
                            onChange={handleChange}
                        />
                        {touched.title && errors.title ? <span className="text-xs text-red-500">{errors.title}</span> : null}
                    </div>
                    <Button type="submit" variant="contained" color="secondary">Calaculate</Button>
                </form>
            </section>
        </main>

            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogContent>
                    <div className="w-full">
                        <div className="flex justify-between items-center boder boder-gray-300 p-4">
                            <p className="font-thin text-gray-600">Ticker</p>
                            <p className="font-thin text-gray-600 text-lg uppercase">{values.title}</p>
                        </div>
                        <div className="flex justify-between items-center boder boder-gray-300 p-4">
                            <p className="font-thin text-gray-600">Quantity</p>
                            <p className="font-thin text-gray-600 text-lg ">{values.quantity}</p>
                        </div>
                        <div className="flex justify-between items-center boder boder-gray-300 p-4">
                            <p className="font-thin text-gray-600">Initial Price</p>
                            <p className="font-thin text-gray-600 text-lg ">${values.intialPrice}</p>
                        </div>
                        <div className="flex justify-between items-center p-4 ">
                            <p className="font-thin text-gray-600">New price</p>
                            <p className="font-thin text-gray-600 text-lg uppercase">${values.newPrice}</p>
                        </div>
                        <div className="flex hap-4 items-center boder boder-gray-300 p-4 rounded-md">
                            <div className="flex flex=col gap-3 boder boder-gray-300 p-4 rounded-md">
                                <blockquote className="flex justify-between items-center boder boder-gray-300 p-2">
                                    <p className="font-thin text-gray-600 text-lg uppercase">value</p>
                                </blockquote>
                                <blockquote className="flex items-center  p-2">
                                    <p className="font-thin text-gray-600 text-lg uppercase">${assetValue}</p>
                                </blockquote>
                            </div>
                            <div className="flex flex=col gap-3 boder boder-gray-300 p-4 rounded-md">
                                <blockquote className="flex justify-between items-center boder boder-gray-300 p-2">
                                    <p className="font-thin text-gray-600 text-lg uppercase">% Profit</p>
                                </blockquote>
                                <blockquote className="flex items-center  p-2">
                                    <p className="font-thin text-gray-600 text-lg uppercase">{Math.round(percProfit)}</p>
                                </blockquote>
                            </div>
                        </div>
                    </div>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Close</Button>
                </DialogActions>
            </Dialog>
        </>

    );
}