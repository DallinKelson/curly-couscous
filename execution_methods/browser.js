const puppeteer = require("puppeteer");
const randomUseragent = require("random-useragent");

module.exports = async (
	{
		location,
		firstName,
		fakeStory,
		fakeEvidence,
		fakeClinic,
		state

	}
) => {
	console.log("Navigating to website...");
	const browser = await puppeteer.launch({
		headless: false
	});
	const page = await browser.newPage();
	const agent = randomUseragent.getRandom((ua) => ua.browserName == "Chrome" && parseFloat(ua.browserVersion) >= 55);

	await page.setUserAgent(agent);
	await page.goto("https://prolifewhistleblower.com/anonymous-form/");

	console.log("Generating story for", firstName, location);

	// wait for the website to load
	console.log("Waiting for form to appear...");
	await page
		.waitForSelector('#forminator-field-textarea-1', { timeout: 20000 })


	// how do you think the law was violated?
	await page.$eval(
		"#forminator-field-textarea-1",
		(el, v) => {
			el.value = v;
		},
		fakeStory
	);
	// how did you obtain this evidence?
	await page.$eval(
		"#forminator-field-text-1",
		(el, v) => {
			el.value = v;
		},
		fakeEvidence
	);
	// clinic this relates to
	await page.$eval(
		"#forminator-field-text-6",
		(el, v) => {
			el.value = v;
		},
		fakeClinic
	);
	// city
	await page.$eval(
		"#forminator-field-text-2",
		(el, v) => {
			el.value = v;
		},
		location.city
	);
	// state
	await page.$eval(
		"#forminator-field-text-3",
		(el, v) => {
			el.value = v;
		},
		state
	);
	// zip
	await page.$eval(
		"#forminator-field-text-4",
		(el, v) => {
			el.value = v;
		},
		location.zip
	);
	// county
	await page.$eval(
		"#forminator-field-text-5",
		(el, v) => {
			el.value = v;
		},
		location.county
	);

	await page.evaluate(() => {
		document.querySelectorAll('input[type="checkbox"]')[1].parentElement.click();
	});

	console.log("Inputs filled!")
	console.log("Please complete the ReCaptcha, and submit when ready!");

	process.exit(1);
}