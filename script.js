const inpKey = document.querySelector("#inpKey");
const inpValue = document.querySelector("#inpValue");
const lsOutput = document.querySelector(".lsOutput");



document.querySelector("#btnInsert").addEventListener("click", ()=>{
    if (inpKey.value && inpValue.value){
        window.localStorage.setItem(inpKey.value, inpValue.value);
        location.reload(); //refresh the page
    }

    
});
for (let index = 0; index < localStorage.length; index++) {
        const key = localStorage.key(index);
        const item = localStorage.getItem(key);
        lsOutput.innerHTML+=`${key}: ${item} <br/>`;
        
    }


