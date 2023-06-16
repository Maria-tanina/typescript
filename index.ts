// const electricityUserData = {
// 	readings: 95,
// 	units: "kWt",
// 	mode: "double",
// };

// const waterUserData = {
// 	readings: 3,
// 	units: "m3",
// };

// const elRate: number = 0.45;
// const wRate: number = 2;

// const monthPayments: number[] = [0, 0]; // [electricity, water]

// const calculatePayments = (
// 	{readings, mode}: {
// 		readings: number;
// 		mode: string;
// 	},
// 	wData: {
// 		readings: number;
// 		units: string;
// 	},
// 	elRate: number, 
// 	wRate: number): void => {
// 	if (mode === "double" && readings < 50) {
// 		monthPayments[0] = readings * elRate * 0.7;
// 	} else {
// 		monthPayments[0] = readings * elRate;
// 	}

// 	monthPayments[1] = wData.readings * wRate;
// };

// calculatePayments(electricityUserData, waterUserData, elRate, wRate);

// const sendInvoice = (
// 	[el, water]: number[], 
// 	electricityUserData: {
// 		readings: number;
// 		units: string;
// 	}, 
// 	waterUserData: {
// 		readings: number;
// 		units: string;
// 	}): string => {
// 	const text: string = `    Hello!
//     This month you used ${electricityUserData.readings} ${electricityUserData.units} of electricity
//     It will cost: ${el}€
    
//     This month you used ${waterUserData.readings} ${waterUserData.units} of water
//     It will cost: ${water}€`;

// 	return text;
// };


// const invoice = sendInvoice(monthPayments, electricityUserData, waterUserData);
// console.log(invoice);


// const userData = {
// 	isBirthday: true,
// 	ade: 40,
// 	name: 'Ivan'
// }

// const userDataTuple: [boolean, number, ...string[]] = [true, 40, 'Ivan', 'Jat', 'Paul'];

// const res = userDataTuple.map((t) => `${t} - data`);

// const [first, second] = res;
// console.log(first)


// const message: string | number = 7;
// const arr: number[] | string[] = [6,7,2,1];

// function printMsg(msg: string[] | number): string[] | number {
// 	if(Array.isArray(msg)) {
// 		return msg.map(p => `Allo ${p}`)
// 	} else {
// 		return msg;
// 	}
// }

// printMsg(5);

// function checkReadings(readings: {system: number} | {user: number}): void {
// 	if('system' in readings) {
// 		console.log(readings.system)
// 	} else {
// 		console.log(readings.user)
// 	}
// }


// function logValue(x: string | Date): void {
// 	if(x instanceof Date) {
// 		console.log(x.getDay())
// 	} else {
// 		console.log(x.length)
// 	}

// }

// let msg: 'Hello' = 'Hello';

// msg = 'Hello'

// type Config = {protocol: 'http' | 'https'; port: 3000 | 3001};

// type Role = {status: string}
// type ConfigWithRole = Config & Role;

// interface Config {
// 	protocol: 'http' | 'https';
// 	port: 3000 | 3001;
// 	log: (msg: string) => void
// }

// interface Role {
// 	role: string
// }

// interface ConfigWithRole extends Config, Role {

// }

// const serverConfig: ConfigWithRole = {
// 	protocol: 'https',
// 	port: 3000,
// 	role: 'admin',
// 	log: (msg: string) => console.log(msg)
// }

// type Server = (
// 	protocol: 'http' | 'https', 
// 	port: 3000 | 3001, 
// 	log: (msg: string) => void
// 	) => string;

// const startServer: Server = (
// 	protocol: 'http' | 'https', 
// 	port: 3000 | 3001,
// 	log: (msg: string) => void
// 	): 'Server started' => {
// 	log(`Protocol -${protocol} , server -${port} `)
// 	return 'Server started'
// }

// startServer(serverConfig.protocol, serverConfig.port, serverConfig.log);

// interface IStyles {
// 	[key: string]: string
// }

// const styles: IStyles = {
// 	position: 'absolute',
// 	top: '20px',
// 	left: '50px'
// }



// //псевдонимы типов
// // type AnimationTimingFunc = 'ease' | 'ease-out' | 'ease-in';
// // type AnimationId = string | number;


// // function createAnimation(
// // 	id: AnimationId, 
// // 	animName: string, 
// // 	timingFunction: AnimationTimingFunc = 'ease',
// // 	dureation: number,
// // 	iterCount: 'infitite' | number
// // 	): void {
// // 	//let elem = document.querySelector(`#${id}`) as HTMLElement;
// // 	//if(elem) {
// // 		//elem.style.animation = `${animName} ${timingFunction} ${dureation} ${iterCount}`;
// // 		console.log(`${animName} ${timingFunction} ${dureation} ${iterCount}`);
// // 	//}
	
// // }
// // createAnimation(3, 'ana', 'ease', 5, 5)

// let port3002 = 3002;



// interface User {
// 	login: string;
// 	password: string;
// 	age: number;
// 	//addr?: string;
// 	addr: string | undefined;
// 	parents?: {
// 		mother?: string;
// 		father?: string;
// 	}
// }


// const user: User = {
// 	login: 'aa',
// 	password: 'fff',
// 	age: 18,
// 	addr: 'tdfg'

// }

// const userFreeze: Readonly<User> = {
// 	login: 'aa',
// 	password: 'fff',
// 	age: 18,
// 	addr: 'tdfg'
// }

// //кортедж Tuple                    spread-operator
// const basicPorts: Readonly<[number, ...string[]]> = [3000, 'ddd', 'ffff'];



// const dbName = 'ferf';


// function logger(data: User, db?: string): void {
// 	console.log(data.parents?.father, db?.toLowerCase())

// }
// logger(user, dbName);

enum Directions {
	TOP,
	LEFT,
	RIGHT,
	BOTTOM
}
enum TimingFunc {
	EASE = 'ease',
	EASE_IN = 'ease-in',
	LINERAL = 'lineral'
}

function frame(elem: string, dir: Directions, tFunc: TimingFunc) {
	if(dir === Directions.RIGHT) {
		
	}

}

frame('id', Directions.RIGHT, TimingFunc.EASE);



let smth: any;
smth = 'str';
let data: string[] = smth;
data.find(e => e);



// let smth2: unknown;
// smth2 = 'str';
// let data2: string[] = smth2;
// data2.find(e => e);


function fetchData(data: unknown): void {

	if(typeof data === 'string') {
		console.log(data.toLowerCase())
	}


}

const userData = '{"isBirthday": true, "age": 40, "userName": "John"}'

function safeParse(s: string): unknown {
	return JSON.parse(s);
}

const res = safeParse(userData);
function transferData(d: unknown): void {
	if(typeof d === 'string') {
		console.log(d.toLowerCase());
	} else if(typeof d === 'object' && d) {
		console.log(d)
	}else {
		console.error('Some error');
		
	}
}


try {
	if(1) {
		throw new Error('error')
	}
} catch(e) {
	if(e instanceof Error) {
		console.log(e.message)
	} else if(typeof e === 'string') {
		console.log(e)
	}
	
}

type T0 = any | unknown;

type T1 = number | unknown;


const dataFromcontrol = {
	water: 200,
	el: 400
}

function checkReadings(data: typeof dataFromcontrol): boolean {
	const dataFromUser = {
		water: 200,
		el: 400
	}

	if(dataFromUser.el === data.el && dataFromUser.water=== data.water) {
		return true
	} else {
		return false;
	}

}
