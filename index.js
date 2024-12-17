const blocks=document.querySelectorAll("#divHolder p");
let i=0;
const size=5;
const input=document.querySelector("input");
const removes=document.querySelectorAll("#divHolder button");
const submit=document.getElementById("add");
function fillBlock(text){
       blocks[i].textContent=text;
       i=(i+1)%size;
}
submit.addEventListener("click",()=>{
    if(input.value.trim()!=""){
        fillBlock(input.value);
        input.value=""
    }
})
removes.forEach(rem=>{
    rem.addEventListener("click",()=>{
        rem.parentNode.remove();
    })
})