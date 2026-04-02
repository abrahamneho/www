function saveFile()
{
let name = document.getElementById("filename").value;
let content = document.getElementById("filecontent").value;

if(name === "" || content === "")
{
alert("Enter file name and content");
return;
}

/* Get old files */
let files = JSON.parse(localStorage.getItem("docs")) || [];

/* Add new file */
files.push({
name:name,
content:content
});

/* Save */
localStorage.setItem("docs", JSON.stringify(files));

displayFiles();

document.getElementById("filename").value="";
document.getElementById("filecontent").value="";
}

function displayFiles()
{
let files = JSON.parse(localStorage.getItem("docs")) || [];

let output = document.getElementById("output");

output.innerHTML="";

files.forEach(file => {

output.innerHTML +=
"<h4>"+file.name+"</h4><p>"+file.content+"</p><hr>";

});

}

/* Load saved files when page opens */
displayFiles();
