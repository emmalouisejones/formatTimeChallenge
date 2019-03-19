function formatTime(seconds) {
  const ONE_MINUTE = 60;

  const getMinutes = () => seconds / ONE_MINUTE;

  const getLeftOverSeconds = () => seconds % ONE_MINUTE;

  if (seconds == 0) {
    return 'none';
  } else if (getMinutes() > 1) {
    let minuteText = getMinutes() >= 2 ? ' minutes' : ' minute';
    let secondsText = getLeftOverSeconds() > 0 ? ` and ${getLeftOverSeconds()} seconds` : '';
    return `${Math.floor(getMinutes())}${minuteText}${secondsText}`;
  } else {
   return `${seconds} seconds`;
  }

}
module.exports = formatTime;