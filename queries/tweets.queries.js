const Tweet = require('../database/models/tweet.model');

exports.getTweets = () => {
    return Tweet.find({}).exec();
}

exports.getTweet = (tweetId) => {
    return Tweet.findOne({ _id: tweetId }).exec();
}

exports.createTweets = (tweet) => {
    const newTweet = new Tweet(tweet);
    return newTweet.save();
}

exports.updateTweet = (tweetId, tweet) => {
    return Tweet.findByIdAndUpdate(tweetId, { $set: tweet }, { runValidators: true } );
}

exports.deleteTweet = (tweetId) => {
    return Tweet.findByIdAndDelete(tweetId).exec();
}