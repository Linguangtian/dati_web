Object.defineProperty(exports, "__esModule", {
    value: !0
});

var _createClass = function() {
    function o(t, e) {
        for (var i = 0; i < e.length; i++) {
            var o = e[i];
            o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), 
            Object.defineProperty(t, o.key, o);
        }
    }
    return function(t, e, i) {
        return e && o(t.prototype, e), i && o(t, i), t;
    };
}();

function _classCallCheck(t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
}

var NumberAnimate = function() {
    function e(t) {
        _classCallCheck(this, e);
        this.tempValue = 0, this.opt = Object.assign({
            from: 50,
            speed: 2e3,
            refreshTime: 100,
            decimals: 0,
            onUpdate: function() {},
            onComplete: function() {}
        }, t), this.loopCount = 0, this.loops = Math.ceil(this.opt.speed / this.opt.refreshTime), 
        this.increment = this.opt.from / this.loops, this.interval = null, this.init();
    }
    return _createClass(e, [ {
        key: "init",
        value: function() {
            var t = this;
            this.interval = setInterval(function() {
                t.updateTimer();
            }, this.opt.refreshTime);
        }
    }, {
        key: "updateTimer",
        value: function() {
            this.loopCount++, this.tempValue = this.formatFloat(this.tempValue, this.increment).toFixed(this.opt.decimals), 
            this.loopCount >= this.loops && (clearInterval(this.interval), this.tempValue = this.opt.from, 
            this.opt.onComplete()), this.opt.onUpdate();
        }
    }, {
        key: "formatFloat",
        value: function(t, e) {
            var i, o = void 0, n = void 0;
            try {
                o = t.toString().split(".")[1].length;
            } catch (t) {
                o = 0;
            }
            try {
                n = e.toString().split(".")[1].length;
            } catch (t) {
                n = 0;
            }
            return (t * (i = Math.pow(10, Math.max(o, n))) + e * i) / i;
        }
    } ]), e;
}();

exports.default = NumberAnimate;