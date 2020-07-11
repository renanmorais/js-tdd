var expect = require('chai').expect;

describe('Main', function () {
    var arr =[1, 2, 3];
    //roda todas as vezes, antes de cada bloco
    beforeEach(function () {
        arr =[1, 2, 3];
    });

    //shoud be an array
    it('should be an array', function () {
        expect(arr).to.be.a('array');
    })

    it('should have a size of 4 when push another value to the array', function () {
        arr.push(4);
        expect(arr).to.have.lengthOf(4);
    });

    it('should remove the value 3 when use pop in the array', function () {
        arr.pop();
        expect(arr).to.not.include(3);
    });

    it('should return true when pop 3 from the array', function () {
        expect(arr.pop() === 3).to.be.true;
    })

    it('should have a size of 2 when pop a value form the array', function () {
        arr.pop();
        expect(arr).to.have.lengthOf(2);
    });


});


//before
//beforeEach
//test 1
//afterEach
//beforeEach
//teste 2
//afterEach
//after
