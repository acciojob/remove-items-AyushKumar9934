//your JS code here. If required.
let x=document.getElementById("colorSelect");


function change(){
    let i=x.selectedIndex;
    x.options.remove(i);
    console.log(i);
}
document.getElementById("btn").addEventListener("click",change);