const AssignMenu = require("../../../../model/admin/manageMaster/basicSettings/assignMenuModel");

//Create New AssignMenu
const createNewAssignMenu = async (req, res, next) => {
  try {
    var {
      roleName,
      dashboard,
      masterManager: {
        selfValue,
        basicSettings: {
          selfValue,
          designation,
          bank,
          currency,
          assignMenu,
          contactType,
          markupType,
        },
        locationSettings: {
          selfValue,
          marketType,
          region,
          country,
          province,
          destination,
        },
        hotelSettings: {
          selfValue,
          hotelCategory,
          hotelType,
          occupancyType,
          seasonType,
          roomCategory,
          roomType,
          hotelAmenity,
          roomAmenity,
          mealPlan,
        },
        agentSettings: { selfValue, agentCategory },
        packageSettings: {
          selfValue,
          packageCategory,
          packageType,
          dayActivities,
          itineraryDetails,
          visaInformation,
          termsAndConditions,
          paymentGateway,
          communicationMail,
        },
        API: { selfValue, smyRooms, whiteSands },
        houseboatSettings: {
          selfValue,
          houseBoatType,
          houseBoatRoomCategory,
          houseBoatRoomType,
          coupon,
        },
      },
      companyProfile,
      registration: { selfValue, hotel, agent, employee, houseBoat, shikara },
      newBooking: { selfValue, hotelBooking, packageBooking },
      myBooking: {
        selfValue,
        hotelBookingList,
        packageBookingList,
        houseboatBookingList,
        shikaraBookingList,
      },
      invoice,
      inhouseAccounts: { selfValue, agentAccounts, paymentGatewayTransactions },
      assignedAgents,
      calendar,
      extranetContractRate,
      report: {
        selfValue,
        bookingReport,
        cancellationReport,
        inventoryStatus,
        hotelWise,
        accounts,
        dayWise,
        monthlyWise,
        comparison,
        agentWise,
        contractExpiryReport,
        contractrate,
        userReport,
        stopSalereport,
        userLogins,
      },
    } = req.body;

    // console.log(req.body);

    const assignMenuData = await AssignMenu.create({
      roleName,
      dashboard,
      masterManager: {
        selfValue,
        basicSettings: {
          selfValue,
          designation,
          bank,
          currency,
          assignMenu,
          contactType,
          markupType,
        },
        locationSettings: {
          selfValue,
          marketType,
          region,
          country,
          province,
          destination,
        },
        hotelSettings: {
          selfValue,
          hotelCategory,
          hotelType,
          occupancyType,
          seasonType,
          roomCategory,
          roomType,
          hotelAmenity,
          roomAmenity,
          mealPlan,
        },
        agentSettings: { selfValue, agentCategory },
        packageSettings: {
          selfValue,
          packageCategory,
          packageType,
          dayActivities,
          itineraryDetails,
          visaInformation,
          termsAndConditions,
          paymentGateway,
          communicationMail,
        },
        API: { selfValue, smyRooms, whiteSands },
        houseboatSettings: {
          selfValue,
          houseBoatType,
          houseBoatRoomCategory,
          houseBoatRoomType,
          coupon,
        },
      },
      companyProfile,
      registration: {
        selfValue,
        hotel,
        agent,
        employee,
        houseBoat,
        shikara,
      },
      newBooking: { selfValue, hotelBooking, packageBooking },
      myBooking: {
        selfValue,
        hotelBookingList,
        packageBookingList,
        houseboatBookingList,
        shikaraBookingList,
      },
      invoice,
      inhouseAccounts: {
        selfValue,
        agentAccounts,
        paymentGatewayTransactions,
      },
      assignedAgents,
      calendar,
      extranetContractRate,
      report: {
        selfValue,
        bookingReport,
        cancellationReport,
        inventoryStatus,
        hotelWise,
        accounts,
        dayWise,
        monthlyWise,
        comparison,
        agentWise,
        contractExpiryReport,
        contractrate,
        userReport,
        stopSalereport,
        userLogins,
      },
    });

    // console.log(assignMenuData);

    if (assignMenuData) {
      res.status(201).json({
        error: false,
        message: "AssignMenu created successfully!",
        response: assignMenuData,
      });
    } else {
      res.status(400).json({
        error: true,
        message: "AssignMenu not created!",
      });
    }
  } catch (error) {
    next(error);
    console.error(error);
  }
};

