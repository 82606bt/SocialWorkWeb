//imports
const express = require('express')
const app = express()
const port = 3000



// Static Files
app.use(express.static('public'))
app.use('/css', express.static(__dirname + 'public/css'))
app.use('/js', express.static(__dirname + 'public/css'))
app.use('/img', express.static(__dirname + 'public/images'))



// Set View's
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

// Navigation
app.get('', (req, res) => {
    res.render('index')
})
app.post('', (req, res) => {
    res.render('index')

})
app.get('/user', (req, res) => {
    res.render('./user/index')
})
app.post('/user', (req, res) => {
    res.render('./user/index')
})
app.get('/student', (req, res) => {
    res.render('./student/index')
})
app.post('/student', (req, res) => {
    res.render('./student/index')
})
app.get('/post', (req, res) => {
    res.render('./post/index')
})

app.get('/management', (req, res) => {
    res.render('./post/management/index')
})
app.get('/admin', (req, res) => {
    res.render('./admin/index')
})
app.post('/admin', (req, res) => {
    res.render('./admin/index')
})

app.get('/info', (req, res) => {
    res.render('./student/info/index')
})

app.get('/contact', (req, res) => {
    res.render('./contact/index')
})
app.post('/contact', (req, res) => {
    res.render('./contact/index')
})
//Listen on port 3000
app.listen(port, () => console.info(`Listening on port ${port}`))