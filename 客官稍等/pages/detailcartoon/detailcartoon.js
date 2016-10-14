var app = getApp();
Page({
    data : {
        loadingHidden : "true",
        chapterId : null,
        cartoonsList : []
    },
    onReady: function(){
    var that = this
    wx.setNavigationBarTitle({
      title: that.data.options.name
    })
    },
    onLoad : function(options){
        this.setData({
           name : options.name,
           options : options
        });
        var that = this;
        function get(url,data){
            return new Promise(function(resolve,reject){
                wx.request({
                        url : url,
                        data : data,
                        header : {
                            'Content-Type': 'application/json'
                        },
                        success : resolve
                    });
            });
        }  
        get('http://japi.juhe.cn/comic/chapter',{key : '36b524258d2b571b9d32a5f6e3fb5693',comicName : that.data.name})
            .then(function(res){
                that.setData({
                    chapterId : res.data.result.chapterList[0].id
                });
                return get('http://japi.juhe.cn/comic/chapterContent',{key : '36b524258d2b571b9d32a5f6e3fb5693',comicName : that.data.name,id : that.data.chapterId});
            })
            .then(function(res){
                that.setData({
                            cartoonsList : res.data.result.imageList
                  })
            })   
    }
})