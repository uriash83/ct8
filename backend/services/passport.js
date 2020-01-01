const passport = require('passport')
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const config = require("../../config/config.js")
const util = require('util')

const User = mongoose.model('users')

passport.serializeUser((user,done)=> {
  done(null,user.id) // this is in record id in mongoose bo w 1 rekordzie może byuć kilka id i logować sie przez google , linkedina itd

});

passport.deserializeUser((id,done)=>{
  // id to jest to z id recordu mongoose
  User.findById(id)
      .then(user => done(null,user) )
});

passport.use(new GoogleStrategy(
  {
    clientID: config.googleClientID,
    clientSecret: config.googleClientSecret,
    callbackURL: '/auth/google/callback'
  }, 
  async (accessToken,refreshToken,profile,done) => {
    //console.log("accessToken: "+accessToken)
    //console.log("refreshToken: "+refreshToken)
    //console.log("profile: " + util.inspect(profile, {showHidden: false, depth: null}))
    const existingUser = await User.findOne({ googleId: profile.id })
    if(existingUser){
      // id user exist 
      done(null,existingUser);
      //done(noerror,przekazanie do passport usera)
      console.log('existUser',existingUser)
    }
    else{
      console.log('newUser')
      new User({ googleId: profile.id })
        .save()
        .then(user => done(null,user))//)
    }
    
  }
  )
)

/*
passport.use(new GoogleStrategy(
  {
      clientID: config.googleClientID,
      clientSecret: config.googleClientSecret,
      callbackURL: '/auth/google/callback' // if we get resposne from google , google send callback to this URL
      //proxy: true
  }, 
      async (accessToken, refreshToken, profile,done)=> {
      //accesToken expired after some time
      //console.log('accessToken: ' +accessToken)
      //console.log('refreshToken: ' + refreshToken)
      //console.log('profile' + util.inspect(profile, {depth: null}))
      const existingUser = await User.findOne({ googleId: profile.id })
          
              if(existingUser){
                  // id user exist 
                  done(null,existingUser);
                  //done(noerror,przekazanie do passport usera)
                  
              }
              
              // if user not exist create one
              const user = await new User({googleId: profile.id }).save()
              done(null,user) 
      
      }
));



*/