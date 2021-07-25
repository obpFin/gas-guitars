import { Request, Response } from 'express';
import { Guitar } from '../../db/index';

/**
 * @swagger
 * /api/v1/guitars:
 *   get:
 *     summary: Retrieve a list of guitars
 *     description: Retrieve a list of guitars from db.
 *     responses:
 *       200:
 *         description: A list of guitars.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 guitars:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       id:
 *                         type: integer
 *                         description: The guitar ID.
 *                         example: 0
 *                       make:
 *                         type: string
 *                         description: The guitar's make.
 *                         example: Fender
 *                       model:
 *                         type: string
 *                         description: The guitar's model.
 *                         example: Stratocaster
 *                       year:
 *                         type: integer
 *                         description: The guitar's year.
 *                         example: 1968
 *                       condition:
 *                         type: string
 *                         description: The guitar's condtition.
 *                         example: Good
 *                       createdAt:
 *                         type: date
 *                         description: creation date
 *                         example: 2021-07-21T14:01:57.827Z
 *                       updatedAt:
 *                         type: date
 *                         description: updated date
 *                         example: 2021-07-21T14:01:57.827Z
 */

export default [
  {
    path: '/api/v1/guitars',
    method: 'get',
    handler: async ({ query }: Request, res: Response): Promise<void> => {
      try {
        const guitars = await Guitar.findAll();
        console.log('guitars', guitars);
        res.status(200).send(guitars);
        // return res.json(guitars)
      } catch (e) {
        console.log('Error', e);
        res.status(200).send([]);
      }
    },
  },
];
