function sumEuler(firstMultiple, secondMultiple, stopNumber) {
	var tracker = 0;
	for (var i = 0; i < stopNumber; i++) {
		if (i % firstMultiple === 0) {
			tracker = tracker + i;
		} else if (i % secondMultiple === 0) {
			tracker = tracker + i;
		}
	}

	return tracker;
}

function fibEuler(stopNumber) {
	var termPrev = 2;
	var termPrevTwo = 1;
	var termTemp = 1;
	var tracker = 2;
	while (termPrev < stopNumber) {
		termTemp = termPrev;
		termPrev = termPrev + termPrevTwo;
		termPrevTwo = termTemp;
		if (termPrev % 2 === 0) {
			tracker += termPrev;
		}
	}

	return tracker;

}

console.log('Answer to q1 is: ' + sumEuler(3, 5, 1000));
console.log('Answer to q2 is: ' + fibEuler(4000000));