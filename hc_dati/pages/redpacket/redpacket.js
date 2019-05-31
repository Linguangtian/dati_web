var app = getApp();

Page({
    data: {
        to: !1
    },
    onLoad: function(t) {
        var i = this, a = app.globalData.userInfo, n = app.globalData.xcx_name;
        wx.setNavigationBarTitle({
            title: n
        }), i.setData({
            userInfo: a
        }), app.util.request({
            url: "entry/wxapp/canyusccess",
            method: "POST",
            data: {
                user_id: app.globalData.user_id
            },
            success: function(t) {
                console.log("接口"), console.log(t);
                var a = t.data.data, n = 1e3 * a.time, o = i.data.to, e = a.hongbao_guanggao;
                0 != n && "" != n || (e = ""), i.setData({
                    qiav: a,
                    time: n,
                    img: e
                }), i.donghua2(), setTimeout(function() {
                    i.setData({
                        to: !o
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
        var t = this, a = wx.createAnimation({
            duration: t.data.time,
            timingFunction: "linear"
        });
        (t.animation = a).translateY(1e3).step(), setTimeout(function() {
            t.setData({
                animationDatatwo: a.export()
            });
        }.bind(t), 1e3);
    },
    onHide: function() {
        var t = this;
        t.animatitwo.translateY(0).step(), t.setData({
            animationDatatwo: t.animatitwo.export(),
            to: !to
        });
    },
    onUnload: function() {
        wx.navigateBack({
            delta: 2
        });
    },
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {}
});