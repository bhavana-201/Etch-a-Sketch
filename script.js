const container = document.getElementById('container');
const buttongrid = document.getElementById('buttongrid');
const buttoncolor = document.getElementById('buttoncolor');

function divs(n){
    for(let r = 0; r < n; r++){
        for(let c = 0; c < n; c++){
            let newdivs = document.createElement('div');
            newdivs.style.width = `${600/n}px`;
            newdivs.style.height = `${600/n}px`;
            container.appendChild(newdivs);
        }
    }

    let divlist = container.querySelectorAll('div');//it creates a nodelist of all divs
    divlist.forEach( div => {
    div.addEventListener('mouseenter',()=>{
        div.classList.add("colors");
    });
    });
    buttoncolor.addEventListener('click', ()=>{
  
        divlist.forEach( div =>{
            div.addEventListener('mouseenter',()=>{
                div.classList.add("colors");
                let rc = Math.floor(Math.random()*16777215).toString(16);
                div.style.backgroundColor=`#${rc}`;
            });
        })
    });
}
divs(16);

buttongrid.addEventListener('click',()=>{
    let n = prompt("enter grid size < 100");
    if (n<100)
    {
        container.innerHTML="";
        divs(n);
    }
    else
        alert("invalid size");
});





