describe('myName', function () {
	it('should exist', function () {
		expect(myName).toEqual(jasmine.any(String));
	})
	it('should equal myName + \' loves code\'', function () {
		expect(iLoveCode).toEqual(myName + ' loves code');
	})
})

describe('arrow functions', function () {
	it('wildNameReturn should exist', function(){
		expect(wildNameReturn).toEqual(jasmine.any(Function));
	})
	it('wildNameReturn should return correct value', function(){
		expect(wildNameReturn(myName) === `wild ${myName}`).toBe(true);
	})
	it('sum should exist', function(){
		expect(sum).toEqual(jasmine.any(Function));
	})
	it('sum should return correct value', function(){
		expect(sum(3) === 6).toBe(true);
	})
	it('greeter should exist', function(){
		expect(greeter).toEqual(jasmine.any(Function));
	})
	it('greeter should return correct value', function(){
		expect(greeter('Bryan', 27)).toBe("Hi, I'm Bryan and I am 27 years old");
	})
	it('animalSounds should exist', function(){
		expect(animalSounds).toEqual(jasmine.any(Function));
	})
	it('animalSounds should return correct value', function(){
		expect(animalSounds('Bryan', 'meow', wildNameReturn)).toBe("I am wild Bryan. Hear me meow");
	})
})

describe('callback functions', function(){
	it('first should be defined', function(){
		expect(first).toBeDefined();
		expect(first).toEqual(jasmine.any(Function));
	})
	it('should return the first item of a passed array to the callback', function () {
		var arr = ['test', 'no'];
		var callback = jasmine.createSpy(function (str) {
			return str
		})
		var test = first(arr, callback);
		expect(callback).toHaveBeenCalledWith('test');
	})
	it('first should be defined', function(){
		expect(multiply).toBeDefined();
		expect(multiply).toEqual(jasmine.any(Function));
	})
	it('should multiply the first two parameters and pass the result to the callback', function () {
		var callback = jasmine.createSpy(function (num) {
			return num
		})
		var test = multiply(25, 4, callback);
		expect(callback).toHaveBeenCalledWith(100);
	})
	it('last should be defined', function(){
		expect(last).toBeDefined();
		expect(last).toEqual(jasmine.any(Function));
	})
	it('should return the last item of a passed array to the callback', function () {
		var arr = ['test', 'no'];
		var callback = jasmine.createSpy(function (str) {
			return str
		})
		var test = last(arr, callback);
		expect(callback).toHaveBeenCalledWith('no');
	})
	it('sizer should be defined', function(){
		expect(sizer).toBeDefined();
		expect(sizer).toEqual(jasmine.any(Function));
	})
	it('should find the larger number of the first two parameters and pass the result to the callback', function () {
		var callback = jasmine.createSpy(function (num) {
			return num
		})
		var test = sizer(25, 4, callback);
		expect(callback).toHaveBeenCalledWith(25);
	})
})

describe('methods on arrays', function(){
	it('friends array should include Harry', function(){
		expect(friends).toEqual(['Cam', 'Corey', 'Landy', 'Harry'])
	})
	it('shortNames should exist', function(){
		expect(shortNames).toBeDefined();
	})
	it('filtering friends array should only return \'Cam\'', function(){
		expect(shortNames).toEqual(['Cam']);
	})
	it('evens should exist', function(){
		expect(evens).toBeDefined();
	})
	it('filtering numbers array should only return even values', function(){
		expect(evens).toEqual([6,88,500]);
	})
	it('shorty should be defined', function(){
		expect(shorty).toBeDefined();
	})
	it('mapping over array shoud return correct nick names', function(){
		expect(shorty).toEqual(['CaCa', 'CoCo', 'LaLa', 'HaHa']);
	})
	it('plusThree should be defined', function(){
		expect(plusThree).toBeDefined();
	})
	it('mapping should return correct values', function(){
		expect(plusThree).toEqual([4, 28, 9, 91, 50, 80, 336, 503]);
	})
	it('goodPeople array of objects should have correct values', function(){
		var test = [{name: "George", family: true},{name: "Randi", family: true},{name: "Lindsey", family: true}]
		expect(goodPeople).toEqual(test);
	})
})