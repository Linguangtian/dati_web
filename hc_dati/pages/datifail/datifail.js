var app = getApp();

Page({
    data: {},
    onLoad: function(n) {
        var o = this;
        wx.getUserInfo({
            success: function(n) {
                app.globalData.userInfo = n.userInfo, o.setData({
                    userInfo: n.userInfo,
                    hasUserInfo: !0
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