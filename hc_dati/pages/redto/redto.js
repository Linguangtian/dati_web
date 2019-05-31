var app = getApp();

Page({
    data: {
        to: !1
    },
    onLoad: function(a) {
        var i = this, t = app.globalData.userInfo, n = app.globalData.xcx_name;
        wx.setNavigationBarTitle({
            title: n
        }), i.setData({
            userInfo: t
        }), app.util.request({
            url: "entry/wxapp/Pxfahongbao",
            method: "POST",
            data: {
                user_id: app.globalData.user_id,
                lj_stact: app.globalData.lj_stact
            },
            success: function(a) {
                var t = i.data.to, n = a.data.data.money, o = a.data.data.hongbao_guanggao, e = 1e3 * a.data.data.time;
                0 != e && "" != e || (o = ""), i.setData({
                    dhasi: n,
                    aaa: n,
                    time: e,
                    img: o
                }), i.donghua2(), setTimeout(function() {
                    i.setData({
                        to: !t
                    });
                }.bind(i), i.data.time);
            }
        });
    },
    geren: function() {
        wx.redirectTo({
            url: "../index/index"
        });
    },
    onReady: function() {},
    onShow: function() {},
    donghua2: function() {
        var a = this, t = wx.createAnimation({
            duration: a.data.time,
            timingFunction: "linear"
        });
        (a.animation = t).translateY(1e3).step(), setTimeout(function() {
            a.setData({
                animationDatatwo: t.export()
            });
        }.bind(a), 1e3);
    },
    onHide: function() {
        var a = this;
        a.animatitwo.translateY(0).step(), a.setData({
            animationDatatwo: a.animatitwo.export(),
            to: !to
        });
    },
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {}
});