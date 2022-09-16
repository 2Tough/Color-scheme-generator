let colorWheel = document.getElementById('color-selected')
let selectColor = document.getElementById("colorsTo")
let getColor = document.getElementById('box-1')

let colorObject = {
    input: "monochrome",
    wheel: 000000
}

let optionArray = []
let colorArray = []

let value = selectColor.value
let options = {
    method: 'GET',
}

// For input value
function onChange() {
    let value = selectColor.value
    let text = selectColor.options[selectColor.selectedIndex].text;
    
    colorObject.input = value
    fetchColor()
    }
        
    selectColor.onchange = onChange;
    onChange();


// For color wheel
colorWheel.addEventListener('input', colorSelect)

function colorSelect() {
    let wheel = colorWheel.value
    let colorChar = wheel.substr(wheel.length - 6)
    
    colorObject.wheel = colorChar
    fetchColor()
    }


function fetchColor(colorChar) {
fetch(`https://www.thecolorapi.com/scheme?hex=${colorObject.wheel}&mode=${colorObject.input}&count=5`, options)
    .then(message => message.json())
    .then(data => {
     
    
        document.getElementById('first-color').style.background = data.colors[0].hex.value 
        document.getElementById('second-color').style.background = data.colors[1].hex.value 
        document.getElementById('third-color').style.background = data.colors[2].hex.value 
        document.getElementById('fourth-color').style.background = data.colors[3].hex.value 
        document.getElementById('fifth-color').style.background = data.colors[4].hex.value 
        
        document.getElementById('one').textContent = data.colors[0].hex.value  
        document.getElementById('two').textContent = data.colors[1].hex.value 
        document.getElementById('three').textContent = data.colors[2].hex.value 
        document.getElementById('four').textContent = data.colors[3].hex.value 
        document.getElementById('five').textContent = data.colors[4].hex.value 
    
        }
        )}