const formatTime = require('../src/formatTime2');
test('time of zero returns none', () => {
  expect(formatTime(0)).toBe('none');
});

test('time of seconds returns seconds only', () => {
  expect(formatTime(2)).toBe('2 seconds');
});


test('time of seconds and minute returns as expected', () => {
  expect(formatTime(62)).toBe('1 minute and 2 seconds');
});

test('time of seconds and minutes returns as expected', () => {
  expect(formatTime(122)).toBe('2 minutes and 2 seconds');
});

test('time of minutes only returns as expected', () => {
  expect(formatTime(120)).toBe('2 minutes');
});
//
// test('time of hour, minutes and seconds returns as expected', () => {
//   expect(formatTime(3662)).toBe('1 hour, 1 minute and 2 seconds');
// });
//
// test('time of hours, minutes and seconds returns as expected', () => {
//   expect(formatTime(7262)).toBe('2 hours, 1 minute and 2 seconds');
// });
//
// test('time of hours and minutes only returns as expected', () => {
//   expect(formatTime(7260)).toBe('2 hours and 1 minute');
// });
//
// test('time of hours and seconds only returns as expected', () => {
//   expect(formatTime(7201)).toBe('2 hours and 1 second');
// });
//
// test('time of days only returns as expected', () => {
//   expect(formatTime(86400)).toBe('1 day');
// });
//
// test('time of days and seconds only returns as expected', () => {
//   expect(formatTime(86401)).toBe('1 day and 1 second');
// });
//
// test('time of days minutes and seconds only returns as expected', () => {
//   expect(formatTime(86461)).toBe('1 day, 1 minute and 1 second');
// });
//
// test('time of days hour minutes and seconds only returns as expected', () => {
//   expect(formatTime(90061)).toBe('1 day, 1 hour, 1 minute and 1 second');
// })
//
// test('time of years only returns as expected', () => {
//   expect(formatTime(31536000)).toBe('1 year');
// });
// test('time of years and days returns as expected', () => {
//   expect(formatTime(62985600)).toBe('1 year and 364 days');
// });
//
// test('time of years, days, hours, minutes and seconds returns as expected', () => {
//   expect(formatTime(62985539)).toBe('1 year, 363 days, 23 hours, 58 minutes and 59 seconds');
// });
//
// test('negative seconds', () => {
//   expect(formatTime(-1)).toBe('none');
// });
//
// test('non numeric input', () => {
//   expect(formatTime('emma')).toBe('none');
// });