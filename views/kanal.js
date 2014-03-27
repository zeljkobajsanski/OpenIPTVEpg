Epg.kanal = function(params) {

    var naziv = ko.observable(''),
        logo = ko.observable('img/rts.gif'),
        program = ko.observableArray([]);

    Epg.data.ucitajKanal(params.id).done(function(result) {
        naziv(result.naziv);
        program(result.program);
    });

    return {
        naziv: naziv,
        logo: logo,
        program: program
    };
}