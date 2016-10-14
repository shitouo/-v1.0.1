var app = getApp();
Page({
    data : {
        loadingHidden : "true",
    },
    onReady: function(){
    var that = this
    wx.setNavigationBarTitle({
      title: that.data.options.title
    })
    },
    onLoad : function(options){
        this.setData({
           image :  options.image,
           singer : options.singer,
           title : options.title,
           publisher : options.publisher,
           rating : options.rating,
           year : options.year,
           options : options
        });
        wx.setNavigationBarTitle({
            title : options.title
        })
        
    }
})