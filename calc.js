var input = document.querySelector(".out");
console.log(input);
var items=Array.from(document.querySelectorAll(".bt"));
console.log(items)
items.forEach(function(btn){
    btn.addEventListener("click",function(){
        if(input.innerHTML=='0'){input.innerHTML='';}
        if (btn.innerHTML=='AC'){input.innerHTML='0';}
        else if (btn.innerHTML=='DEL'){
          
            var arrtext = Array.from(input.innerHTML);
            arrtext.pop();
            if(arrtext.length!=0){item.innerHTML=arrtext.join('');}
            else {input.innerHTML="0";}
        }
        else if (btn.innerHTML=='='){input.innerHTML=eval(input.innerHTML);}
        else {input.innerHTML+=btn.innerHTML;}
    

        
    })
})




   