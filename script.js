let form = document.querySelector(".fale-conosco-one")
let mascara = document.querySelector(".mascara-form")

function mostrarForm(){
    form.style.left = "50%"
    form.style.transform = "translateX(-50%)"
    mascara.style.visibility = "visible"
}

function sumirFormulario(){
    form.style.left = "-88%"
    form.style.transform = "translateX(0)"
    mascara.style.visibility = "hidden"
}