export declare type Bit = 0 | 1;
export declare class BitArray {
    private _size;
    private _bit_array;
    constructor(size: number, value?: string | number);
    setArray(value: string | number): BitArray;
    resetArray(): BitArray;
    set(index: number, bitVal?: Bit): BitArray;
    unset(index: number): BitArray;
    toggle(index: number): BitArray;
    get(index: number): Bit;
    toString(): string;
    toNumber(): number;
    private setValueFromString;
    static dec2bin(dec: number): string;
    static reverseString(str: string): string;
}
