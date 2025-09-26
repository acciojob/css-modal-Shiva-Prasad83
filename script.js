//your JS code here. If required.
const body=document.querySelector("body");
const btn=document.getElementById("openModal");
const div=document.querySelector(".modal");
btn.addEventListener("click",(e)=>{
	body.style.backgroundColor="#707170";
	div.style.top="20%";
	div.classList.add("afterClick");
})