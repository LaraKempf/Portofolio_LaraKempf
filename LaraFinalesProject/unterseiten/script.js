let bilder = document.querySelectorAll('.container img')
let counter = 0

function show(aktuelles){
    bilder[aktuelles].classList.add('active')
    bilder[counter].classList.remove('active')
    counter = aktuelles
}


function next(){
    let aktuelles = counter+1
    if (aktuelles>8){
        aktuelles=0
    }
    show(aktuelles)
}

function before(){
   let aktuelles = counter -1 
   if(aktuelles < 0){
    aktuelles = 8
   }
   show(aktuelles)
}
