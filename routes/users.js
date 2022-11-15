const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../config/keys");

// Load input validation
const validateRegisterInput = require("../validation/register");
const validateLoginInput = require("../validation/login"); 

// Load User model
const User = require("../models/User");

const { addListener } = require("../models/User");

// @route POST api/users/register
// @desc Register user
// @access Public
router.post('/register', (req, res) => {
    //form validation

    const {errors , isValid} = validateRegisterInput(req.body);

    //check validation
    if (!isValid){
        return res.status(400).json(errors);
    }

    User.findOne({email: req.body.email}).then(user => {
        if (user) {
            return res.status(400).json({ email: "Email already exists" });
          } else {
            const newUser = new User ({
                firstName : req.body.firstName,
                lastName : req.body.lastName,
                email : req.body.email,
                password : req.body.password
            });
            //Hash password before saving in database
            bcrypt.genSalt(10, (err, salt) => {
                bcrypt.hash(newUser.password, salt, (err, hash) => {
                  if (err) throw err;
                  newUser.password = hash;
                  newUser
                    .save()
                    .then(user => res.json(user))
                    .catch(err => console.log(err));
                });
            });   
        }
    })
});
// @route POST api/users/login
// @desc Login user and return JWT token
// @access Public

router.post('/login', (req, res) => {
    //const { errors, isValid } = validateLoginInput(req.body);
    // Check validation
    /*if (!isValid) {
        return res.status(400).json(errors);
    }*/
    //check email 

    const email = req.body.email;
    const password = req.body.password;

    console.log(email)

    if (email == "admin@gmail.com" && password == "admin123") {

        User.findOne({email: email}).then((user) => {
            if (!user) {
                const newUser = new User({
                    firstName:"admin",
                    lastName:"admin",
                    email: email,
                    password: password
                })
                bcrypt.genSalt(10, (err, salt) => {
                    bcrypt.hash(newUser.password, salt, (err, hash) => {
                      if (err) throw err;
                      newUser.password = hash;
                      newUser
                        .save()
                        .catch(err => console.log(err));
                    });
                }); 
            }
        })


    }

    User.findOne({ email: email }).then(user => {
        //check if user exists
        if (!user) {
            return res.status(400).json({ errors: "Email Not Found" });
        }
        //check password
        bcrypt.compare(password, user.password).then(isMatch => {
            if (isMatch) {
                //password checked
                //create jwt PAYLOAD
                const payload = {
                    id: user.id,
                    name: user.name,
                };
                // sign token
                jwt.sign(
                    payload,
                    keys.secretOrKey,
                    {
                        expiresIn: 31556926 // 1 year in seconds
                    },
                    (err, token) => {
                        res.status(200).json({
                            success: true,
                            token: "Bearer " + token,
                            user:user
                        });
                    }
                );
            } else {
                
                return res
                    .status(400)
                    .json({errors: "Password incorrect" });

            }
        });
    })
});
router.get('/userss', (req,res)=>{
    User.find({}).exec((err,users)=>{
        if(!users){
            return(res.status(400))
        }else{
            return(res.status(200).json({users:users}))
        }
    })
})

module.exports = router;