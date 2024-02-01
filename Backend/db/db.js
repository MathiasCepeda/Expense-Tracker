const mongoose = require("mongoose");

mongoose.set('strictQuery',false);
mongoose.set('strictQuery', true);

const db = () => {
    const MONGO_URL = process.env.MONGO_URL;
    mongoose.connect(MONGO_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log('**DB connected**'))
    .catch((err) => { console.error("**DB not connected**"); });
};

module.exports = db;