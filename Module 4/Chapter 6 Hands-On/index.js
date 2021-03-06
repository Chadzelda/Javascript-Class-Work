

"use strict"; 

function validateRequired() { 
	var inputElements = docuemnt.querySelectorAll("#contactinfo input"); 
	var errorDiv = document.getElementById("errorText"); 
	var elementCount = inputElements.length; 
	var requiredValidity = true; 
	var currentElement; 
	
	try{ 
		for (var i = 0; i < elementCount; i++) { 
			currentElement = inputElements[i]; 
				if(currentElement.value === "") { 
					currentElement.style.background = "rgb(255,233,233)"; 
					requiredValidity = false; 
				} else { 
					currentElement.style.background = "white"; 
				}
			}
if (requiredValidity === false) { 
	throw "Please complete all fields."; 
}
errorDiv.style.display = "none"; 
errorDiv.innerHTML = ""; 
	}catch(msg) { 
	errorDiv.style.display = "block"; 
	errorDiv.innerHTML = msg; 
	formValidity = false; 
 }	
}

function validateForm() { 
	if(evt.preventDefault) { 
		evt.preventDefault(); 
	}else { 
		evt.returnValue = false; 
	}
		formValidity = false;
		validateRequired(); 
		validateNumbers(); 
		
	if (formValidity === true) { 
		document.getElementsByTagName("form")[0].submit(); 
	}
} 

function validateNumbers() { 
var numberInputs = document.querySelectorAll("#contactinfo input[type=number]"); 
var elementCount = numberInputs.length; 
var numErrorDiv = document.getElementById("numErrorText"); 
var numbersValidity = true; 
var currentElement; 

try { 
	for (var i = 0; i < elementCount; i++) { 
		currentElement = numberInputs[i]; 
		if (isNaN(currentElement.value) || (currentElement.value === "" )) { 
			currentElement.style.background = "rgb(255,233,233)"; 
			numbersValidity = false; 
		} else { 
			currentElement.style.background = "white"; 
		} 
	} 
	if(numbersValidity === false ) { 
		throw "Zip and Social Security values must contain numbers"; 
	}
	numErrorDiv.style.display = "none"; 
	numErrorDiv.innerHTML = ""; 
}catch(msg) { 
	numErrorDiv.style.display = "block"; 
	numErrorDiv.innerHTML = msg; 
	formValidity = false; 
 

}  


function createEventListener() { 
	var form = document.getElementsByTagName("form")[0]; 
if(form.addEventListener) } 
	form.addEventListener("submit", validateForm, false); 
}else (form.attachEvent) { 
	form.attachEvent("onsubmit", validateForm); 
} 
}

if (window.addEventListener) { 
	window.addEventListener("load", createEventListener, false); 
}else if (window.attachEvent) { 
	window.attachEvent("onload", createEventListener); 
}