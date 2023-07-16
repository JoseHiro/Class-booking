import { Router } from "express";

const router = Router();

router.get('/hello', (req, res, next) => {
  console.log('hello');
})


export default router;
