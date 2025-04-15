import mongoose from "mongoose";
import validator from "validator";

const reservationSchema = new mongoose.Schema({
    firstname:{
        type: String,
        required: true,
        minLength: [3, "First name should be at least 3 characters"],
        maxLength: [30, "First name should not exceed 30 characters"],
    },
    lastname:{
        type: String,
        required: true,
        minLength: [3, "Last name should be at least 3 characters"],
        maxLength: [30, "Last name should not exceed 30 characters"],
    },
    email:{
        type: String,
        required: true,
        validate: [validator.isEmail, "Please enter a valid email address"],
    },
    phone:{
        type: String,
        required: true,
        validate: [validator.isMobilePhone, "Please enter a valid phone number"],
        minLength : [11, "Phone number should be at least 10 characters"],
    },
    time:{
        type: String,
        required: true,
    },
    date :{
        type: String,
        required: true,
    }

});
export const Reservation = mongoose.model("Reservation", reservationSchema); 