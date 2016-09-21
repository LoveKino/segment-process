'use strict';

let {
    fork
} = require('child_process');

let {
    parent
} = require('general-bridge/apply/process');

let path = require('path');

let childPath = path.join(__dirname, './child.js');

module.exports = () => {
    // TODO process manage problem
    let child = fork(childPath);

    let call = parent(child);

    return {
        child,
        doSegment: (text) => call('doSegment', [text])
    };
};
