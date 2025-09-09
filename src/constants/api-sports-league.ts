// Dados das principais ligas e copas de futebol por país

import { LeagueBasic } from "@/types/league";

export const API_SPORTS_LEAGUES: Record<string, LeagueBasic[]> = {
  // INGLATERRA
  england: [
    {
      id: 39,
      name: "Premier League",
      country: "England",
      logo: "https://media.api-sports.io/football/leagues/39.png",
      flag: "https://media.api-sports.io/flags/gb-eng.svg"
    },
    {
      id: 40,
      name: "Championship",
      country: "England", 
      logo: "https://media.api-sports.io/football/leagues/40.png",
      flag: "https://media.api-sports.io/flags/gb-eng.svg"
    },
    // {
    //   id: 41,
    //   name: "League One",
    //   country: "England",
    //   logo: "https://media.api-sports.io/football/leagues/41.png", 
    //   flag: "https://media.api-sports.io/flags/gb-eng.svg"
    // },
    // {
    //   id: 42,
    //   name: "League Two", 
    //   country: "England",
    //   logo: "https://media.api-sports.io/football/leagues/42.png",
    //   flag: "https://media.api-sports.io/flags/gb-eng.svg"
    // },
    {
      id: 48,
      name: "FA Cup",
      country: "England",
      logo: "https://media.api-sports.io/football/leagues/48.png",
      flag: "https://media.api-sports.io/flags/gb-eng.svg"
    },
    {
      id: 45,
      name: "FA Community Shield",
      country: "England", 
      logo: "https://media.api-sports.io/football/leagues/45.png",
      flag: "https://media.api-sports.io/flags/gb-eng.svg"
    }
  ],

  // ESPANHA  
  spain: [
    {
      id: 140,
      name: "La Liga",
      country: "Spain",
      logo: "https://media.api-sports.io/football/leagues/140.png",
      flag: "https://media.api-sports.io/flags/es.svg"
    },
    {
      id: 141,
      name: "Segunda División",
      country: "Spain",
      logo: "https://media.api-sports.io/football/leagues/141.png", 
      flag: "https://media.api-sports.io/flags/es.svg"
    },
    {
      id: 143,
      name: "Copa del Rey",
      country: "Spain",
      logo: "https://media.api-sports.io/football/leagues/143.png",
      flag: "https://media.api-sports.io/flags/es.svg"
    },
    {
      id: 556,
      name: "Super Cup", 
      country: "Spain",
      logo: "https://media.api-sports.io/football/leagues/556.png",
      flag: "https://media.api-sports.io/flags/es.svg"
    }
  ],

  // FRANÇA
  france: [
    {
      id: 61,
      name: "Ligue 1",
      country: "France", 
      logo: "https://media.api-sports.io/football/leagues/61.png",
      flag: "https://media.api-sports.io/flags/fr.svg"
    },
    {
      id: 62, 
      name: "Ligue 2",
      country: "France",
      logo: "https://media.api-sports.io/football/leagues/62.png",
      flag: "https://media.api-sports.io/flags/fr.svg"
    },
    {
      id: 66,
      name: "Coupe de France",
      country: "France",
      logo: "https://media.api-sports.io/football/leagues/66.png",
      flag: "https://media.api-sports.io/flags/fr.svg"
    },
    {
      id: 65,
      name: "Coupe de la Ligue", 
      country: "France",
      logo: "https://media.api-sports.io/football/leagues/65.png",
      flag: "https://media.api-sports.io/flags/fr.svg"
    }
  ],

  // ITÁLIA
  italy: [
    {
      id: 135,
      name: "Serie A",
      country: "Italy",
      logo: "https://media.api-sports.io/football/leagues/135.png",
      flag: "https://media.api-sports.io/flags/it.svg"
    },
    {
      id: 136,
      name: "Serie B", 
      country: "Italy",
      logo: "https://media.api-sports.io/football/leagues/136.png",
      flag: "https://media.api-sports.io/flags/it.svg"
    },
    {
      id: 137,
      name: "Coppa Italia",
      country: "Italy",
      logo: "https://media.api-sports.io/football/leagues/137.png",
      flag: "https://media.api-sports.io/flags/it.svg"
    },
    {
      id: 547,
      name: "Super Cup",
      country: "Italy",
      logo: "https://media.api-sports.io/football/leagues/547.png", 
      flag: "https://media.api-sports.io/flags/it.svg"
    }
  ],

  // BRASIL
  brazil: [
    {
      id: 71,
      name: "Série A", 
      country: "Brazil",
      logo: "https://media.api-sports.io/football/leagues/71.png",
      flag: "https://media.api-sports.io/flags/br.svg"
    },
    {
      id: 72,
      name: "Série B",
      country: "Brazil",
      logo: "https://media.api-sports.io/football/leagues/72.png",
      flag: "https://media.api-sports.io/flags/br.svg"
    },
    // {
    //   id: 73,
    //   name: "Série C",
    //   country: "Brazil", 
    //   logo: "https://media.api-sports.io/football/leagues/73.png",
    //   flag: "https://media.api-sports.io/flags/br.svg"
    // },
    {
      id: 74,
      name: "Copa do Brasil",
      country: "Brazil",
      logo: "https://media.api-sports.io/football/leagues/74.png",
      flag: "https://media.api-sports.io/flags/br.svg"
    },
    // {
    //   id: 75,
    //   name: "Paulistão - Série A1",
    //   country: "Brazil",
    //   logo: "https://media.api-sports.io/football/leagues/75.png",
    //   flag: "https://media.api-sports.io/flags/br.svg"
    // },
    // {
    //   id: 76,
    //   name: "Carioca - Série A",
    //   country: "Brazil",
    //   logo: "https://media.api-sports.io/football/leagues/76.png",
    //   flag: "https://media.api-sports.io/flags/br.svg"
    // }
  ],

  // ALEMANHA
  germany: [
    {
      id: 78,
      name: "Bundesliga",
      country: "Germany",
      logo: "https://media.api-sports.io/football/leagues/78.png",
      flag: "https://media.api-sports.io/flags/de.svg"
    },
    {
      id: 79,
      name: "2. Bundesliga",
      country: "Germany", 
      logo: "https://media.api-sports.io/football/leagues/79.png",
      flag: "https://media.api-sports.io/flags/de.svg"
    },
    // {
    //   id: 80,
    //   name: "3. Liga",
    //   country: "Germany",
    //   logo: "https://media.api-sports.io/football/leagues/80.png",
    //   flag: "https://media.api-sports.io/flags/de.svg"
    // },
    {
      id: 81,
      name: "DFB Pokal",
      country: "Germany",
      logo: "https://media.api-sports.io/football/leagues/81.png",
      flag: "https://media.api-sports.io/flags/de.svg"
    },
    {
      id: 82, 
      name: "Super Cup",
      country: "Germany",
      logo: "https://media.api-sports.io/football/leagues/82.png",
      flag: "https://media.api-sports.io/flags/de.svg"
    }
  ],

  // PORTUGAL
  portugal: [
    {
      id: 94,
      name: "Primeira Liga",
      country: "Portugal",
      logo: "https://media.api-sports.io/football/leagues/94.png",
      flag: "https://media.api-sports.io/flags/pt.svg"
    },
    {
      id: 95,
      name: "Segunda Liga",
      country: "Portugal",
      logo: "https://media.api-sports.io/football/leagues/95.png",
      flag: "https://media.api-sports.io/flags/pt.svg"
    },
    {
      id: 96,
      name: "Taça de Portugal",
      country: "Portugal", 
      logo: "https://media.api-sports.io/football/leagues/96.png",
      flag: "https://media.api-sports.io/flags/pt.svg"
    },
    {
      id: 97,
      name: "Taça da Liga",
      country: "Portugal",
      logo: "https://media.api-sports.io/football/leagues/97.png",
      flag: "https://media.api-sports.io/flags/pt.svg"
    },
    {
      id: 98,
      name: "Super Cup",
      country: "Portugal",
      logo: "https://media.api-sports.io/football/leagues/98.png",
      flag: "https://media.api-sports.io/flags/pt.svg"
    }
  ],

  // COMPETIÇÕES INTERNACIONAIS - UEFA
  uefa: [
    {
      id: 2,
      name: "UEFA Champions League",
      country: "UEFA",
      logo: "https://media.api-sports.io/football/leagues/2.png",
      flag: ""
    },
    {
      id: 3,
      name: "UEFA Europa League", 
      country: "UEFA",
      logo: "https://media.api-sports.io/football/leagues/3.png",
      flag: ""
    },
    {
      id: 848,
      name: "UEFA Europa Conference League",
      country: "UEFA",
      logo: "https://media.api-sports.io/football/leagues/848.png", 
      flag: ""
    },
    {
      id: 4,
      name: "UEFA Nations League",
      country: "UEFA",
      logo: "https://media.api-sports.io/football/leagues/4.png",
      flag: ""
    },
    {
      id: 5,
      name: "UEFA Super Cup",
      country: "UEFA", 
      logo: "https://media.api-sports.io/football/leagues/5.png",
      flag: ""
    }
  ],

  // COMPETIÇÕES SUL-AMERICANAS - CONMEBOL
  conmebol: [
    {
      id: 13,
      name: "CONMEBOL Libertadores",
      country: "CONMEBOL",
      logo: "https://media.api-sports.io/football/leagues/13.png",
      flag: ""
    },
    {
      id: 11,
      name: "CONMEBOL Sudamericana",
      country: "CONMEBOL", 
      logo: "https://media.api-sports.io/football/leagues/11.png",
      flag: ""
    },
    {
      id: 12,
      name: "CONMEBOL Recopa Sudamericana",
      country: "CONMEBOL",
      logo: "https://media.api-sports.io/football/leagues/12.png",
      flag: ""
    }
  ],

  // COMPETIÇÕES MUNDIAIS - FIFA
  fifa: [
    // {
    //   id: 1,
    //   name: "FIFA World Cup", 
    //   country: "World",
    //   logo: "https://media.api-sports.io/football/leagues/1.png",
    //   flag: ""
    // },
    // {
    //   id: 15,
    //   name: "FIFA Club World Cup",
    //   country: "World",
    //   logo: "https://media.api-sports.io/football/leagues/15.png",
    //   flag: ""
    // },
    {
      id: 17,
      name: "FIFA Confederations Cup",
      country: "FIFA",
      logo: "https://media.api-sports.io/football/leagues/17.png",
      flag: ""
    }
  ],

//   // COMPETIÇÕES CONTINENTAIS - OUTRAS
//   continental: [
//     {
//       id: 16,
//       name: "CONCACAF Champions League",
//       country: "World",
//       logo: "https://media.api-sports.io/football/leagues/16.png",
//       flag: "https://media.api-sports.io/flags/concacaf.svg"
//     },
//     {
//       id: 18,
//       name: "CAF Champions League", 
//       country: "World",
//       logo: "https://media.api-sports.io/football/leagues/18.png",
//       flag: "https://media.api-sports.io/flags/caf.svg"
//     },
//     {
//       id: 19,
//       name: "AFC Champions League",
//       country: "World",
//       logo: "https://media.api-sports.io/football/leagues/19.png",
//       flag: "https://media.api-sports.io/flags/afc.svg"
//     },
//     {
//       id: 20,
//       name: "OFC Champions League",
//       country: "World",
//       logo: "https://media.api-sports.io/football/leagues/20.png", 
//       flag: "https://media.api-sports.io/flags/ofc.svg"
//     }
//   ]
};