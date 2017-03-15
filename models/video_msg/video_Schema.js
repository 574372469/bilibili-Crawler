let mongoose = require('../mongo')
let video_Schema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'video.name is required']
    },
    data: {
        view: {
            type: Number,
            index: true
        },
        coin: {
            type: Number
        },
        favorite: {
            type: Number
        },
        share: {
            type: Number
        }
    },
    av_number: {
        type: Number,
        required:true
    },
    upload_time: {
        type: Date
    },
    record_time: {
        type: Date
    },
    uploader: {
        type: String,
        required: [true, 'video.uploader is required']
    },
    url: {
        type: String
    },
    msg: {
        type: String
    },
    tag_1: {
        type: String,
        index: true
    },
    tag_2:{
        type: String,
        index: true
    },
    existed: {
        type: Boolean
    }
}, {collection: 'video'})


video_Schema.static('findLast', function (cb) {
    //返回数据库最后一条记录
    this.findOne().sort({'av_number': -1}).exec((err, res)=> {
        if (res===null){
            cb(err,0)
        }
        else cb(err,res.av_number+1)
    })
})

let video=mongoose.model('video', video_Schema)

module.exports = video
