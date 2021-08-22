const celciusInput = document.getElementById("celcius");
const reamurInput = document.getElementById("reamur");
const fahrenheitInput = document.getElementById("fahrenheit");

const inputs = document.getElementsByClassName("input");

for(let i=0; i<inputs.length; i++) {
    let input = inputs[i];

    input.addEventListener("input", function(e) {
        let value = parseFloat(e.target.value);
        switch(e.target.name) {
            case "celcius":
                reamurInput.value = value * 0.8;
                fahrenheitInput.value = (value * 1.8) + 32;
                break;

            case "reamur":
                celciusInput.value = value * 1.25;
                fahrenheitInput.value = ((value * 2.25) + 32);
                break; 
        
            case "fahrenheit":
                reamurInput.value = ((value - 32) / 1.8) * 0.8;
                celciusInput.value = (value - 32) / 1.8;
                break;
            }
        
    });
}

function bgChange(bg)
{document.body.style.background=bg;}