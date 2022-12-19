const availabilityModel=require("../../../model/admin/registration/hotel/hotelActions/blockCheckinCheckouts")
const occupancyModel = require("../../../model/admin/registration/hotel/hotelActions/occupancyModel");
const minimumLengthModel = require("../../../model/admin/registration/hotel/hotelActions/minimunLengthModel");
const stopSaleModel = require("../../../model/admin/registration/hotel/hotelActions/stopSale");
const hotelModel = require("../../../model/admin/registration/hotel/hotelModel");

const hotelBooking=async(req,res,next)=>{
    try {

   
        
     const occupancy = await occupancyModel.find({
       hotelId: "6398534847b0f6f5c911a247",
       "occupencyDetails.occupancy.totalAdult": { $gte: 1 },
       "occupencyDetails.occupancy.totalChild": { $gte: 1 },
     });

    const hotels = await hotelModel.aggregate([
      {
        $match: {
          "hotelLocation.state": req.body.city,
          "hotelLocation.country": req.body.country,
        },
      },
      
    ]);

     
      
    // occupancy.map((x=>{
    //     x.occupencyDetails.map(y=>{
    //         y.
    //     })
    // }))

     console.log(occupancy);
     res.send(occupancy);

    } catch (error) {
        
    }
}

module.exports = { hotelBooking };
