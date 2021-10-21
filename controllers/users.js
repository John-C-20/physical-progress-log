const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require('jsonwebtoken');
const { secretOrKey } = require('../config/keys');


const registerUser = async (req, res) => {
    const user = await User.findOne({email: req.body.email})
    if (user) {
        return res.status(400).json({msg:"User already Exists"})
    }
    else {    
        const newUser = await new User(req.body)
        // hash and salt password
        bcrypt.genSalt(10, (err,salt) => {
            bcrypt.hash(newUser.password, salt, (err, hash) => {
                if (err) throw err;
                newUser.password = hash; 
                newUser.save() 
                .then(user => {
                    const payload = { id: user._id, email: user.email }
                    jwt.sign(
                        payload, secretOrKey, { expiresIn: 3600 }, (err, token) => {
                            res.json({ success: true, token: 'Bearer ' + token });
                        }
                    );
                })
                .catch(err => res.status(400).send(err.message))
            })
        })
    }
}

const loginUser = async (req, res) => {
    const user = await User.findOne({email: req.body.email})
    if (user) {
        const isMatch = await bcrypt.compare(req.body.password, user.password)
        if (isMatch) {
            const payload = {id: user._id, email: user.email} 
            console.log(secretOrKey)
            jwt.sign(
                payload, secretOrKey, {expiresIn: 3600}, (err, token) => {
                    res.json({success: true, token: 'Bearer ' + token});
                }
            );
        } 
        else res.status(400).json({password: 'Incorrect Password'});
    }
    else {
        return res.status(400).send("user does not exist")
    }
}

module.exports = { registerUser, loginUser };