//Get all Assign Menu
const getAllAssignMenu = async (req, res, next) => {
  try {
    const allAssign = await AssignMenu.find().lean();
    if (allAssign) {
      res.status(201).json({
        error: false,
        message: "All AssignMenu fetched!",
        response: allAssign,
      });
    } else {
      res.status(400).json({
        error: true,
        message: "Not fetched!",
      });
    }
  } catch (error) {
    next(error);
    console.error(error);
  }
};

//Update all Assign
const updateAllAssignMenu = async (req, res, next) => {
  try {
    var {
      id,
      roleName,
      dashboard,
      masterManager: {
        selfValue,
        basicSettings: {
          selfValue,
          designation,
          bank,
          currency,
          assignMenu,
          contactType,
          markupType,
        },
        locationSettings: {
          selfValue,
          marketType,
          region,
          country,
          province,
          destination,
        },
        hotelSettings: {
          selfValue,
          hotelCategory,
          hotelType,
          occupancyType,
          seasonType,
          roomCategory,
          roomType,
          hotelAmenity,
          roomAmenity,
          mealPlan,
        },
        agentSettings: { selfValue, agentCategory },
        packageSettings: {
          selfValue,
          packageCategory,
          packageType,
          dayActivities,
          itineraryDetails,
          visaInformation,
          termsAndConditions,
          paymentGateway,
          communicationMail,
        },
        API: { selfValue, smyRooms, whiteSands },
        houseboatSettings: {
          selfValue,
          houseBoatType,
          houseBoatRoomCategory,
          houseBoatRoomType,
          coupon,
        },
      },
      companyProfile,
      registration: { selfValue, hotel, agent, employee, houseBoat, shikara },
      newBooking: { selfValue, hotelBooking, packageBooking },
      myBooking: {
        selfValue,
        hotelBookingList,
        packageBookingList,
        houseboatBookingList,
        shikaraBookingList,
      },
      invoice,
      inhouseAccounts: { selfValue, agentAccounts, paymentGatewayTransactions },
      assignedAgents,
      calendar,
      extranetContractRate,
      report: {
        selfValue,
        bookingReport,
        cancellationReport,
        inventoryStatus,
        hotelWise,
        accounts,
        dayWise,
        monthlyWise,
        comparison,
        agentWise,
        contractExpiryReport,
        contractrate,
        userReport,
        stopSalereport,
        userLogins,
      },
    } = req.body;

    const updatedAAM = await AssignMenu.findByIdAndUpdate(
      { _id: id },
      req.body
    );

    if (updatedAAM) {
      res.status(201).json({
        error: false,
        message: "AAM updated!",
        response: updatedAAM,
      });
    } else {
      res.status(400).json({
        error: true,
        message: "AAM not updated!",
      });
    }
  } catch (error) {
    next(error);
    console.error(error);
  }
};

//Delete allAssign Menu

const deleteAllAssignMenu = async (req, res, next) => {
  try {
    const { _id } = req.body;
    const deleteAllAssignMenu = await AssignMenu.findByIdAndDelete(_id);
    if (deleteAllAssignMenu) {
      res.status(201).json({
        error: false,
        message: "Assign Deleted!",
      });
    } else {
      res.status(400).json({
        error: true,
        message: "Deletion not completed!",
      });
    }
  } catch (error) {
    next(error);
    console.error(error);
  }
};

module.exports = {
  createNewAssignMenu,
  getAllAssignMenu,
  updateAllAssignMenu,
  deleteAllAssignMenu,
};
