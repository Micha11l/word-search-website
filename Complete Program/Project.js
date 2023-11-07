document.addEventListener('DOMContentLoaded', () => {
    const searchBox = document.getElementById('search-bar');

    const searchWords = {
        photosynthesis: "TermPage/Term1.html",
        mitosis: "TermPage/Term2.html",
        dna: "TermPage/Term3.html",
        molecule: "TermPage/Term4.html",
        acid: "TermPage/Term5.html",
        polymer: "TermPage/Term6.html",
        kinetics: "TermPage/Term7.html",
        velocity: "TermPage/Term8.html",
        friction: "TermPage/Term9.html",
    };
    function redirectToPage() {
        const searchTerm = searchBox.value.trim().toLowerCase();
        if (searchWords.hasOwnProperty(searchTerm)) {
            window.location.href = searchWords[searchTerm];
        } else {
            alert('Please enter one of the valid search terms.');
        }
    }
    searchBox.addEventListener('keyup', (event) => {
        if (event.key === 'Enter') {
            redirectToPage();
        }
    });
});
document.addEventListener('DOMContentLoaded', () => {
    const searchBox = document.getElementById('search-bar');

    function redirectToPage(searchTerm) {
        if (searchWords.hasOwnProperty(searchTerm)) {
            window.location.href = searchWords[searchTerm];
        } else {
            alert('Please enter one of the valid search terms.');
        }
    }

    async function search() {
        const searchTerm = searchBox.value.trim().toLowerCase();
        try {
            const response = await fetch(`/search/${searchTerm}`);
            if (response.ok) {
                redirectToPage(searchTerm);
            } else {
                console.error('Error:', response.statusText);
            }
        } catch (error) {
            console.error('Fetch Error:', error);
        }
    }
    
    searchBox.addEventListener('keyup', (event) => {
        if (event.key === 'Enter') {
            search();
        }
    });
});

