var arr = '';
var input = document.querySelector(".screen")
function Add(text) {
    arr += text;
    if (text == '')
    {
       arr = '0';
    }
    else 
    {
        if (text == '%'){
            arr = (eval(arr))/100;
            console.log (arr)
        }
        if (text === 'c')
        {
        arr = ''; 
        }
        if (text === '='){
        var array  = Array.from(arr);
        array.pop();
        if (array.length!=0)
        {
            arr = array.join("");
            arr = eval(arr);
        }
    }
    input.innerHTML = arr;

    }

    
}



