function addParagraph(){
    const para=document.createElement("p");
    para.innerText="This is new Para";
    para.style.color="blue";
    const parent =document.getElementById("root");
    parent.appendChild(para);
}

const removeParagraph=()=>{
    const para=document.querySelector("p");
    const parent=getElementById("root");
    parent.removeChild(para);
}

const removeAllParagraph=()=>{
    const para=document.querySelectorAll("p");
    const parent=document.getElementById("root");
    para.forEach((i))
}