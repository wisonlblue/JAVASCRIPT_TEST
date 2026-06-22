const 文字欄=document.querySelector(".文字欄");

文字欄.addEventListener("keyup",function (e) {
    if(e.key === "Enter"){
        console.log(文字欄.value);

    }
}); 

