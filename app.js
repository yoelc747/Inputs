const textInput = document.querySelector("[type='text']");
const button = document.querySelector("[type='button']");
const range = document.querySelector("[type='range']");
const p = document.querySelector("p");
const element =  document.querySelector(".square");
const selectColor = document.querySelector("[type='color']");

textInput.addEventListener('change', (e)=>{
    const p = e.target.nextElementSibling.nextElementSibling.nextElementSibling;
    p.innerHTML = e.target.value;
});

textInput.addEventListener('input', (e)=>{
    const p = e.target.nextElementSibling.nextElementSibling.nextElementSibling;
    p.innerHTML = e.target.value;
})

button.addEventListener('click', (e)=>{
    const broda = e.target.nextElementSibling;
    broda.innerHTML =  textInput.value;
});

selectColor.addEventListener('input', (e)=>{
    element.style.backgroundColor = e.target.value;
})

range,addEventListener("input", (e)=>{
    p.innerHTML = e.target.value;
    element.style.width = `${e.target.value}px`;
})