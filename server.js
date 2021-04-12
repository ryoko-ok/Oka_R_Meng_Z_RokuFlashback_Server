const express = require('express');
// const cookieParser = require('cookie-parser');
// const session = require('express-session');

const port = process.env.PORT || 5000; // should different to app.js PORT(client side)

const app = express();

// set up the session object
// app.use(cookieParser());

// app.use(session({
//     secret: "a belieber",
//     resave: false,
//     saveUninitialized: false
// }));
// secret is a random bit of text that's used to create a hash (an encrypted string)

// this catches every route request - every time you change your location bar, this function reacts
// and intercepts the roue request
app.use((req, res, next) => {
    console.log('incoming request');
    // console.log(port, "session:", req.session.id);

    // next is the original route request ie. /api/users
    next(); // => send the user to the route they requested
})

// use the API route file to handle API routes (/api/users, /api/:user/:id, etc)
app.use("/api", require("./routes/api"));
app.use("/ums", require("./routes/ums"));

// run the app at the PORT 
app.listen(port, () => {
    console.log(`server is running on ${port}`);
})
