
        document.addEventListener('DOMContentLoaded', function() {
            
            let booleanArray = [false, true, false, true, true, false, true, false, false, true, true, true, false];

            
            let trueCount = booleanArray.filter(Boolean).length;

            
            let resultElement = document.createElement('h'); resultElement.textContent = `Number of true values: ${trueCount}`;
            document.body.appendChild(resultElement);
            
        });