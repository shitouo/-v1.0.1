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
           director : options.director,
           title : options.title,
           casts0 : options.casts0,
           casts1 : options.casts1,
           casts2 : options.casts2,
           rating : options.rating,
           year : options.year,
           options : options
        });
        wx.setNavigationBarTitle({
            title : options.title
        })
        
    }
})