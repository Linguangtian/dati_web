var app = getApp();

Page({
    data: {
        nowIndex: 0,
        inputtext: [],
        shuzi: [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 0 ],
        juli: 0,
        time: 10,
        isDisabled: !0,
        status: 0,
        setupstatus: 0,
        yu: !0
    },
    audioPlay: function() {
        this.audioCtx.play();
    },
    onLoad: function(t) {
        this.audioCtx = wx.createAudioContext("myAudio"), console.log(wx.createAudioContext("myAudio")), 
        this.audioCtx.play();
        var c = this, a = app.globalData.user_id, e = app.globalData.xcx_name;
        wx.setNavigationBarTitle({
            title: e
        });
        var n = t.cid;
        c.setData({
            cid: n
        }), app.util.request({
            url: "entry/wxapp/canyu",
            method: "POST",
            data: {
                user_id: a
            },
            success: function(t) {
                var a = t.data.data, e = a.mp3_url, n = a.setup_number, s = a.status, u = a.toubu;
                c.setData({
                    award: a,
                    mp3url: e,
                    setupnumber: n,
                    setupstatus: s,
                    toubutwo: u
                });
                for (var i = function(t) {
                    this.num = "", this.index = t;
                }, o = c.data.setupnumber, d = [], r = 0; r < o; r++) d.push(new i(String(r + 1)));
                c.setData({
                    inputtext: d
                }), c.startTime();
                c.data.time;
            },
            fail: function(t) {
                console.log("失败");
            }
        });
    },
    startTime: function() {
        var a = this;
        setTimeout(function() {
            if (a.startTime(), 0 != a.data.time) a.setData({
                time: a.data.time - 1
            }); else {
                a.data.isDisabled;
                if (0 == a.data.setupstatus) var t = a.data.shuzi; else if (1 == a.data.setupstatus) t = a.data.shuzi.sort(function() {
                    return Math.random() - .5;
                });
                a.setData({
                    shuzi: t,
                    time: 10
                });
            }
        }, 1e3);
    },
    resetTime: function() {
        this.setData({
            time: 10
        });
    },
    changeIndex: function(t) {
        var a = t.currentTarget.dataset.index;
        t.currentTarget.dataset.index;
        this.setData({
            nowIndex: a
        });
    },
    shuru: function(t) {
        var a = this, e = t.currentTarget.dataset.num, n = JSON.parse(JSON.stringify(a.data.inputtext));
        n[this.data.nowIndex].num += String(e), console.log(n[this.data.nowIndex].num);
        for (var s = 0; s < a.data.inputtext.length; s++) var u = n.length;
        if (n.slice(-1)[0].num == u) {
            wx.navigateTo({
                url: "../gamesuccess/gamesuccess"
            });
            a.data.status;
            a.setData({
                inputtext: n,
                status: 1
            });
            setTimeout(function() {}, 500);
            app.util.request({
                url: "entry/wxapp/jiesu",
                method: "POST",
                data: {
                    numbera: u,
                    status: a.data.status,
                    cid: a.data.cid
                },
                success: function(t) {
                    t.data.data;
                }
            }), console.log("游戏成功");
        }
        a.data.status;
        if (n[this.data.nowIndex].num.length == n[this.data.nowIndex].index.length) if (n[this.data.nowIndex].num == n[this.data.nowIndex].index) {
            var i = parseInt(a.data.inputtext[a.data.nowIndex].index) - 1, o = a.data.juli;
            i % 8 == 0 && 0 != i && (o -= 90), a.setData({
                inputtext: n,
                nowIndex: this.data.nowIndex + 1,
                juli: o
            });
        } else {
            a.data.status, a.data.yu;
            var d = parseInt(a.data.inputtext[a.data.nowIndex].index);
            console.log(d), a.setData({
                status: 0,
                numbera: d,
                yu: !1
            }), wx.navigateTo({
                url: "../gamefail/gamefail"
            }), a.audioCtx.pause(), console.log("游戏失败"), app.util.request({
                url: "entry/wxapp/jiesu",
                method: "POST",
                data: {
                    numbera: d,
                    status: a.data.status,
                    cid: a.data.cid
                },
                success: function(t) {
                    t.data.data;
                }
            });
        } else a.setData({
            inputtext: n
        });
    },
    onReady: function() {},
    onShow: function() {},
    onHide: function() {
        this.audioCtx.pause();
    },
    onUnload: function() {
        this.audioCtx.pause();
    },
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {}
});