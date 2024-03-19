// const { InfiniteNumber } = require('../src/InfiniteNumberArithmetic');

describe("Infinite Number", function () {

    describe("Infinite Number Constructor", function () {

        describe("For Number Input", function () {
            it("should handle integer number correctly", function () {
                let numObj = new InfiniteNumber(123)
                expect(numObj.getInternalArray()).toEqual([1, 2, 3])
            })
            it("should handle the number zero correctly", function () {
                let zeroObj = new InfiniteNumber(0);
                expect(zeroObj.getInternalArray()).toEqual([0]);
            })
            it("should reject NaN", function () {
                let nanObj = new InfiniteNumber(NaN);
                expect(nanObj).toEqual(jasmine.any(Error));
            })
            it("should reject non-integer numbers", function () {
                let floatObj = new InfiniteNumber(123.45);
                expect(floatObj).toEqual(jasmine.any(Error));
            })
            it("should reject negative numbers", function () {
                let negativeObj = new InfiniteNumber(-123);
                expect(negativeObj).toEqual(jasmine.any(Error));
            })
        })

        describe("For String Input", function () {
            it("should handle numeric strings correctly", function () {
                let strObj = new InfiniteNumber("456");
                expect(strObj.getInternalArray()).toEqual([4, 5, 6]);
            })
            it("should reject non-numeric strings", function () {
                let nonNumericStrObj = new InfiniteNumber("abc");
                expect(nonNumericStrObj).toEqual(jasmine.any(Error));
            })
            it("should reject non-integer strings", function () {
                let nonNumericStrObj = new InfiniteNumber("123.23");
                expect(nonNumericStrObj).toEqual(jasmine.any(Error));
            })
            it("should reject negative integer strings", function () {
                let nonNumericStrObj = new InfiniteNumber("-123");
                expect(nonNumericStrObj).toEqual(jasmine.any(Error));
            })
        })

        describe("For Array Input", function () {
            it("should handle arrays of integers correctly", function () {
                let arrayObj = new InfiniteNumber([7, 8, 9]);
                expect(arrayObj.getInternalArray()).toEqual([7, 8, 9]);
            })
            it("should reject arrays with non-integer elements", function () {
                let invalidArrayObj = new InfiniteNumber([1, "a", 3]);
                expect(invalidArrayObj).toEqual(jasmine.any(Error));
            })
            it("should reject arrays with negative integers", function () {
                let negativeArrayObj = new InfiniteNumber([-1, 2, 3]);
                expect(negativeArrayObj).toEqual(jasmine.any(Error));
            })
        })

        describe("For Object Input", function () {
            it("should handle object of integer as values correctly", function () {
                let objectObj = new InfiniteNumber({ a: 1, b: 2 })
                expect(objectObj.getInternalArray()).toEqual([1, 2])
            })
            it("should reject object of non-integer as values ", function () {
                let objectObj = new InfiniteNumber({ a: "a", b: "b" })
                expect(objectObj).toEqual(jasmine.any(Error))
            })
            it("should reject object of negative integer as values ", function () {
                let objectObj = new InfiniteNumber({ a: -1, b: 3 })
                expect(objectObj).toEqual(jasmine.any(Error))
            })
        })

        describe("For Other Inputs", function () {
            it("should reject null", function () {
                let nullObj = new InfiniteNumber(null);
                expect(nullObj).toEqual(jasmine.any(Error));
            })
            it("should reject undefined", function () {
                expect(function () {
                    new InfiniteNumber(undefined)
                }).toThrowError("Constuctor of IniniteNumber does not support this data type undefined")
            })
        })
    })

    describe("Infinite Number Addition", function () {
        it("should correctly add two positive numbers", function () {
            let firstNum = new InfiniteNumber("123")
            let secondNum = new InfiniteNumber("456")
            let result = firstNum.addInfiniteNumber(secondNum)
            expect(result.getNumberAsString()).toEqual("579")
        })
        it("should correctly add a number to zero", function () {
            let firstNum = new InfiniteNumber("0");
            let secondNum = new InfiniteNumber("123");
            let result = firstNum.addInfiniteNumber(secondNum);
            expect(result.getNumberAsString()).toEqual("123");
        })
        it("should correctly add numbers of different lengths", function () {
            let firstNum = new InfiniteNumber("1234");
            let secondNum = new InfiniteNumber("567");
            let result = firstNum.addInfiniteNumber(secondNum);
            expect(result.getNumberAsString()).toEqual("1801");
        })
        it("should correctly handle carry in the most significant digit", function () {
            let firstNum = new InfiniteNumber("999");
            let secondNum = new InfiniteNumber("1");
            let result = firstNum.addInfiniteNumber(secondNum);
            expect(result.getNumberAsString()).toEqual("1000");
        })
    })

    describe("Infinite Number check two number",function(){
        it("should return true when the first number is greater than the second number", function() {
            let firstNum = new InfiniteNumber("456");
            let secondNum = new InfiniteNumber("123");
            expect(firstNum.compareTwoInfiniteNumber(secondNum)).toBe(true);
        });
        it("should return false when the first number is less than the second number", function() {
            let firstNum = new InfiniteNumber("123");
            let secondNum = new InfiniteNumber("456");
            expect(firstNum.compareTwoInfiniteNumber(secondNum)).toBe(false);
        })
        it("should return true when the first number is equal to the second number", function() {
            let firstNum = new InfiniteNumber("123");
            let secondNum = new InfiniteNumber("123");
            expect(firstNum.compareTwoInfiniteNumber(secondNum)).toBe(true);
        })
        it("should return true when the first number is greater and has more digits than the second number", function() {
            let firstNum = new InfiniteNumber("1234");
            let secondNum = new InfiniteNumber("123");
            expect(firstNum.compareTwoInfiniteNumber(secondNum)).toBe(true);
        })
        it("should return false when the first number is less and has fewer digits than the second number", function() {
            let firstNum = new InfiniteNumber("123");
            let secondNum = new InfiniteNumber("1234");
            expect(firstNum.compareTwoInfiniteNumber(secondNum)).toBe(false);
        })
        it("should return true when comparing a larger number with leading zeros to a smaller number", function() {
            let firstNum = new InfiniteNumber("0123");
            let secondNum = new InfiniteNumber("122");
            expect(firstNum.compareTwoInfiniteNumber(secondNum)).toBe(true);
        })
        it("should return false when the first number is smaller with the same number of digits as the second number", function() {
            let firstNum = new InfiniteNumber("123");
            let secondNum = new InfiniteNumber("124");
            expect(firstNum.compareTwoInfiniteNumber(secondNum)).toBe(false);
        })
    })

    describe("Infinite Number Subtraction", function () {
        it("should correctly subtract two positive numbers of equal length", function () {
            let firstNum = new InfiniteNumber("456");
            let secondNum = new InfiniteNumber("123");
            let result = firstNum.subtractInfiniteArray(secondNum);
            expect(result.getNumberAsString()).toEqual("333");
        });

        it("should correctly subtract two positive numbers of different lengths", function () {
            let firstNum = new InfiniteNumber("1000");
            let secondNum = new InfiniteNumber("1");
            let result = firstNum.subtractInfiniteArray(secondNum);
            expect(result.getNumberAsString()).toEqual("999");
        })
        it("should correctly handle leading zeros after subtraction", function() {
            let firstNum = new InfiniteNumber("1000");
            let secondNum = new InfiniteNumber("999");
            let result = firstNum.subtractInfiniteArray(secondNum);
            expect(result.getNumberAsString()).toEqual("1");
        });
        it("should return an error when the second number is greater than the first", function() {
            let firstNum = new InfiniteNumber("123");
            let secondNum = new InfiniteNumber("456");
            expect(function() { 
                firstNum.subtractInfiniteArray(secondNum); 
            }).toThrowError("The second number cannot be greater than the first");
        });
    })

    describe("Infiniete Number Multiplication",function(){
        it("should correctly multiply two positive numbers", function() {
            let firstNum = new InfiniteNumber("123");
            let secondNum = new InfiniteNumber("2");
            let result = firstNum.multiplyInfiniteNumber(secondNum);
            expect(result.getNumberAsString()).toEqual("246");
        })
        it("should correctly multiply a number by 1", function() {
            let firstNum = new InfiniteNumber("123");
            let secondNum = new InfiniteNumber("1");
            let result = firstNum.multiplyInfiniteNumber(secondNum);
            expect(result.getNumberAsString()).toEqual("123");
        })
    })
})

