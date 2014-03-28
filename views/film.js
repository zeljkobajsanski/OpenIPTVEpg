Epg.film = function(params) {

    return {
        program: new DevExpress.data.DataSource({
            load: function() {
                var d = $.Deferred();
                Epg.data.ucitajTipPrograma(Epg.Constants.TipoviPrograma.FILM).done(function(result) {
                    d.resolve(result.program);
                });
                return d.promise();
            }
        })
    };
}