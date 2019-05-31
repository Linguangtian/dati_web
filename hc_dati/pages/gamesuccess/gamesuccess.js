var app = getApp();

Page({
    data: {},
    onLoad: function(n) {
        var a = app.globalData.xcx_name;
        wx.setNavigationBarTitle({
            title: a
        });
    },
    hui: function() {
        wx.navigateBack({
            delta: 1
        });
    },
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {
        wx.navigateBack({
            delta: 2
        });
    },
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {}
});