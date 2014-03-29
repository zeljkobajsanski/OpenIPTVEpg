Epg.data = {
    ucitajProgram: function(tip) {
        return $.getJSON('http://openiptv.azurewebsites.net/Json/VratiEmisije', { tip: tip });
    },
    ucitajKanal: function(id) {
        return $.getJSON('http://openiptv.azurewebsites.net/Json/VratiProgram/' + id);
    },
};