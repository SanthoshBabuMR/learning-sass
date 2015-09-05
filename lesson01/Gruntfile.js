module.exports = function(grunt) {
	grunt.initConfig({
		sass: {
			ConvertToCss: {
 				expand: true,
	          	cwd: "scss",
	          	src: ["*.scss"],
	          	dest: "css",
	          	ext: ".css"
			},
			options: {
				sourceMap: true, 
		        outputStyle: "nested" 
		        //imagePath: "../",	
			}
		},
		watch: {
			sass: {
				files: ["scss/**/*.scss"],
				tasks: ["sass"]
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
	grunt.loadNpmTasks("grunt-contrib-watch");

	grunt.registerTask( "sassy", ["sass", "watch:sass"] );
	grunt.registerTask( "server", "connect" );


}