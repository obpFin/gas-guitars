import { Request, Response } from 'express';
import logger from '../../utils/logger';
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
    handler: async (req: Request, res: Response): Promise<void> => {
      try {
        const guitars = await Guitar.findAll();
        res.status(200).send(guitars);
      } catch (e) {
        logger.log('error', e);
        res.status(200).send([]);
      }
    },
  },
  /**
   * @swagger
   * /api/v1/guitars/{id}:
   *   get:
   *     summary: Represents a guitar
   *     description: This ressource represents an individual guitar. Each guitar is identified by a numeric `id`.
   *     parameters:
   *       - in: path
   *         name: id
   *         required: true
   *         description: Numeric ID of the guitar to retrieve.
   *         schema:
   *           type: integer
   *     responses:
   *       200:
   *         description: A guitar instance
   *         content:
   *           application/json:
   *             schema:
   *               type: object
   *               properties:
   *                 id:
   *                   type: integer
   *                   description: The guitar ID.
   *                   example: 1
   *                 make:
   *                   type: string
   *                   description: The guitar's make.
   *                   example: Fender
   *                 model:
   *                   type: string
   *                   description: The guitar's model.
   *                   example: Stratocaster
   *                 year:
   *                   type: integer
   *                   description: The guitar's year.
   *                   example: 1968
   *                 condition:
   *                   type: string
   *                   description: The guitar's condtition.
   *                   example: Good
   *                 createdAt:
   *                   type: date
   *                   description: creation date
   *                   example: 2021-07-21T14:01:57.827Z
   *                 updatedAt:
   *                   type: date
   *                   description: updated date
   *                   example: 2021-07-21T14:01:57.827Z
   */
  {
    path: '/api/v1/guitars/:id',
    method: 'get',
    handler: async (req: Request, res: Response): Promise<void> => {
      const { id } = req.params;
      try {
        const guitar = await Guitar.findOne({
          where: {
            id,
          },
        });
        res.status(200).send(guitar);
      } catch (e) {
        logger.log('error', e);
        res.status(200).send([]);
      }
    },
  },
];
