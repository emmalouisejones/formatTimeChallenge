function formatTime(seconds) {
  const ONE_MINUTE = 60;
  const ONE_HOUR = 3600;

  let timeByUnit;

  const getMinutes = () => seconds / ONE_MINUTE;

  const getLeftOverSeconds = () => seconds % ONE_MINUTE;

  const getHours = () => seconds / ONE_HOUR;

  const getLeftoverMinutes = () => {
    return Math.floor(getMinutes()) - 60 * Math.floor(getHours());
  }

  const getSecondsText = () => {
    return getLeftOverSeconds() > 0 ? ` and ${getLeftOverSeconds()} seconds` : '';
  }

  const getMinutesText = () => {
    return `${timeByUnit.get('MINUTES')} ${timeByUnit.get('MINUTES') >= 2 ?  'minutes' :  'minute'}`;
  }

  const getHoursText = () => {
    return `${timeByUnit.get('HOURS')} ${timeByUnit.get('HOURS') >= 2  ?  'hours' :  'hour'}`;
  }

  const buildHoursResponse = () => {
    let mins;
    if (timeByUnit.has('MINUTES')) {
      mins = `, ${getMinutesText()}`
    } else {
      mins = 'and '
    }
    return `${getHoursText()}${mins}${getSecondsText()}`;
  }


  const buildMinutesResponse = () => {
    return `${getMinutesText()}${getSecondsText()}`;
  }


  const calculateTimeByUnit = (seconds) =>  {
    let timeByUnit = new Map();
    let hours = Math.floor(seconds / ONE_HOUR);
    if (hours >= 1) timeByUnit.set('HOURS', hours);
    let mins = getLeftoverMinutes();
    if (mins >= 1) timeByUnit.set('MINUTES', mins);
    let secs = getLeftOverSeconds();
    if (secs >= 1) timeByUnit.set('SECONDS', secs);
    return timeByUnit;
  }

  if (seconds == 0) {
    return 'none';
  } else {
    timeByUnit = calculateTimeByUnit(seconds);
    if (timeByUnit.has('HOURS')) {
      return buildHoursResponse();
    } else if (timeByUnit.has('MINUTES')) {
      return buildMinutesResponse();
    } else {
      return `${seconds} seconds`;
    }
  }

}
module.exports = formatTime;