var app = getApp();

Page({
    data: {},
    onLoad: function(n) {
        var a = app.globalData.xcx_name;
        wx.setNavigationBarTitle({
            title: a
        });
        var t = this;
        app.util.request({
            url: "entry/wxapp/pxhuojiang",
            method: "POST",
            success: function(n) {
                var a = n.data.data;
                t.setData({
                    pxguize: a
                });
            }
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