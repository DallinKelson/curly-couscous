const socialMedia = require("../data/socialMedia");
const { sample } = require("../helpers");
const dictionary = require("../dictionary");

module.exports = (firstName) => 
	sample([
		// I've seen pictures / Heard about it on social media
		`I was sent ${dictionary.photos} of it`,
		`I saw ${dictionary.photos} of it on ${sample(socialMedia)}`,
		`I heard about the news on ${sample(socialMedia)}`,
		`I was on ${sample(socialMedia)} when I heard about it`,
		`We all heard about it when she told us on ${sample(socialMedia)}`,
		`She posted about it on ${sample(socialMedia)}`,
		`There was a post by her on ${sample(socialMedia)}`,
		`${sample(socialMedia)} was where we obtained the evidence from`,
		sample(socialMedia),
		// Heard of it at work
		`I was ${dictionary.told} about it during our lunch break at work`,
		`We work together and she ${dictionary.told} us about it at the beginning of work`,
		`One of our coworkers ${dictionary.told} me about it who is close with ${firstName}`,
		`During lunch we overheard ${firstName} talking about it`,
		`${firstName} was talking about it with us at the job`,
		`Me and my coworkers found out when we asked about an absence from work. ${firstName} was talking about it with us the next day`,
		`We found out after she was absent from work.`,
		`She has to report he absences from work. She was out for a couple of days before she came back and told me about it.`,
		`She shared it with me and many others at our work place.`,
		// Family/friend told me
		`One of her family members came to us about it a couple of days after it happened`,
		`her family came forward about it and ${dictionary.told} us all of it. She has friends that also know about it which have been keeping it a secret`,
		`Her friends ${dictionary.told} me about it, and we know her family who has kept it a secret. She has friends that also know about it which have been keeping it a secret`,
		`She came to me and ${dictionary.told} me about it, as well as other of our friends`,
		// Misc
		"We knew she was pregnant weeks before and recently she told us about the news "
	])
