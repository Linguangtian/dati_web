var app = getApp();

Page({
    data: {
        qicc: ""
    },
    onLoad: function(a) {
        var t = app.globalData.xcx_name;
        wx.setNavigationBarTitle({
            title: t
        });
        this.chushi();
    },
    chushi: function() {
        var n = this;
        app.util.request({
            url: "entry/wxapp/with",
            method: "POST",
            data: {
                user_id: app.globalData.user_id
            },
            success: function(a) {
                var t = a.data.data;
                n.setData({
                    qiavdata: t
                });
            }
        });
    },
    quan: function() {
        var a = this.data.qiavdata.money;
        this.setData({
            qicc: a
        });
    },
    bindHideKeyboard: function(a) {
        var t = a.detail.value;
        console.log(t), this.setData({
            qicc: t
        });
    },
    tixian: function() {
        var t = this, a = Number(t.data.qicc);
        console.log(a + "输入"), a < Number(t.data.qiavdata.tixian) ? wx.showModal({
            title: "提示",
            content: "不得低于最低提现额度！",
            success: function(a) {
                a.confirm ? console.log("用户点击确定") : a.cancel && console.log("用户点击取消");
            }
        }) : app.util.request({
            url: "entry/wxapp/tixian",
            method: "POST",
            data: {
                user_id: app.globalData.user_id,
                money: t.data.qicc
            },
            success: function(a) {
                wx.showModal({
                    title: "提示",
                    content: "提现成功",
                    success: function(a) {
                        a.confirm ? console.log("用户点击确定") : a.cancel && console.log("用户点击取消");
                    }
                }), t.chushi(), t.setData({
                    qicc: ""
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