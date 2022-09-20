var a = 4;
var str = "om prakash";
var boolen = false;
var b = ["om", 1, 'prakash'];
var arr = [1, 2, om];
var arr1 = [
    'om', 1, false, [1, 2, 3]
];
var h1 = {
    loading: true,
    error: true,
    data: []
};
var h2 = {
    loading: true,
    error: true
};
var i = [
    { name: "om", age: 26, place: 'chamba' },
    { name: 'kalpa', age: 24, place: 'chamba' }
];
var add = function (a, b) {
    return a + b;
};
add(1, 2);
var j = [
    [1, 2],
    [2, 4],
    [9, 2],
];
var country = [
    'India',
    "china",
];
var contry = [
    'India',
    "china",
    //we will not add other data than custom
];
//? is used to create optional field 
// something written before it becomes optional
var users = [
    { name: "om", age: 34, email: 'dldld', gender: "male" },
    { name: "om", email: 'dldld', gender: "male" }
];
var k1 = [
    ["a", 1],
    ["b", 2]
];
var Gender;
(function (Gender) {
    Gender[Gender["male"] = 0] = "male";
    Gender[Gender["female"] = 1] = "female";
    Gender[Gender["trans"] = 2] = "trans";
})(Gender || (Gender = {}));
var mul = function (a, b) {
    console.log(a + b); //when nothing to return use void
};
