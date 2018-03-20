//Calculando las estadisticas de cada partido
//La magia es gracias a Ricardo Pallas http://rpallas92.github.io

function getNumberMotionsByParty(party){
    return motions.filter(function(motion){
        return motion.presentada.includes(party)
    }).length;
}

function getVotesAgainstByParty(party) {
    return motions.filter(function(motion){
        return motion.presentada.includes(party)
    }).reduce(function(acc, current){
      var votesAgainst = current.votos_contra;
      if(typeof votesAgainst != "undefined"){
        return acc + votesAgainst
      } else {
        return acc;
      }
    },0);
}

function getVotesInFavorByParty(party) {
    return motions.filter(function(motion){
        return motion.presentada.includes(party)
    }).reduce(function(acc, current){
      var votesInFavor = current.votos_favor;
      if(typeof votesInFavor != "undefined"){
        return acc + votesInFavor;
      } else {
        return acc;
      }
    },0);
}

var mociones = [
{
    "fecha": "27-07-2015",
    "presentada": "C'S",
    "resultado": "ganada",
    "a_favor": "PP + ZEC + PSOE + C'S + CHA",
    "votos_contra": 31,
    "unanimidad": "si",
    "numero": 30
},
{
    "fecha": "27-07-2015",
    "presentada": "ZEC",
    "resultado": "ganada",
    "a_favor": "PP + ZEC + PSOE + CHA",
    "abstencion": "C'S",
    "votos_favor": 25,
    "votos_abstencion": 4,
    "numero": 31
},
{
    "fecha": "27-07-2015",
    "presentada": "PP",
    "resultado": "retirada",
    "numero": 32
},
{
    "fecha": "27-07-2015",
    "presentada": "PP",
    "resultado": "perdida",
    "a_favor": "PP + C'S",
    "en_contra": "ZEC + PSOE + CHA",
    "votos_contra": 16,
    "votos_favor": 13,
    "numero": 33
},
{
    "fecha": "27-07-2015",
    "presentada": "PSOE",
    "resultado": "ganada",
    "a_favor": "PP + PSOE + CHA",
    "en_contra": "ZEC + C'S",
    "votos_contra": 12,
    "votos_favor": 17,
    "numero": 34
},
{
    "fecha": "27-07-2015",
    "presentada": "PSOE",
    "resultado": "ganada",
    "a_favor": "ZEC + PSOE + CHA",
    "en_contra": "PP + C'S",
    "votos_contra": 13,
    "votos_favor": 16,
    "numero": 35
},
{
    "fecha": "27-07-2015",
    "presentada": "PSOE",
    "resultado": "ganada",
    "a_favor": "ZEC + PSOE + CHA",
    "en_contra": "PP + C'S",
    "votos_contra": 13,
    "votos_favor": 16,
    "numero": 36
},
{
    "fecha": "27-07-2015",
    "presentada": "PSOE",
    "resultado": "retirada",
    "numero": 37
},
{
    "fecha": "27-07-2015",
    "presentada": "CHA",
    "resultado": "ganada",
    "a_favor": "PP + PSOE + CHA",
    "en_contra": "ZEC + C'S",
    "votos_contra": 12,
    "votos_favor": 17,
    "numero": 38
},
{
    "fecha": "27-07-2015",
    "presentada": "PP",
    "resultado": "ganada",
    "a_favor": "PP + PSOE + C'S",
    "en_contra": "ZEC + CHA",
    "votos_contra": 10,
    "votos_favor": 19,
    "numero": 39
},
{
    "fecha": "02-10-2015",
    "presentada": "PSOE",
    "resultado": "ganada",
    "a_favor": "ZEC + PSOE + C'S + CHA",
    "votos_favor": 21,
    "votos_abstencion": 10,
    "numero": 2
},
{
    "fecha": "02-10-2015",
    "presentada": "CHA",
    "resultado": "ganada",
    "a_favor": "ZEC + PSOE + C'S + CHA",
    "en_contra": "PP",
    "votos_contra": 10,
    "votos_favor": 21,
    "numero": 3
},
{
    "fecha": "02-10-2015",
    "presentada": "CHA",
    "resultado": "ganada",
    "unanimidad": "si",
    "numero": 32
},
{
    "fecha": "02-10-2015",
    "presentada": "CHA",
    "resultado": "ganada",
    "unanimidad": "si",
    "numero": 33
},
{
    "fecha": "02-10-2015",
    "presentada": "CHA",
    "resultado": "ganada",
    "unanimidad": "si",
    "numero": 34
},
{
    "fecha": "02-10-2015",
    "presentada": "CHA",
    "resultado": "ganada",
    "unanimidad": "si",
    "numero": 4
},
{
    "fecha": "02-10-2015",
    "presentada": "CHA",
    "resultado": "retirada",
    "numero": 5
},
{
    "fecha": "02-10-2015",
    "presentada": "CHA",
    "resultado": "ganada",
    "unanimidad": "si",
    "numero": 6
},
{
    "fecha": "02-10-2015",
    "presentada": "PP",
    "resultado": "ganada",
    "a_favor": "PP + PSOE + C'S",
    "en_contra": "ZEC + CHA",
    "votos_contra": 11,
    "votos_favor": 18,
    "numero": 7
},
{
    "fecha": "02-10-2015",
    "presentada": "PP",
    "resultado": "perdida",
    "a_favor": "PP  + C'S",
    "en_contra": "ZEC + PSOE + CHA",
    "votos_contra": 13,
    "votos_favor": 16,
    "numero": 8
},
{
    "fecha": "02-10-2015",
    "presentada": "PP",
    "resultado": "ganada",
    "a_favor": "PP + PSOE + C'S",
    "en_contra": "CHA",
    "abstencion": "ZEC",
    "votos_contra": 2,
    "votos_favor": 18,
    "votos_abstencion": 9,
    "numero": 9
},
{
    "fecha": "02-10-2015",
    "presentada": "C'S",
    "resultado": "ganada",
    "a_favor": "PP + PSOE + C'S",
    "en_contra": "CHA",
    "abstencion": "ZEC",
    "votos_contra": 2,
    "votos_favor": 18,
    "votos_abstencion": 9,
    "numero": 10
},
{
    "fecha": "02-10-2015",
    "presentada": "C'S",
    "resultado": "ganada",
    "a_favor": "PP + ZEC + PSOE + C'S",
    "abstencion": "CHA",
    "votos_favor": 27,
    "votos_abstencion": 2,
    "numero": 11
},
{
    "fecha": "02-10-2015",
    "presentada": "PSOE",
    "resultado": "perdida",
    "a_favor": "PSOE + C'S",
    "en_contra": "PP + CHA",
    "abstencion": "ZEC",
    "votos_contra": 9,
    "votos_favor": 11,
    "votos_abstencion": 9,
    "numero": 12
},
{
    "fecha": "02-10-2015",
    "presentada": "ZEC",
    "resultado": "perdida",
    "a_favor": "ZEC + CHA",
    "en_contra": "PP + PSOE + C'S",
    "votos_contra": 20,
    "votos_favor": 11,
    "numero": 13
},
{
    "fecha": "02-10-2015",
    "presentada": "ZEC",
    "resultado": "ganada",
    "unanimidad": "si",
    "numero": 14
},
{
    "fecha": "02-10-2015",
    "presentada": "ZEC",
    "resultado": "ganada",
    "a_favor": "ZEC + PSOE + CHA",
    "en_contra": "PP",
    "abstencion": "C'S",
    "votos_contra": 10,
    "votos_favor": 17,
    "votos_abstencion": 4,
    "numero": 142
},
{
    "fecha": "02-10-2015",
    "presentada": "ZEC",
    "resultado": "ganada",
    "a_favor": "ZEC + PSOE + C'S + CHA",
    "en_contra": "PP",
    "votos_contra": 10,
    "votos_favor": 21,
    "numero": 143
},
{
    "fecha": "02-10-2015",
    "presentada": "ZEC",
    "resultado": "ganada",
    "unanimidad": "si",
    "numero": 144
},
{
    "fecha": "02-10-2015",
    "presentada": "ZEC",
    "resultado": "ganada",
    "unanimidad": "si",
    "numero": 145
},
{
    "fecha": "02-10-2015",
    "presentada": "CHA",
    "resultado": "ganada",
    "a_favor": "ZEC + PSOE + C'S + CHA",
    "abstencion": "PP",
    "votos_favor": 21,
    "votos_abstencion": 10,
    "numero": 15
},
{
    "fecha": "02-10-2015",
    "presentada": "C'S",
    "resultado": "retirada",
    "numero": 16
},
{
    "fecha": "02-10-2015",
    "presentada": "CHA",
    "resultado": "retirada",
    "numero": 17
},
{
    "fecha": "02-10-2015",
    "presentada": "CHA",
    "resultado": "retirada",
    "a_favor": " PP + PSOE + CHA",
    "en_contra": "ZEC",
    "abstencion": "C'S",
    "votos_contra": 9,
    "votos_favor": 18,
    "votos_abstencion": 4,
    "numero": 18
},
{
    "fecha": "02-10-2015",
    "presentada": "PSOE",
    "resultado": "ganada",
    "unanimidad": "si",
    "numero": 19
},
{
    "fecha": "02-10-2015",
    "presentada": "PP",
    "resultado": "perdida",
    "a_favor": "PP",
    "en_contra": "ZEC  + PSOE + C'S + CHA",
    "votos_contra": 21,
    "votos_favor": 10,
    "numero": 20
},
{
    "fecha": "30-10-2015",
    "presentada": "PP",
    "resultado": "ganada",
    "a_favor": "PP + PSOE + C'S + CHA",
    "en_contra": "ZEC",
    "votos_contra": 9,
    "votos_favor": 22,
    "numero": 2
},
{
    "fecha": "30-10-2015",
    "presentada": "PP",
    "resultado": "perdida",
    "a_favor": "PP",
    "en_contra": "ZEC + CHA",
    "abstencion": "PSOE + C'S",
    "votos_contra": 11,
    "votos_favor": 10,
    "votos_abstencion": 10,
    "numero": 3
},
{
    "fecha": "30-10-2015",
    "presentada": "PP",
    "resultado": "retirada",
    "numero": 4
},
{
    "fecha": "30-10-2015",
    "presentada": "C'S",
    "resultado": "ganada",
    "unanimidad": "si",
    "numero": 5
},
{
    "fecha": "30-10-2015",
    "presentada": "C'S",
    "resultado": "ganada",
    "unanimidad": "si",
    "numero": 6
},
{
    "fecha": "30-10-2015",
    "presentada": "C'S",
    "resultado": "retirada",
    "numero": 7
},
{
    "fecha": "30-10-2015",
    "presentada": "CHA",
    "resultado": "ganada",
    "a_favor": "ZEC + PSOE + C'S + CHA",
    "en_contra": "PP",
    "votos_contra": 10,
    "votos_favor": 21,
    "numero": 8
},
{
    "fecha": "30-10-2015",
    "presentada": "PP",
    "resultado": "ganada",
    "unanimidad": "si",
    "numero": 9
},
{
    "fecha": "30-10-2015",
    "presentada": "PP",
    "resultado": "ganada",
    "unanimidad": "si",
    "numero": 92
},
{
    "fecha": "30-10-2015",
    "presentada": "PP",
    "resultado": "ganada",
    "unanimidad": "si",
    "numero": 93
},
{
    "fecha": "30-10-2015",
    "presentada": "PP",
    "resultado": "perdida",
    "a_favor": "PP + C'S",
    "en_contra": "ZEC + PSOE + CHA",
    "votos_contra": 17,
    "votos_favor": 14,
    "numero": 94
},
{
    "fecha": "30-10-2015",
    "presentada": "PP",
    "resultado": "perdida",
    "a_favor": "PP + C'S",
    "en_contra": "ZEC + PSOE + CHA",
    "votos_contra": 17,
    "votos_favor": 14,
    "numero": 95
},
{
    "fecha": "30-10-2015",
    "presentada": "PP",
    "resultado": "ganada",
    "unanimidad": "si",
    "numero": 96
},
{
    "fecha": "30-10-2015",
    "presentada": "PP",
    "resultado": "ganada",
    "unanimidad": "si",
    "numero": 97
},
{
    "fecha": "30-10-2015",
    "presentada": "PP",
    "resultado": "perdida",
    "a_favor": "PP",
    "en_contra": "ZEC + PSOE + C'S + CHA",
    "votos_contra": 21,
    "votos_favor": 10,
    "numero": 10
},
{
    "fecha": "30-10-2015",
    "presentada": "C'S",
    "resultado": "ganada",
    "unanimidad": "si",
    "numero": 11
},
{
    "fecha": "30-10-2015",
    "presentada": "PSOE",
    "resultado": "ganada",
    "a_favor": "ZEC + PSOE + C'S + CHA",
    "en_contra": "PP",
    "votos_contra": 10,
    "votos_favor": 21,
    "numero": 12
},
{
    "fecha": "30-10-2015",
    "presentada": "PSOE",
    "resultado": "ganada",
    "unanimidad": "si",
    "numero": 122
},
{
    "fecha": "30-10-2015",
    "presentada": "PSOE",
    "resultado": "ganada",
    "unanimidad": "si",
    "numero": 123
},
{
    "fecha": "30-10-2015",
    "presentada": "PSOE",
    "resultado": "ganada",
    "a_favor": "ZEC + PSOE + C'S + CHA",
    "en_contra": "PP",
    "votos_contra": 10,
    "votos_favor": 21,
    "numero": 13
},
{
    "fecha": "30-10-2015",
    "presentada": "PSOE",
    "resultado": "ganada",
    "a_favor": "ZEC + PSOE + C'S + CHA",
    "en_contra": "PP",
    "votos_contra": 10,
    "votos_favor": 21,
    "numero": 14
},
{
    "fecha": "30-10-2015",
    "presentada": "PSOE",
    "resultado": "ganada",
    "a_favor": "PP + PSOE + CHA",
    "en_contra": "ZEC",
    "abstencion": "C'S",
    "votos_contra": 9,
    "votos_favor": 18,
    "votos_abstencion": 4,
    "numero": 15
},
{
    "fecha": "30-10-2015",
    "presentada": "ZEC",
    "resultado": "ganada",
    "a_favor": "ZEC + PSOE + C'S + CHA",
    "en_contra": "PP",
    "votos_contra": 10,
    "votos_favor": 18,
    "numero": 16
},
{
    "fecha": "30-10-2015",
    "presentada": "ZEC",
    "resultado": "ganada",
    "a_favor": "ZEC + C'S + CHA",
    "en_contra": "PP",
    "abstencion": "PSOE",
    "votos_contra": 10,
    "votos_favor": 15,
    "votos_abstencion": 6,
    "numero": 162
},
{
    "fecha": "30-10-2015",
    "presentada": "ZEC",
    "resultado": "ganada",
    "numero": 17
},
{
    "fecha": "30-10-2015",
    "presentada": "CHA",
    "resultado": "perdida",
    "a_favor": "PSOE + CHA",
    "en_contra": "ZEC + C'S",
    "abstencion": "PP",
    "votos_contra": 13,
    "votos_favor": 8,
    "votos_abstencion": 10,
    "numero": 18
},
{
    "fecha": "30-10-2015",
    "presentada": "PSOE",
    "resultado": "ganada",
    "numero": 19
},
{
    "fecha": "27-11-2015",
    "presentada": "PP",
    "resultado": "perdida",
    "a_favor": "PP + C'S",
    "en_contra": "ZEC + PSOE + CHA",
    "votos_contra": 17,
    "votos_favor": 14,
    "numero": 2
},
{
    "fecha": "27-11-2015",
    "presentada": "PP",
    "resultado": "perdida",
    "a_favor": "PP",
    "en_contra": "ZEC + PSOE + CHA",
    "abstencion": "C'S",
    "votos_contra": 17,
    "votos_favor": 10,
    "votos_abstencion": 4,
    "numero": 22
},
{
    "fecha": "27-11-2015",
    "presentada": "PP",
    "resultado": "ganada",
    "unanimidad": "si",
    "numero": 23
},
{
    "fecha": "27-11-2015",
    "presentada": "PP",
    "resultado": "ganada",
    "unanimidad": "si",
    "numero": 24
},
{
    "fecha": "27-11-2015",
    "presentada": "PP",
    "resultado": "ganada",
    "unanimidad": "si",
    "numero": 25
},
{
    "fecha": "27-11-2015",
    "presentada": "C'S",
    "resultado": "ganada",
    "unanimidad": "si",
    "numero": 3
},
{
    "fecha": "27-11-2015",
    "presentada": "C'S",
    "resultado": "ganada",
    "a_favor": "PP + PSOE + C'S + CHA",
    "en_contra": "ZEC",
    "votos_contra": 9,
    "votos_favor": 22,
    "numero": 4
},
{
    "fecha": "27-11-2015",
    "presentada": "C'S",
    "resultado": "ganada",
    "a_favor": "PSOE + C'S + CHA",
    "en_contra": "PP",
    "abstencion": "ZEC",
    "votos_contra": 10,
    "votos_favor": 12,
    "votos_abstencion": 9,
    "numero": 42
},
{
    "fecha": "27-11-2015",
    "presentada": "PP",
    "resultado": "perdida",
    "a_favor": "PP + C'S",
    "en_contra": "ZEC + PSOE + CHA",
    "votos_contra": 17,
    "votos_favor": 14,
    "numero": 5
},
{
    "fecha": "27-11-2015",
    "presentada": "PP",
    "resultado": "perdida",
    "a_favor": "PP",
    "en_contra": "ZEC + PSOE + C'S + CHA",
    "votos_contra": 21,
    "votos_favor": 10,
    "numero": 6
},
{
    "fecha": "27-11-2015",
    "presentada": "PP",
    "resultado": "perdida",
    "a_favor": "PP + C'S",
    "en_contra": "ZEC + PSOE + CHA",
    "votos_contra": 17,
    "votos_favor": 14,
    "numero": 62
},
{
    "fecha": "27-11-2015",
    "presentada": "CHA",
    "resultado": "ganada",
    "unanimidad": "si",
    "numero": 7
},
{
    "fecha": "27-11-2015",
    "presentada": "CHA",
    "resultado": "ganada",
    "unanimidad": "si",
    "numero": 8
},
{
    "fecha": "27-11-2015",
    "presentada": "CHA",
    "resultado": "ganada",
    "unanimidad": "si",
    "numero": 82
},
{
    "fecha": "27-11-2015",
    "presentada": "CHA",
    "resultado": "ganada",
    "unanimidad": "si",
    "numero": 83
},
{
    "fecha": "27-11-2015",
    "presentada": "CHA",
    "resultado": "ganada",
    "unanimidad": "si",
    "numero": 84
},
{
    "fecha": "27-11-2015",
    "presentada": "CHA",
    "resultado": "ganada",
    "unanimidad": "si",
    "numero": 85
},
{
    "fecha": "27-11-2015",
    "presentada": "CHA",
    "resultado": "ganada",
    "a_favor": "PP + C'S + CHA",
    "abstencion": "ZEC + PSOE",
    "votos_favor": 16,
    "votos_abstencion": 15,
    "numero": 86
},
{
    "fecha": "27-11-2015",
    "presentada": "CHA",
    "resultado": "ganada",
    "unanimidad": "si",
    "numero": 87
},
{
    "fecha": "27-11-2015",
    "presentada": "C'S",
    "resultado": "perdida",
    "a_favor": "C'S",
    "en_contra": "PP + PSOE + CHA",
    "abstencion": "ZEC",
    "votos_contra": 18,
    "votos_favor": 4,
    "votos_abstencion": 9,
    "numero": 9
},
{
    "fecha": "27-11-2015",
    "presentada": "ZEC",
    "resultado": "perdida",
    "a_favor": "ZEC",
    "en_contra": "PP + PSOE + C'S",
    "abstencion": "CHA",
    "votos_contra": 20,
    "votos_favor": 9,
    "votos_abstencion": 2,
    "numero": 10
},
{
    "fecha": "27-11-2015",
    "presentada": "ZEC",
    "resultado": "ganada",
    "a_favor": "ZEC + PSOE + C'S + CHA",
    "en_contra": "PP",
    "votos_contra": 10,
    "votos_favor": 21,
    "numero": 11
},
{
    "fecha": "27-11-2015",
    "presentada": "PP",
    "resultado": "ganada",
    "unanimidad": "si",
    "numero": 12
},
{
    "fecha": "27-11-2015",
    "presentada": "C'S",
    "resultado": "perdida",
    "a_favor": "C'S",
    "en_contra": "ZEC + PSOE + CHA",
    "abstencion": "PP",
    "votos_contra": 17,
    "votos_favor": 4,
    "votos_abstencion": 10,
    "numero": 13
},
{
    "fecha": "27-11-2015",
    "presentada": "PSOE",
    "resultado": "ganada",
    "unanimidad": "si",
    "numero": 14
},
{
    "fecha": "27-11-2015",
    "presentada": "PSOE",
    "resultado": "ganada",
    "a_favor": "ZEC + PSOE + CHA",
    "en_contra": "PP",
    "abstencion": "C'S",
    "votos_contra": 10,
    "votos_favor": 17,
    "votos_abstencion": 4,
    "numero": 15
},
{
    "fecha": "27-11-2015",
    "presentada": "PSOE",
    "resultado": "perdida",
    "a_favor": "PSOE",
    "en_contra": "PP + C'S",
    "abstencion": "ZEC + CHA",
    "votos_contra": 14,
    "votos_favor": 6,
    "votos_abstencion": 11,
    "numero": 16
},
{
    "fecha": "27-11-2015",
    "presentada": "PSOE",
    "resultado": "ganada",
    "unanimidad": "si",
    "numero": 17
},
{
    "fecha": "27-11-2015",
    "presentada": "PSOE",
    "resultado": "ganada",
    "a_favor": "PP + PSOE + C'S",
    "abstencion": "ZEC + CHA",
    "votos_favor": 20,
    "votos_abstencion": 10,
    "numero": 172
},
{
    "fecha": "27-11-2015",
    "presentada": "PSOE",
    "resultado": "ganada",
    "a_favor": "PP + PSOE + C'S + CHA",
    "abstencion": "ZEC",
    "votos_favor": 22,
    "votos_abstencion": 8,
    "numero": 173
},
{
    "fecha": "27-11-2015",
    "presentada": "PP",
    "resultado": "perdida",
    "a_favor": "PP + C'S",
    "en_contra": "ZEC + PSOE + CHA",
    "votos_contra": 16,
    "votos_favor": 12,
    "numero": 18
},
{
    "fecha": "27-11-2015",
    "presentada": "PP",
    "resultado": "ganada",
    "a_favor": "ZEC + C'S + CHA",
    "en_contra": "PP + PSOE",
    "votos_favor": 14,
    "votos_abstencion": 15,
    "numero": 19
},
{
    "fecha": "23-12-2015",
    "presentada": "CHA",
    "resultado": "ganada",
    "a_favor": "ZEC + CHA",
    "en_contra": "PP",
    "abstencion": "PSOE + C'S",
    "votos_contra": 10,
    "votos_favor": 11,
    "votos_abstencion": 10,
    "numero": 34
},
{
    "fecha": "23-12-2015",
    "presentada": "CHA",
    "resultado": "ganada",
    "a_favor": "ZEC + PSOE + CHA + C'S",
    "abstencion": "PP",
    "votos_favor": 21,
    "votos_abstencion": 10,
    "numero": 342
},
{
    "fecha": "23-12-2015",
    "presentada": "CHA",
    "resultado": "ganada",
    "a_favor": "ZEC + PSOE + CHA + C'S",
    "abstencion": "PP",
    "votos_favor": 21,
    "votos_abstencion": 10,
    "numero": 343
},
{
    "fecha": "23-12-2015",
    "presentada": "CHA",
    "resultado": "ganada",
    "a_favor": "ZEC + PSOE + CHA + C'S",
    "abstencion": "PP",
    "votos_favor": 21,
    "votos_abstencion": 10,
    "numero": 344
},
{
    "fecha": "23-12-2015",
    "presentada": "CHA",
    "resultado": "ganada",
    "a_favor": "ZEC + PSOE + CHA + C'S",
    "abstencion": "PP",
    "votos_favor": 21,
    "votos_abstencion": 10,
    "numero": 345
},
{
    "fecha": "23-12-2015",
    "presentada": "CHA",
    "resultado": "ganada",
    "a_favor": "ZEC + PSOE + CHA + C'S",
    "abstencion": "PP",
    "votos_favor": 21,
    "votos_abstencion": 10,
    "numero": 346
},
{
    "fecha": "23-12-2015",
    "presentada": "CHA",
    "resultado": "ganada",
    "a_favor": "ZEC + PSOE + CHA + C'S",
    "abstencion": "PP",
    "votos_favor": 21,
    "votos_abstencion": 10,
    "numero": 347
},
{
    "fecha": "23-12-2015",
    "presentada": "PP",
    "resultado": "ganada",
    "unanimidad": "si",
    "numero": 35
},
{
    "fecha": "23-12-2015",
    "presentada": "PP",
    "resultado": "perdida",
    "a_favor": "PP",
    "en_contra": "ZEC + CHA",
    "abstencion": "PSOE + C'S",
    "votos_contra": 11,
    "votos_favor": 10,
    "votos_abstencion": 10,
    "numero": 352
},
{
    "fecha": "23-12-2015",
    "presentada": "PP",
    "resultado": "ganada",
    "a_favor": "PP + PSOE + CHA + C'S",
    "abstencion": "ZEC",
    "votos_favor": 22,
    "votos_abstencion": 9,
    "numero": 353
},
{
    "fecha": "23-12-2015",
    "presentada": "PP",
    "resultado": "ganada",
    "a_favor": "PP + ZEC",
    "en_contra": "PSOE + CHA",
    "abstencion": "C'S",
    "votos_contra": 8,
    "votos_favor": 19,
    "votos_abstencion": 4,
    "numero": 36
},
{
    "fecha": "23-12-2015",
    "presentada": "PSOE",
    "resultado": "ganada",
    "a_favor": "PP + PSOE + C'S + CHA",
    "en_contra": "ZEC",
    "votos_contra": 9,
    "votos_favor": 21,
    "numero": 37
},
{
    "fecha": "23-12-2015",
    "presentada": "PSOE",
    "resultado": "ganada",
    "unanimidad": "si",
    "numero": 38
},
{
    "fecha": "23-12-2015",
    "presentada": "PSOE",
    "resultado": "ganada",
    "a_favor": "PP + PSOE + CHA + C'S",
    "abstencion": "ZEC",
    "votos_favor": 21,
    "votos_abstencion": 9,
    "numero": 382
},
{
    "fecha": "23-12-2015",
    "presentada": "C'S",
    "resultado": "ganada",
    "unanimidad": "si",
    "numero": 39
},
{
    "fecha": "23-12-2015",
    "presentada": "CHA",
    "resultado": "ganada",
    "a_favor": "ZEC + PSOE + CHA + C'S",
    "abstencion": "PP",
    "votos_favor": 21,
    "votos_abstencion": 10,
    "numero": 40
},
{
    "fecha": "28-01-2016",
    "presentada": "PP",
    "resultado": "ganada",
    "unanimidad": "si",
    "numero": 2
},
{
    "fecha": "28-01-2016",
    "presentada": "PP",
    "resultado": "ganada",
    "a_favor": "PP + ZEC + C'S + CHA",
    "en_contra": "PSOE",
    "votos_contra": 6,
    "votos_favor": 25,
    "numero": 22
},
{
    "fecha": "28-01-2016",
    "presentada": "C'S",
    "resultado": "ganada",
    "unanimidad": "si",
    "numero": 3
},
{
    "fecha": "28-01-2016",
    "presentada": "PP",
    "resultado": "ganada",
    "a_favor": "PP + PSOE + C'S",
    "en_contra": "ZEC + CHA",
    "votos_contra": 11,
    "votos_favor": 20,
    "numero": 4
},
{
    "fecha": "28-01-2016",
    "presentada": "PP",
    "resultado": "ganada",
    "a_favor": "PP + PSOE + C'S",
    "en_contra": "ZEC + CHA",
    "votos_contra": 11,
    "votos_favor": 19,
    "numero": 5
},
{
    "fecha": "28-01-2016",
    "presentada": "PP",
    "resultado": "ganada",
    "unanimidad": "si",
    "numero": 52
},
{
    "fecha": "28-01-2016",
    "presentada": "PSOE",
    "resultado": "ganada",
    "unanimidad": "si",
    "numero": 6
},
{
    "fecha": "28-01-2016",
    "presentada": "PSOE",
    "resultado": "ganada",
    "unanimidad": "si",
    "numero": 7
},
{
    "fecha": "28-01-2016",
    "presentada": "C'S",
    "resultado": "ganada",
    "unanimidad": "si",
    "numero": 8
},
{
    "fecha": "28-01-2016",
    "presentada": "PSOE",
    "resultado": "ganada",
    "a_favor": "ZEC + PSOE + CHA + C'S",
    "en_contra": "PP",
    "votos_contra": 9,
    "votos_favor": 21,
    "numero": 9
},
{
    "fecha": "28-01-2016",
    "presentada": "PSOE",
    "resultado": "ganada",
    "a_favor": "ZEC + PSOE + CHA + C'S",
    "en_contra": "PP",
    "votos_contra": 9,
    "votos_favor": 21,
    "numero": 92
},
{
    "fecha": "28-01-2016",
    "presentada": "PSOE",
    "resultado": "ganada",
    "a_favor": "ZEC + PSOE + CHA + C'S",
    "en_contra": "PP",
    "votos_contra": 9,
    "votos_favor": 21,
    "numero": 93
},
{
    "fecha": "28-01-2016",
    "presentada": "PSOE",
    "resultado": "ganada",
    "a_favor": "ZEC + PSOE + CHA + C'S",
    "en_contra": "PP",
    "votos_contra": 9,
    "votos_favor": 21,
    "numero": 94
},
{
    "fecha": "28-01-2016",
    "presentada": "PSOE",
    "resultado": "ganada",
    "a_favor": "ZEC + PSOE + CHA",
    "en_contra": "PP",
    "abstencion": "C'S",
    "votos_contra": 9,
    "votos_favor": 17,
    "votos_abstencion": 4,
    "numero": 95
},
{
    "fecha": "28-01-2016",
    "presentada": "C'S",
    "resultado": "ganada",
    "unanimidad": "si",
    "numero": 10
},
{
    "fecha": "28-01-2016",
    "presentada": "C'S",
    "resultado": "ganada",
    "a_favor": "PP + ZEC + PSOE + C'S",
    "abstencion": "CHA",
    "votos_favor": 27,
    "votos_abstencion": 2,
    "numero": 11
},
{
    "fecha": "28-01-2016",
    "presentada": "CHA",
    "resultado": "ganada",
    "a_favor": "ZEC + PSOE + CHA",
    "abstencion": "PP + C'S",
    "votos_favor": 17,
    "votos_abstencion": 13,
    "numero": 12
},
{
    "fecha": "28-01-2016",
    "presentada": "PSOE",
    "resultado": "ganada",
    "a_favor": "ZEC + PSOE + CHA",
    "en_contra": "C'S",
    "abstencion": "PP",
    "votos_contra": 4,
    "votos_favor": 17,
    "votos_abstencion": 9,
    "numero": 122
},
{
    "fecha": "28-01-2016",
    "presentada": "CHA",
    "resultado": "ganada",
    "a_favor": "ZEC + PSOE + CHA",
    "abstencion": "PP + C'S",
    "votos_favor": 17,
    "votos_abstencion": 13,
    "numero": 123
},
{
    "fecha": "28-01-2016",
    "presentada": "CHA",
    "resultado": "perdida",
    "numero": 13
},
{
    "fecha": "28-01-2016",
    "presentada": "ZEC",
    "resultado": "perdida",
    "a_favor": "ZEC + PSOE + CHA",
    "en_contra": "PP",
    "abstencion": "C'S",
    "votos_contra": 9,
    "votos_favor": 17,
    "votos_abstencion": 4,
    "numero": 14
},
{
    "fecha": "28-01-2016",
    "presentada": "PSOE",
    "resultado": "ganada",
    "a_favor": "PP + PSOE + C'S",
    "en_contra": "ZEC + CHA",
    "votos_contra": 11,
    "votos_favor": 20,
    "numero": 15
},
{
    "fecha": "26-02-2016",
    "presentada": "CHA",
    "resultado": "ganada",
    "a_favor": "ZEC + PSOE + CHA",
    "en_contra": "PP",
    "abstencion": "C'S",
    "votos_contra": 9,
    "votos_favor": 17,
    "votos_abstencion": 4,
    "numero": 3
},
{
    "fecha": "26-02-2016",
    "presentada": "PSOE",
    "resultado": "ganada",
    "a_favor": "PP + ZEC + PSOE + C'S",
    "abstencion": "CHA",
    "votos_favor": 29,
    "votos_abstencion": 2,
    "numero": 4
},
{
    "fecha": "26-02-2016",
    "presentada": "C'S",
    "resultado": "perdida",
    "a_favor": "PSOE + C'S",
    "en_contra": "PP + ZEC + CHA",
    "votos_contra": 21,
    "votos_favor": 10,
    "numero": 5
},
{
    "fecha": "26-02-2016",
    "presentada": "C'S",
    "resultado": "retirada",
    "numero": 6
},
{
    "fecha": "26-02-2016",
    "presentada": "CHA",
    "resultado": "ganada",
    "unanimidad": "si",
    "numero": 7
},
{
    "fecha": "26-02-2016",
    "presentada": "ZEC",
    "resultado": "ganada",
    "unanimidad": "si",
    "numero": 8
},
{
    "fecha": "26-02-2016",
    "presentada": "ZEC",
    "resultado": "retirada",
    "numero": 9
},
{
    "fecha": "26-02-2016",
    "presentada": "PP",
    "resultado": "ganada",
    "a_favor": "PP + PSOE + C'S + CHA",
    "en_contra": "ZEC",
    "votos_contra": 9,
    "votos_favor": 21,
    "numero": 10
},
{
    "fecha": "26-02-2016",
    "presentada": "PSOE",
    "resultado": "ganada",
    "a_favor": "PP + PSOE + C'S",
    "en_contra": "ZEC + CHA",
    "votos_contra": 11,
    "votos_favor": 20,
    "numero": 11
},
{
    "fecha": "26-02-2016",
    "presentada": "PSOE",
    "resultado": "ganada",
    "unanimidad": "si",
    "numero": 112
},
{
    "fecha": "26-02-2016",
    "presentada": "PSOE",
    "resultado": "ganada",
    "a_favor": "PP + PSOE + C'S + CHA",
    "en_contra": "ZEC",
    "votos_contra": 9,
    "votos_favor": 22,
    "numero": 12
},
{
    "fecha": "26-02-2016",
    "presentada": "C'S",
    "resultado": "ganada",
    "unanimidad": "si",
    "numero": 13
},
{
    "fecha": "26-02-2016",
    "presentada": "C'S",
    "resultado": "ganada",
    "unanimidad": "si",
    "numero": 14
},
{
    "fecha": "26-02-2016",
    "presentada": "C'S",
    "resultado": "ganada",
    "unanimidad": "si",
    "numero": 15
},
{
    "fecha": "23-03-2016",
    "presentada": "C'S",
    "resultado": "ganada",
    "unanimidad": "si",
    "numero": 2
},
{
    "fecha": "23-03-2016",
    "presentada": "PSOE",
    "resultado": "ganada",
    "unanimidad": "si",
    "numero": 3
},
{
    "fecha": "23-03-2016",
    "presentada": "C'S",
    "resultado": "ganada",
    "unanimidad": "si",
    "numero": 4
},
{
    "fecha": "23-03-2016",
    "presentada": "PP",
    "resultado": "ganada",
    "a_favor": "PP + ZEC + C'S",
    "abstencion": "PSOE + CHA",
    "votos_favor": 23,
    "votos_abstencion": 8,
    "numero": 5
},
{
    "fecha": "23-03-2016",
    "presentada": "CHA",
    "resultado": "ganada",
    "a_favor": "PP + PSOE + C'S + CHA",
    "en_contra": "ZEC",
    "votos_contra": 9,
    "votos_favor": 22,
    "numero": 6
},
{
    "fecha": "23-03-2016",
    "presentada": "CHA",
    "resultado": "ganada",
    "unanimidad": "si",
    "numero": 62
},
{
    "fecha": "23-03-2016",
    "presentada": "ZEC",
    "resultado": "retirada",
    "numero": 7
},
{
    "fecha": "23-03-2016",
    "presentada": "ZEC",
    "resultado": "ganada",
    "a_favor": "ZEC + PSOE + C'S + CHA",
    "en_contra": "PP",
    "votos_contra": 10,
    "votos_favor": 21,
    "numero": 8
},
{
    "fecha": "23-03-2016",
    "presentada": "CHA",
    "resultado": "perdida",
    "a_favor": "ZEC + CHA",
    "en_contra": "PP + PSOE + C'S",
    "votos_contra": 20,
    "votos_favor": 11,
    "numero": 9
},
{
    "fecha": "29-04-2016",
    "presentada": "ZEC",
    "resultado": "perdida",
    "a_favor": "ZEC + CHA",
    "en_contra": "PP + C'S",
    "abstencion": "PSOE",
    "votos_contra": 14,
    "votos_favor": 11,
    "votos_abstencion": 6,
    "numero": 2
},
{
    "fecha": "29-04-2016",
    "presentada": "C'S",
    "resultado": "ganada",
    "unanimidad": "si",
    "numero": 3
},
{
    "fecha": "29-04-2016",
    "presentada": "PSOE",
    "resultado": "ganada",
    "a_favor": "PP + PSOE",
    "abstencion": "ZEC + C'S + CHA",
    "votos_favor": 16,
    "votos_abstencion": 15,
    "numero": 4
},
{
    "fecha": "29-04-2016",
    "presentada": "C'S",
    "resultado": "ganada",
    "a_favor": "ZEC + PSOE + C'S + CHA",
    "abstencion": "PP",
    "votos_favor": 21,
    "votos_abstencion": 10,
    "numero": 5
},
{
    "fecha": "29-04-2016",
    "presentada": "CHA",
    "resultado": "ganada",
    "a_favor": "ZEC + PSOE + C'S + CHA",
    "en_contra": "PP",
    "votos_contra": 10,
    "votos_favor": 21,
    "numero": 6
},
{
    "fecha": "29-04-2016",
    "presentada": "CHA",
    "resultado": "ganada",
    "a_favor": "ZEC + PSOE + C'S + CHA",
    "en_contra": "PP",
    "votos_contra": 10,
    "votos_favor": 21,
    "numero": 62
},
{
    "fecha": "29-04-2016",
    "presentada": "CHA",
    "resultado": "ganada",
    "a_favor": "ZEC + PSOE + C'S + CHA",
    "en_contra": "PP",
    "votos_contra": 10,
    "votos_favor": 21,
    "numero": 63
},
{
    "fecha": "29-04-2016",
    "presentada": "CHA",
    "resultado": "ganada",
    "a_favor": "ZEC + PSOE + CHA",
    "en_contra": "PP + C'S",
    "votos_contra": 14,
    "votos_favor": 17,
    "numero": 64
},
{
    "fecha": "29-04-2016",
    "presentada": "CHA",
    "resultado": "ganada",
    "a_favor": "ZEC + PSOE + C'S + CHA",
    "en_contra": "PP",
    "votos_contra": 10,
    "votos_favor": 21,
    "numero": 65
},
{
    "fecha": "29-04-2016",
    "presentada": "PP",
    "resultado": "ganada",
    "a_favor": "PP + C'S",
    "en_contra": "ZEC + CHA",
    "abstencion": "PSOE",
    "votos_contra": 11,
    "votos_favor": 14,
    "votos_abstencion": 6,
    "numero": 7
},
{
    "fecha": "29-04-2016",
    "presentada": "PP",
    "resultado": "ganada",
    "a_favor": "PP + PSOE + C'S + CHA",
    "abstencion": "ZEC",
    "votos_favor": 22,
    "votos_abstencion": 9,
    "numero": 8
},
{
    "fecha": "29-04-2016",
    "presentada": "PP",
    "resultado": "ganada",
    "a_favor": "PP + PSOE + C'S ",
    "en_contra": "ZEC + CHA",
    "votos_contra": 11,
    "votos_favor": 20,
    "numero": 9
},
{
    "fecha": "29-04-2016",
    "presentada": "PSOE",
    "resultado": "ganada",
    "unanimidad": "si",
    "numero": 10
},
{
    "fecha": "29-04-2016",
    "presentada": "PSOE",
    "resultado": "ganada",
    "unanimidad": "si",
    "numero": 11
},
{
    "fecha": "29-04-2016",
    "presentada": "C'S",
    "resultado": "retirada",
    "numero": 12
},
{
    "fecha": "27-05-2016",
    "presentada": "CHA",
    "resultado": "ganada",
    "unanimidad": "si",
    "numero": 2
},
{
    "fecha": "27-05-2016",
    "presentada": "ZEC",
    "resultado": "ganada",
    "a_favor": "ZEC + PSOE + CHA",
    "en_contra": "PP + C'S",
    "votos_contra": 13,
    "votos_favor": 16,
    "numero": 3
},
{
    "fecha": "27-05-2016",
    "presentada": "CHA",
    "resultado": "ganada",
    "a_favor": "ZEC + PSOE + C'S + CHA",
    "abstencion": "PP",
    "votos_favor": 20,
    "votos_abstencion": 9,
    "numero": 4
},
{
    "fecha": "27-05-2016",
    "presentada": "ZEC",
    "resultado": "perdida",
    "a_favor": "ZEC + C'S + CHA",
    "en_contra": "PP + PSOE",
    "votos_contra": 15,
    "votos_favor": 14,
    "numero": 5
},
{
    "fecha": "27-05-2016",
    "presentada": "PP",
    "resultado": "ganada",
    "a_favor": "PP + PSOE + C'S",
    "abstencion": "ZEC + CHA",
    "votos_contra": 19,
    "votos_abstencion": 10,
    "numero": 6
},
{
    "fecha": "27-05-2016",
    "presentada": "PP",
    "resultado": "ganada",
    "unanimidad": "si",
    "numero": 7
},
{
    "fecha": "27-05-2016",
    "presentada": "C'S",
    "resultado": "ganada",
    "a_favor": "ZEC + PSOE + C'S",
    "en_contra": "PP",
    "abstencion": "CHA",
    "votos_contra": 9,
    "votos_favor": 16,
    "votos_abstencion": 2,
    "numero": 8
},
{
    "fecha": "27-05-2016",
    "presentada": "C'S",
    "resultado": "ganada",
    "a_favor": "PP + PSOE + C'S",
    "en_contra": "ZEC",
    "abstencion": "CHA",
    "votos_contra": 19,
    "votos_favor": 9,
    "votos_abstencion": 2,
    "numero": 9
},
{
    "fecha": "27-05-2016",
    "presentada": "PSOE",
    "resultado": "ganada",
    "unanimidad": "si",
    "numero": 10
},
{
    "fecha": "27-05-2016",
    "presentada": "PSOE",
    "resultado": "ganada",
    "unanimidad": "si",
    "numero": 11
},
{
    "fecha": "27-05-2016",
    "presentada": "PSOE",
    "resultado": "ganada",
    "a_favor": "PP + PSOE + C'S",
    "en_contra": "ZEC",
    "abstencion": "CHA",
    "votos_contra": 19,
    "votos_favor": 8,
    "votos_abstencion": 2,
    "numero": 12
},
{
    "fecha": "27-05-2016",
    "presentada": "PSOE",
    "resultado": "ganada",
    "unanimidad": "si",
    "numero": 122
},
{
    "fecha": "27-05-2016",
    "presentada": "PSOE",
    "resultado": "ganada",
    "a_favor": "ZEC + PSOE + CHA",
    "en_contra": "PP",
    "abstencion": "C'S",
    "votos_contra": 8,
    "votos_favor": 15,
    "votos_abstencion": 4,
    "numero": 13
},
{
    "fecha": "01-07-2016",
    "presentada": "PP",
    "resultado": "ganada",
    "a_favor": "PP + C'S",
    "en_contra": "ZEC + CHA",
    "abstencion": "PSOE",
    "votos_contra": 10,
    "votos_favor": 14,
    "votos_abstencion": 6,
    "numero": 2
},
{
    "fecha": "01-07-2016",
    "presentada": "PP",
    "resultado": "ganada",
    "a_favor": "PP + C'S + PSOE",
    "en_contra": "ZEC + CHA",
    "votos_contra": 10,
    "votos_favor": 20,
    "numero": 22
},
{
    "fecha": "01-07-2016",
    "presentada": "PSOE",
    "resultado": "ganada",
    "a_favor": "ZEC + PSOE + C'S + CHA",
    "abstencion": "PP",
    "votos_favor": 20,
    "votos_abstencion": 10,
    "numero": 3
},
{
    "fecha": "01-07-2016",
    "presentada": "PSOE",
    "resultado": "ganada",
    "a_favor": "PSOE + C'S",
    "en_contra": "ZEC + CHA",
    "abstencion": "PP",
    "votos_contra": 9,
    "votos_favor": 10,
    "votos_abstencion": 10,
    "numero": 32
},
{
    "fecha": "01-07-2016",
    "presentada": "C'S",
    "resultado": "ganada",
    "unanimidad": "si",
    "numero": 4
},
{
    "fecha": "01-07-2016",
    "presentada": "C'S",
    "resultado": "perdida",
    "a_favor": "PSOE + C'S",
    "en_contra": "PP + ZEC + CHA",
    "votos_contra": 20,
    "votos_favor": 10,
    "numero": 5
},
{
    "fecha": "01-07-2016",
    "presentada": "C'S",
    "resultado": "ganada",
    "unanimidad": "si",
    "numero": 6
},
{
    "fecha": "01-07-2016",
    "presentada": "CHA",
    "resultado": "retirada",
    "numero": 7
},
{
    "fecha": "01-07-2016",
    "presentada": "PSOE",
    "resultado": "ganada",
    "a_favor": "PP + PSOE",
    "en_contra": "ZEC ",
    "abstencion": "C'S + CHA",
    "votos_contra": 9,
    "votos_favor": 16,
    "votos_abstencion": 6,
    "numero": 8
},
{
    "fecha": "01-07-2016",
    "presentada": "CHA",
    "resultado": "ganada",
    "unanimidad": "si",
    "numero": 9
},
{
    "fecha": "01-07-2016",
    "presentada": "CHA",
    "resultado": "ganada",
    "unanimidad": "si",
    "numero": 10
},
{
    "fecha": "01-07-2016",
    "presentada": "ZEC",
    "resultado": "retirada",
    "numero": 11
},
{
    "fecha": "01-07-2016",
    "presentada": "PSOE",
    "resultado": "retirada",
    "numero": 12
},
{
    "fecha": "01-07-2016",
    "presentada": "CHA",
    "resultado": "perdida",
    "a_favor": "ZEC + CHA",
    "en_contra": "PP + PSOE",
    "abstencion": "C'S",
    "votos_contra": 16,
    "votos_favor": 10,
    "votos_abstencion": 4,
    "numero": 13
},
{
    "fecha": "22-07-2016",
    "presentada": "C'S",
    "resultado": "ganada",
    "a_favor": "PP + PSOE + C'S + CHA",
    "abstencion": "ZEC",
    "votos_favor": 21,
    "votos_abstencion": 9,
    "numero": 2
},
{
    "fecha": "22-07-2016",
    "presentada": "C'S",
    "resultado": "ganada",
    "a_favor": "PP + PSOE + C'S",
    "abstencion": "ZEC + CHA",
    "votos_contra": 11,
    "votos_favor": 20,
    "numero": 3
},
{
    "fecha": "22-07-2016",
    "presentada": "CHA",
    "resultado": "ganada",
    "unanimidad": "si",
    "numero": 4
},
{
    "fecha": "22-07-2016",
    "presentada": "PP",
    "resultado": "ganada",
    "unanimidad": "si",
    "numero": 5
},
{
    "fecha": "22-07-2016",
    "presentada": "PP",
    "resultado": "ganada",
    "a_favor": "PP + PSOE",
    "en_contra": "ZEC",
    "abstencion": "C'S + CHA",
    "votos_contra": 16,
    "votos_favor": 9,
    "votos_abstencion": 6,
    "numero": 52
},
{
    "fecha": "22-07-2016",
    "presentada": "CHA",
    "resultado": "ganada",
    "unanimidad": "si",
    "numero": 6
},
{
    "fecha": "22-07-2016",
    "presentada": "ZEC",
    "resultado": "perdida",
    "a_favor": "ZEC + C'S + CHA",
    "en_contra": "PP + PSOE",
    "votos_contra": 16,
    "votos_favor": 14,
    "numero": 7
},
{
    "fecha": "22-07-2016",
    "presentada": "ZEC",
    "resultado": "ganada",
    "a_favor": "PP + PSOE",
    "en_contra": "ZEC + C'S",
    "abstencion": "CHA",
    "votos_contra": 16,
    "votos_favor": 9,
    "votos_abstencion": 6,
    "numero": 72
},
{
    "fecha": "22-07-2016",
    "presentada": "C'S",
    "resultado": "ganada",
    "unanimidad": "si",
    "numero": 8
},
{
    "fecha": "22-07-2016",
    "presentada": "PSOE",
    "resultado": "ganada",
    "unanimidad": "si",
    "numero": 9
},
{
    "fecha": "22-07-2016",
    "presentada": "ZEC",
    "resultado": "perdida",
    "a_favor": "ZEC + CHA",
    "en_contra": "PP + C'S",
    "abstencion": "PSOE",
    "votos_contra": 13,
    "votos_favor": 11,
    "votos_abstencion": 6,
    "numero": 10
},
{
    "fecha": "22-07-2016",
    "presentada": "PSOE",
    "resultado": "ganada",
    "unanimidad": "si",
    "numero": 11
},
{
    "fecha": "22-07-2016",
    "presentada": "PSOE",
    "resultado": "ganada",
    "unanimidad": "si",
    "numero": 12
},
{
    "fecha": "22-07-2016",
    "presentada": "PP",
    "resultado": "ganada",
    "unanimidad": "si",
    "numero": 13
},
{
    "fecha": "30-09-2016",
    "presentada": "CHA",
    "resultado": "ganada",
    "a_favor": "ZEC + PSOE + C'S + CHA",
    "en_contra": "PP",
    "votos_contra": 10,
    "votos_favor": 20,
    "numero": 2
},
{
    "fecha": "30-09-2016",
    "presentada": "CHA",
    "resultado": "ganada",
    "unanimidad": "si",
    "numero": 3
},
{
    "fecha": "30-09-2016",
    "presentada": "PSOE",
    "resultado": "ganada",
    "unanimidad": "si",
    "numero": 4
},
{
    "fecha": "30-09-2016",
    "presentada": "PSOE",
    "resultado": "ganada",
    "unanimidad": "si",
    "numero": 42
},
{
    "fecha": "30-09-2016",
    "presentada": "PSOE",
    "resultado": "ganada",
    "unanimidad": "si",
    "numero": 43
},
{
    "fecha": "30-09-2016",
    "presentada": "PSOE",
    "resultado": "ganada",
    "a_favor": "PP + PSOE + C'S + CHA",
    "en_contra": "ZEC",
    "votos_contra": 9,
    "votos_favor": 19,
    "numero": 44
},
{
    "fecha": "30-09-2016",
    "presentada": "PSOE",
    "resultado": "ganada",
    "a_favor": "ZEC + PSOE + C'S + CHA",
    "abstencion": "PP",
    "votos_favor": 20,
    "votos_abstencion": 10,
    "numero": 5
},
{
    "fecha": "30-09-2016",
    "presentada": "CHA",
    "resultado": "ganada",
    "unanimidad": "si",
    "numero": 6
},
{
    "fecha": "30-09-2016",
    "presentada": "C'S",
    "resultado": "ganada",
    "a_favor": "ZEC + PSOE + C'S",
    "en_contra": "PP",
    "abstencion": "CHA",
    "votos_contra": 10,
    "votos_favor": 16,
    "votos_abstencion": 2,
    "numero": 7
},
{
    "fecha": "30-09-2016",
    "presentada": "ZEC",
    "resultado": "ganada",
    "a_favor": "ZEC + PSOE + C'S + CHA",
    "abstencion": "PP",
    "votos_favor": 19,
    "votos_abstencion": 7,
    "numero": 8
},
{
    "fecha": "30-09-2016",
    "presentada": "PSOE",
    "resultado": "ganada",
    "a_favor": "PP + PSOE + C'S",
    "contra": "ZEC + CHA",
    "votos_favor": 19,
    "votos_contra": 11,
    "numero": 9
},
{
    "fecha": "30-09-2016",
    "presentada": "PSOE",
    "resultado": "ganada",
    "a_favor": "PP + PSOE + C'S + CHA",
    "abstencion": "ZEC",
    "votos_favor": 21,
    "votos_abstencion": 9,
    "numero": 92
},
{
    "fecha": "30-09-2016",
    "presentada": "PSOE",
    "resultado": "ganada",
    "a_favor": "PP + PSOE + C'S + CHA",
    "abstencion": "ZEC",
    "votos_favor": 21,
    "votos_abstencion": 9,
    "numero": 93
},
{
    "fecha": "30-09-2016",
    "presentada": "PSOE",
    "resultado": "ganada",
    "a_favor": "PP + PSOE + C'S + CHA",
    "contra": "ZEC",
    "votos_favor": 21,
    "votos_contra": 9,
    "numero": 93
},
{
    "fecha": "30-09-2016",
    "presentada": "ZEC",
    "resultado": "perdida",
    "a_favor": "ZEC + CHA",
    "contra": "PP + PSOE + C'S",
    "votos_favor": 11,
    "votos_contra": 19,
    "numero": 10
},
{
    "fecha": "30-09-2016",
    "presentada": "C'S",
    "resultado": "ganada",
    "unanimidad": "si",
    "numero": 11
},
{
    "fecha": "30-09-2016",
    "presentada": "PSOE",
    "resultado": "ganada",
    "unanimidad": "si",
    "numero": 12
},
{
    "fecha": "30-09-2016",
    "presentada": "PSOE",
    "resultado": "ganada",
    "unanimidad": "si",
    "numero": 122
},
{
    "fecha": "30-09-2016",
    "presentada": "PSOE",
    "resultado": "ganada",
    "a_favor": "PP + PSOE + C'S + CHA",
    "abstencion": "ZEC",
    "votos_favor": 21,
    "votos_abstencion": 9,
    "numero": 123
},
{
    "fecha": "30-09-2016",
    "presentada": "C'S",
    "resultado": "ganada",
    "unanimidad": "si",
    "numero": 13
},
{
    "fecha": "30-09-2016",
    "presentada": "PP",
    "resultado": "perdida",
    "a_favor": "PP",
    "en_contra": "ZEC + PSOE",
    "abstencion": "C'S + CHA",
    "votos_contra": 13,
    "votos_favor": 11,
    "votos_abstencion": 6,
    "numero": 14
},
{
    "fecha": "30-09-2016",
    "presentada": "PP",
    "resultado": "ganada",
    "a_favor": "PP + PSOE + C'S",
    "en_contra": "ZEC",
    "abstencion": "CHA",
    "votos_contra": 9,
    "votos_favor": 18,
    "votos_abstencion": 2,
    "numero": 142
},
{
    "fecha": "30-09-2016",
    "presentada": "PP",
    "resultado": "ganada",
    "a_favor": "PP + PSOE + C'S",
    "en_contra": "ZEC",
    "abstencion": "CHA",
    "votos_contra": 9,
    "votos_favor": 18,
    "votos_abstencion": 2,
    "numero": 143
},
{
    "fecha": "30-09-2016",
    "presentada": "PP",
    "resultado": "ganada",
    "a_favor": "PP + PSOE + C'S",
    "en_contra": "ZEC",
    "abstencion": "CHA",
    "votos_contra": 9,
    "votos_favor": 18,
    "votos_abstencion": 2,
    "numero": 144
},
{
    "fecha": "30-09-2016",
    "presentada": "PP",
    "resultado": "ganada",
    "a_favor": "PP + PSOE + C'S",
    "en_contra": "ZEC",
    "abstencion": "CHA",
    "votos_contra": 9,
    "votos_favor": 18,
    "votos_abstencion": 2,
    "numero": 145
},
{
    "fecha": "30-09-2016",
    "presentada": "PP",
    "resultado": "ganada",
    "a_favor": "PP + PSOE + C'S",
    "abstencion": "ZEC + CHA",
    "votos_favor": 18,
    "votos_abstencion": 11,
    "numero": 15
},
{
    "fecha": "30-09-2016",
    "presentada": "PP",
    "resultado": "ganada",
    "a_favor": "PP + PSOE + C'S",
    "en_contra": "ZEC + CHA",
    "votos_contra": 11,
    "votos_favor": 18,
    "numero": 152
},
{
    "fecha": "30-09-2016",
    "presentada": "C'S",
    "resultado": "ganada",
    "a_favor": "PP + PSOE + C'S + CHA",
    "abstencion": "ZEC",
    "votos_favor": 19,
    "votos_abstencion": 9,
    "numero": 16
},
{
    "fecha": "30-09-2016",
    "presentada": "PSOE",
    "resultado": "ganada",
    "unanimidad": "si",
    "numero": 17
},
{
    "fecha": "28-10-2016",
    "presentada": "C'S",
    "resultado": "ganada",
    "a_favor": "PP + PSOE + C'S",
    "en_contra": "ZEC",
    "abstencion": "CHA",
    "votos_contra": 9,
    "votos_favor": 18,
    "votos_abstencion": 2,
    "numero": 2
},
{
    "fecha": "28-10-2016",
    "presentada": "C'S",
    "resultado": "ganada",
    "a_favor": "PP + PSOE + C'S",
    "en_contra": "ZEC",
    "abstencion": "CHA",
    "votos_contra": 9,
    "votos_favor": 18,
    "votos_abstencion": 2,
    "numero": 3
},
{
    "fecha": "28-10-2016",
    "presentada": "C'S",
    "resultado": "retirada",
    "numero": 4
},
{
    "fecha": "28-10-2016",
    "presentada": "PP",
    "resultado": "ganada",
    "a_favor": "PP + C'S",
    "en_contra": "ZEC + PSOE + CHA",
    "votos_contra": 17,
    "votos_favor": 14,
    "numero": 5
},
{
    "fecha": "28-10-2016",
    "presentada": "ZEC",
    "resultado": "ganada",
    "unanimidad": "si",
    "numero": 6
},
{
    "fecha": "28-10-2016",
    "presentada": "PSOE",
    "resultado": "ganada",
    "a_favor": "PP + PSOE + C'S + CHA",
    "abstencion": "ZEC",
    "votos_abstencion": 9,
    "votos_favor": 22,
    "numero": 7
},
{
    "fecha": "28-10-2016",
    "presentada": "C'S",
    "resultado": "ganada",
    "a_favor": "PP + PSOE + C'S + CHA",
    "abstencion": "ZEC",
    "votos_abstencion": 9,
    "votos_favor": 22,
    "numero": 8
},
{
    "fecha": "28-10-2016",
    "presentada": "C'S",
    "resultado": "ganada",
    "a_favor": "PP + PSOE + C'S + CHA",
    "abstencion": "ZEC",
    "votos_abstencion": 9,
    "votos_favor": 22,
    "numero": 82
},
{
    "fecha": "28-10-2016",
    "presentada": "CHA",
    "resultado": "ganada",
    "unanimidad": "si",
    "numero": 9
},
{
    "fecha": "28-10-2016",
    "presentada": "C'S",
    "resultado": "ganada",
    "a_favor": "PP + PSOE + C'S",
    "abstencion": "ZEC + CHA",
    "votos_abstencion": 11,
    "votos_favor": 19,
    "numero": 10
},
{
    "fecha": "28-10-2016",
    "presentada": "C'S",
    "resultado": "ganada",
    "unanimidad": "si",
    "numero": 102
},
{
    "fecha": "28-10-2016",
    "presentada": "CHA",
    "resultado": "ganada",
    "a_favor": "PP + PSOE + C'S + CHA",
    "abstencion": "ZEC",
    "votos_abstencion": 9,
    "votos_favor": 21,
    "numero": 11
},
{
    "fecha": "28-10-2016",
    "presentada": "PP",
    "resultado": "ganada",
    "unanimidad": "si",
    "numero": 12
},
{
    "fecha": "28-10-2016",
    "presentada": "PSOE",
    "resultado": "ganada",
    "unanimidad": "si",
    "numero": 13
},
{
    "fecha": "28-10-2016",
    "presentada": "PSOE",
    "resultado": "ganada",
    "a_favor": "PP + PSOE + C'S + CHA",
    "abstencion": "ZEC",
    "votos_abstencion": 7,
    "votos_favor": 22,
    "numero": 14
},
{
    "fecha": "28-10-2016",
    "presentada": "ZEC",
    "resultado": "ganada",
    "a_favor": "ZEC + PSOE + CHA",
    "abstencion": "C'S",
    "en_contra": "PP",
    "votos_contra": 10,
    "votos_favor": 16,
    "votos_abstencion": 4,
    "numero": 15
},
{
    "fecha": "28-10-2016",
    "presentada": "PSOE",
    "resultado": "ganada",
    "a_favor": "PP + PSOE + C'S + CHA",
    "abstencion": "ZEC",
    "votos_favor": 22,
    "votos_abstencion": 8,
    "numero": 16
},
{
    "fecha": "28-10-2016",
    "presentada": "CHA",
    "resultado": "perdida",
    "a_favor": "ZEC + CHA",
    "en_contra": "PP + PSOE + CHA",
    "votos_favor": 10,
    "votos_contra": 10,
    "numero": 17
},
{
    "fecha": "02-12-2016",
    "presentada": "C'S",
    "resultado": "ganada",
    "a_favor": "PSOE + C'S + CHA",
    "en_contra": "PP + ZEC",
    "votos_favor": 10,
    "votos_contra": 18,
    "numero": 24
},
{
    "fecha": "02-12-2016",
    "presentada": "C'S",
    "resultado": "ganada",
    "a_favor": "ZEC + PSOE + C'S + CHA",
    "en_contra": "PP",
    "votos_favor": 19,
    "votos_contra": 9,
    "numero": 242
},
{
    "fecha": "02-12-2016",
    "presentada": "C'S",
    "resultado": "ganada",
    "a_favor": "ZEC + PSOE + C'S + CHA",
    "en_contra": "PP",
    "votos_favor": 19,
    "votos_contra": 9,
    "numero": 243
},
{
    "fecha": "02-12-2016",
    "presentada": "C'S",
    "resultado": "ganada",
    "unanimidad": "si",
    "numero": 25
},
{
    "fecha": "02-12-2016",
    "presentada": "CHA",
    "resultado": "ganada",
    "unanimidad": "si",
    "numero": 26
},
{
    "fecha": "02-12-2016",
    "presentada": "CHA",
    "resultado": "retirada",
    "numero": 27
},
{
    "fecha": "02-12-2016",
    "presentada": "PP",
    "resultado": "perdida",
    "a_favor": "PP + C'S",
    "en_contra": "ZEC + PSOE + CHA",
    "votos_favor": 13,
    "votos_contra": 16,
    "numero": 28
},
{
    "fecha": "02-12-2016",
    "presentada": "PP",
    "resultado": "perdida",
    "a_favor": "PP + C'S",
    "en_contra": "ZEC + PSOE ",
    "abstencion": "CHA",
    "votos_favor": 13,
    "votos_abstencion": 1,
    "votos_contra": 15,
    "numero": 282
},
{
    "fecha": "02-12-2016",
    "presentada": "PSOE",
    "resultado": "retirada",
    "numero": 29
},
{
    "fecha": "02-12-2016",
    "presentada": "PSOE",
    "resultado": "ganada",
    "a_favor": "PP + PSOE + C'S + CHA",
    "en_contra": "ZEC",
    "votos_favor": 21,
    "votos_contra": 9,
    "numero": 30
},
{
    "fecha": "02-12-2016",
    "presentada": "PSOE",
    "resultado": "ganada",
    "a_favor": "PP + PSOE + C'S + CHA",
    "abstencion": "ZEC",
    "votos_favor": 21,
    "votos_abstencion": 9,
    "numero": 31
},
{
    "fecha": "02-12-2016",
    "presentada": "PSOE",
    "resultado": "ganada",
    "unanimidad": "si",
    "numero": 312
},
{
    "fecha": "02-12-2016",
    "presentada": "PSOE",
    "resultado": "ganada",
    "a_favor": "PP + PSOE + C'S + CHA",
    "en_contra": "ZEC",
    "votos_favor": 21,
    "votos_contra": 9,
    "numero": 313
},
{
    "fecha": "02-12-2016",
    "presentada": "PSOE",
    "resultado": "ganada",
    "unanimidad": "si",
    "numero": 314
},
{
    "fecha": "02-12-2016",
    "presentada": "PSOE",
    "resultado": "ganada",
    "unanimidad": "si",
    "numero": 315
},
{
    "fecha": "02-12-2016",
    "presentada": "ZEC",
    "resultado": "ganada",
    "a_favor": "ZEC + PSOE + CHA",
    "en_contra": "PP",
    "abstencion": "C'S",
    "votos_favor": 16,
    "votos_abstencion": 3,
    "votos_contra": 10,
    "numero": 32
},
{
    "fecha": "23-12-2016",
    "presentada": "C'S",
    "resultado": "ganada",
    "a_favor": "PP + ZEC + PSOE + C'S",
    "abstencion": "CHA",
    "votos_favor": 28,
    "votos_abstencion": 2,
    "numero": 10
},
{
    "fecha": "23-12-2016",
    "presentada": "CHA",
    "resultado": "ganada",
    "unanimidad": "si",
    "numero": 11
},
{
    "fecha": "23-12-2016",
    "presentada": "PP",
    "resultado": "ganada",
    "unanimidad": "si",
    "numero": 12
},
{
    "fecha": "23-12-2016",
    "presentada": "PSOE",
    "resultado": "ganada",
    "a_favor": "PP + PSOE + C'S",
    "en_contra": "ZEC + CHA",
    "votos_favor": 19,
    "votos_contra": 11,
    "numero": 13
},
{
    "fecha": "23-12-2016",
    "presentada": "PSOE",
    "resultado": "ganada",
    "unanimidad": "si",
    "numero": 14
},
{
    "fecha": "23-12-2016",
    "presentada": "PSOE",
    "resultado": "ganada",
    "a_favor": "ZEC + PSOE + C'S",
    "en_contra": "CHA",
    "abstencion": "PP",
    "votos_favor": 19,
    "votos_abstencion": 9,
    "votos_contra": 2,
    "numero": 142
},
{
    "fecha": "23-12-2016",
    "presentada": "PSOE",
    "resultado": "ganada",
    "unanimidad": "si",
    "numero": 143
},
{
    "fecha": "23-12-2016",
    "presentada": "PSOE",
    "resultado": "retirada",
    "numero": 15
},
{
    "fecha": "23-12-2016",
    "presentada": "PP",
    "resultado": "perdida",
    "a_favor": "PP",
    "en_contra": "ZEC + PSOE + CHA",
    "abstencion": "C'S",
    "votos_favor": 9,
    "votos_abstencion": 4,
    "votos_contra": 17,
    "numero": 16
},
{
    "fecha": "23-12-2016",
    "presentada": "PP",
    "resultado": "retirada",
    "numero": 17
},
{
    "fecha": "23-12-2016",
    "presentada": "PP",
    "resultado": "perdida",
    "a_favor": "PP",
    "en_contra": "ZEC + PSOE + CHA",
    "abstencion": "C'S",
    "votos_favor": 9,
    "votos_abstencion": 4,
    "votos_contra": 17,
    "numero": 18
},
{
    "fecha": "23-12-2016",
    "presentada": "PP",
    "resultado": "ganada",
    "a_favor": "PP + C'S",
    "en_contra": "ZEC + CHA",
    "abstencion": "PSOE",
    "votos_favor": 13,
    "votos_abstencion": 6,
    "votos_contra": 13,
    "numero": 181
},
{
    "fecha": "23-12-2016",
    "presentada": "PP",
    "resultado": "ganada",
    "a_favor": "PP + ZEC + C'S + CHA",
    "abstencion": "PSOE",
    "votos_favor": 24,
    "votos_abstencion": 6,
    "numero": 182
},
{
    "fecha": "23-12-2016",
    "presentada": "PP",
    "resultado": "ganada",
    "a_favor": "PP + C'S",
    "en_contra": "ZEC",
    "abstencion": "PSOE + CHA",
    "votos_favor": 13,
    "votos_abstencion": 8,
    "votos_contra": 9,
    "numero": 183
},
{
    "fecha": "23-12-2016",
    "presentada": "PP",
    "resultado": "ganada",
    "a_favor": "PP + C'S",
    "en_contra": "ZEC + CHA",
    "abstencion": "PSOE",
    "votos_favor": 13,
    "votos_abstencion": 6,
    "votos_contra": 11,
    "numero": 184
},
{
    "fecha": "23-12-2016",
    "presentada": "C'S",
    "resultado": "ganada",
    "numero": 19
},
{
    "fecha": "23-12-2016",
    "presentada": "CHA",
    "resultado": "ganada",
    "a_favor": "ZEC + PSOE + C'S + CHA",
    "en_contra": "PP",
    "votos_favor": 21,
    "votos_contra": 8,
    "numero": 20
},
{
    "fecha": "23-12-2016",
    "presentada": "CHA",
    "resultado": "ganada",
    "unanimidad": "si",
    "numero": 201
},
{
    "fecha": "03-02-2017",
    "presentada": "ZEC",
    "resultado": "ganada",
    "a_favor": "ZEC + CHA",
    "en_contra": "PP + C'S",
    "abstencion": "PSOE",
    "votos_favor": 13,
    "votos_abstencion": 10,
    "votos_contra": 6,
    "numero": 2
},
{
    "fecha": "03-02-2017",
    "presentada": "ZEC",
    "resultado": "ganada",
    "a_favor": "ZEC + PSOE + CHA + C'S",
    "en_contra": "PP",
    "votos_favor": 20,
    "votos_contra": 9,
    "numero": 3
},
{
    "fecha": "03-02-2017",
    "presentada": "C'S",
    "resultado": "perdida",
    "a_favor": "PP + C'S",
    "en_contra": "ZEC + PSOE + CHA",
    "votos_favor": 13,
    "votos_contra": 16,
    "numero": 4
},
{
    "fecha": "03-02-2017",
    "presentada": "C'S",
    "resultado": "ganada",
    "a_favor": "PP + PSOE + C'S + CHA",
    "en_contra": "ZEC",
    "votos_favor": 21,
    "votos_contra": 8,
    "numero": 5
},
{
    "fecha": "03-02-2017",
    "presentada": "CHA",
    "resultado": "ganada",
    "unanimidad": "si",
    "numero": 6
},
{
    "fecha": "03-02-2017",
    "presentada": "C'S",
    "resultado": "ganada",
    "a_favor": "ZEC + PSOE + C'S + CHA",
    "en_contra": "PP",
    "votos_favor": 20,
    "votos_contra": 9,
    "numero": 61
},
{
    "fecha": "03-02-2017",
    "presentada": "PP",
    "resultado": "retirada",
    "numero": 7
},
{
    "fecha": "03-02-2017",
    "presentada": "PP",
    "resultado": "ganada",
    "a_favor": "PP + PSOE + C'S + CHA",
    "abstencion": "ZEC",
    "votos_favor": 20,
    "votos_abstencion": 8,
    "numero": 8
},
{
    "fecha": "03-02-2017",
    "presentada": "PP",
    "resultado": "perdida",
    "a_favor": "PP",
    "en_contra": "ZEC + PSOE + C'S + CHA",
    "votos_favor": 9,
    "votos_contra": 20,
    "numero": 9
},
{
    "fecha": "03-02-2017",
    "presentada": "C'S",
    "resultado": "ganada",
    "unanimidad": "si",
    "numero": 10
},
{
    "fecha": "03-02-2017",
    "presentada": "C'S",
    "resultado": "retirada",
    "numero": 11
},
{
    "fecha": "03-02-2017",
    "presentada": "CHA",
    "resultado": "ganada",
    "a_favor": "ZEC + CHA + C'S",
    "en_contra": "PP",
    "abstencion": "PSOE",
    "votos_favor": 14,
    "votos_abstencion": 9,
    "votos_contra": 6,
    "numero": 12
},
{
    "fecha": "03-02-2017",
    "presentada": "PSOE",
    "resultado": "ganada",
    "a_favor": "PP + PSOE + CHA + C'S",
    "en_contra": "ZEC",
    "votos_favor": 21,
    "votos_contra": 6,
    "numero": 13
},
{
    "fecha": "03-02-2017",
    "presentada": "PSOE",
    "resultado": "ganada",
    "unanimidad": "si",
    "numero": 14
},
{
    "fecha": "03-02-2017",
    "presentada": "PSOE",
    "resultado": "ganada",
    "a_favor": "ZEC + PSOE + CHA + C'S",
    "en_contra": "PP",
    "votos_favor": 21,
    "votos_contra": 6,
    "numero": 15
},
{
    "fecha": "03-02-2017",
    "presentada": "CHA",
    "resultado": "perdida",
    "a_favor": "ZEC + CHA",
    "en_contra": "PP + C'S",
    "abstencion": "PSOE",
    "votos_favor": 10,
    "votos_abstencion": 6,
    "votos_contra": 13,
    "numero": 16
},
{
    "fecha": "24-02-2017",
    "presentada": "ZEC",
    "resultado": "ganada",
    "unanimidad": "si",
    "numero": 2
},
{
    "fecha": "24-02-2017",
    "presentada": "ZEC",
    "resultado": "ganada",
    "a_favor": "ZEC + PSOE + CHA",
    "en_contra": "PP",
    "abstencion": "C'S",
    "votos_favor": 17,
    "votos_abstencion": 4,
    "votos_contra": 9,
    "numero": 22
},
{
    "fecha": "24-02-2017",
    "presentada": "ZEC",
    "resultado": "ganada",
    "a_favor": "ZEC + PSOE + CHA + C'S",
    "en_contra": "PP",
    "votos_favor": 21,
    "votos_contra": 9,
    "numero": 23
},
{
    "fecha": "24-02-2017",
    "presentada": "C'S",
    "resultado": "ganada",
    "unanimidad": "si",
    "numero": 3
},
{
    "fecha": "24-02-2017",
    "presentada": "CHA",
    "resultado": "ganada",
    "unanimidad": "si",
    "numero": 4
},
{
    "fecha": "24-02-2017",
    "presentada": "PP + PSOE + C'S",
    "resultado": "retirada",
    "numero": 5
},
{
    "fecha": "24-02-2017",
    "presentada": "ZEC",
    "resultado": "ganada",
    "a_favor": "ZEC + PSOE + C'S + CHA",
    "abstencion": "PP",
    "votos_favor": 21,
    "votos_abstencion": 9,
    "numero": 6
},
{
    "fecha": "24-02-2017",
    "presentada": "PSOE",
    "resultado": "ganada",
    "a_favor": "ZEC + PSOE + C'S + CHA",
    "abstencion": "PP",
    "votos_favor": 21,
    "votos_abstencion": 9,
    "numero": 7
},
{
    "fecha": "24-02-2017",
    "presentada": "PSOE",
    "resultado": "retirada",
    "numero": 8
},
{
    "fecha": "24-02-2017",
    "presentada": "C'S",
    "resultado": "ganada",
    "a_favor": "PP + PSOE + C'S",
    "abstencion": "ZEC + CHA",
    "votos_favor": 21,
    "votos_abstencion": 9,
    "numero": 9
},
{
    "fecha": "24-02-2017",
    "presentada": "C'S",
    "resultado": "ganada",
    "a_favor": "PSOE + C'S",
    "abstencion": "PP + ZEC + CHA",
    "votos_favor": 10,
    "votos_abstencion": 20,
    "numero": 92
},
{
    "fecha": "24-02-2017",
    "presentada": "C'S",
    "resultado": "ganada",
    "a_favor": "PP + PSOE + C'S",
    "abstencion": "ZEC + CHA",
    "votos_favor": 19,
    "votos_abstencion": 11,
    "numero": 93
},
{
    "fecha": "24-02-2017",
    "presentada": "C'S",
    "resultado": "perdida",
    "a_favor": "PSOE + C'S",
    "en_contra": "PP + CHA",
    "abstencion": "ZEC",
    "votos_favor": 10,
    "votos_abstencion": 9,
    "votos_contra": 11,
    "numero": 94
},
{
    "fecha": "24-02-2017",
    "presentada": "C'S",
    "resultado": "ganada",
    "a_favor": "PSOE + C'S",
    "abstencion": "PP + ZEC + CHA",
    "votos_favor": 10,
    "votos_abstencion": 20,
    "numero": 95
},
{
    "fecha": "24-02-2017",
    "presentada": "C'S",
    "resultado": "ganada",
    "a_favor": "PSOE + C'S",
    "abstencion": "PP + ZEC + CHA",
    "votos_favor": 10,
    "votos_abstencion": 20,
    "numero": 96
},
{
    "fecha": "31-03-2017",
    "presentada": "C'S",
    "resultado": "ganada",
    "unanimidad": "si",
    "numero": 2
},
{
    "fecha": "31-03-2017",
    "presentada": "C'S",
    "resultado": "ganada",
    "unanimidad": "si",
    "numero": 22
},
{
    "fecha": "31-03-2017",
    "presentada": "PP",
    "resultado": "perdida",
    "a_favor": "PP + C'S",
    "en_contra": "ZEC + PSOE",
    "abstencion": "CHA",
    "votos_favor": 14,
    "votos_abstencion": 2,
    "votos_contra": 15,
    "numero": 3
},
{
    "fecha": "31-03-2017",
    "presentada": "C'S",
    "resultado": "perdida",
    "a_favor": "PP + PSOE + C'S",
    "en_contra": "CHA",
    "abstencion": "ZEC",
    "votos_favor": 20,
    "votos_abstencion": 8,
    "votos_contra": 2,
    "numero": 4
},
{
    "fecha": "31-03-2017",
    "presentada": "CHA",
    "resultado": "perdida",
    "a_favor": "ZEC + CHA",
    "en_contra": "PP + PSOE + C'S",
    "votos_favor": 10,
    "votos_contra": 20,
    "numero": 5
},
{
    "fecha": "31-03-2017",
    "presentada": "PP",
    "resultado": "ganada",
    "a_favor": "PP + PSOE + C'S",
    "en_contra": "ZEC + CHA",
    "votos_favor": 20,
    "votos_contra": 10,
    "numero": 6
},
{
    "fecha": "31-03-2017",
    "presentada": "CHA",
    "resultado": "ganada",
    "a_favor": "ZEC + PSOE + C'S +  CHA",
    "abstencion": "PP",
    "votos_favor": 20,
    "votos_abstencion": 10,
    "numero": 7
},
{
    "fecha": "31-03-2017",
    "presentada": "CHA",
    "resultado": "perdida",
    "a_favor": "PSOE + CHA",
    "en_contra": "ZEC + C'S",
    "abstencion": "PP",
    "votos_favor": 8,
    "votos_abstencion": 10,
    "votos_contra": 12,
    "numero": 72
},
{
    "fecha": "31-03-2017",
    "presentada": "CHA",
    "resultado": "perdida",
    "a_favor": "PSOE + CHA",
    "en_contra": "ZEC + C'S",
    "abstencion": "PP",
    "votos_favor": 8,
    "votos_abstencion": 10,
    "votos_contra": 12,
    "numero": 73
},
{
    "fecha": "31-03-2017",
    "presentada": "C'S",
    "resultado": "ganada",
    "a_favor": "PP + ZEC + PSOE + C'S",
    "abstencion": "CHA",
    "votos_favor": 26,
    "votos_abstencion": 2,
    "numero": 8
},
{
    "fecha": "31-03-2017",
    "presentada": "C'S",
    "resultado": "ganada",
    "a_favor": "PP + PSOE",
    "en_contra": "ZEC + CHA",
    "votos_favor": 19,
    "votos_contra": 9,
    "numero": 82
},
{
    "fecha": "31-03-2017",
    "presentada": "PSOE",
    "resultado": "ganada",
    "unanimidad": "si",
    "numero": 9
},
{
    "fecha": "31-03-2017",
    "presentada": "ZEC",
    "resultado": "ganada",
    "unanimidad": "si",
    "numero": 10
},
{
    "fecha": "31-03-2017",
    "presentada": "C'S",
    "resultado": "ganada",
    "unanimidad": "si",
    "numero": 11
},
{
    "fecha": "31-03-2017",
    "presentada": "PSOE",
    "resultado": "ganada",
    "a_favor": "PP + PSOE + C'S + CHA",
    "en_contra": "ZEC",
    "votos_favor": 22,
    "votos_contra": 8,
    "numero": 12
},
{
    "fecha": "31-03-2017",
    "presentada": "PSOE",
    "resultado": "ganada",
    "unanimidad": "si",
    "numero": 122
},
{
    "fecha": "31-03-2017",
    "presentada": "PSOE",
    "resultado": "ganada",
    "unanimidad": "si",
    "numero": 123
},
{
    "fecha": "31-03-2017",
    "presentada": "PSOE",
    "resultado": "ganada",
    "a_favor": "PP + PSOE + C'S + CHA",
    "en_contra": "ZEC",
    "votos_favor": 22,
    "votos_contra": 8,
    "numero": 13
},
{
    "fecha": "31-03-2017",
    "presentada": "ZEC",
    "resultado": "ganada",
    "a_favor": "ZEC + PSOE + C'S + CHA",
    "en_contra": "PP",
    "votos_favor": 20,
    "votos_contra": 8,
    "numero": 14
},
{
    "fecha": "31-03-2017",
    "presentada": "ZEC",
    "resultado": "ganada",
    "a_favor": "ZEC + PSOE + CHA",
    "en_contra": "PP",
    "abstencion": "C'S",
    "votos_favor": 16,
    "votos_abstencion": 10,
    "votos_contra": 4,
    "numero": 142
},
{
    "fecha": "31-03-2017",
    "presentada": "PP",
    "resultado": "ganada",
    "a_favor": "PP + C'S",
    "en_contra": "ZEC + PSOE + CHA",
    "votos_favor": 16,
    "votos_contra": 11,
    "numero": 15
},
{
    "fecha": "31-03-2017",
    "presentada": "CHA",
    "resultado": "ganada",
    "unanimidad": "si",
    "numero": 123
},
{
    "fecha": "02-06-2017",
    "presentada": "C'S",
    "resultado": "ganada",
    "a_favor": "ZEC + PSOE + CHA + C'S",
    "abstencion": "PP",
    "votos_favor": 20,
    "votos_abstencion": 10,
    "numero": 2
},
{
    "fecha": "02-06-2017",
    "presentada": "C'S",
    "resultado": "ganada",
    "a_favor": "ZEC + PSOE + CHA + C'S",
    "abstencion": "PP",
    "votos_favor": 20,
    "votos_abstencion": 10,
    "numero": 3
},
{
    "fecha": "31-03-2017",
    "presentada": "C'S",
    "resultado": "ganada",
    "unanimidad": "si",
    "numero": 32
},
{
    "fecha": "31-03-2017",
    "presentada": "PSOE",
    "resultado": "ganada",
    "unanimidad": "si",
    "numero": 4
},
{
    "fecha": "31-03-2017",
    "presentada": "PSOE",
    "resultado": "ganada",
    "unanimidad": "si",
    "numero": 5
},
{
    "fecha": "31-03-2017",
    "presentada": "PP",
    "resultado": "retirada",
    "numero": 6
},
{
    "fecha": "02-06-2017",
    "presentada": "PP",
    "resultado": "ganada",
    "a_favor": "PP + PSOE + C'S",
    "en_contra": "ZEC + CHA",
    "votos_favor": 19,
    "votos_contra": 10,
    "numero": 7
},
{
    "fecha": "31-03-2017",
    "presentada": "C'S",
    "resultado": "ganada",
    "unanimidad": "si",
    "numero": 8
},
{
    "fecha": "02-06-2017",
    "presentada": "ZEC",
    "resultado": "ganada",
    "a_favor": "ZEC + PSOE + CHA",
    "abstencion": "PP + C'S",
    "votos_favor": 16,
    "votos_abstencion": 14,
    "numero": 9
},
{
    "fecha": "02-06-2017",
    "presentada": "ZEC",
    "resultado": "ganada",
    "a_favor": "PP + ZEC + PSOE + CHA",
    "abstencion": "C'S",
    "votos_favor": 26,
    "votos_abstencion": 4,
    "numero": 92
},
{
    "fecha": "31-03-2017",
    "presentada": "ZEC",
    "resultado": "ganada",
    "unanimidad": "si",
    "numero": 93
},
{
    "fecha": "02-06-2017",
    "presentada": "ZEC",
    "resultado": "ganada",
    "a_favor": "ZEC + PSOE + CHA + C'S",
    "abstencion": "PP",
    "votos_favor": 20,
    "votos_abstencion": 10,
    "numero": 94
},
{
    "fecha": "31-03-2017",
    "presentada": "CHA",
    "resultado": "ganada",
    "unanimidad": "si",
    "numero": 10
},
{
    "fecha": "31-03-2017",
    "presentada": "CHA",
    "resultado": "ganada",
    "a_favor": "ZEC  + CHA",
    "en_contra": "PP + C'S",
    "abstencion": "PSOE",
    "votos_favor": 10,
    "votos_abstencion": 6,
    "votos_contra": 13,
    "numero": 11
},
{
    "fecha": "31-03-2017",
    "presentada": "CHA",
    "resultado": "ganada",
    "a_favor": "ZEC + CHA",
    "en_contra": "PP + C'S",
    "abstencion": "PSOE",
    "votos_favor": 16,
    "votos_abstencion": 4,
    "votos_contra": 10,
    "numero": 12
},
{
    "fecha": "31-03-2017",
    "presentada": "PP",
    "resultado": "ganada",
    "a_favor": "PP + CHA + C'S",
    "abstencion": "ZEC + PSOE",
    "votos_favor": 16,
    "votos_abstencion": 4,
    "numero": 13
},
{
    "fecha": "31-03-2017",
    "presentada": "ZEC",
    "resultado": "ganada",
    "a_favor": "ZEC + PSOE + C'S + CHA",
    "en_contra": "PP",
    "votos_favor": 20,
    "votos_contra": 10,
    "numero": 14
},
{
    "fecha": "31-03-2017",
    "presentada": "ZEC",
    "resultado": "ganada",
    "a_favor": "ZEC + CHA",
    "en_contra": "PP + PSOE + C'S",
    "votos_favor": 10,
    "votos_contra": 20,
    "numero": 142
},
{
    "fecha": "31-03-2017",
    "presentada": "PP + PSOE + C'S",
    "resultado": "ganada",
    "a_favor": "PP + PSOE + CHA + C'S",
    "abstencion": "ZEC",
    "votos_favor": 22,
    "votos_abstencion": 8,
    "numero": 15
},
{
    "fecha": "31-03-2017",
    "presentada": "PP + PSOE + C'S",
    "resultado": "ganada",
    "unanimidad": "si",
    "numero": 16
},
{
    "fecha": "30-06-2017",
    "presentada": "C'S",
    "resultado": "retirada",
    "numero": 2
},
{
    "fecha": "31-03-2017",
    "presentada": "PSOE",
    "resultado": "ganada",
    "unanimidad": "si",
    "numero": 3
},
{
    "fecha": "31-03-2017",
    "presentada": "PP + PSOE + C'S",
    "resultado": "ganada",
    "a_favor": "PP + PSOE + CHA + C'S",
    "abstencion": "ZEC",
    "votos_favor": 21,
    "votos_abstencion": 8,
    "numero": 4
},
{
    "fecha": "31-03-2017",
    "presentada": "PSOE",
    "resultado": "ganada",
    "unanimidad": "si",
    "numero": 5
},
{
    "fecha": "30-06-2017",
    "presentada": "PP",
    "resultado": "retirada",
    "numero": 6
},
{
    "fecha": "30-06-2017",
    "presentada": "PP",
    "resultado": "ganada",
    "a_favor": "PP + PSOE + CHA + C'S",
    "abstencion": "ZEC",
    "votos_favor": 21,
    "votos_abstencion": 8,
    "numero": 7
},
{
    "fecha": "30-06-2017",
    "presentada": "C'S",
    "resultado": "ganada",
    "unanimidad": "si",
    "numero": 8
},
{
    "fecha": "30-06-2017",
    "presentada": "CHA",
    "resultado": "ganada",
    "unanimidad": "si",
    "numero": 9
},
{
    "fecha": "30-06-2017",
    "presentada": "CHA",
    "resultado": "ganada",
    "a_favor": "ZEC + PSOE + CHA + C'S",
    "abstencion": "PP",
    "votos_favor": 19,
    "votos_abstencion": 10,
    "numero": 92
},
{
    "fecha": "30-06-2017",
    "presentada": "CHA",
    "resultado": "ganada",
    "a_favor": "ZEC + PSOE + CHA + C'S",
    "abstencion": "PP",
    "votos_favor": 19,
    "votos_abstencion": 10,
    "numero": 93
},
{
    "fecha": "30-06-2017",
    "presentada": "PP",
    "resultado": "ganada",
    "a_favor": "PP + PSOE + C'S",
    "en_contra": "ZEC + CHA",
    "votos_favor": 15,
    "votos_contra": 10,
    "numero": 10
},
{
    "fecha": "30-06-2017",
    "presentada": "CHA",
    "resultado": "ganada",
    "a_favor": "ZEC + PSOE + CHA",
    "en_contra": "PP",
    "abstencion": "C'S",
    "votos_favor": 16,
    "votos_abstencion": 2,
    "votos_contra": 10,
    "numero": 11
},
{
    "fecha": "30-06-2017",
    "presentada": "ZEC",
    "resultado": "ganada",
    "a_favor": "ZEC + PSOE + CHA",
    "en_contra": "PP",
    "abstencion": "C'S",
    "votos_favor": 16,
    "votos_abstencion": 2,
    "votos_contra": 10,
    "numero": 12
},
{
    "fecha": "30-06-2017",
    "presentada": "ZEC",
    "resultado": "ganada",
    "a_favor": "ZEC + PSOE + CHA",
    "en_contra": "PP + C'S",
    "votos_favor": 16,
    "votos_contra": 12,
    "numero": 122
},
{
    "fecha": "30-06-2017",
    "presentada": "ZEC",
    "resultado": "ganada",
    "a_favor": "ZEC + PSOE + CHA",
    "en_contra": "PP + C'S",
    "votos_favor": 16,
    "votos_contra": 12,
    "numero": 123
},
{
    "fecha": "30-06-2017",
    "presentada": "ZEC",
    "resultado": "ganada",
    "a_favor": "ZEC + PSOE + C'S + CHA",
    "en_contra": "PP",
    "votos_favor": 18,
    "votos_contra": 10,
    "numero": 124
},
{
    "fecha": "30-06-2017",
    "presentada": "ZEC",
    "resultado": "ganada",
    "a_favor": "ZEC + PSOE + CHA",
    "en_contra": "PP + C'S",
    "votos_favor": 16,
    "votos_contra": 12,
    "numero": 125
},
{
    "fecha": "30-06-2017",
    "presentada": "C'S",
    "resultado": "ganada",
    "unanimidad": "si",
    "numero": 13
},
{
    "fecha": "30-06-2017",
    "presentada": "ZEC",
    "resultado": "perdida",
    "a_favor": "ZEC",
    "en_contra": "PP + PSOE + C'S",
    "abstencion": "CHA",
    "votos_favor": 8,
    "votos_abstencion": 2,
    "votos_contra": 18,
    "numero": 14
},
{
    "fecha": "28-07-2017",
    "presentada": "C'S",
    "resultado": "ganada",
    "unanimidad": "si",
    "numero": 2
},
{
    "fecha": "28-07-2017",
    "presentada": "C'S",
    "resultado": "ganada",
    "unanimidad": "si",
    "numero": 3
},
{
    "fecha": "28-07-2017",
    "presentada": "PP",
    "resultado": "ganada",
    "unanimidad": "si",
    "numero": 4
},
{
    "fecha": "28-07-2017",
    "presentada": "PP",
    "resultado": "ganada",
    "a_favor": "PP",
    "en_contra": "PSOE",
    "abstencion": "ZEC + C'S + CHA",
    "votos_favor": 10,
    "votos_abstencion": 13,
    "votos_contra": 6,
    "numero": 42
},
{
    "fecha": "28-07-2017",
    "presentada": "PSOE",
    "resultado": "ganada",
    "unanimidad": "si",
    "numero": 5
},
{
    "fecha": "28-07-2017",
    "presentada": "PSOE",
    "resultado": "ganada",
    "unanimidad": "si",
    "numero": 52
},
{
    "fecha": "28-07-2017",
    "presentada": "PSOE",
    "resultado": "ganada",
    "unanimidad": "si",
    "numero": 53
},
{
    "fecha": "28-07-2017",
    "presentada": "PSOE",
    "resultado": "ganada",
    "a_favor": "PP + PSOE + C'S",
    "en_contra": "ZEC",
    "abstencion": "CHA",
    "votos_favor": 19,
    "votos_abstencion": 8,
    "votos_contra": 2,
    "numero": 54
},
{
    "fecha": "28-07-2017",
    "presentada": "PSOE",
    "resultado": "ganada",
    "unanimidad": "si",
    "numero": 55
},
{
    "fecha": "28-07-2017",
    "presentada": "PSOE",
    "resultado": "ganada",
    "unanimidad": "si",
    "numero": 56
},
{
    "fecha": "28-07-2017",
    "presentada": "C'S",
    "resultado": "ganada",
    "a_favor": "PP + ZEC + C'S",
    "abstencion": "PSOE + CHA",
    "votos_favor": 21,
    "votos_abstencion": 8,
    "numero": 6
},
{
    "fecha": "28-07-2017",
    "presentada": "C'S",
    "resultado": "ganada",
    "unanimidad": "si",
    "numero": 62
},
{
    "fecha": "28-07-2017",
    "presentada": "C'S",
    "resultado": "ganada",
    "unanimidad": "si",
    "numero": 63
},
{
    "fecha": "28-07-2017",
    "presentada": "CHA",
    "resultado": "ganada",
    "unanimidad": "si",
    "numero": 7
},
{
    "fecha": "28-07-2017",
    "presentada": "PP",
    "resultado": "ganada",
    "a_favor": "PP + PSOE + C'S",
    "en_contra": "ZEC",
    "abstencion": "CHA",
    "votos_favor": 19,
    "votos_abstencion": 8,
    "votos_contra": 2,
    "numero": 8
},
{
    "fecha": "28-07-2017",
    "presentada": "PP",
    "resultado": "ganada",
    "a_favor": "PP + PSOE + C'S + CHA",
    "abstencion": "ZEC",
    "votos_favor": 19,
    "votos_abstencion": 8,
    "numero": 82
},
{
    "fecha": "28-07-2017",
    "presentada": "PP",
    "resultado": "ganada",
    "a_favor": "PP + PSOE + C'S + CHA",
    "abstencion": "ZEC",
    "votos_favor": 19,
    "votos_abstencion": 8,
    "numero": 83
},
{
    "fecha": "28-07-2017",
    "presentada": "PSOE",
    "resultado": "ganada",
    "unanimidad": "si",
    "numero": 9
},
{
    "fecha": "28-07-2017",
    "presentada": "PSOE",
    "resultado": "ganada",
    "a_favor": "PP + PSOE + C'S",
    "en_contra": "ZEC",
    "abstencion": "CHA",
    "votos_favor": 19,
    "votos_abstencion": 2,
    "votos_contra": 8,
    "numero": 92
},
{
    "fecha": "28-07-2017",
    "presentada": "PSOE",
    "resultado": "ganada",
    "unanimidad": "si",
    "numero": 93
},
{
    "fecha": "28-07-2017",
    "presentada": "PSOE",
    "resultado": "ganada",
    "a_favor": "PP + PSOE + C'S + CHA",
    "abstencion": "ZEC",
    "votos_favor": 21,
    "votos_abstencion": 8,
    "numero": 94
},
{
    "fecha": "28-07-2017",
    "presentada": "PSOE",
    "resultado": "ganada",
    "unanimidad": "si",
    "numero": 95
},
{
    "fecha": "28-07-2017",
    "presentada": "CHA",
    "resultado": "ganada",
    "unanimidad": "si",
    "numero": 10
},
{
    "fecha": "28-07-2017",
    "presentada": "ZEC",
    "resultado": "ganada",
    "a_favor": "ZEC + PSOE + C'S + CHA",
    "abstencion": "PP",
    "votos_favor": 19,
    "votos_abstencion": 7,
    "numero": 11
},
{
    "fecha": "28-07-2017",
    "presentada": "PSOE",
    "resultado": "ganada",
    "a_favor": "ZEC",
    "en_contra": "PP",
    "abstencion": "PSOE + C'S + CHA",
    "votos_favor": 8,
    "votos_abstencion": 11,
    "votos_contra": 10,
    "numero": 12
},
{
    "fecha": "29-09-2017",
    "presentada": "PSOE",
    "resultado": "ganada",
    "unanimidad": "si",
    "numero": 2
},
{
    "fecha": "29-09-2017",
    "presentada": "PSOE",
    "resultado": "ganada",
    "unanimidad": "si",
    "numero": 3
},
{
    "fecha": "28-07-2017",
    "presentada": "PSOE",
    "resultado": "ganada",
    "a_favor": "PP + PSOE + C'S + CHA",
    "abstencion": "ZEC",
    "votos_favor": 22,
    "votos_abstencion": 9,
    "numero": 32
},
{
    "fecha": "29-09-2017",
    "presentada": "PSOE",
    "resultado": "ganada",
    "unanimidad": "si",
    "numero": 33
},
{
    "fecha": "29-09-2017",
    "presentada": "PSOE",
    "resultado": "ganada",
    "unanimidad": "si",
    "numero": 34
},
{
    "fecha": "29-09-2017",
    "presentada": "PSOE",
    "resultado": "ganada",
    "unanimidad": "si",
    "numero": 35
},
{
    "fecha": "29-09-2017",
    "presentada": "PP",
    "resultado": "retirada",
    "numero": 4
},
{
    "fecha": "29-09-2017",
    "presentada": "PP",
    "resultado": "ganada",
    "unanimidad": "si",
    "numero": 5
},
{
    "fecha": "29-09-2017",
    "presentada": "CHA",
    "resultado": "ganada",
    "a_favor": "PP + PSOE + C'S + CHA",
    "abstencion": "ZEC",
    "votos_favor": 22,
    "votos_abstencion": 9,
    "numero": 6
},
{
    "fecha": "29-09-2017",
    "presentada": "C'S",
    "resultado": "retirada",
    "numero": 7
},
{
    "fecha": "29-09-2017",
    "presentada": "PP",
    "resultado": "ganada",
    "unanimidad": "si",
    "numero": 8
},
{
    "fecha": "29-09-2017",
    "presentada": "ZEC",
    "resultado": "ganada",
    "a_favor": "ZEC + PSOE + CHA",
    "en_contra": "PP",
    "abstencion": "C'S",
    "votos_favor": 17,
    "votos_abstencion": 10,
    "votos_contra": 4,
    "numero": 9
},
{
    "fecha": "29-09-2017",
    "presentada": "ZEC",
    "resultado": "ganada",
    "unanimidad": "si",
    "numero": 10
},
{
    "fecha": "29-09-2017",
    "presentada": "PSOE",
    "resultado": "ganada",
    "a_favor": "PSOE + CHA",
    "en_contra": "PP + C'S",
    "abstencion": "ZEC",
    "votos_favor": 8,
    "votos_abstencion": 14,
    "votos_contra": 9,
    "numero": 11
},
{
    "fecha": "29-09-2017",
    "presentada": "PSOE",
    "resultado": "retirada",
    "numero": 12
},
{
    "fecha": "29-09-2017",
    "presentada": "CHA",
    "resultado": "perdida",
    "a_favor": "ZEC + CHA",
    "en_contra": "PP + PSOE + C'S",
    "votos_favor": 8,
    "votos_contra": 9,
    "numero": 13
},
{
    "fecha": "29-09-2017",
    "presentada": "CHA",
    "resultado": "ganada",
    "unanimidad": "si",
    "numero": 14
},
{
    "fecha": "29-09-2017",
    "presentada": "PP",
    "resultado": "ganada",
    "unanimidad": "si",
    "numero": 15
},
{
    "fecha": "29-09-2017",
    "presentada": "PP",
    "resultado": "ganada",
    "unanimidad": "si",
    "numero": 16
},
{
    "fecha": "29-09-2017",
    "presentada": "PP",
    "resultado": "ganada",
    "unanimidad": "si",
    "numero": 162
},
{
    "fecha": "29-09-2017",
    "presentada": "PP",
    "resultado": "perdida",
    "a_favor": "ZEC + CHA",
    "en_contra": "PP + PSOE + C'S",
    "votos_favor": 8,
    "votos_contra": 9,
    "numero": 163
},
{
    "fecha": "30-10-2017",
    "presentada": "PP",
    "resultado": "retirada",
    "numero": 38
},
{
    "fecha": "30-10-2017",
    "presentada": "CHA",
    "resultado": "ganada",
    "unanimidad": "si",
    "numero": 39
},
{
    "fecha": "30-10-2017",
    "presentada": "C'S",
    "resultado": "perdida",
    "a_favor": "ZEC + CHA",
    "en_contra": "PP + PSOE + C'S",
    "votos_favor": 8,
    "votos_contra": 9,
    "numero": 40
},
{
    "fecha": "30-10-2017",
    "presentada": "PSOE",
    "resultado": "ganada",
    "unanimidad": "si",
    "numero": 41
},
{
    "fecha": "30-10-2017",
    "presentada": "PSOE",
    "resultado": "ganada",
    "a_favor": "ZEC + PSOE + CHA",
    "en_contra": "PP",
    "abstencion": "C'S",
    "votos_favor": 8,
    "votos_abstencion": 14,
    "votos_contra": 9,
    "numero": 42
},
{
    "fecha": "30-10-2017",
    "presentada": "PP",
    "resultado": "ganada",
    "unanimidad": "si",
    "numero": 43
},
{
    "fecha": "30-10-2017",
    "presentada": "CHA",
    "resultado": "ganada",
    "unanimidad": "si",
    "numero": 44
},
{
    "fecha": "30-10-2017",
    "presentada": "C'S",
    "resultado": "ganada",
    "a_favor": "PP + PSOE + C'S",
    "en_contra": "ZEC + CHA",
    "votos_favor": 18,
    "votos_contra": 11,
    "numero": 45
},
{
    "fecha": "30-10-2017",
    "presentada": "ZEC",
    "resultado": "ganada",
    "unanimidad": "si",
    "numero": 46
},
{
    "fecha": "30-10-2017",
    "presentada": "PSOE",
    "resultado": "ganada",
    "a_favor": "ZEC + PSOE + CHA",
    "en_contra": "PP",
    "abstencion": "C'S",
    "votos_favor": 8,
    "votos_abstencion": 14,
    "votos_contra": 9,
    "numero": 462
},
{
    "fecha": "30-10-2017",
    "presentada": "ZEC",
    "resultado": "perdida",
    "a_favor": "ZEC + C'S",
    "en_contra": "PP + PSOE",
    "abstencion": "CHA",
    "votos_favor": 13,
    "votos_abstencion": 16,
    "votos_contra": 2,
    "numero": 463
},
{
    "fecha": "30-10-2017",
    "presentada": "PSOE",
    "resultado": "ganada",
    "a_favor": "PP + PSOE + C'S",
    "en_contra": "ZEC",
    "abstencion": "CHA",
    "votos_favor": 20,
    "votos_abstencion": 2,
    "votos_contra": 9,
    "numero": 47
},
{
    "fecha": "24-11-2017",
    "presentada": "C'S",
    "resultado": "ganada",
    "unanimidad": "si",
    "numero": 21
},
{
    "fecha": "24-11-2017",
    "presentada": "C'S",
    "resultado": "ganada",
    "a_favor": "PP + PSOE + C'S",
    "abstencion": "ZEC + CHA",
    "votos_favor": 19,
    "votos_abstencion": 11,
    "numero": 22
},
{
    "fecha": "24-11-2017",
    "presentada": "CHA",
    "resultado": "ganada",
    "unanimidad": "si",
    "numero": 23
},
{
    "fecha": "24-11-2017",
    "presentada": "ZEC",
    "resultado": "ganada",
    "unanimidad": "si",
    "numero": 24
},
{
    "fecha": "24-11-2017",
    "presentada": "PP",
    "resultado": "ganada",
    "unanimidad": "si",
    "numero": 25
},
{
    "fecha": "24-11-2017",
    "presentada": "PSOE",
    "resultado": "ganada",
    "unanimidad": "si",
    "numero": 26
},
{
    "fecha": "24-11-2017",
    "presentada": "PSOE",
    "resultado": "ganada",
    "unanimidad": "si",
    "numero": 27
},
{
    "fecha": "24-11-2017",
    "presentada": "CHA",
    "resultado": "ganada",
    "unanimidad": "si",
    "numero": 28
}]

// console.log(getNumberMotionsByParty("CHA"))
getNumberMotionsByParty("CHA")
// getVotesAgainstByParty("CHA")
// getVotesInFavorByParty("CHA")
