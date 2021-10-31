let buttons=document.getElementsByClassName("numbers")[0];
let downdisplay = document.getElementsByClassName("operation")[0];
let updisplay = document.getElementsByClassName("result")[0];
let zero_button = document.getElementById("zero");
let comma = document.getElementById("commas");
let equal = document.getElementsByClassName("equal")[0];




/*  .......  zero......*/
zero_button.addEventListener("click",(e)=>{
    if(downdisplay.innerText === "0" ){}
    
 });

 /*.....comma......*/
comma.addEventListener("click",(e)=>{
    if((downdisplay.innerText).includes(".")){}
    else if(downdisplay.innerText == ""){}
    else{
         downdisplay.innerText +=".";
    }
    }
 );
 /*....butttons....*/
 buttons.addEventListener("click",(e)=>{
        if(e.target.className === "number"){   /*......number ......*/
            if(downdisplay.innerText == "0"){
                downdisplay.innerText = "";
                downdisplay.innerText += e.target.innerText;
            }
            else{
                downdisplay.innerText += e.target.innerText;
            }
            
        }
        
        if(e.target.className === "fas fa-plus" || e.target.className === "plus"){  /* .....plus....*/
            if(downdisplay.innerText == "" && updisplay.innerText == ""){return}
            else if(updisplay.innerText == ""){
                updisplay.innerText = downdisplay.innerText + " +";
                downdisplay.innerText = "";
            }
            else if( updisplay.innerText.includes("+") && !downdisplay.innerText == "")   
                   
                {updisplay.innerText = parseFloat(updisplay.innerText.split(" ")[0]) + parseFloat(downdisplay.innerText) + " +" ;
                    downdisplay.innerText = "";}

        }
        if(e.target.className === "fas fa-minus" || e.target.className == "minus"){   /*........minus.........*/
            if(downdisplay.innerText == "" && updisplay.innerText == ""){return}
            else if(updisplay.innerText == ""){
                updisplay.innerText = downdisplay.innerText + " -";
                downdisplay.innerText = "";
               
            }
            else if( updisplay.innerText.includes("-") && !downdisplay.innerText == "")   
                   
                {updisplay.innerText = parseFloat(updisplay.innerText.split(" ")[0]) - parseFloat(downdisplay.innerText) + " -" ;
                    downdisplay.innerText = "";}
                   
        }
        if(e.target.className === "fas fa-divide" || e.target.className == "divide"){  /*........division......... */
            if(downdisplay.innerText == "" && updisplay.innerText == ""){return}
            else if(updisplay.innerText == ""){
                updisplay.innerText = downdisplay.innerText + " /";
                downdisplay.innerText = "";
               
            }
            else if( updisplay.innerText.includes("/") && !downdisplay.innerText == "")   
                   
                {updisplay.innerText = parseFloat(updisplay.innerText.split(" ")[0]) / parseFloat(downdisplay.innerText) + " /" ;
                    downdisplay.innerText = "";}
                   
        }
        if(e.target.className === "fas fa-times" || e.target.className == "times"){ /*.......times......*/
            if(downdisplay.innerText == "" && updisplay.innerText == ""){return}
            else if(updisplay.innerText == ""){
                updisplay.innerText = downdisplay.innerText + " *";
                downdisplay.innerText = "";
               
            }
            else if( updisplay.innerText.includes("*") && !downdisplay.innerText == "")   
                   
                {updisplay.innerText = parseFloat(updisplay.innerText.split(" ")[0]) * parseFloat(downdisplay.innerText) + " *" ;
                    downdisplay.innerText = "";}                   
        }                
        if(e.target.innerText == "AC"){
            downdisplay.innerText = "";
            updisplay.innerText = "";
        }
        if(e.target.innerText == "+/-"){
            downdisplay.innerText = parseFloat(downdisplay.innerText)*-1;
        }
        if(e.target.className === "fas fa-arrow-left"){
            const array= downdisplay.innerText.split("");
             array.splice((array.length-1),1);
             downdisplay.innerText=array.join("");
         }

        if(e.target.className === "fas fa-equals" || e.target.className == "equal"){
            if(updisplay.innerText.includes("+") && !downdisplay.innerText == "" ){
                   
                updisplay.innerText = parseFloat(updisplay.innerText.split(" ")[0]) + parseFloat(downdisplay.innerText) ;
                    downdisplay.innerText = "";
            }
            if(updisplay.innerText.includes("-") && !downdisplay.innerText == "" ){
                   
                updisplay.innerText = parseFloat(updisplay.innerText.split(" ")[0]) - parseFloat(downdisplay.innerText) ;
                    downdisplay.innerText = "";
            }
            if(updisplay.innerText.includes("/") && !downdisplay.innerText == "" ){
                   
                updisplay.innerText = parseFloat(updisplay.innerText.split(" ")[0]) / parseFloat(downdisplay.innerText) ;
                    downdisplay.innerText = "";
            }
            if(updisplay.innerText.includes("*") && !downdisplay.innerText == "" ){
                   
                updisplay.innerText = parseFloat(updisplay.innerText.split(" ")[0]) * parseFloat(downdisplay.innerText) ;
                    downdisplay.innerText = "";
            }

         }
         
        
 });