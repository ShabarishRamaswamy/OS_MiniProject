const msg1 = document.querySelector('#msg1')
const msg2 = document.querySelector('#msg2')

document.getElementById("requestedNewHaiku").addEventListener("click", ()=>{
    fetch('/generate').then((response)=>{
        response.text().then((data)=>{
        msg1.innerHTML = `        `+data
    })
    })
});
