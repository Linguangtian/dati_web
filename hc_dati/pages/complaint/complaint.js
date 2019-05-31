Page({
    data: {
        radioItems: [ {
            name: "欺诈"
        }, {
            name: "色情"
        }, {
            name: "政治谣言"
        }, {
            name: "诱导分享"
        }, {
            name: "诱导关注"
        }, {
            name: "诱导下载"
        }, {
            name: "恶意营销"
        }, {
            name: "隐私信息收集"
        }, {
            name: "其他"
        } ],
        hidden: !1,
        yi: 0
    },
    checkboxChange: function(e) {
        for (var a = e.detail.value, t = {}, i = 0; i < this.data.checkboxItems.length; i++) -1 !== a.indexOf(this.data.checkboxItems[i].name) ? t["checkboxItems[" + i + "].checked"] = !0 : t["checkboxItems[" + i + "].checked"] = !1;
        this.setData(t);
    },
    radioChange: function(e) {
        for (var a = e.detail.value, t = {}, i = 0; i < this.data.radioItems.length; i++) -1 !== a.indexOf(this.data.radioItems[i].name) ? t["radioItems[" + i + "].checked"] = !0 : t["radioItems[" + i + "].checked"] = !1;
        this.setData(t);
    },
    tiao: function() {
        0 != this.data.yi && (wx.showLoading({
            title: "加载中"
        }), setTimeout(function() {
            wx.hideLoading(), wx.navigateTo({
                url: "../report/report"
            });
        }, 1e3));
    },
    jiayi: function() {
        var e = this.data.yi;
        e++, this.setData({
            yi: e
        });
    }
});