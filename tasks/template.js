var str = require('curb'),
    storagePath = '//s3.amazonaws.com/%s.obelusmedia/sdk/platforms/js/%s',
    version = 'v2';

module.exports = function (grunt) {
    grunt.config.merge({
        template: {
            'build-local': {
                files: [{
                    dest: 'local/',
                    cwd: 'templates',
                    src: '**/*.html',
                    expand: true
                }],
                options: {
                    data: {
                        storage: '/MobileWeb/dist'
                    }
                }
            },
            'build-dev': {
                files: [{
                    dest: 'dev/',
                    cwd: 'templates',
                    src: '**/*.html',
                    expand: true
                }],
                options: {
                    data: {
                        storage: str(storagePath, 'dev', version)
                    }
                }
            },
            'build-integ': {
                files: [{
                    dest: 'integ/',
                    cwd: 'templates',
                    src: '**/*.html',
                    expand: true
                }],
                options: {
                    data: {
                        storage: str(storagePath, 'integ', version)
                    }
                }
            },
            'build-prod': {
                files: [{
                    dest: 'prod/',
                    cwd: 'templates',
                    src: '**/*.html',
                    expand: true
                }],
                options: {
                    data: {
                        storage: str(storagePath, 'prod', version)
                    }
                }
            },
        }
    });
};
