module.exports = {
  format_date(date) {
    // Extract date components
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();

    // Extract time components
    const hour = String(date.getHours()).padStart(2, '0');
    const minute = String(date.getMinutes()).padStart(2, '0');

    // Construct formatted date string
    const formattedDate = `${day}/${month}/${year} at ${hour}:${minute}`;

    return formattedDate;
}
};