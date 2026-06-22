const 文字欄 = document.querySelector(".文字欄");
const 清單 = document.querySelector(".清單");

function 新任務(文字){
    if(文字欄.value === ""){
        return;
    }
    const 任務 = document.createElement("li");
    任務.textContent = 文字欄.value;
    清單.append(任務);
    文字欄.value = "";
}

文字欄.addEventListener("keyup",function (e) {
    if(e.key === "Enter"){
        新任務();
    }
}); 
