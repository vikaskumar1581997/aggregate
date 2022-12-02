const mongoose = require("mongoose");

var assignMenuSchema = new mongoose.Schema(
  {
    roleName: {
      type: String,
      required: true,
    },
    dashboard: {
      type: Boolean,
      default: true,
      required: true,
    },
    masterManager: {
      selfValue: {
        type: Boolean,
        default: false,
      },

      basicSettings: {
        selfValue: {
          type: Boolean,
          default: false,
        },

        designation: {
          type: Boolean,
          default: false,
        },
        bank: {
          type: Boolean,
          default: false,
        },
        currency: {
          type: Boolean,
          default: false,
        },
        assignMenu: {
          type: Boolean,
          default: false,
        },
        contactType: {
          type: Boolean,
          default: false,
        },
        markupType: {
          type: Boolean,
          default: false,
        },
      },
      locationSettings: {
        selfValue: {
          type: Boolean,
          default: false,
        },

        marketType: {
          type: Boolean,
          default: false,
        },
        region: {
          type: Boolean,
          default: false,
        },
        country: {
          type: Boolean,
          default: false,
        },
        province: {
          type: Boolean,
          default: false,
        },
        destination: {
          type: Boolean,
          default: false,
        },
      },
      hotelSettings: {
        selfValue: {
          type: Boolean,
          default: false,
        },

        hotelCategory: {
          type: Boolean,
          default: false,
        },
        hotelType: {
          type: Boolean,
          default: false,
        },
        occupancyType: {
          type: Boolean,
          default: false,
        },
        seasonType: {
          type: Boolean,
          default: false,
        },
        roomCategory: {
          type: Boolean,
          default: false,
        },
        roomType: {
          type: Boolean,
          default: false,
        },
        hotelAmenity: {
          type: Boolean,
          default: false,
        },
        roomAmenity: {
          type: Boolean,
          default: false,
        },
        mealPlan: {
          type: Boolean,
          default: false,
        },
      },
      agentSettings: {
        selfValue: {
          type: Boolean,
          default: false,
        },

        agentCategory: {
          type: Boolean,
          default: false,
        },
      },
      packageSettings: {
        selfValue: {
          type: Boolean,
          default: false,
        },

        packageCategory: {
          type: Boolean,
          default: false,
        },
        packageType: {
          type: Boolean,
          default: false,
        },
        dayActivities: {
          type: Boolean,
          default: false,
        },
        itineraryDetails: {
          type: Boolean,
          default: false,
        },
        visaInformation: {
          type: Boolean,
          default: false,
        },
        termsAndConditions: {
          type: Boolean,
          default: false,
        },
        paymentGateway: {
          type: Boolean,
          default: false,
        },
        communicationMail: {
          type: Boolean,
          default: false,
        },
      },
      API: {
        selfValue: {
          type: Boolean,
          default: false,
        },
        smyRooms: {
          type: Boolean,
          default: false,
        },
        whiteSands: {
          type: Boolean,
          default: false,
        },
      },
      houseboatSettings: {
        selfValue: {
          type: Boolean,
          default: false,
        },

        houseBoatType: {
          type: Boolean,
          default: false,
        },
        houseBoatRoomCategory: {
          type: Boolean,
          default: false,
        },
        houseBoatRoomType: {
          type: Boolean,
          default: false,
        },
        coupon: {
          type: Boolean,
          default: false,
        },
      },
    },
    companyProfile: {
      type: String,
      required: true,
    },
    registration: {
      selfValue: {
        type: Boolean,
        default: false,
      },

      hotel: {
        type: Boolean,
        default: false,
      },
      agent: {
        type: Boolean,
        default: false,
      },
      employee: {
        type: Boolean,
        default: false,
      },
      houseBoat: {
        type: Boolean,
        default: false,
      },
      shikara: {
        type: Boolean,
        default: false,
      },
    },
    newBooking: {
      selfValue: {
        type: Boolean,
        default: false,
      },
      hotelBooking: {
        type: Boolean,
        default: false,
      },
      packageBooking: {
        type: Boolean,
        default: false,
      },
    },
    myBooking: {
      selfValue: {
        type: Boolean,
        default: false,
      },
      hotelBookingList: {
        type: Boolean,
        default: false,
      },
      packageBookingList: {
        type: Boolean,
        default: false,
      },
      houseboatBookingList: {
        type: Boolean,
        default: false,
      },
      shikaraBookingList: {
        type: Boolean,
        default: false,
      },
    },
    invoice: {
      type: String,
      required: true,
    },
    inhouseAccounts: {
      selfValue: {
        type: Boolean,
        default: false,
      },
      agentAccounts: {
        type: Boolean,
        default: false,
      },
      paymentGatewayTransactions: {
        type: Boolean,
        default: false,
      },
    },
    assignedAgents: {
      type: String,
      required: true,
    },
    calendar: {
      type: String,
      required: true,
    },
    extranetContractRate: {
      type: String,
      required: true,
    },
    report: {
      selfValue: {
        type: Boolean,
        default: false,
      },

      bookingReport: {
        type: Boolean,
        default: false,
      },
      cancellationReport: {
        type: Boolean,
        default: false,
      },
      inventoryStatus: {
        type: Boolean,
        default: false,
      },
      hotelWise: {
        type: Boolean,
        default: false,
      },
      accounts: {
        type: Boolean,
        default: false,
      },
      dayWise: {
        type: Boolean,
        default: false,
      },
      monthlyWise: {
        type: Boolean,
        default: false,
      },
      comparison: {
        type: Boolean,
        default: false,
      },
      agentWise: {
        type: Boolean,
        default: false,
      },
      contractExpiryReport: {
        type: Boolean,
        default: false,
      },
      contractrate: {
        type: Boolean,
        default: false,
      },
      userReport: {
        type: Boolean,
        default: false,
      },
      stopSalereport: {
        type: Boolean,
        default: false,
      },
      userLogins: {
        type: Boolean,
        default: false,
      },
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("AssignMenu", assignMenuSchema);
