
const LLData = require('./LLData');

class LList {
    constructor() {
        this.head = null;
        this.size = 0
    }
    getFirst() {
        return this.head.data;
    }
    getLast(){
        if (!this.head)
            return null;
        let node = this.head;
        while (node) {
            if (!node.next)
                return node;
            node = node.next;
        }
    }
    add(value) {
        let node = new LLData(value);
        let current;

        if (this.head == null)
            this.head = node;
        else {
            current = this.head;

            while (current.next)
                current = current.next;
            current.next = node;
        }
        this.size++;
    }
    addFromArray(array) {
        let i = 0;
        while (array[i]) {
            this.add(array[i]);
            i++;
        }
    }
    remove(value) {
        let current = this.head;
        let prev = null;

        while (current != null) {
            if (current.data === value) {
                if (prev == null)
                    this.head = current.next;
                else
                    prev.next = current.next;
                return this;
            }
            prev = current;
            current = current.next;
        }
    }
    removeAll(value) {
        let current = this.head;
        let prev = null;

        while (current != null) {
            if (current.data === value) {
                if (prev == null)
                    this.head = current.next;
                else
                    prev.next = current.next;
                this.size--;
            }
            prev = current;
            current = current.next;
        }
    }
    contains(value) {
        let current = this.head;

        while (current != null) {
            if (current.data === value) {
                return true;
            }
            current = current.next;
        }
        return false;
    }
    [Symbol.iterator] = function* () {
        for (let current = this.head; current !== null; current = current.next) {
            yield current.data;
        }
    }
    clear() {
        let current = this.head;

        while (current != null) {
            if (current.data) {
                this.head = current.next;
                this.size--;
            }
            current = current.next;
        }
    }
    count() {
        return this.size;
    }
    toString() {
        let current;
        let str = "";
        if (this.head != null) {
            current = this.head;
            while(current) {
                str += current.data;
                if (current.next)
                    str += ", ";
                current = current.next;
            }
        }
        return str;
    }
    filter(fn) {
        const res = new LList(); 

        for (let node of this) {
            if (fn(node)) {
                res.add(node);
            }
        }
        return res;
    }
}
module.exports = {LList};

//for test.js

// const {LList} = require("./LList");
// const list = new LList();
// list.addFromArray([100, 1, 2, 3, 100, 4, 5, 100]);
// list.add(10);
// const onlySmallList= list.filter((data) => {return data< 18;});
// console.log(onlySmallList)
// let sumOfAll= 0;
// for(const data of list) {
//     sumOfAll+= data;
// }
// console.log([...list]); // [ 100, 1,   2,  3, 100, 4, 5, 100, 10 ]
// console.log([...onlySmallList]);// [ 1, 2, 3, 4, 5, 10 ]
// console.log(sumOfAll); // 325
// console.log(list.contains(10)); // true
// console.log(list.contains(22)); // false
// list.clear();
// console.log([...list]); // []