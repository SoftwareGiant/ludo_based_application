export function convertTimestamp(timestamp) {
    const currentDate = new Date(); // Current date
    const matchingDate = new Date(timestamp); // Date from matchingTimeStamp

    // Calculate the difference in milliseconds
    const difference = currentDate - matchingDate;

    // Convert milliseconds to hours, days, and months
    const hours = Math.floor(difference / (1000 * 60 * 60));
    const days = Math.floor(hours / 24);
    const months = Math.floor(days / 30);

    let formattedDate;
    if (months > 0) {
        formattedDate = `${months} month${months > 1 ? 's' : ''} ago`;
    } else if (days > 0) {
        formattedDate = `${days} day${days > 1 ? 's' : ''} ago`;
    } else {
        formattedDate = `${hours} hour${hours > 1 ? 's' : ''} ago`;
    }

    return formattedDate;
}


