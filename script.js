function generateCard(){

let name = document.getElementById("name").value

let bank = document.getElementById("bank").value

let color = document.getElementById("color").value

let logoInput = document.getElementById("logo")


document.getElementById("cardName").innerText = name

document.getElementById("bankName").innerText = bank

document.getElementById("card").style.background = color


if(logoInput.files.length > 0){

let file = logoInput.files[0]


if(file.type !== "image/png"){

alert("Solo se permiten logos en formato PNG")

return

}


if(file.size > 2000000){

alert("El archivo no puede superar 2MB")

return

}


let reader = new FileReader()


reader.onload = function(e){

document.getElementById("logoPreview").src = e.target.result

}


reader.readAsDataURL(file)

}

}