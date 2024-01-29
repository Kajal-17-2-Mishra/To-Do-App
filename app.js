let btn = document.querySelector(".add-task");
let input = document.querySelector("input");
let ul = document.querySelector("ul");
btn.addEventListener("click",()=>{
 let list = document.createElement ("li")
 let deleteBtn = document.createElement("button");
 deleteBtn.innerText = "X";
 list.innerText = input.value;
 list.classList.add("task-item");
 deleteBtn.classList.add("delete-button");
 if(!(input.value.trim()=="")){
  ul.appendChild(list);
 list.appendChild(deleteBtn);
 }else{
  alert("list can not be blank");
 }
 console.log(input.value);
 input.value = "";
 deleteBtn.addEventListener("click",()=>{
  ul.removeChild(list);
 })
})

