document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('searchInput');
    const searchButton = document.getElementById('searchButton');

    searchButton.addEventListener('click', () => {
        performSearch();
    });

    searchInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            performSearch();
        }
    });

    function performSearch() {
        const query = searchInput.value.trim(); // Get input value and remove leading/trailing whitespace
        if (query) {
            alert(`Searching for: ${query}`); // Replace with actual search logic (e.g., redirect to a search results page, filter a list)
            // Example of a real search (redirecting to Google)
            // window.location.href = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
        } else {
            alert('Please enter a search query.');
        }
    }
});

