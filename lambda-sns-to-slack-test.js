'use strict';

const subject = require('./lambda-sns-to-slack');

exports.driver = (event, context, callback) => {
    subject.setHookUrl('https://test.slack');
    return subject.handler(event, context, callback);
};