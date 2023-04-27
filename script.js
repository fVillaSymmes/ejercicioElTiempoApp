mondayC = document.querySelector("#mon")
tuesdayC = document.getElementById("tue")
wednesdayC = document.getElementById("wed")
thursdayC = document.getElementById("thu")
fridayC = document.getElementById("fri")
saturdayC = document.getElementById("sat")
sundayC = document.getElementById("sun")  
bigTempC = document.getElementById("bigTemp")
toggle = document.getElementById("toggler")
bigC = document.getElementById("bigC")

function toF(tempC) {
return (Number(tempC.getAttribute("value")) * 9/5) + 32 
}

function convert(button) {

if (button == "OFF") {
    toggle.setAttribute("value", "ON")
    mondayC.innerHTML = toF(mondayC)
    tuesdayC.innerHTML = toF(tuesdayC)
    wednesdayC.innerHTML = toF(wednesdayC)
    thursdayC.innerHTML = toF(thursdayC)
    fridayC.innerHTML = toF(fridayC)
    saturdayC.innerHTML = toF(saturdayC)
    sundayC.innerHTML = toF(sundayC)
    bigTempC.innerHTML = toF(bigTempC)
    bigC.innerHTML = "°F"
} else if(button == "ON") {
    toggle.setAttribute("value", "OFF")
    mondayC.innerHTML = mondayC.getAttribute("value")
    tuesdayC.innerHTML = tuesdayC.getAttribute("value")
    wednesdayC.innerHTML = wednesdayC.getAttribute("value")
    thursdayC.innerHTML = thursdayC.getAttribute("value")
    fridayC.innerHTML = fridayC.getAttribute("value")
    saturdayC.innerHTML = saturdayC.getAttribute("value")
    sundayC.innerHTML = sundayC.getAttribute("value")
    bigTempC.innerHTML = bigTempC.getAttribute("value")
    bigC.innerHTML = "°C"
}}