// 1. *Three in One*: Describe how you could use a single array to implement three stacks.

export default class ThreeStacks<T> {
    private array: T[];
    private index0 = 0;
    private index1 = 1;
    private index2 = 2;
    //0, 3, 6, 9
    //1, 4, 7, 10
    //2, 5, 8, 11

    constructor(arrayLength: number) {
        this.array = new Array(arrayLength).fill(null);
    }

    push(stackNum: number, value: T): void {
        if(stackNum % 3 === 0){
            this.array[this.index0] = value;
            this.index0 += 3;
        } else if(stackNum % 3 === 1){
            this.array[this.index1] = value;
            this.index1 += 3;
        } else if(stackNum % 3 === 2){
            this.array[this.index2] = value;
            this.index2 += 3;
        }
    }

    pop(stackNum: number): T | undefined {
        let value: T;
        if(stackNum % 3 === 0){
            value = this.array[this.index0 - 3];
            this.index0 -= 3;
        } else if(stackNum % 3 === 1){
            value = this.array[this.index1 - 3];
            this.index1 -= 3;
        } else if(stackNum % 3 === 2){
            value = this.array[this.index2 - 3];
            this.index2 -= 3;
        } else {
            return undefined;
        }
        return value;
    }

    peek(stackNum: number): T | undefined {
        let value: T;
        if(stackNum % 3 === 0){
            value = this.array[this.index0 - 3];
        } else if(stackNum % 3 === 1){
            value = this.array[this.index1 - 3];
        } else if(stackNum % 3 === 2){
            value = this.array[this.index2 - 3];
        } else {
            return undefined;
        }
        return value;
    }
}