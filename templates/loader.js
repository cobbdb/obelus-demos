var obelus = obelus || {};
obelus.cmd = obelus.cmd || [];
obelus.cmd.push(function () {
    obelus.enable({
        publisherId: '<%= pubid %>',
        authId: 'ApiKey dcobb:cb720d82363c04d9914b2491824eb135e52350cd',
        desktop: true,
        minLife: 6000,
        frequency: 1,
        banners: true,
        bannerPosition: 'bottom right'
    });
});
