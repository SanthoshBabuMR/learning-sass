module.exports = function(grunt) {
	grunt.initConfig({
		sass: {
			dev: {
				options: {
					sourceMap: true, 
			        outputStyle: "nested"  // Default: nested Values: nested, expanded, compact, compressed
			        //imagePath: "../",	
				},
				files: [
					{
		 				expand: true,
			          	cwd: "./scss",
			          	src: ["*.scss"],
			          	dest: "./css",
			          	ext: ".css"
					}
				]
			},
			prod: {
				options: {
					sourceMap: false, 
			        outputStyle: "compressed" // Default: nested Values: nested, expanded, compact, compressed
			        //imagePath: "../",	
				},
				files: [
					{
		 				expand: true,
			          	cwd: "./scss",
			          	src: ["*.scss"],
			          	dest: "./css",
			          	ext: ".min.css"
					}
				]
			}
		},
		watch: {
			sass: {
				files: ["scss/**/*.scss"],
				tasks: ["sass:dev"]	
}
		},
		connect: {
			server: {
				options: {
					host: "0.0.0.0",
					port: 6060,
					base: ".",
					keepalive: true
				}
			}				 
		}
	});

	grunt.loadNpmTasks( "grunt-sass" );
	grunt.loadNpmTasks( "grunt-contrib-connect" );
	grunt.loadNpmTasks( "grunt-contrib-watch" );

	grunt.registerTask( "sassy", ["sass:dev", "watch:sass:dev"] );
	grunt.registerTask( "sassy-prod", ["sass:prod"] );
	grunt.registerTask( "server", "connect" );
}
