const btn=document.querySelectorAll("button");
for (let index = 0; index < btn.length; index++) {
    let count=0;
    btn[index].onclick=function(){
        count++;
        let item = btn[index].closest(".item");
        console.log(item);
        item.querySelector("span").textContent=count;
        

    }
    
}
