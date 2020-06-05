import { Request, Response } from 'express';
import { User } from '../../db/models/user';

export default [
  {
    path: '/api/v1/users',
    method: 'get',
    handler: [
      async ({ query }: Request, res: Response) => {
        const users = await User.findAll()
        return res.status(200).send(users);
        // return res.json(users)
      },
    ],
  },
];
