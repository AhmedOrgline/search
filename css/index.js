let inputSearch = document.querySelector("#searchInput");
let arrList = ["Oppo" , "Samsung" , "Senuer" , "Apple" , "redmi" , "realme","Ahmed","Samir","Mustafa"];
let result = document.querySelector(".result");
let newResult = '';
function processing(value){
    newResult ='';
    if(value !== ""){
    for(let i = 0 ; i < arrList.length ; i++){
        if(arrList[i].includes(value)){
            newResult += `<li>${arrList[i]}</li>`;
        }
        else if(arrList[i].toLowerCase().includes(value)){
            newResult += `<li>${arrList[i]}</li>`;
        }
        }
        result.style.setProperty("border-bottom","2px solid #f00");
    }
    else{
        newResult = '';
        result.style.setProperty("border-bottom","0px solid #f00")
    }
    result.innerHTML = newResult;
}