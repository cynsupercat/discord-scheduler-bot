import { expect, assert } from 'chai';
import Duration from '../../../src/domain/entities/duration';
describe('Duration', () => {
    describe('Valid duration', () => {
        const data = [
            {
                value: '1h30m',
                expectedHours: 1,
                expectedMinutes: 30
            }, 
            {
                value: '5h45m',
                expectedHours: 5,
                expectedMinutes: 45
            },
            {
                value: '0h12m',
                expectedHours: 0,
                expectedMinutes: 12
            },
            {
                value: '12h0m',
                expectedHours: 12,
                expectedMinutes: 0
            },
            {
                value: '12h25',
                expectedHours: 12,
                expectedMinutes: 25
            }];
    
        // Act/Assert
        data.forEach(i => {
            it(`${i.value} created a duration object`, () => {
                const result = Duration.fromValue(i.value);
                expect(result.hours).equal(i.expectedHours);
                expect(result.minutes).equal(i.expectedMinutes);
            })
        });
    });

    describe('Invalid duration', () => {

        const data = ['abch32m', '24habcm', '130m', 'abcdefg'];

        data.forEach(i => {
            it(`${i} throws error because it's an invalid duration`, () => {
                assert.throws(() => Duration.fromValue(i), Error);
            })
        });
    })
})