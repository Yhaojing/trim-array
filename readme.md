# trim-array
get first element, last element ,first n elements or last n elements of an array

# API
``` javascript
/**
     * 获取数组某位置的元素
     * @param array 数组
     * @param index 位置
     * @returns {*}
     */
getArrayElementByIndex(array, index)
 /**
     * 截取数组
     * @param array
     * @param from 开始位置，包含开始位置的元素
     * @param len 截取长度
     * @returns {Array} 返回数组
     */
interceptArray(array, from, len)
```
## Usage
```javascript
import trimArray from 'trim-array';

const array = ['a', 'b', 'c', 'd'];

trimArray.getArrayElementByIndex(array)
// => a
trimArray.interceptArray(array, 2, 2)
// => ['c', 'd]
trimArray.interceptArray(array, 2, 5)
// => Error: Intercept the array length more than the actual length

```
## Author haoj