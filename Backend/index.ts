import express from 'express'
import bodyParser from 'body-parser';

// routes 

const app = express();

app.use(bodyParser.json());

app.listen(3000);
