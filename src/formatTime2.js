function formatTime(seconds) {
  const ONE_MINUTE  = 60,
        ONE_HOUR    = 3600,
        ONE_DAY     = 86400,
        ONE_YEAR    = 31536000;

  const getMinutes = () => Math.floor(seconds / ONE_MINUTE );

  const getHours = () => Math.floor(seconds/ ONE_HOUR);

  const getDays = () => Math.floor(seconds / ONE_DAY);

  const getYears = () => Math.floor(seconds / ONE_YEAR);

  const getRemainingDays = () => getDays() - (365 * getYears())

  const getRemainingHours = () => getHours() - (24 * getDays());

  const getRemainingMinutes = () => getMinutes() - (60 * getHours());

  const getRemainingSeconds = () => seconds % 60;

  const calculateTimeByUnit = (seconds) => {
    let timeByUnit = new Map();
    let years = getYears();
    if (years >= 1) timeByUnit.set('year', years);
    let days = getRemainingDays();
    if (days >= 1) timeByUnit.set("day", days);
    let remainingHours = getRemainingHours();
    if (remainingHours >= 1) timeByUnit.set("hour", remainingHours);
    let remainingMinutes = getRemainingMinutes();
    if (remainingMinutes >= 1) timeByUnit.set("minute", remainingMinutes);
    let remainingSeconds = getRemainingSeconds();
    if (remainingSeconds >= 1)  timeByUnit.set("second", remainingSeconds);
    return timeByUnit;
  }

  const buildTimeText = () => {
    let count = 0,
      text = '';

    const isLastSeparator = (map) => {
      return count + 1 != map.size;
    }

    timeByUnit.forEach((value, key, map) => {
      let units,
        separator;
      count = count+1;
      units = value > 1  ? ` ${key}s` : ` ${key}`;
      separator = isLastSeparator(map) ? ',' : ' and';
      const isMoreValues = () => {
        return count != map.size;
      }
      if (isMoreValues()) {
        text = `${text}${value}${units}${separator} `;
      } else {
        text = `${text}${value}${units}`;
      }
    });
    return text;
  }

  if (seconds <= 0 || isNaN(seconds)) {
    return 'none';
  } else {
    timeByUnit = calculateTimeByUnit(seconds);
      return buildTimeText();
  }
}

module.exports = formatTime;