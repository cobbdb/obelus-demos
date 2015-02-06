var str = require('curb'),
    storagePath = '//s3.amazonaws.com/%s.obelusmedia/sdk/platforms/js/%s',
    version = 'v2';

/**
 * ### Dev: api:5e04178b8c685f6bd2d36f0cb8d337af8acaffc3
 * Mobile: bc4208b3-d01b-4f5f-935a-58b7923d6d01
 * Desktop: fd571a6e-af4c-4ea4-acc9-22cdad9f1e5e
 * Both: 9e56a2c6-fc72-4c7d-8175-1a5c47d3abf0
 *
 * ### Integ: dcobb:cb720d82363c04d9914b2491824eb135e52350cd
 * Integ: ef501c36-d2ab-4e6e-8d1f-013bcd395842
 */
module.exports = function (grunt) {
    grunt.config.merge({
        template: {
            'build-local': {
                files: [{
                    dest: 'local/',
                    cwd: 'templates',
                    src: '**/*',
                    filter: 'isFile',
                    expand: true
                }],
                options: {
                    data: {
                        storage: '/MobileWeb/dist',
                        pubid: '9e56a2c6-fc72-4c7d-8175-1a5c47d3abf0',
                        auth: 'api:5e04178b8c685f6bd2d36f0cb8d337af8acaffc3'
                    }
                }
            },
            'build-dev': {
                files: [{
                    dest: 'dev/',
                    cwd: 'templates',
                    src: '**/*',
                    filter: 'isFile',
                    expand: true
                }],
                options: {
                    data: {
                        storage: str(storagePath, 'dev', version),
                        pubid: '9e56a2c6-fc72-4c7d-8175-1a5c47d3abf0',
                        auth: 'api:5e04178b8c685f6bd2d36f0cb8d337af8acaffc3'
                    }
                }
            },
            'build-integ': {
                files: [{
                    dest: 'integ/',
                    cwd: 'templates',
                    src: '**/*',
                    filter: 'isFile',
                    expand: true
                }],
                options: {
                    data: {
                        storage: str(storagePath, 'integ', version),
                        pubid: 'ef501c36-d2ab-4e6e-8d1f-013bcd395842',
                        auth: 'dcobb:cb720d82363c04d9914b2491824eb135e52350cd'
                    }
                }
            }
        }
    });
};
