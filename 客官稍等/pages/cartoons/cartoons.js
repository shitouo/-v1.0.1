var app = getApp();
var cartoonList = [];
Page({
    data : {
        loadingHidden : false
    },
    onLoad : function(){
        var self = this;
        wx.request({
            url : "http://japi.juhe.cn/comic/book",
            data : {
                key : "36b524258d2b571b9d32a5f6e3fb5693"
            },
            header : {
                'Content-Type': 'application/json'
            },
            success : function(res){
                console.log(1);
                cartoonList=res.data.result.bookList;
                console.log(cartoonList);
                self.setData({
                    cartoonList : cartoonList,
                    loadingHidden : true
                });
            }
        });
    }
})