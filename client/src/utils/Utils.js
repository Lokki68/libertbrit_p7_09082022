export const removeLocalStorage = () => {
  localStorage.removeItem("groupomania-token");
  localStorage.removeItem("groupomania-id");
};

const timeDiff = {
  minute: 60 * 1000,
  hour: 60 * 60 * 1000,
  day: 24 * 60 * 60 * 1000,
  week: 7 * 24 * 60 * 60 * 1000,
  month: 30 * 24 * 60 * 60 * 1000,
  year: 365 * 24 * 60 * 60 * 1000,
};

export const timeAgo = (value) => {
  const now = new Date();
  const then = new Date(value).getTime();
  const diff = now - then;

  if (diff < timeDiff.minute) {
    return "il y a quelques secondes";
  } else if (diff < timeDiff.hour) {
    return "il y a quelques minutes";
  } else if (diff < timeDiff.day) {
    return "il y a quelques heures";
  } else if (diff < timeDiff.week) {
    return "il y a quelques jours";
  } else if (diff < timeDiff.month) {
    return "il y a quelques semaines";
  } else if (diff < timeDiff.year) {
    return "il y a quelques mois";
  } else {
    return "il y a plus d'un an";
  }
};
