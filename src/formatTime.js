function formatTime(seconds) {
  const ONE_MINUTE = 60,
        ONE_HOUR = 3600,
        ONE_DAY = 86400;

  let timeByUnit;

  const getMinutes = () => seconds / ONE_MINUTE;

  const getLeftOverSeconds = () => seconds % ONE_MINUTE;

  const getHours = () => seconds / ONE_HOUR;

  const getDays = () => seconds / ONE_DAY;


  const getLeftoverMinutes = () => {
    return Math.floor(getMinutes()) - 60 * Math.floor(getHours());
  }

  const getLeftoverHours = () => {
    return Math.floor(getHours()) - 24 * Math.floor(getDays());
  }

  const calculateTimeByUnit = (seconds) =>  {
    let timeByUnit = new Map();
    let days = Math.floor(seconds / ONE_DAY);
    if (days >= 1) timeByUnit.set('day', days);
    let hours = getLeftoverHours();
    if (hours >= 1) timeByUnit.set('hour', hours);
    let mins = getLeftoverMinutes();
    if (mins >= 1) timeByUnit.set('minute', mins);
    let secs = getLeftOverSeconds();
    if (secs >= 1) timeByUnit.set('second', secs);
    return timeByUnit;
  }

  //would be much nicer using Object.entries() to get the index but cant get it to work in this project :(
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
      units = value >= 2  ? ` ${key}s` : ` ${key}`;
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
  if (seconds == 0) {
    return 'none';
  } else {
    timeByUnit = calculateTimeByUnit(seconds);
    return buildTimeText();
  }

}
module.exports = formatTime;