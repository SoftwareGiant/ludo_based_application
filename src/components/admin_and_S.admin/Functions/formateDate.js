export   function formatDate(dateStr) {
    const date = new Date(dateStr);

    const options = {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      timeZone: "Asia/Kolkata", // IST timezone
    };

    return date.toLocaleString("en-IN", options);
  }