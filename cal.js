const output = document.querySelector(".output");
const result = document.querySelector(".result");
const keys = document.querySelectorAll("button");


keys.forEach(key=>{
    key.addEventListener("click",calculate);
});

function calculate(){
    let buttonText = this.innerText;
    if(buttonText==="AC"){
        output.innerText = "";
        result.innerText = "0";
        return;
    }

    if(buttonText === "DEL")
    {
        output.textContent = output.textContent.substr(0,output.textContent.length-1);
       return;
    }

    if(buttonText === "=")
    {
        result.innerText = eval(output.innerText);

        var old_data = JSON.parse(localStorage.getItem("alldata"));
        if(old_data == null) old_data = [];
        
        var x = output.innerText;
        var y = result.innerText;
        
        var entry = {
                "out": x,
                "res": y
        };

        localStorage.setItem("entry", JSON.stringify(entry));
        old_data.push(entry);
        localStorage.setItem("alldata", JSON.stringify(old_data));

        /*localStorage.setItem("operands", x);
        localStorage.setItem("result", y);
        var history = localStorage.getItem("operands");
        var history1 = localStorage.getItem("result");*/
       
    }
    else
    {

        output.textContent += buttonText;
        return;
    }
   //document.getElementById("history").innerHTML=myJSON;
    //document.getElementById("history1").innerHTML=history1;
   //alert(history);
   //alert(history1);


}