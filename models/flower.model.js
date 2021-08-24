const mongoose = require('mongoose');

const flowerSchema = new mongoose.Schema({
    name: String,
    instructions: String,
    photo: String,
    userEmail: String
});

const flowerModel = mongoose.model('flower', flowerSchema);



module.exports = flowerModel;