import express from 'express';
import bootstrap from './src/app.controller.js';
const app = express();
const PORT = 3000 || process.env.PORT


bootstrap(app, express)

app.listen(PORT, () => {
    console.log('Example app listening on 3000');
});

