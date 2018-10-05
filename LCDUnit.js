//one unit will display one number
//		 _
//		| |
//		|_|
//

const alphabet = require('./Alphabet');

class LCDUnit {
	constructor(width, height) {
		this.rows = [];
		this.width = width;
		this.height = height;
	}

	//	The LCD values for each number are stored as one line string.
	//	setValue fetches the raw value for the map and turns it into
	//	an array of string, one for each row of the lCD
	setValue(char=0) {
		this.rows = [];
		const rawLCDValue = alphabet.get(char);
		for(let i=0; i<this.height; i++) {
			const leftBound = i*this.width;
			const rightBound = leftBound + 3;
			this.rows[i] = rawLCDValue.substring(leftBound, rightBound);
		}
	}

	//displays the number on the LCD
	show() {
		this.rows.forEach( row => {
			const formattedRow = row.padStart(6);
			console.log(formattedRow);
		});
		console.log();
	}
}

module.exports = LCDUnit;
