"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var sortTest = function (sort) { return function () {
    test('Strings', function () {
        var names = [
            "Lister",
            "Cat",
            "Kryten",
            "Rimmer",
            "Holly",
            "Kochanski",
        ];
        var sortedNames = sort(names);
        expect(sortedNames).toStrictEqual([
            "Cat",
            "Holly",
            "Kochanski",
            "Kryten",
            "Lister",
            "Rimmer",
        ]);
    });
    test('Numbers', function () {
        var numbers = [5, 7, 12, 3, 2, 9, 1, 4, 0, 8];
        var sortedNumbers = sort(numbers);
        expect(sortedNumbers).toStrictEqual([0, 1, 2, 3, 4, 5, 7, 8, 9, 12]);
    });
}; };
exports.default = sortTest;
//# sourceMappingURL=sortTest.js.map