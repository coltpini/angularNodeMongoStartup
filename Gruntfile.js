module.exports = function(grunt){

	grunt.loadNpmTasks('grunt-express-server');
	grunt.loadNpmTasks('grunt-contrib-stylus');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-copy');

	grunt.initConfig({
		stylus: {
			compile: {
				files: {
					'build/styles/app.css': 'app/styles/app.styl'
				}
			}
		},

		uglify: {
			app: {
				src: ['app/js/app.js','app/js/controllers/**.js','app/js/directives/**.js','app/js/filters/**.js','app/js/services/**.js'],
				dest: 'build/js/app.min.js'
			}
		},
		clean: ['build'],
		copy: {
			main: {
				files:[
					{expand: true, cwd: 'app/js/lib/', src: ['**'], dest: 'build/js/lib/'},
					{expand: true, cwd: 'app/templates/', src: ['**'], dest: 'build/templates/'},
					{expand: true, cwd: 'app/', src: ['index.html'], dest: 'build/'}
				]
			}
		},
		express: {
			options: {
				// Override defaults here
				port: 3000,

			},
			dev: {
			  options: {
				script: 'server/app.js'
			  }
			}
		  },
		watch: {
			copy: {
				files: ['app/index.html','app/js/lib/**','app/templates/**'],
				tasks: ['copy']
			},
			express: {
				files: ['server/**/*.js'],
				tasks: ['express:dev'],
				options: {
					nospawn: true
				}
			},
			 stylus: {
				files: ['app/styles/styl/*.styl'],
				tasks: ['stylus']
			},
			uglify : {
				files: ['app/js/dev/*.js'],
				tasks: ['uglify']
			},
			livereload: {
				options: {livereload : true},
				files: ['app/styles/app.css','app/**/*.html','app/js/**/*.js']
			}
		}
	});

	grunt.registerTask('default',['clean','copy','stylus','uglify','express:dev','watch']);
};