Epg.data = {
    ucitajProgram: function(timestamp) {
        return $.getJSON('data/uzivo.json', { timestamp: timestamp });
    },
    ucitajKanal: function(id) {
        return $.getJSON('data/kanal.json', {id: id});
    }
};