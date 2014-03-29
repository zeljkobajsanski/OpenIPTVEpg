Epg.data = {
    ucitajProgram: function(tip, options, timestamp) {
        //return $.getJSON('http://localhost:51032/Json/VratiEmisije', { tip: tip, skip: options.skip, take: options.take, timestamp: timestamp });
        return $.getJSON('http://openiptv.azurewebsites.net/Json/VratiEmisije', { tip: tip, skip: options.skip, take: options.take, timestamp: timestamp });
    },
    ucitajKanal: function(id) {
        //return $.getJSON('http://localhost:51032/Json/VratiProgram/' + id);
        return $.getJSON('http://openiptv.azurewebsites.net/Json/VratiProgram/' + id);
    },
};