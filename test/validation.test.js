const expect = require('chai').expect;

//Przegrałem walkę z niepowodzeniem importu pomiędzy plikami
//postanowiłem przetestować funkcje w ten sposób


function numberFieldTest(field) {
    const reg = /^[0-9]{9}$/;
    return reg.test(field.value);
}
function codeFieldTest(field) {
    const reg = /^[0-9]{4}$/;
    return reg.test(field.value);
}


describe('Inputs testing', () => {
    describe('Number field', () => {
        it('should return true when number is correct', () => {
            expect(numberFieldTest({ value: '123456789' })).to.equal(true);
        })
        it('should return false when number is too long ', () => {
            expect(numberFieldTest({ value: '1234567890' })).to.equal(false);
        })
        it('should return false when number is too short', () => {
            expect(numberFieldTest({ value: '123456' })).to.equal(false);
        })
    });
    describe('Code field', () => {
        it('should return true when code is correct', () => {
            expect(codeFieldTest({ value: '1234' })).to.equal(true);
        })
        it('should return false when code is too long ', () => {
            expect(codeFieldTest({ value: '12345' })).to.equal(false);
        })
        it('should return false when code is too short', () => {
            expect(codeFieldTest({ value: '123' })).to.equal(false);
        })
    });

})