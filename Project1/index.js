function ageInDays(){
    var bYear = prompt("When were you born?")
    var inDays = (2021 - bYear) * 365
    var h1 = document.createElement('h1')
    var text = document.createTextNode('You are ' + inDays + ' days old.')
    h1.setAttribute('id', 'textOutput')
    h1.appendChild(text)
    document.getElementById('oB').appendChild(h1)
}

function removeOutput(){
    var h1 = document.getElementById('textOutput')
    document.getElementById('oB').removeChild(h1)
}
