var app = getApp();
var movieList = [];
Page({
    data : {
        loadingHidden : false
    },
    onLoad : function(){
        var self = this;
        wx.request({
            url : "https://api.douban.com/v2/movie/in_theaters",
            header : {
                'Content-Type': 'application/json'
            },
            success : function(res){
                movieList=res.data.subjects;
                console.log(movieList);
                self.setData({
                    movieList : movieList,
                    loadingHidden : true
                });
            }
        });
    }
})