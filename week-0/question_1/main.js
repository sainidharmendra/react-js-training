const messageElement = document.querySelector('.message')

const hours = new Date().getHours()
if (hours < 12) {
    messageElement.textContent = "Good Morning"
} else if (hours < 18) {
    messageElement.textContent = "Good Afternoon"
} else if (hours < 20) {
    messageElement.textContent = "Good Evening"
} else {
    messageElement.querySelector('.message').textContent = "Good Evening"
}

function getCurrentTimeFormatted() {
    return new Date().toLocaleTimeString('en-US', { hour12: true });
}
  
const timeElement = document.querySelector('.time')
timeElement.textContent = getCurrentTimeFormatted()


function getCurrentDateFormatted() {
    const options = { day: '2-digit', month: 'long', year: 'numeric' };
    const currentDate = new Date();
    const formattedDate = currentDate.toLocaleDateString('en-US', options);
    const [month, day, year] = formattedDate.split(' ');
    const dayLength = day.length
    return `${day.substring(0, dayLength - 1)} ${month} ${year}`;
}

const dateElement = document.querySelector('.date')
dateElement.textContent = getCurrentDateFormatted()

