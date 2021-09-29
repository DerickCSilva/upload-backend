const mongoose = require('mongoose')
mongoose.connect(
    'mongodb+srv://deploy:uploaddeploy@cluster0.wdd3a.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
    {
        useNewUrlParser: true
    }
).catch(e => {
        const msg = 'ERRO! Não foi possível conectar com o MongoDB!'
        console.log('\x1b[41m%s\x1b[37m', msg, '\x1b[0m')
});