document.addEventListener('DOMContentLoaded', () => {
    const submitBtn = document.getElementById('submit-btn');
    const answerInput = document.getElementById('answer-input');
    const resultMessage = document.getElementById('result-message');
    const animationContainer = document.getElementById('animation-container');
    const inputArea = document.getElementById('input-area');

    const correctAnswer = "kennedy keller";

    // Function to handle answer submission
    const checkAnswer = () => {
        const userAnswer = answerInput.value.trim().toLowerCase();

        if (userAnswer === correctAnswer) {
            handleCorrectAnswer();
        } else {
            handleIncorrectAnswer();
        }
    };

    // Listen for button click
    submitBtn.addEventListener('click', checkAnswer);

    // Listen for "Enter" key press
    answerInput.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
            checkAnswer();
        }
    });

    function handleCorrectAnswer() {
        resultMessage.textContent = 'Obviously 🎉';
        inputArea.style.display = 'none'; // Hide input and button
        triggerConfetti();
    }

    function handleIncorrectAnswer() {
        answerInput.value = ''; // Clear the input field
        triggerXs();
    }

    // Function to create falling X's for wrong answers
    function triggerXs() {
        for (let i = 0; i < 30; i++) {
            const x = document.createElement('div');
            x.textContent = '❌';
            x.classList.add('x-mark');
            x.style.left = `${Math.random() * 100}vw`;
            x.style.animationDelay = `${Math.random() * 1}s`;
            animationContainer.appendChild(x);

            // Remove the element after animation ends
            setTimeout(() => {
                x.remove();
            }, 2000);
        }
    }

    // Function to create confetti for the correct answer
    function triggerConfetti() {
        const colors = ['#f44336', '#e91e63', '#9c27b0', '#673ab7', '#3f51b5', '#2196f3', '#03a9f4', '#00bcd4', '#009688', '#4caf50', '#ffeb3b', '#ff9800'];
        for (let i = 0; i < 150; i++) {
            const confetti = document.createElement('div');
            confetti.classList.add('confetti');
            confetti.style.left = `${Math.random() * 100}vw`;
            confetti.style.animationDelay = `${Math.random() * 2}s`;
            confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            
            // Add some variation
            const size = Math.random() * 8 + 5; // size between 5px and 13px
            confetti.style.width = `${size}px`;
            confetti.style.height = `${size}px`;
            confetti.style.transform = `rotate(${Math.random() * 360}deg)`;


            animationContainer.appendChild(confetti);

            // Remove the element after animation ends
            setTimeout(() => {
                confetti.remove();
            }, 3000);
        }
    }
});
