function formatTime(seconds) {
  if (seconds <= 0) {
    return 'none';
  } else {
    let minutes = Math.floor(seconds / 60 )
    if (minutes >= 1) {
      return `${minutes} minute and ${seconds % 60} seconds`
    }
    return `${seconds} seconds`;
  }
}

module.exports = formatTime;