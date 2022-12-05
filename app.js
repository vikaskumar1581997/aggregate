const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv").config();
const port = process.env.PORT || 3000;
const passport = require("passport");
const passportStrategy = require("./controller/passport");

const swaggerUi = require("swagger-ui-express");
const openApiDocumentation = require("./swagger/document");

const session = require("express-session");

// After you declare "app"
app.use(
	session({
		secret: "melody hensley is my spirit animal",
		resave: true,
		saveUninitialized: true,
	})
);
app.use(passport.initialize());
app.use(passport.session());

//Database connection
require("./config/db");

//Body-Parser
app.use(
	bodyParser.urlencoded({
		extended: true,
	})
);

app.use(bodyParser.json());

//Static
app.use(express.static("public"));

//Swagger
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(openApiDocumentation));

// cors middleware
app.use(cors("*"));

// body-parser middleware
app.use(
	express.urlencoded({
		extended: false,
	})
);

app.use(
	express.json({
		limit: "50mb",
	})
);

// Routes Imports
const auth = require("./routers/auth-router");

// API's
app.use("/api/auth", auth);

app.get("/", (req, res) => {
	res.send("Gods Own Country");
});

app.use(
	"/master/basicSettings",
	require("./routers/admin/manageMaster/basicSettings/masterManagerRouter")
);

app.use(
	"/master/locationSettings",
	require("./routers/admin/manageMaster/locationSettings/locationSettingsRoute")
);

app.use(
	"/master/master/hotelSettings",
	require("./routers/admin/manageMaster/hotelSettings/hotelSettingsRoute")
);

app.use(
	"/master/agentSettings",
	require("./routers/admin/manageMaster/agentSettings/agentSettingsRouter")
);

app.use(
	"/master/packageSettings",
	require("./routers/admin/manageMaster/packageSettings/packageSettingsRoute")
);

app.use(
	"/master/houseboatSettings",
	require("./routers/admin/manageMaster/houseBoatSettings/houseBoatSettingsRoute")
);

app.use(
	"/master/couponSettings",
	require("./routers/admin/manageMaster/coupon/couponRoutes")
);

app.use(
	"/master/communications",
	require("./routers/admin/manageMaster/communication/communicationRoutes")
);

app.use(
	"/registration/employeeSettings",
	require("./routers/admin/registration/employee/employeeRoute")
);

app.use(
	"/registration/agent",
	require("./routers/admin/registration/agent/agentRoute")
);

app.use(
	"/registration/packageSettings",
	require("./routers/admin/registration/package_/packageRoute")
);

app.use(
	"/registration/houseboatSettings",
	require("./routers/admin/registration/houseboat/houseboatRoutes")
);

app.use(
	"/registration/shikaraSettings",
	require("./routers/admin/registration/shikara/shikaraRoutes")
);

app.use(
	"/companyProfile",
	require("./routers/admin/companyProfile/comapnyProfileRoutes")
);

app.use("/guest", require("./routers/admin/bookingMaster/guestDetailsRouters"));

//error handling middleware
app.use((err, req, res, next) => {
	console.error(err);
  res.status(500).json({
      error: true,
      message: "Internal Server Error",
      details: err,
  });
});

app.listen(port, () => {
	console.log(`App running on ${port}`);
});
