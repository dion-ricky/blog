import 'regenerator-runtime/runtime';
import { fetchIcon, changeIcon } from './icon';
import { format, formatDistance, formatRelative, subDays } from 'date-fns'

// =============================================
// date-fns
console.log(format(new Date(), "'Today is a' iiii"));
console.log(formatDistance(subDays(new Date(), 3), new Date()));
console.log(formatRelative(subDays(new Date(), 3), new Date()));

// =============================================
// Replace icon
document.addEventListener('DOMContentLoaded', () => {
    let iconPool = {};
    
    document.querySelectorAll('icon').forEach((el) => {
        let icon = el.getAttribute('src');
        iconPool[icon] = !(icon in iconPool) ? [el] : [...iconPool[icon], el];
    });

    for (let icon in iconPool) {
        fetchIcon(icon)
        .then(data => {
            iconPool[icon].forEach(el => {
                changeIcon(el, data);
            });
        });
    }

});
