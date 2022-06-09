function running_late(date) {
  const dateTransformed = new Date(date);
  if (dateTransformed.getHours() >= 22) return "It is late!";
  return "It is still early!";
}

exports.running_late = running_late;
