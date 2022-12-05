const CompanyProfile = require("../../../model/admin/companyProfile/companyProfileModel");

//Create a Company Profile
const createCompanyProfile = async (req, res, next) => {
  try {
    const {
      companyName,
      authorizedPerson,
      website,
      mainOffice,
      yearStandUp,
      labours,
      branches,
      PO,
      address,
      emailId,
      mobileNumber,
      telNumber,
      faxNumber,
      companyPolicy,
    } = req.body;

    const img = `${req.file.filename}`;
    const companyLogo = img.toString("base64");

    const newCompany = await CompanyProfile.create({
      companyName,
      authorizedPerson,
      website,
      mainOffice,
      yearStandUp,
      labours,
      branches,
      PO,
      address,
      emailId,
      mobileNumber,
      telNumber,
      faxNumber,
      companyPolicy,
      companyLogo: new Buffer.from(companyLogo, "base64"),
    });

    if (newCompany) {
      res.status(201).json({
        error: false,
        message: "New Company created",
        response: newCompany,
      });
    } else {
      res.status(400).json({
        error: true,
        message: "New Company not created",
      });
    }
  } catch (error) {
    next(error);
    console.error(error);
  }
};

//Update Company Profile
const updateCompanyProfile = async (req, res, next) => {
  try {
    const { id: _id } = req.params;

    const {
      companyName,
      authorizedPerson,
      website,
      mainOffice,
      yearStandUp,
      labours,
      branches,
      PO,
      address,
      emailId,
      mobileNumber,
      telNumber,
      faxNumber,
      companyPolicy,
    } = req.body;

    const img = `${req.file.filename}`;
    const companyLogo = img.toString("base64");
    const newCompanyLogo = new Buffer.from(companyLogo, "base64");

    const finalCompanyProfile = await CompanyProfile.findById(_id);

    finalCompanyProfile.companyName = companyName;
    finalCompanyProfile.authorizedPerson = authorizedPerson;
    finalCompanyProfile.website = website;
    finalCompanyProfile.mainOffice = mainOffice;
    finalCompanyProfile.yearStandUp = yearStandUp;
    finalCompanyProfile.labours = labours;
    finalCompanyProfile.branches = branches;
    finalCompanyProfile.PO = PO;
    finalCompanyProfile.address = address;
    finalCompanyProfile.emailId = emailId;
    finalCompanyProfile.mobileNumber = mobileNumber;
    finalCompanyProfile.telNumber = telNumber;
    finalCompanyProfile.faxNumber = faxNumber;
    finalCompanyProfile.companyPolicy = companyPolicy;
    finalCompanyProfile.companyLogo = newCompanyLogo;

    const updatedCompanyProfile = await finalCompanyProfile.save();

    if (updatedCompanyProfile) {
      res.status(201).json({
        error: false,
        message: " CompanyProfile updated",
        response: updatedCompanyProfile,
      });
    } else {
      res.status(400).json({
        error: true,
        message: " CompanyProfile not updated",
      });
    }
  } catch (error) {
    next(error);
    console.error(error);
  }
};

module.exports = { createCompanyProfile, updateCompanyProfile };
