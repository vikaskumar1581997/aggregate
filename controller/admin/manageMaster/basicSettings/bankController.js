const Bank = require("../../../../model/admin/manageMaster/basicSettings/bankModel");

//Create a new Bank

const createNewBank = async (req, res, next) => {
  try {
    const { bank, bankCode, value } = req.body;
    const bankData = await Bank.create({
      bank,
      bankCode,
      value,
    });
    if (bankData) {
      res.status(201).json({
        error: false,
        message: "Bank created successfully!",
        response: bankData,
      });
    } else {
      res.status(400).json({
        error: true,
        message: "Bank not created!",
      });
    }
  } catch (error) {
    next(error);
    console.error(error);
  }
};

//Get all Currencies
const getAllBanks = async (req, res, next) => {
  try {
    const allBank = await Bank.find().lean();
    if (allBank) {
      res.status(201).json({
        error: false,
        message: "All currencies fetched successfully!",
        response: allBank,
      });
    } else {
      res.status(400).json({
        error: true,
        message: "Bank not found!",
      });
    }
  } catch (error) {
    next(error);
    console.error(error);
  }
};

//Update a bank
const updateBank = async (req, res, next) => {
  try {
    const { _id, bank, bankCode, value } = req.body;
    const finalBank = await Bank.findById(_id).exec();

    finalBank.bank = bank;
    finalBank.bankCode = bankCode;
    finalBank.value = value;
    const updatedBank = await finalBank.save();
    if (updatedBank) {
      res.status(201).json({
        error: false,
        message: "Bank updated!",
        response: updatedBank,
      });
    } else {
      res.status(400).json({
        error: true,
        message: "Bank not updated!",
      });
    }
  } catch (error) {
    next(error);
    console.error(error);
  }
};

//Delete a Bank
const deleteBank = async (req, res, next) => {
  try {
    const { _id } = req.params;
    const deleteBank = await Bank.findByIdAndDelete(_id);
    if (deleteBank) {
      res.status(201).json({
        error: false,
        message: "Bank deleted!",
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
  createNewBank,
  getAllBanks,
  updateBank,
  deleteBank,
};
