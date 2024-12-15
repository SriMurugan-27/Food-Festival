const mongoose = require('mongoose');

const connectDB = async (url) => {
    try {
        await mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log("MongoDB Atlas is Online");
    } catch (err) {
        console.error("Error Occurred: " + err);
        throw err;
    }
};

module.exports = connectDB;
