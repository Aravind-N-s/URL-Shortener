const mongoose = require('mongoose')

mongoose.Promise = global.Promise

const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify:false}

const CONNECTION_URI = process.env.MONGO_URI

mongoose.connect(CONNECTION_URI, options)
    .then(res => {
        console.log('Connected to db: aiyo-labs-url')
    })
    .catch(err => {
        console.log('error connecting db...')
    })

module.export = mongoose