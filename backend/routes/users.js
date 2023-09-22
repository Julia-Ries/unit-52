"use strict";

/** Routes for users. */
const express = require("express");
const jsonschema = require("jsonschema");


const { BadRequestError } = require("../expressError");
const User = require("../models/user");
const { createToken } = require("../helpers/tokens");
const userNewSchema = require("../schemas/newUser.json");


const router = express.Router();


router.post('/signup', async function (req, res, next){
    try {
        const validator = jsonschema.validate(req.body, userNewSchema);
        if(!validator.valid){
            const errs = validator.errors.map(e => e.stack);
            throw new BadRequestError(errs);
        }

        const user = await User.register(req.body);
        const token = createToken(user);
        return res.status(201).json({user, token});
    } catch (err){
        return next(err);
    }

});

router.get("/:username", async function (req, res, next) {
    try {
      const user = await User.get(req.params.username);
      return res.json({ user });
    } catch (err) {
      return next(err);
    }
  });


  module.exports = router;