import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import passport from "passport";
import session from "express-session";
import passportSetup from "./config/passport-setup.js";
import routes from "./routes/index.js";
import config from "./config/index.js";

const app = express();

// app.set('trust proxy', 1);
app.use(express.json()); // Parsing data coming as json
app.use(express.urlencoded({ extended: true })); // Parsing data coming as form data
app.use(
  cors({
    origin: config.FRONT_END_BASE_URL, // allow to server to accept request from different origin
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true, // allow session cookie from browser to pass through
  })
);
app.use(cookieParser());
app.use(
  session({
    saveUninitialized: false,
    resave: false,
    secret: config.SESSION_SECRET,
    cookie: {
      maxAge: 24 * 60 * 60 * 100,
      // secure: false,
    },
  })
);
app.use(passport.initialize());
app.use(passport.session()); // deserialize cookie from the browser
app.use("/api", routes);

app.get("/healthz", (_req, res) => {
  res.send("All is well!!!");
});

app.all("*", (_req, res) => {
  return res.status(404).json({
    statusCode: 404,
    success: false,
    message: "Route not found",
  });
});

app.use((err, _req, res) => {
  console.log(err);
  if (err instanceof Error) {
    console.error(err);
    return res.status(400).json({
      statusCode: 400,
      success: false,
      message: err.message,
    });
  }

  return res.status(500).json({
    statusCode: 500,
    success: false,
    message: "Internal Server Error",
  });
});

export default app;
