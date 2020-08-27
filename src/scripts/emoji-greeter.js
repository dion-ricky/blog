import randomEmoji from './random-emoji';

// =============================================
// Display Random Emoji
document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('#emoji-greeter').innerHTML = randomEmoji();
});
