'use strict';

let SegmentProcess = require('..');
let assert = require('assert');

describe('index', () => {
    it('base', () => {
        //
        let {
            doSegment
        } = SegmentProcess();

        return doSegment('今天天气不错哦').then((words) => {
            assert.equal(words.length > 0, true);
        });
    });
});
