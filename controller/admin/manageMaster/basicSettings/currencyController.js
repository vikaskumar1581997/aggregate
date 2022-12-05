const Currency = require("../../../../model/admin/manageMaster/basicSettings/currencyModel");

//Create a new Currency

const createNewCurrency = async (req, res, next) => {
  try {
    const { currency, currencyCode, value } = req.body;
    const currencyData = await Currency.create({
      currency,
      currencyCode,
      value,
    });
    if (currencyData) {
      res.status(201).json({
        error: false,
        message: "Currency created successfully!",
        response: currencyData,
      });
    } else {
      res.status(400).json({
        error: true,
        message: "Currency not created!",
      });
    }
  } catch (error) {
    next(error);
    console.error(error);
  }
};

//Get all Currencies
const getAllCurrencies = async (req, res, next) => {
  try {
    const allCurrency = await Currency.find().lean();
    if (allCurrency) {
      res.status(201).json({
        error: false,
        message: "All currencies fetched successfully!",
        response: allCurrency,
      });
    } else {
      res.status(400).json({
        error: true,
        message: "Currency not found!",
      });
    }
  } catch (error) {
    next(error);
    console.error(error);
  }
};

//Get Single Currency
const getSingleCurrency = async (req, res, next) => {
  try {
    const { id: _id } = req.params;
    const singleCurrency = await Currency.findById(_id).exec();

    if (singleCurrency) {
      res.status(201).json({
        error: false,
        message: "Single Currency Fetched!",
        response: singleCurrency,
      });
    } else {
      res.status(400).json({
        error: true,
        message: "Single Currency Not Fetched!",
      });
    }
  } catch (error) {
    next(error);
    console.error(error);
  }
};

//Update a currency
const updateCurrency = async (req, res, next) => {
  try {
    const { id: _id } = req.params;
    const { currency, currencyCode, value } = req.body;
    const finalCurrency = await Currency.findById(_id).exec();

    finalCurrency.currency = currency;
    finalCurrency.currencyCode = currencyCode;
    finalCurrency.value = value;
    const updatedCurrency = await finalCurrency.save();
    if (updatedCurrency) {
      res.status(201).json({
        error: false,
        message: "Currency updated!",
        response: updatedCurrency,
      });
    } else {
      res.status(400).json({
        error: true,
        message: "Currency not updated!",
      });
    }
  } catch (error) {
    next(error);
    console.error(error);
  }
};

//Delete a Currency
const deleteCurrency = async (req, res, next) => {
  try {
    const { id: _id } = req.params;
    const deleteCurrency = await Currency.findByIdAndDelete(_id);
    if (deleteCurrency) {
      res.status(201).json({
        error: false,
        message: "Currency deleted!",
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
  createNewCurrency,
  getAllCurrencies,
  updateCurrency,
  deleteCurrency,
  getSingleCurrency,
};
