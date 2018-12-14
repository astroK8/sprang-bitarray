import { isUndefined, isString, isNumber } from 'lodash';
var BitArray = /** @class */ (function () {
    function BitArray(size, value) {
        this._size = 0;
        this._bit_array = new Map();
        this._size = size;
        if (isUndefined(value)) {
            for (var i = 0; i < size; i++) {
                this._bit_array.set(i, 0);
            }
        }
        else {
            this.setArray(value);
        }
    }
    BitArray.prototype.setArray = function (value) {
        if (isString(value)) {
            this.setValueFromString(value);
        }
        else if (isNumber(value)) {
            this.setValueFromString(BitArray.dec2bin(value));
        }
        return this;
    };
    BitArray.prototype.resetArray = function () {
        this.setArray(0);
        return this;
    };
    BitArray.prototype.set = function (index, bitVal) {
        if (index >= this._size) {
            throw ('BitArray set out of bounds');
        }
        if (isUndefined(bitVal)) {
            this._bit_array.set(index, 1);
        }
        else {
            this._bit_array.set(index, bitVal);
        }
        return this;
    };
    BitArray.prototype.unset = function (index) {
        if (index >= this._size) {
            throw ('BitArray unset out of bounds');
        }
        this._bit_array.set(index, 0);
        return this;
    };
    BitArray.prototype.toggle = function (index) {
        if (index >= this._size) {
            throw ('BitArray toggle out of bounds');
        }
        var prev = this.get(index);
        this._bit_array.set(index, (prev ^ 1));
        return this;
    };
    BitArray.prototype.get = function (index) {
        if (index >= this._size) {
            throw ('BitArray get out of bounds');
        }
        return this._bit_array.get(index) || 0;
    };
    BitArray.prototype.toString = function () {
        var str = '';
        this._bit_array.forEach(function (b) {
            str = b.toString() + str;
        });
        return str;
    };
    BitArray.prototype.toNumber = function () {
        var n = 0;
        this._bit_array.forEach(function (b, index) {
            n = n + b * Math.pow(2, index);
        });
        return n;
    };
    //____________________________
    BitArray.prototype.setValueFromString = function (str) {
        if (str.length > this._size) {
            throw ('BitArray set value overflow');
        }
        str = BitArray.reverseString(str);
        for (var i = 0; i < this._size; i++) {
            var bit = 0;
            if (str[i]) {
                bit = parseInt(str[i]);
            }
            this._bit_array.set(i, bit);
        }
    };
    // ______________________________
    BitArray.dec2bin = function (dec) {
        return (dec >>> 0).toString(2);
    };
    BitArray.reverseString = function (str) {
        return str.split('').reverse().join('');
    };
    return BitArray;
}());
export { BitArray };
//# sourceMappingURL=bitarray.js.map