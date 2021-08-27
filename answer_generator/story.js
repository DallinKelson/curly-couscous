const { sample, rndInt } = require("../helpers")

module.exports = (firstName) => {
	return sample([
		`We heard about ${firstName} got an abortion about ${rndInt(2, 5)} ${sample(["weeks", "months", "days"])} ago. We had known about the pregnancy until we learn that she got an abortion and that it was done at a nearby clinic
		`,
		`Our friend ${firstName} got an abortion ${rndInt(2, 5)} ${sample(["weeks", "months", "days"])} ago. We had known about the pregnancy until we learn that she got an abortion and that it was done at a nearby clinic
		`,
		`We know ${firstName} got an abortion ${rndInt(2, 6)} ${sample(["weeks", "months", "days"])} ago. She had posted pictures of her pregnancy before the abortion online
		`,
		`${firstName} told us about her abortion herself. about ${rndInt(2, 5)} ${sample(["weeks", "months", "days"])} ago
		`,
		`We know of a family who openly had an abortion. We know where the clinic was and her info.
		`,
		`Our coworker told us about her abortion experience about ${rndInt(2, 5)} ${sample(["weeks", "months", "days"])} ago.
		`,
		`Recently our coworkers told us about her experience with an abortion. it happened ${rndInt(2, 6)} ${sample(["weeks", "months", "days"])} ago and her family knows too.
		`,
		`We learn about one of our coworkers having an abortion at the job site recently. Her name is ${firstName} she had been missing for days right around that time too ${rndInt(2, 6)} ${sample(["weeks", "months", "days"])} ago.
		`
	])
}