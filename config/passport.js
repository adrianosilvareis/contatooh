var passport = require('passport');
var GitHubStrategy = require('passport-github').Strategy;
var mongoose = require('mongoose');


module.exports = function(){
	var Usuario = mongoose.model('Usuario');

	passport.use(new GitHubStrategy({
		clientID: "00f22308f8f1f14d5914",
		clientSecret: "6ecc82bd8d937aaef1a5e40a490f06bd5ada1888",
		callbackURL: "http://localhost:3000/auth/github/callback"
	}, function(accessToken, refreshToken, profile, done) {
		Usuario.findOrCreate(
			{"login": profile.username},
			{"nome": profile.username},
			function(erro, usuario) {
				if(erro) {
					console.log(erro);
					return done(erro);
				}
				return done(null, usuario);
			}
		);	
	}));

	passport.serializeUser(function(usuario, done) {
		done(null, usuario._id);
	});

	passport.deserializeUser(function(id, done) {
		Usuario.findById(id).exec()
		.then(function(usuario) {
			done(null, usuario);
		});
	});
};