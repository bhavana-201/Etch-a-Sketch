const container = document.getElementById('container');
console.log("ji");
function divs(n){
    for(let r = 0; r < n; r++){
        for(let c = 0; c < n; c++){
            let newdivs = document.createElement('div');
            container.appendChild(newdivs);
        }
    }
}
divs(16);
let divlist = container.querySelectorAll('div');
divlist.forEach( div => {
div.addEventListener('mouseenter',()=>{
    div.classList.add("colors");
});
});