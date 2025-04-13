import {app} from './app.js';
import dotenv from 'dotenv';    
import connectDB from './db/index.js';


dotenv.config({path: './.env'});
const port = process.env.PORT || 5001;

connectDB().then(() => {
    app.on('error', (err) => {
        console.error('Error occurred:', err);
    }).listen(port, () => {
        console.log(`Server is running on port ${port}`);
    });
}).catch((err) => {
    console.error('Database connection failed:', err);
})

