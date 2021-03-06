'use strict'

class AppleTree {
    constructor(tree_name, tree_age, tree_height, treeMatureage,
        treeHealthStatus, treeLimitAge, treeStopAge) {
            this._name = tree_name;
            this._age = tree_age;
            this._height = tree_height;
            this._fruits = [];
            this._harvested = '';
            this._healthStatus = treeHealthStatus || true;
            this._matureAge = treeMatureage;
            this._limitAge = treeLimitAge;
            this._stopAge = treeStopAge
        }

        // Getter

        get _name() {
            return this._name;
        }
        get _age() {
            return this._age;
        }
        get _height() {
            return this._height;
        }
        get _fruits() {
            return this._fruits;
        }
        get _harvested() {
            return this._harvested;
        }
        get _healthStatus() {
            return this._healthStatus;
        }
        get _matureAge() {
            return this._matureAge;
        }
        get _limitAge() {
            return this._limitAge;
        }
        get _stopAge() {
            return this._stopAge;
        }

        
}