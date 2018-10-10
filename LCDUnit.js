//one unit will display one number
//		 _
//		| |
//		|_|
//

const alphabet = require('./Alphabet');

class LCDUnit {
	constructor(width, height) {
		this.value = '';
		this.rows = [];
		this.width = width;
		this.height = height;
	}

	//	The LCD values for each number are stored as one line string.
	//	setValue fetches the raw value for the map and turns it into
	//	an array of string, one for each row of the lCD
	setValue(char=' ') {
		if (char !== this.value) {
			this.value = char;
			this.rows = alphabet.get(char);
		}
	}

	getValue(char=' ') {
		return this.value;
	}

	getRow(index) {
		if(index<this.rows.length) {
			return this.rows[index];
		}
	}
}

module.exports = LCDUnit;
