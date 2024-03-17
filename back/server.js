require('dotenv').config();
const https = require("https");
const fs = require("fs");
const path = require("path");
const express = require('express');
const connectDB = require('./db/connectDB');
const initializeDb = require('./db/initilizeDB');
const app = express();


connectDB().then(() => {
    initializeDb();
  });

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.use('*', (req, res) => {
  res.redirect('/');
})

const PORT = process.env.SERVER_PORT || 6000;

if (process.env.NODE_ENV === "production") {
  const privateKey = fs.readFileSync(
    process.env.SSL_PRIVATE_KEY_PATH,
    "utf8"
  );
  const certificate = fs.readFileSync(
    process.env.SSL_CERTIFICATE_PATH,
    "utf8"
  );
  const credentials = { key: privateKey, cert: certificate };

  // Create HTTPS server
  https.createServer(credentials, app).listen(PORT, () => {
    console.log(
      `Server is running on Production on https://localhost:${PORT}`
    );
  });
} else {
  // Create HTTP server for development
  app.listen(PORT, () => {
    console.log(`Server is running on Dev on http://localhost:${PORT}`);
  });
}
