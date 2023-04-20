const express = require("express");
const mongoose = require("mongoose");

const app = express();

// Connect to MongoDB
mongoose.connect('mongodb+srv://<username>:<password>@<clustername>.mongodb.net/<dbname>?retryWrites=true&w=majority',{ useNewUrlParser: true, useUnifiedTopology: true }
);

// Define schema for result documents
const resultSchema = new mongoose.Schema({
  nums: [Number],
  result: Number,
  createdAt: { type: Date, default: Date.now },
});

// Define model for result documents
const Result = mongoose.model("Result", resultSchema);

// Define route for calculating minimum absolute difference
app.post("/api/calculate", (req, res) => {
  const nums = req.body.nums.map(Number);
  const n = nums.length / 2;
  let sum1 = 0;
  let sum2 = 0;

  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length; i++) {
    if (i < n) {
      sum1 += nums[i];
    } else {
      sum2 += nums[i];
    }
  }

  const result = Math.abs(sum1 - sum2);

  const resultDoc = new Result({ nums, result });
  resultDoc.save((err) => {
    if (err) {
      console.error(`Error saving result to database: ${err}`);
    } else {
      console.log(`Result saved to database: ${resultDoc}`);
    }
  })
})
