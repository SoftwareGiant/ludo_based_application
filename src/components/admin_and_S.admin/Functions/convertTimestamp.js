export function convertTimestamp(timestamp) {
    const currentDate = new Date(); // Current date
    const matchingDate = new Date(timestamp); // Date from matchingTimeStamp

    // Calculate the difference in milliseconds
    const difference = currentDate - matchingDate;

    // Convert milliseconds to seconds, minutes, hours, days, months, and years
    const seconds = Math.floor(difference / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    const months = Math.floor(days / 30);
    const years = Math.floor(months / 12);

    let formattedDate;
    if (years > 0) {
        formattedDate = `${years} year${years > 1 ? 's' : ''} ago`;
    } else if (months > 0) {
        formattedDate = `${months} month${months > 1 ? 's' : ''} ago`;
    } else if (days > 0) {
        formattedDate = `${days} day${days > 1 ? 's' : ''} ago`;
    } else if (hours > 0) {
        formattedDate = `${hours} hour${hours > 1 ? 's' : ''} ago`;
    } else if (minutes > 0) {
        formattedDate = `${minutes} minute${minutes > 1 ? 's' : ''} ago`;
    }
    else if (seconds === 0) {
        formattedDate = "now";
    }
    else {
        formattedDate = `${seconds} second${seconds > 1 ? 's' : ''} ago`;
    }

    return formattedDate;
}
