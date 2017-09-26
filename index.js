const errorMsg = 'This is an error, expects an array as the first argument';
const errorMsgLen = "Intercept the array length more than the actual length";

class ArrayOperation {
    getArrayElementByIndex(array, index = 0) {
        if (array instanceof Array) {
            return array[index]
        } else {
            throw new Error(errorMsg);
        }
    }
    /**
     * 截取数组
     * @param array
     * @param from 开始位置，包含开始位置的元素
     * @param len 截取长度
     * @returns {Array} 返回数组
     */
    interceptArray(array, from, len) {
        let a = [];
        if (array instanceof Array) {
            if (array.length === 0) {
                return null;
            }

            if (len > (array.length - from)) {
                throw new Error(errorMsgLen)
            }
            for (let [index, elem] of array.entries()) {
                if (index >= from && a.length < len) {
                    a = [...a, elem];
                }
            }
        } else {
            throw new Error(errorMsg)
        }
        return a;
    }
}

module.exports = new ArrayOperation();
