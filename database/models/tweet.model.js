const mongoose = require('mongoose');
const schema = mongoose.Schema;

const tweetschema = schema({
    content : { 
        type: String, 
        maxlength : [140, "Tweet trop long"], 
        minlength: [1, "Tweet trop court"], 
        required: [true, "Champ requis"]
    },
    author: { type: schema.Types.ObjectId, ref: 'user', required: true}
});

const tweet = mongoose.model('tweet', tweetschema);

module.exports = tweet;