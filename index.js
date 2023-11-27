
        document.addEventListener('DOMContentLoaded', function() {
            
            const booleanArray = [false, true, false, true, true, false, true, false, false, true, true, true, false];

            
            const trueCount = booleanArray.filter(Boolean).length;

            
            const resultElement = document.createElement('p');
            resultElement.textContent = `Number of true values: ${trueCount}`;
            document.body.appendChild(resultElement);
            
        });