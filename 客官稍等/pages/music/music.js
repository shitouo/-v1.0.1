var app = getApp();
var musicList = [];
var flag = 0;
var timer = null;
Page({
    data : {
        loadingHidden : false,
        musicList : musicList
    },
    onLoad : function(){
        var self = this;
        wx.request({
            url : "https://api.douban.com/v2/music/search?q=%E6%88%91%E5%8F%AA%E5%9C%A8%E4%B9%8E%E4%BD%A0",
            header : {
                'Content-Type': 'application/json'
            },
            success : function(res){
                musicList.push(res.data.musics[0]);
                flag++;
            }
        });
        wx.request({
            url : "https://api.douban.com/v2/music/search?q=%E5%90%8C%E6%A1%8C%E7%9A%84%E4%BD%A0",
            header : {
                'Content-Type': 'application/json'
            },
            success : function(res){
                musicList.push(res.data.musics[0]);
                flag++;
            }
        });
        wx.request({
            url : "https://api.douban.com/v2/music/search?q=%E7%A6%BB%E6%AD%8C",
            header : {
                'Content-Type': 'application/json'
            },
            success : function(res){
                musicList.push(res.data.musics[0]);
                flag++;
            }
        });
        wx.request({
            url : "https://api.douban.com/v2/music/search?q=%E4%B8%80%E6%AC%A1%E5%B0%B1%E5%A5%BD",
            header : {
                'Content-Type': 'application/json'
            },
            success : function(res){
                musicList.push(res.data.musics[0]);
                flag++;
            }
        });
        wx.request({
            url : "https://api.douban.com/v2/music/search?q=%E6%B1%9F%E5%8D%97",
            header : {
                'Content-Type': 'application/json'
            },
            success : function(res){
                musicList.push(res.data.musics[0]);
                flag++;
            }
        });
        timer = setInterval(function(){
            if (flag==5) {
                console.log(musicList)
            self.setData({
                    musicList : musicList,
                    loadingHidden : true
                });
            clearInterval(timer);
        };
        },10)
        
    }
})