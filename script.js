let str="";
let btn=document.querySelectorAll('button');
let arr= Array.from(btn);
arr.forEach((button) =>{
    button.addEventListener('click', (e)=>{
        if(e.target.innerHTML === "="){
            str=eval(str);
        }
        else if(e.target.innerHTML === "D"){
            str=str.substring(0,str.length -1);
        }
        else if(e.target.innerHTML === "C"){
            str="";
        }
        else if(e.target.innerHTML === "%"){
            try{
                str=eval(str)/100;
            }catch(err){
                str="error";
            }
        }
        else{
            str=str+e.target.innerHTML;
        }
        document.querySelector('input').value =str;
    })
}
)