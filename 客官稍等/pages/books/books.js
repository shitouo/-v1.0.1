var app = getApp();
var booksList = [];
var flag = 0;
var timer = null;
Page({
    data : {
        loadingHidden : false,
        booksList : booksList
    },
    onLoad : function(){
        var self = this;
        wx.request({
            url : "https://api.douban.com/v2/book/17604305",
            header : {
                'Content-Type': 'application/json'
            },
            success : function(res){
                booksList.push(res.data);
                flag++;
            }
        });
        wx.request({
            url : "https://api.douban.com/v2/book/1039487",
            header : {
                'Content-Type': 'application/json'
            },
            success : function(res){
                booksList.push(res.data);
                flag++;
            }
        });
        wx.request({
            url : "https://api.douban.com/v2/book/1071241",
            header : {
                'Content-Type': 'application/json'
            },
            success : function(res){
                booksList.push(res.data);
                flag++;
            }
        });
        wx.request({
            url : "https://api.douban.com/v2/book/2295163",
            header : {
                'Content-Type': 'application/json'
            },
            success : function(res){
                booksList.push(res.data);
                flag++;
            }
        });
        wx.request({
            url : "https://api.douban.com/v2/book/1432596",
            header : {
                'Content-Type': 'application/json'
            },
            success : function(res){
                booksList.push(res.data);
                flag++;
            }
        });
        timer = setInterval(function(){
            if (flag==5) {
            self.setData({
                    booksList : booksList,
                    loadingHidden : true
                });
            clearInterval(timer);
        };
        },10)
        
    }
})