const User = require('../models/user');
const jwt = require('jsonwebtoken');
const config = require('../config/Enviorment');
const ObjectId = require('mongoose').Types.ObjectId;


module.exports = {
    all: (req, res) => {
        User.find()
            .then(users => res.json(users))
            .catch(err => res.status(500).send(err))
    },
    create: (req, res) => {
        const user = new User(req.body);
        user.save()
            .then(user => res.status(201).json(user))
            .catch(err => res.status(400).send(err));
    },
    login: (req, res) => {
        User.findOne({
            email: req.body.email,
            password: req.body.password
        })
        .then (user => {
            if(user) {
                const token = jwt.sign({id: user._id}, config.secret);
                res.json({token});
            } else {
                res.status(403).json({});
            }
        })
        .catch(err => res.status(500).json(err));
    },
    update: (req, res) => {
        User.findOneAndUpdate({_id: new ObjectId(req.params.id)}, req.body, {new: true})
        .then(user => {
            console.log(user)
            res.status(200).json(user)
        })
        .catch(err => res.status(500).send(err));
    },
    me: (req, res) => {
        User.findOne({_id: req.user.id})
        .then(user => res.json(user))
        .catch(err => res.status(500).send(err));
    }
}