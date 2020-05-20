function formatTime(seconds) {
  if (seconds <= 0) {
    return 'none';
  } else {
    let minutes = Math.floor(seconds / 60 ),
      remainingSeconds = seconds % 60;
    if (minutes == 0) {
      return `${seconds} seconds`;
    } else {
      let minutesText = minutes > 1 ? 'minutes' : 'minute';
      if (remainingSeconds > 0) {
        return `${minutes} ${minutesText} and ${remainingSeconds} seconds`
      } else {
        return `${minutes} ${minutesText}`
      }
    }
  }
}

module.exports = formatTime;