import { Router, Request, Response } from 'express';
import connection from './db';

const router = Router();

// router.get('/items', (req: Request, res: Response) => {
//   connection.query('SELECT * FROM items', (err, results) => {
//     if (err) {
//       return res.status(500).json({ error: err.message });
//     }
//     res.json(results);
//   });
// });

// router.post('/items', (req: Request, res: Response) => {
//   const { name, description } = req.body;
//   connection.query(
//     'INSERT INTO items (name, description) VALUES (?, ?)',
//     [name, description],
//     (err, results) => {
//       if (err) {
//         return res.status(500).json({ error: err.message });
//       }
//       res.status(201).json({ id: results.insertId, name, description });
//     }
//   );
// });

export default router;
