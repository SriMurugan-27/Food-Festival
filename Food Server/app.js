const { rateLimit } = require('express-rate-limit');
const express = require('express');
const app = express();
const connectDB = require('./db/connect');
const foods = require('./route/foodRoute');
const cors = require('cors');
require('dotenv').config();

const limiter = rateLimit({
	windowMs: 15 * 60 * 1000, // 15 minutes
	limit: 100, // Limit each IP to 100 requests per `window` (here, per 15 minutes).
	standardHeaders: 'draft-8', // draft-6: `RateLimit-*` headers; draft-7 & draft-8: combined `RateLimit` header
	legacyHeaders: false, // Disable the `X-RateLimit-*` headers.
	// store: ... , // Redis, Memcached, etc. See below.
})

app.use(express.json());
app.use(cors());
app.use(limiter); // Apply the rate limiting middleware to all requests.
app.use('/api/v1/foods', foods);

const port = process.env.PORT || 5000;

const run = async () => {
    try {
        await connectDB(process.env.MONGO_URL);
        app.listen(port, console.log(`Food Festival Server is online and running on ${port}`));
    } catch (error) {
        console.error(error);
    }
};

run();
