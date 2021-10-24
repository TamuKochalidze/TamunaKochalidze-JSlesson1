//davaleba-1 
//ამოიღეთ user ცვლადის სტუდენტის სტატუსი

// let user = {
//     firstName: 'giorgi',
//     lastName: 'smith',
//     age: 25,
//     studentstatus: 'active'
// };
// console.log(user.studentstatus);
// console.log(user['studentstatus']);
//----------------------------------

//davaleba-2
//შექმენით მასივი, და დაბეჭდეთ სათითაოდ თითოეული ელემენტი; (for, while ციკლების საშუალებით)

// let friends = ['giorgi', 'mari', 'daviti',]

// for (let i = 0; i < friends.length; i++) {
//   console.log(friends[i]);  
// }

// for (let i of friends) {
//     console.log(i);
// }

// let i = 0;
// whine (i < friends.length) {
//     console.log(friends[i]);
//     i++
// }
//--------------------------------------

//davaleba-3
//შექმენით მასივი, და ამოიღეთ ყველა რიცხვი რომელიც მეტია 5ზე, for ციკლის გამოყენებით

// let numbers = [5, 6, 10, 25, 3, 7, 4, 100, 28, 36, 89];
// for (let i of numbers) {
//    if (i > 5) {
//        console.log(i);
//    }
// }
//------------------------------------------------------------------------------------------------

//davaleba-4
//მოცემული მაისივიდან კონსოლში გამოვიტანოთ მარტო ის ობიექტი რომლის status პროეპრტი მნიშვნელობა არის true

let users = [
    {username:'test1', status: false},
    {username:'test2', status: false},
    {username:'test3', status: true},
];
for (let u in users) {
    if (users[u].status == true) {
        console.log(user[u]);
    }
}
//-----------------------------------------------------






//davaleba-5
//davaleba-6
//davaleba-7
//davaleba-8
//davaleba-9
