const formatTime = require('../src/formatTime');

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

test('time of hours, minutes and seconds returns as expected', () => {
  expect(formatTime(3662)).toBe('1 hour, 1 minute and 2 seconds');
});

//TODO test hour variants
//TODO test days variants
//TODO test year variants