var obelus = obelus || {};
obelus.cmd = obelus.cmd || [];
obelus.cmd.push(function () {
    obelus.enable({
        publisherId: '<%= pubid %>',
        userName: '<%= user %>',
        authId: '<%= auth %>',
        desktop: true,
        frequency: 1,
        banners: true,
        bannerPosition: 'bottom right'
    });
});
