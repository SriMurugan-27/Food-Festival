const Indian = require('../model/foodModel');

const fetchEntireFood = async (req, res) => {
    try {
        const foods = await Indian.find();
        if (!foods || foods.length === 0) {
            return res.status(404).json({ message: 'No food found' });
        }
        return res.status(200).json(foods);
    } catch (err) {
        console.error(err);
        return res.status(500).json({ message: 'Internal Server Error' });
    }
};

const fetchRecipe = async (req, res) => {
    try {
        const food = await Indian.find({ _id : req.params.id });
        if(!food){
            return res.status(404).json({ message: 'No Such Recipe Exisit'});
        }
        return res.status(200).json(food);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ messgae : 'Internal Server Error'});
    }
}

module.exports = { fetchEntireFood, fetchRecipe };
