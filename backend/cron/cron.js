import cron from "node-cron";

cron.schedule("*/1 * * * *", () => {
  console.log("Running every minute:", new Date().toLocaleTimeString());
});