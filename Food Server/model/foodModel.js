const mongoose = require('mongoose');

const foodSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, 'No Food Name']
    },
    ingredients: {
        type: String,
        required: [true, 'No ingredients']
    },
    diet: {
        type: String,
        required: [true, 'No diet plan']
    },
    prep_time: {
        type: Number,
        required: [true, 'No Prepartion Time Provided']
    },
    cook_time: {
        type: Number,
        required: [true, 'No Cooking Time Provided']
    },
    flavor_profile: {
        type: String,
        required: [true, 'No such Profile']
    },
    course: {
        type: String,
        required: [true, 'No such course']
    },
    state: {
        type: String,
        required: [true, 'No Such State Provided']
    },
    region: {
        type: String,
        required: [true, 'No Region Provided']
    }
});

const Indian = mongoose.model('Indian', foodSchema);

module.exports = Indian;    