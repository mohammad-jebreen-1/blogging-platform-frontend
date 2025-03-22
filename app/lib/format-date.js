const formatDate = (date, locale = "en-US", options = {}) => {
  if (!date) return "";

  const formattedDate = new Date(date).toLocaleDateString(locale, options);

  return formattedDate;
};

export default formatDate;
