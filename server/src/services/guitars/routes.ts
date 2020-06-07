import { Request, Response } from 'express';
import { Guitar } from '../../db/index';

export default [
  {
    path: '/api/v1/guitars',
    method: 'get',
    handler: async ({ query }: Request, res: Response) => {
      try {
        const guitars = await Guitar.findAll();
        console.log('guitars', guitars)
        res.status(200).send(guitars);
        // return res.json(users)
      }catch (e) {
        console.log('Error', e)
        res.status(200).send([]);
      }
      
    },
  },
];
