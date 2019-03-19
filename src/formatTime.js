function formatTime(seconds) {
  const ONE_MINUTE = 60;

  const getMinutes = () => seconds / ONE_MINUTE;

  const getLeftOverSeconds = () => seconds % ONE_MINUTE;

  if (seconds == 0) {
    return 'none';
  } else if (getMinutes() > 1) {
    return `${Math.floor(getMinutes())} minute and ${getLeftOverSeconds()} seconds`;
  } else {
   return `${seconds} seconds`;
  }

}
module.exports = formatTime;