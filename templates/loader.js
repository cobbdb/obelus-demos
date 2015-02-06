var obelus = obelus || {};
obelus.cmd = obelus.cmd || [];
obelus.cmd.push(function () {
    obelus.enable({
        publisherId: '<%= pubid %>',
        authId: 'ApiKey <%= auth %>',
        desktop: true,
        minLife: 6000,
        frequency: 1,
        banners: true,
        bannerPosition: 'bottom right'
    });
});
