// var fs = require('fs');
var azdate = require('azdate');
var hijri = require('hijri');
var moment_hijri = require('moment-hijri');

var events = require('./events.json');
var _persian_holidays = events.PersianCalendar.filter(item => item.holiday == true && item.type == 'Iran');
var _persian_events = events.PersianCalendar.filter(item => item.type == 'Iran');

var _hijri_holidays = events.HijriCalendar.filter(item => item.holiday == true && item.type == 'Islamic Iran');
var _hijri_events = events.HijriCalendar.filter(item => item.type == 'Islamic Iran');


var _module = {
    version: () => {
        return '1.0.0';
    },
    events: events,
    persian_events: events.PersianCalendar,
    persian_holidays: _persian_holidays,
    isPersianHoliday: (persian_date) => {
        if (persian_date.length == 10) {
            // get month and day 
            var m = parseInt(persian_date.split('/')[1]);
            var d = parseInt(persian_date.split('/')[2]);
            // loop in perisna events and check 
            _isHoliday = false;
            _persian_holidays.forEach((item) => {
                if (item.month == m && item.day == d && item.holiday == true) {
                    _isHoliday = true;
                }
            });
            return _isHoliday;
        } else {
            throw new Error('require 10 character date like 1399/01/01 (seperator : "/" ) ');
        }
    },
    persian_event: (persian_date) => {
        if (persian_date.length == 10) {
            // get month and day 
            var m = parseInt(persian_date.split('/')[1]);
            var d = parseInt(persian_date.split('/')[2]);
            // loop in perisna events and check 
            _isHoliday = false;
            return _persian_events.filter(item => item.month == m && item.day == d);
        } else {
            throw new Error('require 10 character date like 1399/01/01 (seperator : "/" ) ');
        }
    },
    // TODO : add hijri_holidays
    // TODO : add hijri_events
    isHijriHoliday: (persian_date) => {
        var _miladi_date = azdate.miladi(persian_date).replace('/', '-').replace('/', '-');
        var _hijri_date = hijri.convert(new Date(_miladi_date))
        var m = _hijri_date.month;
        var d = _hijri_date.dayOfMonth;
        // console.log(_hijri_date.year,'/' , m , '/',d)
        _isHoliday = false;
        _hijri_holidays.forEach((item) => {
            if (item.month == m && item.day == d && item.holiday == true) {
                _isHoliday = true;
            }
        });
        return _isHoliday;

    },
    // TODO : add hijri_event()
    hijri_event: (persian_date) => {
        var _miladi_date = azdate.miladi(persian_date).replace('/', '-').replace('/', '-');
        var _hijri_date = hijri.convert(new Date(_miladi_date))
        var m = _hijri_date.month;
        var d = _hijri_date.dayOfMonth;
        return _hijri_events.filter(item => item.month == m && item.day == d);
    },

};

module.exports = _module;