var app = getApp();

Page({
    data: {
        jiang: [ "我的奖品", "排行榜奖品" ],
        one: 0
    },
    onLoad: function(a) {
        var t = app.globalData.user_id, n = app.globalData.xcx_name;
        wx.setNavigationBarTitle({
            title: n
        }), wx.setNavigationBarColor({
            frontColor: "#ffffff",
            backgroundColor: app.globalData.toubu_color
        });
        var o = this;
        o.setData({
            user_id: t
        }), app.util.request({
            url: "entry/wxapp/wodejiangpin",
            method: "POST",
            data: {
                user_id: o.data.user_id
            },
            success: function(a) {
                var t = a.data.data;
                o.setData({
                    tudof: t
                });
            }
        });
    },
    jiang: function(a) {
        var n = this;
        n.setData({
            one: a.currentTarget.dataset.index
        }), 0 == n.data.one ? app.util.request({
            url: "entry/wxapp/wodejiangpin",
            method: "POST",
            data: {
                user_id: n.data.user_id
            },
            success: function(a) {
                var t = a.data.data;
                n.setData({
                    tudof: t
                });
            }
        }) : 1 == n.data.one && app.util.request({
            url: "entry/wxapp/pxwodejiangpin",
            method: "POST",
            data: {
                user_id: n.data.user_id
            },
            success: function(a) {
                var t = a.data.data;
                n.setData({
                    tudoftwo: t
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