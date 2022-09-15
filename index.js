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
    
    optionArray.push(value)
    colorObject.input = value
//    console.log(optionArray[optionArray.length-1])
    
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
    
//    colorArray.push(colorChar)
//    console.log(colorArray[optionArray.length-1])
    
    
    fetchColor()
    

    
}


function fetchColor(colorChar) {
fetch(`https://www.thecolorapi.com/scheme?hex=${colorObject.wheel}&mode=${colorObject.input}&count=5`, options)
    .then(message => message.json())
    .then(data => console.log(data))
    
}



