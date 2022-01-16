var isholiday = require('./index');
var azdate = require('azdate');

console.log('version' , isholiday.version() );

// console.log(isholiday.isPersianHoliday('1399/01/02'))
// console.log(isholiday.isPersianHoliday('1399/01/03'))
// console.log(isholiday.isPersianHoliday('1399/01/05'))
// console.log(isholiday.persian_event('1399/01/02'))

// console.log(azdate.miladi('1399/01/01'));
// console.log(isholiday.isHijriHoliday('1357/11/09'));
// console.log(isholiday.isHijriHoliday('1399/05/31'));
// console.log(isholiday.isHijriHoliday('1370/01/01'));
// console.log(isholiday.isHijriHoliday('1357/11/09'));
// console.log(isholiday.isHijriHoliday('1399/10/30'));
console.log(isholiday.isHijriHoliday('hijri-holiday ? ' , '1387/10/17'));
console.log(isholiday.hijri_event('Events : ' , '1387/10/17'));