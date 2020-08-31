const mongoose = require('mongoose');
const env = require(`../environment/${ process.env.NODE_ENV }`);

mongoose.connect(env.dbUrl, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
}).then( () => {
    console.log('Connexion ok !');
}).catch( err => {
    console.log(err);
});
