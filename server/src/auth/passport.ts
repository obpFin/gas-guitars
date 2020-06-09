import passport from "passport";

// import { User, UserType } from '../models/User';
import { Request, Response, NextFunction } from "express";

passport.serializeUser<any, any>((user, done) => {
    done(undefined, user.id);
});

// passport.deserializeUser((id, done) => {
//     User.findById(id, (err, user) => {
//         done(err, user);
//     });
// });