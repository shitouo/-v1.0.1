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
           author : options.author,
           title : options.title,
           publisher : options.publisher,
           summary : options.summary,
           options : options
        });
        
    }
})