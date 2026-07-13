async function sendMessage(){

let box=document.getElementById("message");
let chat=document.getElementById("chat");

let message=box.value;

chat.innerHTML += 
"<p>You: "+message+"</p>";

box.value="";


let response = await fetch(
"https://caine-ai-1.onrender.com/chat",
{
method:"POST",

headers:{
"Content-Type":"application/json"
},

body:JSON.stringify({

message:message

})

});


let data = await response.json();


chat.innerHTML +=
"<p>Caine: "+data.reply+"</p>";


let voice = new SpeechSynthesisUtterance(data.reply);

speechSynthesis.speak(voice);


}

if ("serviceWorker" in navigator){

navigator.serviceWorker.register("sw.js");

}
