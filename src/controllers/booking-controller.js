const {BookingService} = require('../services/index');
const {StatusCodes} = require('http-status-codes');
const { AppError } = require('../utils/error');
const bookingService = new BookingService();

const create = async (req,res)  =>{
    try {
         const response  = await bookingService.createBooking(req.body);
         console.log("from controller ",response)
         return res.status(StatusCodes.OK).json({
            data: response,
            success: true,
            err: {},
            message: 'Successfully completed  booking'
         })
    } catch (error) { 
        console.log("from err book controler",error)
        return res.status(error.statusCode).json({
             data: {},
             sucess: false,
             message: error.message,
             err:error.explanation
       })
    }

}

module.exports = {
    create
}