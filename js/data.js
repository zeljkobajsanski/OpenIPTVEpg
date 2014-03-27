Epg.data = {
    ucitajProgram: function(timestamp) {
        return $.getJSON('data/data.json', { timestamp: timestamp });
    }  
};