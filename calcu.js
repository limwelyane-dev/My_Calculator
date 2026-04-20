let input = document.getElementById("inputBox");
let buttons = document.querySelectorAll(".calculator button");
let historyList = document.getElementById("historyList");
let clearbtn = document.getElementById("clearHistory");

let string = "";
 
let arr = Array.from(buttons);

arr.forEach(button => {
    button.addEventListener('click', (e) => {
        let value = e.target.innerHTML;

        if (value == '=') {
            try {
                let expression = string;
                let result = eval(string);

        
                let li = document.createElement("li");
                li.innerText = expression + " = " + result;
                historyList.prepend(li);

                historyList.parentElement.style.display = "block";

        
                string = result.toString();
            input.value = string;

        } catch {
            input.value = "Error";
            string = "";
        }
    }

        else if (value == 'AC') {
            string = "";
            input.value = string;
        }

        else if (value == 'DEL') {
            if (string.length > 0) {
                string = string.substring(0, string.length - 1);
                input.value = string;
            }
        }
        else if (value === '%') {
            string += "/100";
            input.value = string;
        }

        else {
            string += value;
            input.value = string;
        }
    });
});

clearbtn.addEventListener("click", () => {
    historyList.innerHTML = "";

    historyList.parentElement.style.display = "none";
    
});