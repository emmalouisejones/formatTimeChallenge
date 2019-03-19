function formatTime(seconds) {
  const ONE_MINUTE = 60;
  const ONE_HOUR = 3600;

  const getMinutes = () => seconds / ONE_MINUTE;

  const getLeftOverSeconds = () => seconds % ONE_MINUTE;

  const getHours = () => seconds / ONE_HOUR;


  const getSecondsText = () => {
    return getLeftOverSeconds() > 0 ? ` and ${getLeftOverSeconds()} seconds` : '';
  }

  const getMinutesText = (minuteValueCalc) => {
    return `${Math.floor(minuteValueCalc())} ${minuteValueCalc() >= 2 ?  'minutes' :  'minute'}`;
  }

  const buildHoursResponse = () => {
    const getLeftoverMinutes = () => {
      return Math.floor(getMinutes()) - 60 * Math.floor(getHours());
    }
    let minuteText = getMinutesText(getLeftoverMinutes);
    let secondsText = getSecondsText();

    return `${Math.floor(getHours())} hour, ${minuteText}${secondsText}`;
  }


  const buildMinutesResponse = () => {
    let minuteText = getMinutesText(getMinutes);
    let secondsText = getSecondsText();
    return `${minuteText}${secondsText}`;
  }

  if (seconds == 0) {
    return 'none';
  } else {
    if (getHours() > 1){
      return buildHoursResponse();
    } else if (getMinutes() > 1) {
      return buildMinutesResponse();
    } else {
      return `${seconds} seconds`;
    }
  }

}
module.exports = formatTime;