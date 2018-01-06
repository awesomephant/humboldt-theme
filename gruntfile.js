module.exports = function (grunt) {
    require('time-grunt')(grunt);
    require('jit-grunt')(grunt);

    grunt.initConfig({
        sass: {
            dist: {
                options: {
                },
                files: {
                    'style.css': './sass/style.scss',
                }
            }
        },
        postcss: {
            options: {
                map: true, // inline sourcemaps
                processors: [
                    require('autoprefixer')({ browsers: 'last 2 versions' }), // add vendor prefixes
                    require('cssnano')() // minify the result
                ]
            },
            dist: {
                src: 'style.css'
            }
        },
        watch: {
            files: './sass/*.scss',
            tasks: ['sass']
        },

        browserSync: {
            dev: {
                bsFiles: {
                    src: [
                        'style.css',
                        '*.php',
                        './templates/**.twig',
                        './js/**.js'
                    ]
                },
                options: {
                    proxy: "humboldt.dev",
                    watchTask: true,
                }
            }
        },
        'ftp-deploy': {
            build: {
                auth: {
                    host: 'wordpress.p421695.webspaceconfig.de',
                    port: 21,
                    authKey: 'key1'
                },
                src: '.',
                dest: '/html/wordpress/wp-content/themes/humboldt-theme/',
                exclusions: ['yarn.lock', '.sass-cache', 'gruntfile.js', 'sass','node_modules', '.ftppass', '.gitignore', '.git']
            }
        }
    });

    grunt.registerTask('deploy', ['ftp-deploy']);
    grunt.registerTask('css', ['sass', 'postcss']);
    grunt.registerTask('default', ['browserSync', 'watch']);

};