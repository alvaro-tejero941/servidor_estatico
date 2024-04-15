const titulo = document.querySelector("h1");

setInterval(() =>{
    titulo.style.color = `rgb(${[0,0,0].map(()=> Math.floor(Math.random()*256)).join(",")})`;
},2000);