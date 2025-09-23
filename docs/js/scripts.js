/*!
* Start Bootstrap - Business Casual v7.0.9
* Licensed under MIT
*/

window.addEventListener('DOMContentLoaded', event => {
    const listHoursArray = document.body.querySelectorAll('.list-hours li');
    
    // Solo procede si se encontraron elementos
    if (listHoursArray.length > 0) {
        const todayIndex = new Date().getDay();
        // Verifica que todayIndex esté dentro del rango
        if (todayIndex >= 0 && todayIndex < listHoursArray.length) {
            listHoursArray[todayIndex].classList.add('today');
        }
    }
});

