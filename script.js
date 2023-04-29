const para = document.createElement("p");
para.textContent = "Hey I'm red!";
para.style.color = "red";

const element = document.querySelector("#p1");
element.appendChild(para);

const header3 = document.createElement("h3");
header3.textContent = "I'm a blue h3";
header3.style.color = "blue";

element.appendChild(header3);

const div = document.createElement("div");

const header1 = document.createElement("h1");
header1.textContent = "I'm in a div";
div.appendChild(header1);

const para2 = document.createElement("p");
para2.textContent = "ME TOO!";
div.appendChild(para2);

element.appendChild(div);