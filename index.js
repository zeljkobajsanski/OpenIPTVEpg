(function() {
    "use strict";

    var Epg = window.Epg = {
        Constants: {
            TipoviPrograma: {
                FILM: "film",
                SERIJA: "serija",
                SPORT: "sport",
                OSTALO: "ostalo"
            }
        }
    };
    
    // Uncomment the line below to disable platform-specific look and feel and to use the Generic theme for all devices
    DevExpress.devices.current({ platform: "android" });

    $(function() {
        Epg.app = new DevExpress.framework.html.HtmlApplication({
            namespace: Epg,
            
            navigationType: "navbar",
            navigation: [
                {
                    title: "Sve",
                    action: "#home",
                    icon: "clock"
                },
                {
                    title: "Sport",
                    action: "#sport",
                    icon: "sport"
                },
                {
                    title: "Film",
                    action: "#film",
                    icon: "film"
                },
                {
                    title: "Serija",
                    action: "#serija",
                    icon: "serija"
                },
                
            ]
        });
        
        Epg.app.router.register(":view/:id", { view: "home", id: undefined });
        Epg.app.navigate();
    });
    
})();