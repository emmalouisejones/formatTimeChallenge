function formatTime(seconds) {
  if (seconds <= 0) {
    return 'none';
  } else {
    let hours = Math.floor(seconds/ 3600),
      minutes = Math.floor(seconds / 60 ),
      remainingMinutes = minutes - (60 * hours),
      remainingSeconds = seconds % 60;
    if (hours > 0) {
      let hoursText = hours > 1 ? 'hours' : 'hour';
      if (remainingMinutes > 0) {
        let minutesText = remainingMinutes > 1 ? 'minutes' : 'minute';
        if (remainingSeconds > 0) {
          return `${hours} ${hoursText}, ${remainingMinutes} ${minutesText} and ${remainingSeconds} seconds`
        } else {
          return `${hours} ${hoursText} and ${remainingMinutes} ${minutesText}`
        }
      } else {
        if (remainingSeconds > 0) {//change to hours
          return `${hours} ${hours} and ${remainingSeconds} seconds`
        } else {
          return `${hours} ${hoursText}`
        }
      }
    }
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