function formatTime(seconds) {
  const ONE_MINUTE = 60;
  const ONE_HOUR = 3600;

  const getMinutes = () => seconds / ONE_MINUTE;

  const getLeftOverSeconds = () => seconds % ONE_MINUTE;

  const getHours = () => seconds / ONE_HOUR;

  if (seconds == 0) {
    return 'none';
  } else if (getHours() > 1){
    let minuteValue = Math.floor(getMinutes()) - 60 * Math.floor(getHours());
    let minuteText = minuteValue >= 2 ? ' minutes' : ' minute';
    let secondsText = getLeftOverSeconds() > 0 ? ` and ${getLeftOverSeconds()} seconds` : '';

    return `${Math.floor(getHours())} hour, ${minuteValue}${minuteText}${secondsText}`;
  } else if (getMinutes() > 1) {
    let minuteText = getMinutes() >= 2 ? ' minutes' : ' minute';
    let secondsText = getLeftOverSeconds() > 0 ? ` and ${getLeftOverSeconds()} seconds` : '';
    return `${Math.floor(getMinutes())}${minuteText}${secondsText}`;
  } else {
   return `${seconds} seconds`;
  }

}
module.exports = formatTime;