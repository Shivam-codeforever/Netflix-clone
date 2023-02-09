let a = document.getElementById("fone");
const newfun = () => {
    if (a.value === "") {
        alert("Enter email address");
    }
    else {
        console.log("good");
    }
}

console.log("changed");


let write = document.querySelectorAll(".write");
const fun1 = (y) => {
    console.log(write[y]);
    cl++;
    if(cl%2 === 0 ){
        write[y].style.display = "none";
    }
    if(cl%2 !== 0){
    write[y].style.display = "flex";
    }
}

let ques = document.getElementsByClassName("ques1");
let cl = 0;
Array.from(ques).forEach( function(e ,i) {
    e.addEventListener('click', () => {
        console.log("you clicked");
        // console.log(i);
        fun1(i);
    })
} )



















//  if(cl%2 != 0){
//     write[e[0]].style.display = "none";
//      // cl++;
//     console.log("in1");
//  }
// if(cl%2 == 0){
//  write[e[0]].style.display = "flex";
//  cl++;
//  console.log("in0")
// }