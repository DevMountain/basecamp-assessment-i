describe('myName', function () {
	it('should exist and be a string', function () {
		expect(myName).toEqual(jasmine.any(String));
	})
})

describe('faveNum', function () {
	it('should exist and be a number', function () {
		expect(faveNum).toEqual(jasmine.any(Number));
	})
})

describe('lovesCode', function () {
	it('should be equal to true', function () {
		expect(lovesCode).toEqual(true);
	})
})

describe('me', function () {
	it('should equal the correct string', function () {
		expect(me).toEqual(`My name is ${myName} and my favorite number is ${faveNum}`);
	})
})

describe('trueFaveNum', function () {
	it('should be equal to your faveNum variable', function () {
		expect(trueFaveNum === true).toEqual(true);
	})
})

describe('notHakeem', function () {
	it('myName should not equal Hakeem Olajuwon', function () {
		expect(notHakeem).toEqual(true);
	})
})

describe('canDrive', function () {
	it('canDrive should be set to true', function () {
		expect(canDrive).toEqual(true)
	})
})

describe('responseCreator', function () {
	it('responseCreator should assign the correct value to colorResponse', function () {
		expect(responseCreator('green')).toEqual('Green is okay')
		expect(responseCreator('red')).toEqual('I heart red')
		expect(responseCreator('blue')).toEqual('What is your favorite color?')
	})
})

describe('sum', function () {
	it('sum should return the sum of the passed in param', function () {
		expect(sum(3) === 6).toBe(true)
	})
})

describe('greeter', function () {
	it('should return the correct response', function () {
		expect(greeter('Bryan', 28)).toEqual(`Hi! I am Bryan and I am 28 years old`)
	})
})
