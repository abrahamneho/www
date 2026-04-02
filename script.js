function saveFile()
{
let name = document.getElementById("filename").value;

let content = document.getElementById("filecontent").value;

if(name == "" || content == "")
{
alert("Enter file name and content");
return;
}

let display = document.getElementById("output");

let fileBox = document.createElement("div");

fileBox.innerHTML =
"<h4>"+name+"</h4><p>"+content+"</p><hr>";

display.appendChild(fileBox);

document.getElementById("filename").value="";
document.getElementById("filecontent").value="";
}
