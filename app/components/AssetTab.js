import React from "react";
import Image from "next/image";
import { BsBoxArrowUpRight } from "react-icons/bs";
import { CiWallet } from "react-icons/ci";
import { FaTrash, FaPencilAlt } from "react-icons/fa";
import { db, storage } from "@/lib/firebase";
import { deleteDoc, doc, updateDoc } from "firebase/firestore";
import { TextField } from "@mui/material";
import { object } from "yup";
import Dialog, { DialogActions } from "@mui/material";
import Button from "@mui/material";
import dialogAction from "@mui/material";
import DialogContentText from "@mui/material";
import DialogTitle from "@mui/material";
import CircularProgress from "@mui/material";
import { Formik, yup } from "formik";

// const rules = 
//     yup().object().shape({
//     title: yup.string().required().min(3),
//     wallet: yup.string().required().min(26).max(62),
//     price: yup.number().required(),
//     ticker: yup.string().required().min(3),
//     notes: yup.string(),
//     quantity: yup.number().required().min(1),
// });
export function AssetTab({ id, title, qty, tick, holdWallet, price, notes, img }) {
    const [open, setOpen] = React.useState(false);
    const [OpenProgress, setOpenProgress] = React.usestate(false)
    const handleClickOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);


    const handleDelete = async () => {
        await deleteDoc(doc(db, 'assets', id))
            .then(() => {
                setOpenProgress(false);
                handleClose();
            })
            .catch(e => {
                console.error(e);
                setOpenProgress(false);
                handleClose();
                alert("unable to complete action")

            })
    }
    // update records in firestore -------
    const updateRecords = async () => {
        setOpenProgressUpdate(true);

        await updateDoc(doc(db, "assets"), {
            title: values.title,
            wallet: values.wallet,
            price: values.price,
            ticker: values.ticker,
            quantity: values.quantity,
            notes: values.notes,
            updatedAt: new Date().getTime(),
        }).then(() => {
            setOpenProgressUpdate(false);
            handleCloseUpadte();
        }).catch(err => {
            console.error(err)
            setOpenProgressUpdate(false);
            handleCloseUpadte();
            alert("unable to complete action")
        })
    }
    const { values, handleBlur, handleSubmit, touched, errors, handleChange } = useFormik({
        initialValues: { title: title, wallet: wallet, price: price, ticker: ticker, notes: notes, quantity: qty },
        onSubmit: (values) => {

        },
        validationSchema: rules
    })

    return (
        <div className="min-h-[54px] flex justify-between items-center bg-[#161A30] rounded-lg p-3">
            <div className="flex items-center gap-1">
                <blockquote>
                    <Image
                        width={36}
                        height={36}
                        src="/placeholder.jpg"
                        alt="asset image"
                        className="rounded-lg" />
                    <span className="text-[#F0ECE5] text-xs uppercase">{title}</span>
                </blockquote>
            </div>

            <span className="text-[#F0ECE5] text-xs uppercase">{qty} {tick}</span>

            <blockquote className="flex items-center text-xs gap-1">
                <CiWallet className="text-[#F0ECE5]" />
                <span className="text-[#F0ECE5]">...{holdWallet.substr(holdWallet.length - 4)}</span>
            </blockquote>
            <blockquote className="flex items-center gap-3">
                <BsBoxArrowUpRight className="text-xl text-[#F0ECE5]" />
                <FaTrash
                    onClick={handleClickopenUpdate}
                    className="text-xl text-[#F0ECE5] cursor-pointer" />
                <FaTrash
                    onClick={handleClickopenUpdate}
                    className="text-xl text-[#F0ECE5] cursor-pointer" />
            </blockquote>
        </div>
        / <Dialoglog
            open={openUpdate}
            onclose={handleClose}
            aria-labelleby="alert-dailog-titile"
            aria-describedly="alert-dialog-discription"
        >
            <DialogTitle id="alert-dialog-title">Co</DialogTitle>
            <DialogContent>
                <form onSubmit={handleSubmit} className="w-full md:w-[380px] flex flex-col gap-4 border border-gray-300 p-4">
                    <div>
                        <TextField
                            id="title"
                            label="title"
                            variant="standard"
                            placeholder="title"
                            className="w-full"
                            value={values.title}
                            onChange={handleChange}
                        />
                        {touched.title && errors.title ? <span className="text-xs text-red-500">{errors.title}</span> : null}
                    </div>
                    <div>
                        <TextField
                            id="wallet"
                            label="wallet"
                            variant="standard"
                            placeholder="wallet"
                            className="w-full"
                            value={values.wallet}
                            onChange={handleChange}
                        />
                        {touched.wallet && errors.wallet ? <span className="text-xs text-red-500">{errors.wallet}</span> : null}
                    </div>
                    <div>
                        <TextField
                            type="number"
                            id="price"
                            label="price"
                            variant="standard"
                            placeholder="price"
                            className="w-full"
                            value={values.price}
                            onChange={handleChange}
                        />
                        {touched.price && errors.price ? <span className="text-xs text-red-500">{errors.price}</span> : null}
                    </div>
                    <div>
                        <TextField
                            id="ticker"
                            label="ticker"
                            variant="standard"
                            placeholder="ticker"
                            className="w-full"
                            value={values.ticker}
                            onChange={handleChange}
                        />
                        {touched.ticker && errors.ticker ? <span className="text-xs text-red-500">{errors.ticker}</span> : null}
                    </div>
                    <div>
                        <TextField
                            type="number"
                            id="quantity"
                            label="quantity"
                            variant="standard"
                            placeholder="quantity"
                            className="w-full"
                            value={values.quantity}
                            onChange={handleChange}
                        />
                        {touched.quantity && errors.quantity ? <span className="text-xs text-red-500">{errors.quantity}</span> : null}
                    </div>
                    <div>
                        <TextField
                            multiline={true}
                            rows={3}
                            id="notes"
                            label="notes"
                            variant="standard"
                            placeholder="notes"
                            className="w-full"
                            value={values.notes}
                            onChange={handleChange}
                        />
                        {touched.notes && errors.notes ? <span className="text-xs text-red-500">{errors.notes}</span> : null}
                    </div>
                    <Button type="submit" variant="contained" color="secondary">
                        {setOpenProgressUpdate ? <CircularProgress color="info" /> : <span>Update Assets</span>}
                    </Button>
                </form>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleCloseUpdate}>cancel </Button>
            </DialogActions>
        </Dialoglog>
    )
}