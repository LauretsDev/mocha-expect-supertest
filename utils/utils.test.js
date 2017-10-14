const expect = require('expect');
const utils = require('./utils');

describe('Utils', () => {

    describe('#add', () => {
        it('should add two numbers', () => {
            var res = utils.add(33, 11);

            expect(res).toBe(44).toBeA('number');
            // if(res !== 44) {
            //     throw new Error(`Expected 44, but got ${res}`);
            // }
        });
    });

    it('should square a number', () => {
        var res = utils.square(3);
        expect(res).toBe(9).toBeA('number');
        // if(res !== 9) {
        //     throw new Error(`expected 9, but got ${res}`);
        // }
    });

    it('it should async square a number', (done) => {
        utils.asyncSquare(5, (res) => {
            expect(res).toBe(25).toBeA('number');
            done();
        });
    });

    it('should async add two numbers', (done) => {
        utils.asyncAdd(4, 3, (sum) => {
            expect(sum).toBe(7).toBeA('number');
            done();
        });
    });
});

// should verify first and laste names are set
// assert it includes firstName and lastName with proper values
it('should set firstName and lastName', () => {
    var user = {location: 'Brazil', age: 24};
    var res = utils.setName(user, 'Diego Laurentino');
    expect(res).toInclude({
        firstName: 'Diego',
        lastName: 'Laurentino'
    });
});

// it('should expect some values', () => {
//     // expect(12).toNotBe(12)
//     // expect({name: 'Diego'}).toEqual({name: 'Diego'});
//     // expect([2,3,4]).toInclude(3);
//     expect({
//         name: 'Diego',
//         age: 25,
//         location: 'Brazil'
//     }).toInclude({
//         age: 25
//     });
// });
