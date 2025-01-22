const adviceIdElement = document.getElementById('advice-id');
const adviceTextElement = document.getElementById('advice-text');
const adviceButton = document.getElementById('generate-advice');

const spinner = document.createElement('div');
spinner.classList.add('spinner');

async function fetchAdvice() {
    try {

        adviceTextElement.textContent = '';
        adviceTextElement.appendChild(spinner); 

        const response = await fetch('https://api.adviceslip.com/advice');
        const data = await response.json();
        const { slip } = data;

        adviceIdElement.textContent = `"${slip.advice}"`;
        adviceTextElement.textContent = `Advice #${slip.id}`;
    } catch (error) {
        adviceTextElement.textContent = "Oops! Something went wrong.";
        console.error("Error fetching advice:", error);
    }
}

// Event listener for the button to get new advice
adviceButton.addEventListener('click', fetchAdvice);

// Fetch initial advice when the page loads
fetchAdvice();
