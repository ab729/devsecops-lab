const assert = require("assert");

const users = [
    { id: 1, name: "Ahmed" },
    { id: 2, name: "Security Engineer" }
];

assert.strictEqual(users.length, 2);
assert.strictEqual(users[0].id, 1);
assert.strictEqual(users[1].name, "Security Engineer");

console.log("All tests passed");