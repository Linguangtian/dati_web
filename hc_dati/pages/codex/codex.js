var app = getApp();

Page({
    data: {},
    onLoad: function(a) {
        var u = this, n = a.zhuangtai;
        app.util.request({
            url: "entry/wxapp/lianxu_guize",
            method: "POST",
            data: {
                stact: n
            },
            success: function(a) {
                var n = a.data.data.huodong, t = a.data.data.canyu, o = a.data.data.teshu;
                u.setData({
                    huodong: n,
                    canyu: t,
                    teshu: o
                });
            },
            fail: function() {}
        });
    },
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {}
});