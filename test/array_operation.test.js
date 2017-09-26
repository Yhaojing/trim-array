import assert from 'assert';
import ArrayOperation from '../index';

const array = ['a','b', 'c', 'd', 'e', 'f'];

describe('Array trime', function () {
    it('get first element of an Array', function () {
        const element = ArrayOperation.getArrayElementByIndex(array);
        assert.strictEqual(element, 'a');
    })
    it('get last element of an Array', function () {
        const element = ArrayOperation.getArrayElementByIndex(array, array.length - 1);
        assert.strictEqual(element, 'f');
    })
    it('intercept Array', function () {
        const element = ArrayOperation.interceptArray(array, 2, 2);
        assert.deepEqual(element, ['c', 'd']);
    })
})