import express from "express"
import cors from "cors";
import dotenv from "dotenv";
import { sendEmail } from "./nodemailer/nodemailer.js";
import { db } from "./firebase/firebase.js";
import "./cron/cron.js" // run cron job

dotenv.config()

const app = express()
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("<h1>Backend for Safety Pinpoint!</h1>")
})


// check test email
app.get("/email", (req, res) => {
  sendEmail("gunnysolike@gmail.com", "Test", "Test")
  res.send("<h1>Test send email to gunnysolike@gmail.com</h1>")
})

// check test store
app.get("/store", async (req, res) => {
  try {
    await db.collection("Test").doc("Test").set({
      test: "test"
    })
    res.send("Test storing success")
  }
  catch (err) {
    console.error("Test store error:", err)
    res.send("Test storing error")
  }
})

app.listen(5000, () => console.log("Server running on port 5000"));