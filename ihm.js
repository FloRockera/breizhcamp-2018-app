var service = require('./service');

var readline = require('readline');


var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

exports.start = function() {
    service.init(function(nb) {
        console.log('[init]', nb, 'sessions trouvées.');

        afficherMenu();
    });
};


function afficherMenu() {



    /*IMPLEMENTATION DU MENU :
    *************************
    1. Rafraichir les données
    2. Lister les sessions
    99. Quitter*/


    rl.question('************************* \n1. Rafraichir les données \n2. Lister les sessions \n99. Quitter \n*************************\n', function(saisie) {
        console.log(`Vous avez saisi : ${saisie}`);
    
        switch (saisie){
        
            //1.Raffraichi les données
            case '1' : 
            service.init(function(nb) {
                console.log('[init]', nb, 'sessions trouvées.')
                });
                console.log('Données mises à jour');
            break;
        
            //2.Liste les sessions   
            case '2' :
                //affiche la liste des sessions sous la forme TITRE (PRESENTATEURS)
                service.listerSessions().forEach(e => {
                    if(e.speakers) {
                        console.log(e.name + '(' + e.speakers.toUpperCase() + ')');
                    } else {
                        console.log(e.name);
                    }
               
                });
            break;
        
            //99.Quitte le programme
            case '99' : 
                console.log('Vous avez quitté le programme. Au revoir !');
            break;
        
            //Autre.Réaffiche le programme
            default :
                console.log('Veuillez saisir un numéro');
                rl.question('************************* \n1. Rafraichir les données \n2. Lister les sessions \n99. Quitter \n*************************\n', function(saisie) {
                console.log(`Vous avez saisi : ${saisie}`);
                });
            }
        
            rl.close();
            
    });
}