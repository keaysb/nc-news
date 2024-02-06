export function formatDate (dateStr) {
    const date = new Date(dateStr);
    const options = {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
    };
    return new Intl.DateTimeFormat("en-GB", options).format(date);
}