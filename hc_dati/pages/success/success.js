function _defineProperty(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e;
}

var app = getApp();

Page(_defineProperty({
    data: {},
    onLoad: function(e) {
        var t = app.globalData.setup;
        app.globalData.user_id;
        this.setData({
            setup: t
        });
    },
    dianji: function() {
        wx.navigateTo({
            url: "../index/index"
        });
    },
    onShareAppMessage: function(e) {
        var a = this;
        return "button" === e.from && console.log(e.target), {
            title: "玩天天红包，每天1元最高可赚5000元",
            desc: "欢迎大家使用",
            path: "/hc_daka/pages/index/index",
            success: function(e) {
                app.util.request({
                    url: "entry/wxapp/home",
                    method: "POST",
                    data: {
                        user_id: a.data.user_id
                    },
                    success: function(e) {
                        var t = e.data.data.periods, n = e.data.data.setup;
                        a.setData({
                            periods: t,
                            setup: n
                        });
                    }
                });
            },
            fail: function(e) {}
        };
    },
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {}
}, "onShareAppMessage", function() {}));