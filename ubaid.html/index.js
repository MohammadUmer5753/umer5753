// class Human {
//     constructor(name ,age, id ,sem, fee){
//         this.name =name;
//         this.a =age;
//         this.id =id;
//         this.sem =sem;
//         this.fee =fee;
//     }

//     showdetails (){
//         console.log(`your name is ${this.name} my name is age  ${this.fee} `)
//     }
 
// }
// const human = new Human("ubaid",21 , 1 ,22, 4000)
// human.showdetails()


// class student extends Human{
//     constructor(name1 ,age, id ,sem, fee){
//     super(name1 ,age ,id)
//     this.sem =sem;
//     this.fee =fee;
// }
// showdetails (){
//     console.log(`my name is  ${this.name} my age is ${this.age} my id is ${this.id} my sem is ${this.sem}`)
// }

// }
// const student1 = new  student("ubaid")
//  student1.showdetails()



//  class point{
//     constructor (x,y){
//         this.x = x
//         this.y = y
//     }
//     showpoint(){
//         // console.log(`x = ${this.x}, y = ${this.y}`)
//         console.log(this)
//     }
//  }
//  const p1 = new point(4,5)
// p1.showpoint()


// let a =new Promise (function(solve, reject){
//          setTimeout(function(){
//             solve("Hello Ubaid");
//          },1000);
// });

// // console.log(a)

// a.then(function(data){
//     console.log('Data = '+data)
// });


let showname = (name) => {
    document.getElementById('abc').innerHTML = name;
}
showname("Ubaid Asim");

var data;

async function getdata(){
    data = await fetch ('https://jsonplaceholder.typicode.com/users');
    datajson = await data.json();
    return datajson;
}
getdata().then (function(a){
    let user1 = document.getElementById('user1');

    user1.innerHTML=`${a[0]['id']}  <br> ${a[0]['name']} <br> ${a[0]['email']}`
});


