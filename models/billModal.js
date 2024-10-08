import mongoose from "mongoose";

const billSchema = new mongoose.Schema(
    {
        customerName: {
            type: String,
            required: true
        },
        customerPhoneNumber: {
            type: String,
            required: true
        },
        totalAmount: {
            type: Number,
            required: true
        },
        tax: {
            type: Number,
            required: true
        },
        subTotal: {
            type: Number,
            required: true
        },
        paymentMode: {
            type: String,
            required: true
        },
        cartItems: {
            type: Array,
            required: true
        },
    }, { timestamps: true }
);

const billModal = mongoose.model("bills", billSchema);

export default billModal;