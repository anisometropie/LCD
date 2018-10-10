// A LCD screen is a row of LCD units


const LCDUnit = require('./LCDUnit');

class LCDScreen {
	constructor(width, unitSize) {
		this.width = width;
		this.unitSize = unitSize;
		this.units = [];
		for(let i=0; i<width; i++) {
			this.units[i] = new LCDUnit(unitSize, unitSize);
		}
	}

	setValue(number=' ') {
		const numberDigits = number.padStart(this.width,' ').split('');
		numberDigits.forEach( (digit, index) => {
			this.units[index].setValue(digit);
		});
	}

	//displays the number on the LCD
	show() {
		for (let rowIndex=0; rowIndex<this.unitSize; rowIndex++) {
			let screenRow = ''.padStart(6);
			this.units.forEach( unit => {
				if(unit.getValue() !== ' ') {
					screenRow += unit.getRow(rowIndex).padStart(4);
				}
			});
			console.log(screenRow);
		}
		console.log();
	}
}

module.exports = LCDScreen;
