document.addEventListener("DOMContentLoaded", () => {
    // Elements for each section
    const homeSection = document.getElementById('home-section');
    const destinationsSection = document.getElementById('destinations-section');
    const guidesSection = document.getElementById('guides-section');
    const techSection = document.getElementById('travel-tech-section');
    const exploreButton = document.getElementById('explore-button');
    const destinationButtonsContainer = document.querySelector('.destination-buttons');
    const guideButtonsContainer = document.querySelector('.guide-buttons');
    const techButtonsContainer = document.querySelector('.tech-buttons');

    // Load the data from JSON
    fetch('data.json')
        .then(response => response.json())
        .then(data => {
            const destinations = data.destinations;
            const guides = data.guides;
            const tech = data.technology;

            // Create the destination buttons dynamically
            destinations.forEach(destination => {
                const button = document.createElement('button');
                button.textContent = destination.name;
                button.classList.add('destination-btn');
                button.addEventListener('click', () => displayDestination(destination));
                destinationButtonsContainer.appendChild(button);
            });

            // Create the guide buttons dynamically
            guides.forEach(guide => {
                const button = document.createElement('button');
                button.textContent = guide.name;
                button.classList.add('guide-btn');
                button.addEventListener('click', () => displayGuide(guide));
                guideButtonsContainer.appendChild(button);
            });

            // Create the technology buttons dynamically
            tech.forEach(technology => {
                const button = document.createElement('button');
                button.textContent = technology.name;
                button.classList.add('tech-btn');
                button.addEventListener('click', () => displayTech(technology));
                techButtonsContainer.appendChild(button);
            });

            // Explore button functionality
            exploreButton.addEventListener('click', () => {
                homeSection.style.display = 'none';
                destinationsSection.style.display = 'block';
            });

            // Display destination info
            function displayDestination(destination) {
                document.getElement


