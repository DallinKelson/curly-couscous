const zip_codes = require("./data/zip_codes");
const firstNames = require("./data/firstNames");
const howDidYouObtainThisEvidence = require("./answer_generator/howDidYouObtainThisEvidence");
const story = require("./answer_generator/story");
const clinic = require("./answer_generator/clinic");
const { sample } = require("./helpers");

const browserExecution = require("./execution_methods/browser");

(async () => {
  const location = sample(zip_codes);
  const firstName = sample(firstNames);
  const fakeStory = story(firstName);
  const fakeEvidence = howDidYouObtainThisEvidence(firstName);
  const fakeClinic = clinic();
  const state = sample(["Texas", "TX", "Tx", "Texas (TX)", "Texas US"]);

  const method = process.argv[2];
  switch (String(method).toLowerCase()) {
    case "text":
      console.log(`
	Auto-Generated Story:
	Copy and Paste it into the form!

- How do you think the law was violated? -

	${fakeStory}

- How did you obtain this evidence? -

	${fakeEvidence}

- Clinic or Doctor this evidence relates to -

	${fakeClinic}

- City -

	${location.city}

- State -

	${state}

- Zip -

	${location.zip}

- County -

	${location.county}
			`);
      break;
    default:
      console.log("No execution method provided. Defaulting to browser.");
      await browserExecution({
        location,
        firstName,
        fakeStory,
        fakeEvidence,
        fakeClinic,
        state,
      });
  }
})();
