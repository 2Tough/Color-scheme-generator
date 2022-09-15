let selectedColor = document.getElementById('color-selected')


let options = {
    method: 'GET'
    
}

fetch('https://www.thecolorapi.com/scheme?hex=0047AB', options)
    .then(message => message.json())
    .then(data => console.log(data))
    
    console.log(colorsTo)
    
    
let selectColor = document.getElementById("colorsTo");
function onChange() {
  let value = selectColor.value;
  let text = selectColor.options[selectColor.selectedIndex].text;
  console.log(value, text);
}
selectColor.onchange = onChange;
onChange();

console.log(selectedColor.value)

selectedColor.addEventListener('input', function() {
    console.log(selectedColor.value)
})




