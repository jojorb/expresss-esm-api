import express from 'express';
import test from './test';

const router = express.Router();

router.get('/', (req, res) => {
  res.json({
    message: 'working API!',
  });
});

router.use('/test', test);

export default router;
