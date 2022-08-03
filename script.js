// let catchPhrase = "I'm a cool mom!";
// console.log(catchPhrase);

//--------------------------------------------------------
// !LEARNING if STATEMENTS!
// const age = 25;
// if (age > 20) {
//	console.log('delete it, old!');
// }
// const ninjas = ['guy', 'girl', 'they', 'bitch'];
// if (ninjas.length > 3) {
//	console.log("that's a lot of ninjas");
// }

//--------------------------------------------------------
// !LEARNING else if STATEMENTS and LOGICAL AND && OR || THINGS!
// const password = 'p@ss';
// if (password.length >= 12 && password.includes('@')) {
//	console.log('that is so good!');
// } else if (
//	password.length >= 8 ||
//	(password.includes('@') && password.length > 5)
// ) {
// 	console.log('it is okay');
// } else {
// 	console.log('nope');
// }
// logical NOT (!)
// if(!false) means true

//--------------------------------------------------------
// !break STOPS THE LOOP AND continue SKIPS THAT INSTANCE!
// const scores = [50, 25, 0, 30, 100, 20, 10];
// for (let i = 0; i < scores.length; i++) {
//	if (scores[i] === 0) {
//		continue;
//	}
//	console.log('your score: ', scores[i]);
//	if (scores[i] === 100) {
//		console.log('congrats!');
//		break;
//	}
// }

//--------------------------------------------------------
// !USING A switch STATEMENT TO CHECK LOTS OF CONDITIONS INSTEAD OF else if!
// const grade = 'G';
// switch (grade) {
//	case 'A':
//		console.log('you got an A!');
//		break;
//	case 'B':
//		console.log('you got an B');
//		break;
//	case 'C':
//		console.log('you got an C');
//		break;
//	case 'D':
//		console.log('you got an D...');
//		break;
//	case 'E':
//		console.log('you got an E..?');
//		break;
//	case 'F':
//		console.log('you got an EEEFFFFF!');
//		break;
//	default:
//		console.log('dot a grade, girl');
// }

//--------------------------------------------------------
// let age = 30; //route/global scope
// if (true) {
//	let age = 40; // nested code block
//	let name = 'shawn';
//	console.log('inside code block: ', age, name); // grabs nested age/name
//	if (true);
//	{
//		let age = 50;
//		console.log('in 2nd code block: ', age); // even further nested
//	}
// }
// console.log('outside code block: ', age, name); // grabs global age/name

//--------------------------------------------------------
// function declaration (are 'hoisted' to the top)
// function greet() {
//	console.log('hello there');
// }

// function expression = storing function in a veritable, not hoisted (always has ; at the end)
// const speak = function (name = 'luigi', time = 'night') {
//	console.log(`good ${time} ${name}`);
// };
// speak('jessie', "evening"); -> need to be called in order they are declared in the function

// const calcArea = function (radius) {
//	return 3.14 * radius ** 2;
// };
// const a = calcArea(5);
// console.log(a);
