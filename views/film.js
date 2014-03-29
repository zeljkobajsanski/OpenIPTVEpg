Epg.film = function(params) {

    return {
        program: new DevExpress.data.DataSource({
            load: function() {
                var d = $.Deferred();
                Epg.data.ucitajProgram(Epg.Constants.TipoviPrograma.FILM).done(function(result) {
                    d.resolve(result);
                });
                return d.promise();
            }
        })
    };
}