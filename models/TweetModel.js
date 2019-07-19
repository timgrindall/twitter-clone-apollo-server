const mongoose = require("mongoose")

mongoose.Promise = global.Promise
mongoose.connect("mongodb://localhost:27017/social-app", {
	useNewUrlParser: true
})

const Schema = mongoose.Schema

const tweetSchema = new Schema({
	tweet: String,
	author: String,
})

const TweetModel = mongoose.model("Tweet", tweetSchema)

// had to use "module.exports =" instead of newer "export default"

module.exports = {
	getTweets: () => TweetModel.find().sort({ _id: -1}),
	getTweet: _id => TweetModel.findOne({ _id }),
	createTweet: args => TweetModel(args).save(),
	deleteTweet: args => {
		const { _id } = args

		TweetModel.remove({ _id }, error => {
			if (error) {
				console.log("Error Removing: ", error)
			}
		})

		return args
	},
	updateTweet: args => {
		const { _id, tweet, author } = args

		TweetModel.update(
			{ _id },
			{
				$set: { tweet, author }
			},
			{ upsert: true },
			error => {
				if (error) {
					console.log("Error Updating: ", error)
				}
			}
		)

		// args.author = author // not needed anymore

		return args
	}
}