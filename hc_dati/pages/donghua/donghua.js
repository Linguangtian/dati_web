Page({
    data: {
        to: !1
    },
    onLoad: function(t) {},
    onReady: function() {},
    onShow: function() {
        var t = wx.createAnimation({
            duration: 1e3,
            timingFunction: "linear"
        });
        (this.animation = t).scaleY(3).step(), setTimeout(function() {
            this.setData({
                animationData: t.export(),
                to: !0
            });
        }.bind(this), 1e3);
    },
    dao: function() {
        this.animation.scaleY(1).step(), this.setData({
            animationData: this.animation.export(),
            to: !1
        });
    },
    onHide: function() {
        this.animation.scaleY(1).step(), this.setData({
            animationData: this.animation.export(),
            to: !1
        });
    },
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {}
});