 // Output the given amount of logging over a given time period
const loggingOutputInBytes = process.env.CHUNK_SIZE;
const timePeriodInMs = process.env.TIME_PERIOD;

const blatLog = () => {
	// Divide the amount of logging up into equal portions in this time period, in chunks of ten
	const timeChunk = timePeriodInMs / 10;
	const logChunk = loggingOutputInBytes / 10;
	let index = 0;
	const output = () => {
		let theString = '';
		for (let strIndex = 0; strIndex < logChunk; strIndex++) {
			theString += String.fromCharCode(32 + Math.ceil(Math.random() * 94));
		}
		console.log(theString);

		if (++index < 10) {
			setTimeout(() => output(), timeChunk);
		}
	};

	output();
};

 setInterval(() => blatLog(), timePeriodInMs);
