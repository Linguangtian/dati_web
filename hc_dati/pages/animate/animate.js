function _defineProperty(t, a, n) {
    return a in t ? Object.defineProperty(t, a, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : t[a] = n, t;
}

var dotAnFun;

Page({
    data: {
        animation: "",
        dotAnData: {},
        xaun: !1
    },
    onLoad: function() {},
    dong: function() {
        this.data.n;
        var t = wx.createAnimation(_defineProperty({
            transformOrigin: "50% 50%",
            duration: 1e3,
            timingFunction: "ease",
            delay: 0
        }, "transformOrigin", "80% 0"));
        (this.animation = t).rotate(10).step(), this.setData({
            animationData: t.export()
        }), setTimeout(function() {
            this.setData({
                animationData: t.export()
            });
        }.bind(this), 200);
    },
    zanting: function() {
        var t = this;
        t.animation.rotate(0).step(), console.log(t.animation);
        var a = this.data.xaun;
        t.setData({
            animationData: t.animation.export(),
            xaun: !a
        });
    },
    kai: function() {
        this.dong();
        var t = this.data.xaun;
        this.setData({
            xaun: !t
        });
    }
});