// Ensure the DOM is fully loaded before attaching listeners
document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('terminalSearch');
    const table = document.getElementById('manifestTable');
    const noResultsMsg = document.getElementById('no-results-msg');
    
    // Safety check to ensure the elements exist on the page
    if (!searchInput || !table) return;

    const rows = table.getElementsByTagName('tbody')[0].getElementsByTagName('tr');

    searchInput.addEventListener('keyup', function() {
        const filterValue = this.value.toLowerCase();
        let visibleRowsCount = 0;

        // Loop through all table rows
        for (let i = 0; i < rows.length; i++) {
            const fileIdCell = rows[i].getElementsByTagName('td')[0];
            const titleCell = rows[i].getElementsByTagName('td')[2];
            
            if (fileIdCell && titleCell) {
                const idText = fileIdCell.textContent || fileIdCell.innerText;
                const titleText = titleCell.textContent || titleCell.innerText;

                // Match against File ID or Document Title
                if (idText.toLowerCase().includes(filterValue) || titleText.toLowerCase().includes(filterValue)) {
                    rows[i].style.display = ""; // Show row
                    visibleRowsCount++;
                } else {
                    rows[i].style.display = "none"; // Hide row
                }
            }
        }

        // Toggle table visibility and error message based on results
        if (visibleRowsCount === 0) {
            table.style.display = "none";
            if (noResultsMsg) noResultsMsg.style.display = "block";
        } else {
            table.style.display = "table";
            if (noResultsMsg) noResultsMsg.style.display = "none";
        }
    });
});