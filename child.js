'use strict';

let {
    child
} = require('general-bridge/apply/process');

// 载入模块
var Segment = require('segment');
// 创建实例
var segment = new Segment();
// 使用默认的识别模块及字典，载入字典文件需要1秒，仅初始化时执行一次即可
segment.useDefault();

child({
    doSegment: (text) => segment.doSegment(text)
});
