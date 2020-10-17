const user = {
    firstName: "mariami",
    age: 19,
    isAdmin:true,
    gmail: 'test@test.com',
    'user-Address':{
        city: 'ozurgeti'
     },
    skills:['html','css','js']
};
let value;
let prop = 'skills';

value = user.firstName;
value = user['isAdmin'];
value = user['user-Address'];
value = user['user-Address'].city;
value = user['user-Address']['city'];
value = user[prop][2];//შეგვიძლია მასივის ნომერაციით გამოძახება

//ობიექტში შეცვლა
user.firstName = 'mari';

value = user.firstName;

//მნიშვნელობის დამატება
user.info = 'some-info';

value = user.info
//მნიშვნელობის შეცვლა დამატება
user['user-Address'].city = 'tbilisi';
user['user-Address'].country = 'georgia';

console.log(value)
console.log(user)