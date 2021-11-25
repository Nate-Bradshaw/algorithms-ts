"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var sortTest_1 = __importDefault(require("../sortTest"));
var mergeSort_1 = __importDefault(require("./mergeSort"));
describe('Merge Sort', sortTest_1.default(mergeSort_1.default));
//# sourceMappingURL=mergeSort.test.js.map