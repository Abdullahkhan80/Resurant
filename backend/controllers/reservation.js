import ErroHandler from '../error/error.js';
import { Reservation } from '../models/reservationSchema.js';

export const createReservation = async (req, res, next) => {
    const { firstname, lastname, email, phone, time, date } = req.body;

    // Validate required fields
    if (!firstname || !lastname || !email || !phone || !time || !date) {
        return next(new ErroHandler("Please fill all the fields", 400));
    }

    try {
        // Create a new reservation
        const reservation = await Reservation.create({
            firstname: firstname,
            lastname: lastname,
            email: email,
            phone: phone,
            time: time,
            date: date
        });

        // Send success response
        res.status(200).json({
            success: true,
            message: "Reservation created successfully",
            reservation
        });
    } catch (error) {
        // Handle validation errors
        if (error.name === "ValidationError") {
            const validationErrors = Object.values(error.errors).map((value) => value.message);
            return next(new ErroHandler(validationErrors.join(", "), 400));
        }

        // Pass other errors to the error handler
        return next(error);
    }
};