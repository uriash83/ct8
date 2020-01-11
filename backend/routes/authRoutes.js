const passport = require('passport')

module.exports = (app) => {
  app.get(
      '/auth/google' ,
      passport.authenticate('google',{
        scope: ['profile','email']
      })
  )
    
  app.get(
        '/auth/google/callback',
        passport.authenticate('google')  ,
        (req,res) => {
          res.redirect('http://localhost:3000')
        }
  )
    
  app.get('/',(req,res) => {
      console.log('GET ')
      res.send('hi there')
  })
  app.get('/api/logout' , (req,res) => {
    req.logout(); //kill id
    //res.send(req.user) // empty user
    res.redirect('http://localhost:3000') // localhost:3000
  })
  app.get('/api/current_user', (req,res) => {
    console.log('GET: /api/current_user' ,req.user)
    res.json(req.user)
    //res.send({ 'myString': 'myString'})
})
};  

/*
axios.get('http://dogorynogami.ct8.pl:36531/api/current_user').then(res => {console.log(res)
            })
*/