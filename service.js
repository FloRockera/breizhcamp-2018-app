var request = require('request')

// tableau qui contiendra toutes les sessions du BreizhCamp
var talks = [];

exports.init = function (callback) {
    //callback(12);

    var respReq = 0;

    function compteur(){
        respReq++
        if (respReq === 2) {
            callback(talks.length)
        }
    }

    // TODO => effectuer les requêtes HTTP permettant de récupérer les données du BreizhCamp


    //envoie de la requête http talks
    request('http://www.breizhcamp.org/json/talks.json', { json: true }, function(err, res, tableauJsonTalks) {
        if (err) { return console.log('Erreur', err); }
        //body contient les données récupérées
        console.log('Ok', tableauJsonTalks);

        // TODO => une fois les données récupérées, alimenter la variable talks
        talks = talks.concat(tableauJsonTalks);
        compteur();
    //faire un compteur à cause de la double requete
    })

    //envoie de la requête http others
    request('http://www.breizhcamp.org/json/others.json', { json: true }, function(err, res, tableauJsonTalks) {
        if (err) { return console.log('Erreur', err); }
        //body contient les données récupérées
        console.log('Ok', tableauJsonTalks);

        // TODO => une fois les données récupérées, alimenter la variable talks
        talks = talks.concat(tableauJsonTalks);

        // TODO => invoquer la callback avec le nombre de sessions récupérées 
        compteur();
   
    })
};

exports.listerSessions = function() {
    return talks;
}