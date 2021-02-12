// var studentData = {

//     name: "Shahbaz",
//     // fatherName: prompt("Enter Your Father Name"),
//     // // rollNo = prompt("Enter Your Roll Name"),
//     // phone = prompt("Enter Your Phone Number"),
//     // mask = prompt("Enter Your Mask")
// }

// console.log(studentData)
// // var name = prompt("name")


var nameUser = document.getElementById("name");
var fatherName = document.getElementById("fatherName");
var ageUser = document.getElementById("age");
var userRoll = document.getElementById("roll");
var userMasks = document.getElementById("masks");
var userResult = document.getElementById("result");
var userimg = document.getElementById("image")


// nameUser.innerHTML= "Shahabz"
// console.log(nameUser.innerHTML = "Shahbaz")

var studentData = [{

    name: "Shahbaz Ali",
    fatherName: "Muhammad Imran",
    age: 18,
    roll: 1423,
    masks: 423,
    result: "Paased"
},
{

    name: "Muhammad Bilal",
    fatherName: "Muhammad Ali",
    age: 23,
    roll: 1424,
    masks: 412,
    result: "Paased",
    image: src = "man.jpg"
}
    ,
{

    name: "Muhammad  Mughees",
    fatherName: "Muhammad Younus",
    age: 22,
    roll: 1425,
    masks: 323,
    result: "Paased",
    image: "dp1.jpg"
},
{

    name: "Muskan Ali",
    fatherName: "Muhammad Ali",
    age: 20,
    roll: 1426,
    masks: 459,
    result: "Paased",
    image: "women.jpg"
}]

var userVal = prompt("Enter Your Number");

for (var i = 0; i <= studentData.length; i++) {
    if (userVal == studentData[i].roll) {

        document.getElementById("main").style.display = "block"
        nameUser.innerHTML = studentData[i].name
        fatherName.innerHTML = studentData[i].fatherName
        ageUser.innerHTML = studentData[i].age
        userRoll.innerHTML = studentData[i].roll
        userMasks.innerHTML = studentData[i].masks
        userResult.innerHTML = studentData[i].result
        userimg.src = studentData[i].image


    }


}



