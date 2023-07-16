import { Router } from "express";

const router = Router();
const good = 'ok'
router.get('/hello', (req, res, next) => {
  console.log('hello');
  res.status(200).json({message: 'it worked', good})
})


export default router;
