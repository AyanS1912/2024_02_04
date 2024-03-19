    // InfiniteArithmeticSpec.js
    // const InfiniteNumberArithmetic = require('../src/InfiniteNumberArithmetic')
    describe('InfiniteNumberArithmetic', () => {
        describe('constructor', () => {

            it("should throw an error for null input", function() {
                expect(function() {
                    new InfiniteNumberArithmetic(null);
                }).toThrowError("Cannot convert undefined or null to object");
            });
        
            it("should throw an error for undefined input", function() {
                expect(function() {
                    new InfiniteNumberArithmetic(undefined);
                }).toThrowError("Constructor of InfiniteNumberArithmetic does not support this data type undefined");
            });
        
            it("should throw an error for boolean input", function() {
                expect(function() {
                    new InfiniteNumberArithmetic(true);
                }).toThrowError("Constructor of InfiniteNumberArithmetic does not support this data type boolean");
            });

            it('should initialize with a number', () => {
                const num = new InfiniteNumberArithmetic(123);
                expect(num.getNumberAsString()).toBe('123');
            });

            it('should initialize with a string', () => {
                const num = new InfiniteNumberArithmetic('456');
                expect(num.getNumberAsString()).toBe('456');
            });

            it('should initialize with an array', () => {
                const num = new InfiniteNumberArithmetic([7, 8, 9]);
                expect(num.getNumberAsString()).toBe('789');
            });

            it('should initialize with another InfiniteNumberArithmetic object', () => {
                const num1 = new InfiniteNumberArithmetic(123);
                const num2 = new InfiniteNumberArithmetic(num1);
                expect(num2.getNumberAsString()).toBe('123');
            });

            it('should throw an error for negative number initialization', () => {
                expect(() => {
                    new InfiniteNumberArithmetic(-123); // Pass a negative number
                }).toThrowError('Input cannot be negative.');
            });

            it('should throw an error for NaN initialization', () => {
                expect(() => {
                    new InfiniteNumberArithmetic(NaN); // Pass NaN
                }).toThrowError('Input is NaN.');
            });

            it('should throw an error for decimal number initialization', () => {
                expect(() => {
                    new InfiniteNumberArithmetic(12.34); // Pass a decimal number
                }).toThrowError('Input needs to be an integral value.');
            });

        });

        describe("For Number Input", function () {
            it("should handle large positive integers correctly", function () {
                let numObj = new InfiniteNumberArithmetic(9876543210);
                expect(numObj.getInternalArray()).toEqual([9, 8, 7, 6, 5, 4, 3, 2, 1, 0]);
            });
            it("should handle the number 1 correctly", function () {
                let oneObj = new InfiniteNumberArithmetic(1);
                expect(oneObj.getInternalArray()).toEqual([1]);
            });
        });

        describe("For String Input", function () {
            it("should handle leading zeros correctly", function () {
                let strObj = new InfiniteNumberArithmetic("001234");
                expect(strObj.getInternalArray()).toEqual([1, 2, 3, 4]);
            });
            it("should handle large positive numeric strings correctly", function () {
                let strObj = new InfiniteNumberArithmetic("9876543210");
                expect(strObj.getInternalArray()).toEqual([9, 8, 7, 6, 5, 4, 3, 2, 1, 0]);
            });
        });

        describe("For Array Input", function () {
            it("should handle large positive arrays of integers correctly", function () {
                let arrayObj = new InfiniteNumberArithmetic([9, 8, 7, 6, 5, 4, 3, 2, 1, 0]);
                expect(arrayObj.getInternalArray()).toEqual([9, 8, 7, 6, 5, 4, 3, 2, 1, 0]);
            });
            it("should handle arrays with leading zeros correctly", function () {
                let arrayObj = new InfiniteNumberArithmetic([0, 0, 1, 2, 3, 4]);
                expect(arrayObj.getInternalArray()).toEqual([1, 2, 3, 4]);
            });
        });

        describe("For Object Input", function () {
            it("should handle large positive object values correctly", function () {
                let objectObj = new InfiniteNumberArithmetic({ a: 9, b: 8, c: 7, d: 6, e: 5 });
                expect(objectObj.getInternalArray()).toEqual([9, 8, 7, 6, 5]);
            });
            it("should handle objects with leading zeros correctly", function () {
                let objectObj = new InfiniteNumberArithmetic({ a: 0, b: 0, c: 1, d: 2, e: 3 });
                expect(objectObj.getInternalArray()).toEqual([1, 2, 3]);
            });
        });


        // describe("For Other Inputs", function () {
        //     it("should reject Infinity", function () {
        //         expect(function () {
        //             new InfiniteNumberArithmetic(Infinity);
        //         }).toThrowError("Constructor of InfiniteNumber does not support this data type Infinity");
        //     });
        //     it("should reject negative zero", function () {
        //         expect(function () {
        //             new InfiniteNumberArithmetic(-0);
        //         }).toThrowError("Input cannot be negative.");
        //     });
        // });

        describe('addition', () => {
            it('should correctly add two positive numbers', () => {
                const num1 = new InfiniteNumberArithmetic(123);
                const num2 = new InfiniteNumberArithmetic(456);
                const result = num1.addition(num2);
                expect(result.getNumberAsString()).toBe('579');
            });
        });

        describe('subtraction', () => {
            it('should correctly subtract two positive numbers', () => {
                const num1 = new InfiniteNumberArithmetic(1000);
                const num2 = new InfiniteNumberArithmetic(123);
                const result = num1.subtraction(num2);
                expect(Number(result.getNumberAsString())).toBe(Number('877')); // Adjusted expectation
            });

            it('should throw an error when the second number is greater than the first', () => {
                const num1 = new InfiniteNumberArithmetic(123);
                const num2 = new InfiniteNumberArithmetic(456);
                expect(() => {
                    num1.subtraction(num2);
                }).toThrowError('The second number cannot be greater than the first.');
            });
        });

        describe('multiplication', () => {
            it('should correctly multiply two positive numbers', () => {
                const num1 = new InfiniteNumberArithmetic(123);
                const num2 = new InfiniteNumberArithmetic(456);
                const result = num1.multiplication(num2);
                expect(result.getNumberAsString()).toBe('56088');
            });
        });

        describe('getInternalArray', () => {
            it('should return the internal array representing individual digits', () => {
                const num = new InfiniteNumberArithmetic(123);
                const internalArray = num.getInternalArray();
                expect(internalArray).toEqual([1, 2, 3]);
                expect(internalArray).not.toContain(null); // Check for null values
                expect(internalArray).not.toContain(undefined); // Check for undefined values
            });
        });

        describe('getNumberAsString', () => {
            it('should return the representation of the number as a string', () => {
                const num = new InfiniteNumberArithmetic(123);
                const numberAsString = num.getNumberAsString();
                expect(numberAsString).toBe('123');
            });
        });
    });
