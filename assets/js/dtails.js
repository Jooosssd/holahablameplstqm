document.addEventListener('DOMContentLoaded', function() {
    const detailsElements = document.querySelectorAll('details');

    detailsElements.forEach(function(details) {
        details.addEventListener('toggle', function() {
            if (details.open) {
                detailsElements.forEach(function(otherDetails) {
                    if (otherDetails !== details && otherDetails.open) {
                        otherDetails.open = false;
                    }
                });
            }
        });
    });
});