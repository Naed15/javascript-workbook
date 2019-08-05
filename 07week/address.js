"use  strict";

document.getElementById("fetchUser").addEventListener('click', getUser);
function getUser(){
    fetch("https://randomuser.me/api/")
    .then((res) => res.json())
    .then((data)=>{
    let output = '<h2> API POSTS</h2>'
   data.forEach(function(data){
       output += `
       <ul>
        <li>
        Title: ${name.title}
        </li>
        <li>
        Body: ${name.first}
        </li>
       </ul>
       `;
    })
   document.getElementById("input").innerHTML = output
})};
