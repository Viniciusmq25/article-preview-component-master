const botao = document.querySelector("#share")
const botaoMobile = document.querySelector("#share-mobile")
const share = document.querySelector(".share")
const contato = document.querySelector(".contato")

// function checkDevice(){
//     if(window.innerWidth <= 730){
//         if(share.style.display === "block"){
//             share.style.display = "none";
//             console.log("!");
//         } else{
//             share.style.display = "block";
//             console.log("?");
//         }
//         contato.style.display = "none";
//     }   else{

//         contato.style.display = "flex"
//     }
// }

// botao.addEventListener("click", function() {
//     checkDevice();
//   });

//   checkDevice()

botao.addEventListener("click", function() {

    if(window.innerWidth <= 730){

        if(share.style.display === "block"){
            share.style.display = "none";
            contato.style.display = "flex"
            console.log("!");
        } else{
            share.style.display = "block";
            contato.style.display = "none"
            botaoMobile.style.display = "inline-block"
            console.log("?");
        }
        contato.style.display = "none";
        }   else{
            if(share.style.display === "block"){
                share.style.display = "none";
                botaoMobile.style.display = "none"
                console.log("!");
            }   else{
                share.style.display = "block";
                botaoMobile.style.display = "none"
                console.log("?");
            }
     }
});

botaoMobile.addEventListener("click", function() {
    share.style.display = "none"
    contato.style.display = "flex"
})

    