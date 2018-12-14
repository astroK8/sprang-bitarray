import { isUndefined, isString, isNumber } from 'lodash';

export type Bit = 0 | 1;

export class BitArray {

    private _size: number = 0;
    private _bit_array = new Map() as Map<number, Bit>;

    constructor(size: number, value?: string | number) {
        this._size = size;
        if (isUndefined(value)) {
            for (let i = 0; i < size; i++) {
                this._bit_array.set(i, 0);
            }
        } else {
            this.setArray(value);
        }
    }

    public setArray(value: string | number): BitArray {
        if (isString(value)) {
            this.setValueFromString(value);
        } else if (isNumber(value)) {
            this.setValueFromString(BitArray.dec2bin(value));
        }
        return this;
    }

    public resetArray(): BitArray {
        this.setArray(0);
        return this;
    }

    public set(index: number, bitVal?: Bit): BitArray {
        if (index >= this._size) {
            throw ('BitArray set out of bounds');
        }
        if (isUndefined(bitVal)) {
            this._bit_array.set(index, 1);
        } else {
            this._bit_array.set(index, bitVal);
        }
        return this;
    }

    public unset(index: number): BitArray {
        if (index >= this._size) {
            throw ('BitArray unset out of bounds');
        }
        this._bit_array.set(index, 0);
        return this;
    }

    public toggle(index: number): BitArray {
        if (index >= this._size) {
            throw ('BitArray toggle out of bounds');
        }
        let prev = this.get(index);
        this._bit_array.set(index, <Bit>(prev ^ 1));
        return this;
    }

    public get(index: number): Bit {
        if (index >= this._size) {
            throw ('BitArray get out of bounds');
        }
        return this._bit_array.get(index)||0;
    }

    public toString(): string {
        let str = '';
        this._bit_array.forEach((b) => {
            str = b.toString() + str;
        });
        return str;
    }

    public toNumber(): number {
        let n: number = 0;
        this._bit_array.forEach((b, index) => {
            n = n + b * Math.pow(2, index);
        });
        return n;
    }

    //____________________________
    private setValueFromString(str: string) {
        if (str.length > this._size) {
            throw ('BitArray set value overflow');
        }
        str = BitArray.reverseString(str);
        for (let i = 0; i < this._size; i++) {
            let bit: Bit = 0;
            if (str[i]) {
                bit = <Bit>parseInt(str[i]);
            }
            this._bit_array.set(i, bit);
        }
    }

    // ______________________________
    public static dec2bin(dec: number): string {
        return (dec >>> 0).toString(2);
    }

    public static reverseString(str: string): string {
        return str.split('').reverse().join('');
    }

}