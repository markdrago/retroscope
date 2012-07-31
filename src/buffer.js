function Buffer() {
    this.buffer = new Array();
}

Buffer.prototype.append_frame = function(frame) {
    this.buffer.push(frame);
};

Buffer.prototype.get_frame = function(frame_offset) {
    /* to get a delay of 0 we show the frame at length - 1 */
    if (frame_offset == 0) {
        frame_offset = 1;
    }

    return this.buffer[this.buffer.length - frame_offset]
};

Buffer.prototype.collect_garbage = function(frame_retention) {
    while (this.buffer.length > frame_retention) {
        this.buffer.shift();
    }
};

Buffer.prototype.get_frame_count = function() {
    return this.buffer.length;
}
