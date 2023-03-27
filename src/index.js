const app = require('./app');
const dotenv = require('dotenv');
const mongoose = require('mongoose');


dotenv.config();

mongoose.connect(process.env.DATABASE_URL, { useFindAndModify: false, useNewUrlParser: true, useUnifiedTopology: true }, () => {
    console.log('connected to DB')
})


app.listen(3000, () => console.log('Server running......'));

