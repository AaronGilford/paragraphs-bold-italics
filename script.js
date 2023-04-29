const para = document.createElement("p");
para.textContent = "Hey I'm red!";
para.style.color = "red";

const element = document.querySelector("#p1");
element.appendChild(para);

const header3 = document.createElement("h3");
header3.textContent = "I'm a blue h3";
header3.style.color = "blue";

element.appendChild(header3);