const readline = require('readline');
const LCDUnit = require('./LCDUnit');
const DISPLAY_SIZE = 3;

const display = new LCDUnit(DISPLAY_SIZE, DISPLAY_SIZE);

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

function inputLoop() {
	rl.question('input a number[0-9]: ', input => {
		if( /\d/.test(input) ) {
			display.setValue(parseInt(input));
			display.show();
			inputLoop();
		}
		else if(input === 'exit') {
			rl.close();
			process.exit();
		}
		else {
			console.log('that’s not a number!');
			inputLoop();
		}
	});
}

inputLoop();
