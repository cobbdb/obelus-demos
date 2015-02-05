var obelus = obelus || {};
obelus.cmd = obelus.cmd || [];
obelus.cmd.push(function () {
    /**
     * Test Publishers:
     * Mobile: bc4208b3-d01b-4f5f-935a-58b7923d6d01
     * Desktop: fd571a6e-af4c-4ea4-acc9-22cdad9f1e5e
     * Both: 9e56a2c6-fc72-4c7d-8175-1a5c47d3abf0
     */
    obelus.enable({
        publisherId: 'bc4208b3-d01b-4f5f-935a-58b7923d6d01',
        authId: 'ApiKey api:5e04178b8c685f6bd2d36f0cb8d337af8acaffc3',
        desktop: true,
        minLife: 6000,
        frequency: 1,
        banners: true,
        bannerPosition: 'bottom right'
    });
});
