const axios = require('axios');
const flowerModel = require('../models/flower.model');


const getFlowers = async (req, res) => {

    const url = 'https://flowers-api-13.herokuapp.com/getFlowers';
    axios.get(url).then(response => {
        res.send(response.data);
    }).catch(err => {
        console.error(err);
    })
}

const getFavFlower = async (req, res) => {

    const userEmail = req.query;

    flowerModel.find({ userEamil: userEamil }, (err, data) => {
        if (error) {
            res.send(err);
        } else {
            res.json(data);
        }
    })
}

const addFavFlower = async (req, res) => {

    const {
        name,
        instructions,
        photo,
        userEmail
    } = req.body;
    const newflower = new flowerModel({
        name: name,
        instructions: instructions,
        photo: photo,
        userEmail: userEmail
    })
    newflower.save();

}


const deleteFlower = async (req, res) => {
    const id = req.params.id;

    flowerModel.deleteOne({ _id: id }, (err, data) => {

    })
    flowerModel.find({}, (err, data) => {
        if (error) {
            res.send(err);
        } else {
            res.json(data);
        }
    })
}

const updateFlower = async (req, res) => {
    const id = req.params.id;

    const {
        name,
        instructions,
        photo,
    } = req.body;

    flowerModel.findByIdAndUpdate(
        { _id: id },
        {
            name: name,
            instructions: instructions,
            photo: photo,
        },
        {new: true}, 
        (err, data) => {
            res.json(data);
        }
    )
}













module.exports = { getFlowers, getFavFlower, addFavFlower, deleteFlower, updateFlower };