var mongoose = require('mongoose')

var MovieSchema = new mongoose.Schema({
    doctor: String,
    title: String,
    language: String,
    country: String,
    summary: String,
    flash: String,
    poster: String,
    year: Number,
    meta: {
        creatAt: {
            type: Date
            default: Date.now()
        },
        updateAt: {
            type: Date
            default: Date.now()
        }
    }
})

MovieSchema.pre('save', function(next) {
    if (this.isNew) {
        this.meta.creatAt = this.meta.updateAt = Date.now()
    }
    else {
        this.meta.updateAt = Date.now()
    }
    next()
})