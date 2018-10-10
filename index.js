const readline = require('readline');
const LCDScreen = require('./LCDScreen');
const UNIT_SIZE = 3;
const SCREEN_WIDTH = 9;

const display = new LCDScreen(SCREEN_WIDTH, UNIT_SIZE);

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

function inputLoop() {
	const inputRegex = new RegExp(`^\\d{1,${SCREEN_WIDTH}}$`);
	rl.question('input a number[0-999999999]: ', input => {
		if( inputRegex.test(input) ) {
			display.setValue(input);
			display.show();
			inputLoop();
		}
		else if(input === 'exit') {
			rl.close();
			process.exit();
		}
		else {
			console.log('invalid input!');
			inputLoop();
		}
	});
}

inputLoop();
