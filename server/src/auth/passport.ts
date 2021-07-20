import passport from 'passport';

// import { User, UserType } from '../models/User';
import { Request, Response, NextFunction } from 'express';

passport.serializeUser<any, any>(
  (user, done: (err: any, id: number) => void) => {
    done(undefined, user.id);
  }
);

// passport.deserializeUser((id, done) => {
//     User.findById(id, (err, user) => {
//         done(err, user);
//     });
// });
