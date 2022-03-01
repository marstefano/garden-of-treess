"use strict";

class fruitTree {
    constructor(tree_age, tree_height, treeMatureage,
        treeHealthStatus, treeLimitAge, treeStopAge) {
        this._age = 0
        this._height = 0
        this._fruits = [];
        this._harvested = '';
        this._healthStatus = true;
        this._matureAge = treeMatureage;
        this._limitAge = treeLimitAge;
        this._stopAge = treeStopAge
    }
    get age() {
        return this._age;
    }
    get height() {
        return this._height;
    }
    get fruits() {
        return this._fruits;
    }
    get harvested() {
        return this._harvested;
    }
    get healthStatus() {
        return this._healthstatus;
    }
    get matureAge() {
        return this._matureAge;
    }
    get limitAge() {
        return this._limitAge;
    }
    get stopAge() {
        return this._stopAge;
    }

    // grow
    grow() {
        // Declaration
        this.age++;
        let addingHeight = 0;

        if (this.age < this.limitAge) {
            addingHeight = Math.round(Math.random() * 100) / 100;
            this.height += addingHeight;
        };
        if (this.age >= this.stopAge) {
            this.healthstatus = false;
        };
       
    }

    // Produce Fruits
    produceFruit() {
        if (this.age >= this.matureAge) {
            let fruitsTotal = Math.round(Math.random() * 100) / 100;
            for (let i = 1; i <= totalBuah; i++) {
                this.fruits.push(i);
            }
        }
    }


    // Harvest
}

class fruit {
    constructor(totalBuah, kualitas); 
    this._totalBuah = totalBuah;
    this._kualitas = kualitas;
}