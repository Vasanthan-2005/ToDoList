const input=document.getElementById("textele");
const contain=document.getElementById("unorder");
function addtask(){
    if(input.value===''){
        alert("Enter valid text");
    }else{
        let li=document.createElement("li");
        li.innerHTML=input.value;
        contain.appendChild(li);

        let span=document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span);

    }
    input.value="";
    save();
}
contain.addEventListener("click",function(e){
    if(e.target.tagName === 'LI'){
        e.target.classList.toggle("checked");
    }else if(e.target.tagName === 'SPAN'){
        e.target.parentElement.remove();
    }
    save();
});

function save(){
    localStorage.setItem("data", contain.innerHTML);
}
function show(){
    contain.innerHTML=localStorage.getItem("data");
}
show();
