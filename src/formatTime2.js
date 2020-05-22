function formatTime(seconds) {
  const ONE_MINUTE  = 60,
        ONE_HOUR    = 3600,
        ONE_DAY     = 86400;

  const calculateTimeByUnit = (seconds) => {
    let timeByUnit = new Map();
    let days = Math.floor(seconds / ONE_DAY);
    if (days >= 1) {
      timeByUnit.set("day", days);
    }
    let hours = Math.floor(seconds/ ONE_HOUR),
      remainingHours = hours - (24 * days);

    if (remainingHours >= 1) {
      timeByUnit.set("hour", remainingHours);
    }
    let minutes = Math.floor(seconds / ONE_MINUTE ),
      remainingMinutes = minutes - (60 * hours),
      remainingSeconds = seconds % 60;
    if (remainingMinutes >= 1) {
      timeByUnit.set("minute", remainingMinutes);
    }
    if (remainingSeconds >= 1) {
      timeByUnit.set("second", remainingSeconds);
    }
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
      const isLastValue = () => {
        return count != map.size;
      }
      if (isLastValue()) {
        text = `${text}${value}${units}${separator} `;
      } else {
        text = `${text}${value}${units}`;
      }
    });
    return text;
  }

  if (seconds <= 0) {
    return 'none';
  } else {
    timeByUnit = calculateTimeByUnit(seconds);
      return buildTimeText();
  }
}

module.exports = formatTime;