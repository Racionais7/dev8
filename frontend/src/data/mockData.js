// Mock data para os slots - ORDENAÇÃO MANUAL FIXA (ESTRATÉGICA)
// A ordem abaixo é INTENCIONAL e parte da estratégia do produto
// NUNCA alterar a sequência - apenas pular jogos que não existem

export const providers = {
  pg: "PG",
  pp: "PP",
  amigo: "Amigo Gaming",
  microgaming: "Micro Gaming",
  fachai: "FA CHAI Gaming"
};

// Links de cadastro por plataforma
export const platformLinks = {
  MGJOGO: "http://mgjogo3.com/?ch=380001#/register",
  EGJOGO: "http://egjogo6.com/?ch=420001#/register",
  WGJOGO: "http://tttbot.wgjogo5.com/",
  YGJOGO: "http://ygjogo3.com/?ch=560001#/register",
  DGJOGO: "http://dgjogo4.com/?ch=760001#/register",
  FGJOGO: "http://fgjogo3.com/?ch=300001#/register",
  HGJOGO: "http://hgjogo5.com/?ch=170001#/register",
  AGJOGO: "http://tttbot.agjogo.com/",
  BGJOGO: "http://bot.bgjogo.com/"
};

// Imagem da plataforma
export const platformImage = "/assets/slots/platform-main.jpeg";

// ═══════════════════════════════════════════════════════════════════════════════
// PLATAFORMAS COM JOGOS ATUALIZADOS: AG, BG, WG
// Fabricantes: PG, PP, Amigo Gaming, Micro Gaming, FA CHAI Gaming
// ═══════════════════════════════════════════════════════════════════════════════

// PG SOFT - Ranking de 50 jogos para AG, BG, WG
const PG_NEW_ORDER = [
  "Fortune Tiger",
  "Fortune Rabbit",
  "Fortune Ox",
  "Dragão da Fortuna",
  "Pinata Wins",
  "Cobra da Fortuna",
  "Midas Fortune",
  "Wild Bounty Showdown",
  "Fortune Mouse",
  "Cash Mania",
  "Missão do Tesouro do Dragão",
  "Wild Bandito",
  "Wild Ape#3258",
  "Anubis Wrath",
  "Chicky Run",
  "Ganesha Gold",
  "Império Majestoso",
  "Dupla Fortuna",
  "Werewolf's Hunt",
  "Dragon Hatch",
  "Lucky Neko",
  "Treasures of Aztec",
  "Genie's 3 Wishes",
  "Frenesi do Ouro do Kraken",
  "Recompensa dos Grimm: Hansel e Gretel",
  "Futebol Fever",
  "The Great Icescape",
  "Cocktail Nights",
  "Realeza do Faraó",
  "Ultimate Striker",
  "Caos da Máfia",
  "Wings of Iguazu",
  "Riquezas Nocauteadoras",
  "Raider Jane's Crypt of Fortune",
  "Circus Delight",
  "Yakuza Honor",
  "Crypto Gold",
  "Queen of Bounty",
  "Lucky Piggy",
  "Mineiro Galáctico",
  "Asgardian Rising",
  "Chocolate do Amor",
  "Caishen Wins",
  "Fúria do Fim do Mundo",
  "Gemstones Gold",
  "Ganesha Fortune",
  "Shaolin Soccer",
  "Songkran Splash",
  "Ways of Qilin",
  "Zombie Outbreak"
];

// PG SOFT GAMES - Ranking de 50 jogos para AG, BG, WG
const pgNewGamesData = {
  "Fortune Tiger": {
    id: 1,
    name: "Fortune Tiger",
    image: "/images/pg-new/Fortune Tiger.png",
    bets: ["R$ 0,80", "R$ 1,20", "R$ 4,80"],
    basePayout: 77,
    category: "Fortune",
    provider: "pg"
  },
  "Fortune Rabbit": {
    id: 2,
    name: "Fortune Rabbit",
    image: "/images/pg-new/Fortune Rabbit.png",
    bets: ["R$ 0,50", "R$ 1,50", "R$ 2,50"],
    basePayout: 85,
    category: "Fortune",
    provider: "pg"
  },
  "Fortune Ox": {
    id: 3,
    name: "Fortune Ox",
    image: "/images/pg-new/Fortune Ox.png",
    bets: ["R$ 0,50", "R$ 1,50", "R$ 2,50"],
    basePayout: 82,
    category: "Fortune",
    provider: "pg"
  },
  "Dragão da Fortuna": {
    id: 4,
    name: "Dragão da Fortuna",
    image: "/images/pg-new/Dragão da Fortuna.png",
    bets: ["R$ 0,50", "R$ 3,50", "R$ 4,00"],
    basePayout: 88,
    category: "Fortune",
    provider: "pg"
  },
  "Pinata Wins": {
    id: 5,
    name: "Pinata Wins",
    image: "/images/pg-new/Pinata Wins.png",
    bets: ["R$ 0,50", "R$ 3,50", "R$ 4,00"],
    basePayout: 86,
    category: "Party",
    provider: "pg"
  },
  "Cobra da Fortuna": {
    id: 6,
    name: "Cobra da Fortuna",
    image: "/images/pg-new/Cobra da Fortuna.png",
    bets: ["R$ 0,40", "R$ 3,60", "R$ 4,00"],
    basePayout: 85,
    category: "Fortune",
    provider: "pg"
  },
  "Midas Fortune": {
    id: 7,
    name: "Midas Fortune",
    image: "/images/pg-new/Midas Fortune.png",
    bets: ["R$ 0,50", "R$ 2,50", "R$ 4,00"],
    basePayout: 86,
    category: "Mythical",
    provider: "pg"
  },
  "Wild Bounty Showdown": {
    id: 8,
    name: "Wild Bounty Showdown",
    image: "/images/pg-new/Wild Bounty Showdown.png",
    bets: ["R$ 0,40", "R$ 2,00", "R$ 4,00"],
    basePayout: 88,
    category: "Western",
    provider: "pg"
  },
  "Fortune Mouse": {
    id: 9,
    name: "Fortune Mouse",
    image: "/images/pg-new/Fortune Mouse.png",
    bets: ["R$ 0,50", "R$ 3,50", "R$ 4,00"],
    basePayout: 87,
    category: "Fortune",
    provider: "pg"
  },
  "Cash Mania": {
    id: 10,
    name: "Cash Mania",
    image: "/images/pg-new/Cash Mania.png",
    bets: ["R$ 0,50", "R$ 3,50", "R$ 4,00"],
    basePayout: 83,
    category: "Money",
    provider: "pg"
  },
  "Missão do Tesouro do Dragão": {
    id: 11,
    name: "Missão do Tesouro do Dragão",
    image: "/images/pg-new/Missão do Tesouro do Dragão.png",
    bets: ["R$ 0,50", "R$ 2,50", "R$ 4,00"],
    basePayout: 89,
    category: "Dragon",
    provider: "pg"
  },
  "Wild Bandito": {
    id: 12,
    name: "Wild Bandito",
    image: "/images/pg-new/Wild Bandito.png",
    bets: ["R$ 0,40", "R$ 3,60", "R$ 4,00"],
    basePayout: 77,
    category: "Western",
    provider: "pg"
  },
  "Wild Ape#3258": {
    id: 13,
    name: "Wild Ape#3258",
    image: "/images/pg-new/Wild Ape.png",
    bets: ["R$ 0,50", "R$ 2,00", "R$ 4,00"],
    basePayout: 84,
    category: "Animal",
    provider: "pg"
  },
  "Anubis Wrath": {
    id: 14,
    name: "Anubis Wrath",
    image: "/images/pg-new/Anubis Wrath.png",
    bets: ["R$ 0,50", "R$ 2,50", "R$ 4,00"],
    basePayout: 87,
    category: "Egyptian",
    provider: "pg"
  },
  "Chicky Run": {
    id: 15,
    name: "Chicky Run",
    image: "/images/pg-new/Chicky Run.png",
    bets: ["R$ 0,50", "R$ 2,00", "R$ 4,00"],
    basePayout: 82,
    category: "Animal",
    provider: "pg"
  },
  "Ganesha Gold": {
    id: 16,
    name: "Ganesha Gold",
    image: "/images/pg-new/Ganesha Gold.png",
    bets: ["R$ 0,40", "R$ 3,60", "R$ 4,00"],
    basePayout: 85,
    category: "Hindu",
    provider: "pg"
  },
  "Império Majestoso": {
    id: 17,
    name: "Império Majestoso",
    image: "/images/pg-new/Império Majestoso.png",
    bets: ["R$ 0,50", "R$ 3,00", "R$ 4,00"],
    basePayout: 86,
    category: "Kingdom",
    provider: "pg"
  },
  "Dupla Fortuna": {
    id: 18,
    name: "Dupla Fortuna",
    image: "/images/pg-new/Dupla Fortuna.png",
    bets: ["R$ 0,50", "R$ 1,50", "R$ 3,00"],
    basePayout: 84,
    category: "Fortune",
    provider: "pg"
  },
  "Werewolf's Hunt": {
    id: 19,
    name: "Werewolf's Hunt",
    image: "/images/pg-new/Werewolf's Hunt.png",
    bets: ["R$ 0,50", "R$ 2,50", "R$ 4,00"],
    basePayout: 88,
    category: "Horror",
    provider: "pg"
  },
  "Dragon Hatch": {
    id: 20,
    name: "Dragon Hatch",
    image: "/images/pg-new/Dragon Hatch.png",
    bets: ["R$ 0,50", "R$ 1,50", "R$ 2,50"],
    basePayout: 88,
    category: "Dragon",
    provider: "pg"
  },
  "Lucky Neko": {
    id: 21,
    name: "Lucky Neko",
    image: "/images/pg-new/Lucky Neko.png",
    bets: ["R$ 0,80", "R$ 1,20", "R$ 2,40"],
    basePayout: 79,
    category: "Asian",
    provider: "pg"
  },
  "Treasures of Aztec": {
    id: 22,
    name: "Treasures of Aztec",
    image: "/images/pg-new/Treasures of Aztec.png",
    bets: ["R$ 0,50", "R$ 2,00", "R$ 4,00"],
    basePayout: 87,
    category: "Adventure",
    provider: "pg"
  },
  "Genie's 3 Wishes": {
    id: 23,
    name: "Genie's 3 Wishes",
    image: "/images/pg-new/Genie's 3 Wishes.png",
    bets: ["R$ 0,50", "R$ 2,50", "R$ 4,00"],
    basePayout: 85,
    category: "Fantasy",
    provider: "pg"
  },
  "Frenesi do Ouro do Kraken": {
    id: 24,
    name: "Frenesi do Ouro do Kraken",
    image: "/images/pg-new/Frenesi do Ouro do Kraken.png",
    bets: ["R$ 0,50", "R$ 3,00", "R$ 4,00"],
    basePayout: 86,
    category: "Sea",
    provider: "pg"
  },
  "Recompensa dos Grimm: Hansel e Gretel": {
    id: 25,
    name: "Recompensa dos Grimm: Hansel e Gretel",
    image: "/images/pg-new/Recompensa dos Grimm Hansel e Gretel.png",
    bets: ["R$ 0,50", "R$ 2,00", "R$ 4,00"],
    basePayout: 84,
    category: "Fantasy",
    provider: "pg"
  },
  "Futebol Fever": {
    id: 26,
    name: "Futebol Fever",
    image: "/images/pg-new/Futebol Fever.png",
    bets: ["R$ 0,50", "R$ 2,50", "R$ 4,00"],
    basePayout: 83,
    category: "Sports",
    provider: "pg"
  },
  "The Great Icescape": {
    id: 27,
    name: "The Great Icescape",
    image: "/images/pg-new/The Great Icescape.png",
    bets: ["R$ 0,50", "R$ 2,00", "R$ 4,00"],
    basePayout: 85,
    category: "Adventure",
    provider: "pg"
  },
  "Cocktail Nights": {
    id: 28,
    name: "Cocktail Nights",
    image: "/images/pg-new/Cocktail Nights.png",
    bets: ["R$ 0,50", "R$ 2,00", "R$ 4,00"],
    basePayout: 83,
    category: "Party",
    provider: "pg"
  },
  "Realeza do Faraó": {
    id: 29,
    name: "Realeza do Faraó",
    image: "/images/pg-new/Realeza do Faraó.png",
    bets: ["R$ 0,50", "R$ 2,50", "R$ 4,00"],
    basePayout: 86,
    category: "Egyptian",
    provider: "pg"
  },
  "Ultimate Striker": {
    id: 30,
    name: "Ultimate Striker",
    image: "/images/pg-new/Ultimate Striker.png",
    bets: ["R$ 0,50", "R$ 2,00", "R$ 4,00"],
    basePayout: 84,
    category: "Sports",
    provider: "pg"
  },
  "Caos da Máfia": {
    id: 31,
    name: "Caos da Máfia",
    image: "/images/pg-new/Caos da Máfia.png",
    bets: ["R$ 0,50", "R$ 2,50", "R$ 4,00"],
    basePayout: 87,
    category: "Crime",
    provider: "pg"
  },
  "Wings of Iguazu": {
    id: 32,
    name: "Wings of Iguazu",
    image: "/images/pg-new/Wings of Iguazu.png",
    bets: ["R$ 0,50", "R$ 2,00", "R$ 4,00"],
    basePayout: 85,
    category: "Nature",
    provider: "pg"
  },
  "Riquezas Nocauteadoras": {
    id: 33,
    name: "Riquezas Nocauteadoras",
    image: "/images/pg-new/Riquezas Nocauteadoras.png",
    bets: ["R$ 0,50", "R$ 2,50", "R$ 4,00"],
    basePayout: 86,
    category: "Sports",
    provider: "pg"
  },
  "Raider Jane's Crypt of Fortune": {
    id: 34,
    name: "Raider Jane's Crypt of Fortune",
    image: "/images/pg-new/Raider Jane's Crypt of Fortune.png",
    bets: ["R$ 0,50", "R$ 2,00", "R$ 4,00"],
    basePayout: 88,
    category: "Adventure",
    provider: "pg"
  },
  "Circus Delight": {
    id: 35,
    name: "Circus Delight",
    image: "/images/pg-new/Circus Delight.png",
    bets: ["R$ 0,50", "R$ 2,50", "R$ 4,00"],
    basePayout: 84,
    category: "Fun",
    provider: "pg"
  },
  "Yakuza Honor": {
    id: 36,
    name: "Yakuza Honor",
    image: "/images/pg-new/Yakuza Honor.png",
    bets: ["R$ 0,50", "R$ 2,00", "R$ 4,00"],
    basePayout: 87,
    category: "Crime",
    provider: "pg"
  },
  "Crypto Gold": {
    id: 37,
    name: "Crypto Gold",
    image: "/images/pg-new/Crypto Gold.png",
    bets: ["R$ 0,50", "R$ 2,50", "R$ 4,00"],
    basePayout: 85,
    category: "Money",
    provider: "pg"
  },
  "Queen of Bounty": {
    id: 38,
    name: "Queen of Bounty",
    image: "/images/pg-new/Queen of Bounty.png",
    bets: ["R$ 0,50", "R$ 2,00", "R$ 4,00"],
    basePayout: 86,
    category: "Adventure",
    provider: "pg"
  },
  "Lucky Piggy": {
    id: 39,
    name: "Lucky Piggy",
    image: "/images/pg-new/Lucky Piggy.png",
    bets: ["R$ 0,50", "R$ 2,50", "R$ 4,00"],
    basePayout: 83,
    category: "Fortune",
    provider: "pg"
  },
  "Mineiro Galáctico": {
    id: 40,
    name: "Mineiro Galáctico",
    image: "/images/pg-new/Mineiro Galáctico.png",
    bets: ["R$ 0,50", "R$ 2,00", "R$ 4,00"],
    basePayout: 88,
    category: "Space",
    provider: "pg"
  },
  "Asgardian Rising": {
    id: 41,
    name: "Asgardian Rising",
    image: "/images/pg-new/Asgardian Rising.png",
    bets: ["R$ 0,50", "R$ 2,50", "R$ 4,00"],
    basePayout: 87,
    category: "Mythical",
    provider: "pg"
  },
  "Chocolate do Amor": {
    id: 42,
    name: "Chocolate do Amor",
    image: "/images/pg-new/Chocolate do Amor.png",
    bets: ["R$ 0,50", "R$ 2,00", "R$ 4,00"],
    basePayout: 84,
    category: "Romance",
    provider: "pg"
  },
  "Caishen Wins": {
    id: 43,
    name: "Caishen Wins",
    image: "/images/pg-new/Caishen Wins.png",
    bets: ["R$ 0,50", "R$ 2,50", "R$ 4,00"],
    basePayout: 86,
    category: "Fortune",
    provider: "pg"
  },
  "Fúria do Fim do Mundo": {
    id: 44,
    name: "Fúria do Fim do Mundo",
    image: "/images/pg-new/Fúria do Fim do Mundo.png",
    bets: ["R$ 0,50", "R$ 2,00", "R$ 4,00"],
    basePayout: 89,
    category: "Action",
    provider: "pg"
  },
  "Gemstones Gold": {
    id: 45,
    name: "Gemstones Gold",
    image: "/images/pg-new/Gemstones Gold.png",
    bets: ["R$ 0,50", "R$ 2,50", "R$ 4,00"],
    basePayout: 85,
    category: "Gems",
    provider: "pg"
  },
  "Ganesha Fortune": {
    id: 46,
    name: "Ganesha Fortune",
    image: "/images/pg-new/Ganesha Fortune.png",
    bets: ["R$ 0,50", "R$ 2,00", "R$ 4,00"],
    basePayout: 87,
    category: "Hindu",
    provider: "pg"
  },
  "Shaolin Soccer": {
    id: 47,
    name: "Shaolin Soccer",
    image: "/images/pg-new/Shaolin Soccer.png",
    bets: ["R$ 0,50", "R$ 2,50", "R$ 4,00"],
    basePayout: 84,
    category: "Sports",
    provider: "pg"
  },
  "Songkran Splash": {
    id: 48,
    name: "Songkran Splash",
    image: "/images/pg-new/Songkran Splash.png",
    bets: ["R$ 0,50", "R$ 2,00", "R$ 4,00"],
    basePayout: 86,
    category: "Party",
    provider: "pg"
  },
  "Ways of Qilin": {
    id: 49,
    name: "Ways of Qilin",
    image: "/images/pg-new/Ways of Qilin.png",
    bets: ["R$ 0,50", "R$ 2,50", "R$ 4,00"],
    basePayout: 88,
    category: "Mythical",
    provider: "pg"
  },
  "Zombie Outbreak": {
    id: 50,
    name: "Zombie Outbreak",
    image: "/images/pg-new/Zombie Outbreak.png",
    bets: ["R$ 0,50", "R$ 2,00", "R$ 4,00"],
    basePayout: 85,
    category: "Horror",
    provider: "pg"
  }
};

// ═══════════════════════════════════════════════════════════════════════════════
// PP (PRAGMATIC PLAY) - Novo ranking de 46 jogos para TODAS as plataformas
// ═══════════════════════════════════════════════════════════════════════════════

const PP_NEW_ORDER = [
  "Tigre Sortudo",
  "Big Bass Splash",
  "Grande Bass Reel Repetir",
  "Portões do Olimpo Super Dispersão",
  "Zeus vs Hades - Gods of War",
  "Sweet Bonanza Super Dispersão",
  "Tigre Sortudo 1000",
  "Sweet Rush Bonanza",
  "Gates of Olympus 1000",
  "Portas de Olympus",
  "Ronda Bónus de Boxe do Big Bass",
  "Vitória de Olympus",
  "Bonança do Bass Gigante 1000",
  "Sugar Rush 1000",
  "Macaco Sortudo",
  "Wild West Duels",
  "Apicultor",
  "Clube Tropicana – Hora Feliz",
  "Sweet Bonanza 1000",
  "Vitórias da Luz das Estrelas",
  "Big Bass Secrets of the Golden Lake",
  "Bigger Barn House Bonanza",
  "Joker's Jewels",
  "Escola Zumbi Megaways",
  "Mestre de Feitiços",
  "Bigger Bass Splash",
  "Caçador de Recompensas",
  "Centenas e Milhares",
  "Festa de Ouro 2 Depois do Expediente",
  "Tesouro da Sereia",
  "Big Bass Respingo 1000",
  "Big Bass Floats My Boat",
  "Estampida de Fogo 2",
  "Princesa da Luz Estelar Super Brilhante",
  "Portões do Hades",
  "3 Buzzing Wilds",
  "Código do Cairo",
  "Cão Sortudo",
  "Ratinho Sortudo",
  "Touro Sortudo",
  "Capitão Kraken Megaways",
  "Ouro Selvagem do Oeste: Recompensa Ardente",
  "Big Bass Halloween 2",
  "Portões do Olimpo 1000 Dados",
  "Casa da Lagosta",
  "Bonança de Gemas do Gênio",
  "Sweet Bonanza 1000 Dados",
  "Big Bass Mission Fishin'",
  "Queda de Dinossauro",
  "Rodadas Grátis de Lamber os Dedos"
];

// PP GAMES - 50 jogos para TODAS as plataformas
const ppNewGamesData = {
  "Tigre Sortudo": {
    id: 101,
    name: "Tigre Sortudo",
    image: "/images/pp-new/Tigre Sortudo.png",
    bets: ["R$ 0,20", "R$ 0,50", "R$ 1,00"],
    basePayout: 91,
    category: "Fortune",
    provider: "pp"
  },
  "Big Bass Splash": {
    id: 102,
    name: "Big Bass Splash",
    image: "/images/pp-new/Big Bass Splash.png",
    bets: ["R$ 0,20", "R$ 0,50", "R$ 1,00"],
    basePayout: 88,
    category: "Fishing",
    provider: "pp"
  },
  "Grande Bass Reel Repetir": {
    id: 103,
    name: "Grande Bass Reel Repetir",
    image: "/images/pp-new/Grande Bass Reel Repetir.png",
    bets: ["R$ 0,20", "R$ 0,50", "R$ 1,00"],
    basePayout: 87,
    category: "Fishing",
    provider: "pp"
  },
  "Portões do Olimpo Super Dispersão": {
    id: 104,
    name: "Portões do Olimpo Super Dispersão",
    image: "/images/pp-new/Portões do Olimpo Super Dispersão.png",
    bets: ["R$ 0,20", "R$ 0,50", "R$ 1,00"],
    basePayout: 93,
    category: "Greek",
    provider: "pp"
  },
  "Zeus vs Hades - Gods of War": {
    id: 105,
    name: "Zeus vs Hades - Gods of War",
    image: "/images/pp-new/Zeus vs Hades - Gods of War.png",
    bets: ["R$ 0,20", "R$ 0,50", "R$ 1,00"],
    basePayout: 91,
    category: "Greek",
    provider: "pp"
  },
  "Sweet Bonanza Super Dispersão": {
    id: 106,
    name: "Sweet Bonanza Super Dispersão",
    image: "/images/pp-new/Sweet Bonanza Super Dispersão.png",
    bets: ["R$ 0,20", "R$ 0,50", "R$ 1,00"],
    basePayout: 93,
    category: "Candy",
    provider: "pp"
  },
  "Tigre Sortudo 1000": {
    id: 107,
    name: "Tigre Sortudo 1000",
    image: "/images/pp-new/Tigre Sortudo 1000.png",
    bets: ["R$ 0,20", "R$ 0,50", "R$ 1,00"],
    basePayout: 92,
    category: "Fortune",
    provider: "pp"
  },
  "Sweet Rush Bonanza": {
    id: 108,
    name: "Sweet Rush Bonanza",
    image: "/images/pp-new/Sweet Rush Bonanza.png",
    bets: ["R$ 0,20", "R$ 0,50", "R$ 1,00"],
    basePayout: 87,
    category: "Sweet",
    provider: "pp"
  },
  "Gates of Olympus 1000": {
    id: 109,
    name: "Gates of Olympus 1000",
    image: "/images/pp-new/Gates of Olympus 1000.png",
    bets: ["R$ 0,20", "R$ 0,50", "R$ 1,00"],
    basePayout: 92,
    category: "Greek",
    provider: "pp"
  },
  "Portas de Olympus": {
    id: 110,
    name: "Portas de Olympus",
    image: "/images/pp-new/Portas de Olympus.png",
    bets: ["R$ 0,20", "R$ 0,50", "R$ 1,00"],
    basePayout: 89,
    category: "Greek",
    provider: "pp"
  },
  "Ronda Bónus de Boxe do Big Bass": {
    id: 111,
    name: "Ronda Bónus de Boxe do Big Bass",
    image: "/images/pp-new/Ronda Bónus de Boxe do Big Bass.png",
    bets: ["R$ 0,20", "R$ 0,50", "R$ 1,00"],
    basePayout: 88,
    category: "Fishing",
    provider: "pp"
  },
  "Vitória de Olympus": {
    id: 112,
    name: "Vitória de Olympus",
    image: "/images/pp-new/Vitória de Olympus.png",
    bets: ["R$ 0,20", "R$ 0,50", "R$ 1,00"],
    basePayout: 90,
    category: "Greek",
    provider: "pp"
  },
  "Bonança do Bass Gigante 1000": {
    id: 113,
    name: "Bonança do Bass Gigante 1000",
    image: "/images/pp-new/Bonança do Bass Gigante 1000.png",
    bets: ["R$ 0,20", "R$ 0,50", "R$ 1,00"],
    basePayout: 91,
    category: "Fishing",
    provider: "pp"
  },
  "Sugar Rush 1000": {
    id: 114,
    name: "Sugar Rush 1000",
    image: "/images/pp-new/Sugar Rush 1000.png",
    bets: ["R$ 0,20", "R$ 0,50", "R$ 1,00"],
    basePayout: 91,
    category: "Sweet",
    provider: "pp"
  },
  "Macaco Sortudo": {
    id: 115,
    name: "Macaco Sortudo",
    image: "/images/pp-new/Macaco Sortudo.png",
    bets: ["R$ 0,20", "R$ 0,50", "R$ 1,00"],
    basePayout: 86,
    category: "Fortune",
    provider: "pp"
  },
  "Wild West Duels": {
    id: 116,
    name: "Wild West Duels",
    image: "/images/pp-new/Wild West Duels.png",
    bets: ["R$ 0,20", "R$ 0,50", "R$ 1,00"],
    basePayout: 88,
    category: "Western",
    provider: "pp"
  },
  "Apicultor": {
    id: 117,
    name: "Apicultor",
    image: "/images/pp-new/Apicultor.png",
    bets: ["R$ 0,20", "R$ 0,50", "R$ 1,00"],
    basePayout: 85,
    category: "Nature",
    provider: "pp"
  },
  "Clube Tropicana – Hora Feliz": {
    id: 118,
    name: "Clube Tropicana – Hora Feliz",
    image: "/images/pp-new/Clube Tropicana – Hora Feliz.png",
    bets: ["R$ 0,20", "R$ 0,50", "R$ 1,00"],
    basePayout: 84,
    category: "Party",
    provider: "pp"
  },
  "Sweet Bonanza 1000": {
    id: 119,
    name: "Sweet Bonanza 1000",
    image: "/images/pp-new/Sweet Bonanza 1000.png",
    bets: ["R$ 0,20", "R$ 0,50", "R$ 1,00"],
    basePayout: 95,
    category: "Candy",
    provider: "pp"
  },
  "Vitórias da Luz das Estrelas": {
    id: 120,
    name: "Vitórias da Luz das Estrelas",
    image: "/images/pp-new/Vitórias da Luz das Estrelas.png",
    bets: ["R$ 0,20", "R$ 0,50", "R$ 1,00"],
    basePayout: 94,
    category: "Fantasy",
    provider: "pp"
  },
  "Big Bass Secrets of the Golden Lake": {
    id: 121,
    name: "Big Bass Secrets of the Golden Lake",
    image: "/images/pp-new/Big Bass Secrets of the Golden Lake.png",
    bets: ["R$ 0,20", "R$ 0,50", "R$ 1,00"],
    basePayout: 88,
    category: "Fishing",
    provider: "pp"
  },
  "Bigger Barn House Bonanza": {
    id: 122,
    name: "Bigger Barn House Bonanza",
    image: "/images/pp-new/Bigger Barn House Bonanza.png",
    bets: ["R$ 0,20", "R$ 0,50", "R$ 1,00"],
    basePayout: 85,
    category: "Farm",
    provider: "pp"
  },
  "Joker's Jewels": {
    id: 123,
    name: "Joker's Jewels",
    image: "/images/pp-new/Joker's Jewels.png",
    bets: ["R$ 0,20", "R$ 0,50", "R$ 1,00"],
    basePayout: 83,
    category: "Classic",
    provider: "pp"
  },
  "Escola Zumbi Megaways": {
    id: 124,
    name: "Escola Zumbi Megaways",
    image: "/images/pp-new/Escola Zumbi Megaways.png",
    bets: ["R$ 0,20", "R$ 0,50", "R$ 1,00"],
    basePayout: 86,
    category: "Horror",
    provider: "pp"
  },
  "Mestre de Feitiços": {
    id: 125,
    name: "Mestre de Feitiços",
    image: "/images/pp-new/Mestre_de_Feiticos.png",
    bets: ["R$ 0,20", "R$ 0,50", "R$ 1,00"],
    basePayout: 87,
    category: "Fantasy",
    provider: "pp"
  },
  "Bigger Bass Splash": {
    id: 126,
    name: "Bigger Bass Splash",
    image: "/images/pp-new/Bigger Bass Splash.png",
    bets: ["R$ 0,20", "R$ 0,50", "R$ 1,00"],
    basePayout: 87,
    category: "Fishing",
    provider: "pp"
  },
  "Caçador de Recompensas": {
    id: 127,
    name: "Caçador de Recompensas",
    image: "/images/pp-new/Caçador de Recompensas.png",
    bets: ["R$ 0,20", "R$ 0,50", "R$ 1,00"],
    basePayout: 86,
    category: "Western",
    provider: "pp"
  },
  "Centenas e Milhares": {
    id: 128,
    name: "Centenas e Milhares",
    image: "/images/pp-new/Centenas e Milhares.png",
    bets: ["R$ 0,20", "R$ 0,50", "R$ 1,00"],
    basePayout: 84,
    category: "Candy",
    provider: "pp"
  },
  "Festa de Ouro 2 Depois do Expediente": {
    id: 129,
    name: "Festa de Ouro 2 Depois do Expediente",
    image: "/images/pp-new/Festa de Ouro 2 Depois do Expediente.png",
    bets: ["R$ 0,20", "R$ 0,50", "R$ 1,00"],
    basePayout: 85,
    category: "Party",
    provider: "pp"
  },
  "Tesouro da Sereia": {
    id: 130,
    name: "Tesouro da Sereia",
    image: "/images/pp-new/Tesouro da Sereia.png",
    bets: ["R$ 0,20", "R$ 0,50", "R$ 1,00"],
    basePayout: 86,
    category: "Sea",
    provider: "pp"
  },
  "Big Bass Respingo 1000": {
    id: 131,
    name: "Big Bass Respingo 1000",
    image: "/images/pp-new/Big Bass Respingo 1000.png",
    bets: ["R$ 0,20", "R$ 0,50", "R$ 1,00"],
    basePayout: 90,
    category: "Fishing",
    provider: "pp"
  },
  "Big Bass Floats My Boat": {
    id: 132,
    name: "Big Bass Floats My Boat",
    image: "/images/pp-new/Big Bass Floats My Boat.png",
    bets: ["R$ 0,20", "R$ 0,50", "R$ 1,00"],
    basePayout: 87,
    category: "Fishing",
    provider: "pp"
  },
  "Estampida de Fogo 2": {
    id: 133,
    name: "Estampida de Fogo 2",
    image: "/images/pp-new/Estampida de Fogo 2.png",
    bets: ["R$ 0,20", "R$ 0,50", "R$ 1,00"],
    basePayout: 85,
    category: "Fire",
    provider: "pp"
  },
  "Princesa da Luz Estelar Super Brilhante": {
    id: 134,
    name: "Princesa da Luz Estelar Super Brilhante",
    image: "/images/pp-new/Princesa da Luz Estelar Super Brilhante.png",
    bets: ["R$ 0,20", "R$ 0,50", "R$ 1,00"],
    basePayout: 94,
    category: "Fantasy",
    provider: "pp"
  },
  "Portões do Hades": {
    id: 135,
    name: "Portões do Hades",
    image: "/images/pp-new/Portões do Hades.png",
    bets: ["R$ 0,20", "R$ 0,50", "R$ 1,00"],
    basePayout: 90,
    category: "Greek",
    provider: "pp"
  },
  "3 Buzzing Wilds": {
    id: 136,
    name: "3 Buzzing Wilds",
    image: "/images/pp-new/3 Buzzing Wilds.png",
    bets: ["R$ 0,20", "R$ 0,50", "R$ 1,00"],
    basePayout: 86,
    category: "Animal",
    provider: "pp"
  },
  "Código do Cairo": {
    id: 137,
    name: "Código do Cairo",
    image: "/images/pp-new/Código do Cairo.png",
    bets: ["R$ 0,20", "R$ 0,50", "R$ 1,00"],
    basePayout: 87,
    category: "Egyptian",
    provider: "pp"
  },
  "Cão Sortudo": {
    id: 138,
    name: "Cão Sortudo",
    image: "/images/pp-new/Cão Sortudo.png",
    bets: ["R$ 0,20", "R$ 0,50", "R$ 1,00"],
    basePayout: 84,
    category: "Fortune",
    provider: "pp"
  },
  "Ratinho Sortudo": {
    id: 139,
    name: "Ratinho Sortudo",
    image: "/images/pp-new/Ratinho Sortudo.png",
    bets: ["R$ 0,20", "R$ 0,50", "R$ 1,00"],
    basePayout: 84,
    category: "Fortune",
    provider: "pp"
  },
  "Touro Sortudo": {
    id: 140,
    name: "Touro Sortudo",
    image: "/images/pp-new/Touro Sortudo.png",
    bets: ["R$ 0,20", "R$ 0,50", "R$ 1,00"],
    basePayout: 85,
    category: "Fortune",
    provider: "pp"
  },
  "Capitão Kraken Megaways": {
    id: 141,
    name: "Capitão Kraken Megaways",
    image: "/images/pp-new/Capitão Kraken Megaways.png",
    bets: ["R$ 0,20", "R$ 0,50", "R$ 1,00"],
    basePayout: 88,
    category: "Sea",
    provider: "pp"
  },
  "Ouro Selvagem do Oeste: Recompensa Ardente": {
    id: 142,
    name: "Ouro Selvagem do Oeste: Recompensa Ardente",
    image: "/images/pp-new/Ouro Selvagem do Oeste Recompensa Ardente.png",
    bets: ["R$ 0,20", "R$ 0,50", "R$ 1,00"],
    basePayout: 89,
    category: "Western",
    provider: "pp"
  },
  "Big Bass Halloween 2": {
    id: 143,
    name: "Big Bass Halloween 2",
    image: "/images/pp-new/Big Bass Halloween 2.png",
    bets: ["R$ 0,20", "R$ 0,50", "R$ 1,00"],
    basePayout: 86,
    category: "Horror",
    provider: "pp"
  },
  "Portões do Olimpo 1000 Dados": {
    id: 144,
    name: "Portões do Olimpo 1000 Dados",
    image: "/images/pp-new/Portões do Olimpo 1000 Dados.png",
    bets: ["R$ 0,20", "R$ 0,50", "R$ 1,00"],
    basePayout: 91,
    category: "Greek",
    provider: "pp"
  },
  "Casa da Lagosta": {
    id: 145,
    name: "Casa da Lagosta",
    image: "/images/pp-new/Casa da Lagosta.png",
    bets: ["R$ 0,20", "R$ 0,50", "R$ 1,00"],
    basePayout: 85,
    category: "Sea",
    provider: "pp"
  },
  "Bonança de Gemas do Gênio": {
    id: 146,
    name: "Bonança de Gemas do Gênio",
    image: "/images/pp-new/Bonança de Gemas do Gênio.png",
    bets: ["R$ 0,20", "R$ 0,50", "R$ 1,00"],
    basePayout: 86,
    category: "Fantasy",
    provider: "pp"
  },
  "Sweet Bonanza 1000 Dados": {
    id: 147,
    name: "Sweet Bonanza 1000 Dados",
    image: "/images/pp-new/Sweet Bonanza 1000 Dados.png",
    bets: ["R$ 0,20", "R$ 0,50", "R$ 1,00"],
    basePayout: 94,
    category: "Candy",
    provider: "pp"
  },
  "Big Bass Mission Fishin'": {
    id: 148,
    name: "Big Bass Mission Fishin'",
    image: "/images/pp-new/Big Bass Mission Fishin.png",
    bets: ["R$ 0,20", "R$ 0,50", "R$ 1,00"],
    basePayout: 87,
    category: "Fishing",
    provider: "pp"
  },
  "Queda de Dinossauro": {
    id: 149,
    name: "Queda de Dinossauro",
    image: "/images/pp-new/Queda de Dinossauro.png",
    bets: ["R$ 0,20", "R$ 0,50", "R$ 1,00"],
    basePayout: 85,
    category: "Animal",
    provider: "pp"
  },
  "Rodadas Grátis de Lamber os Dedos": {
    id: 150,
    name: "Rodadas Grátis de Lamber os Dedos",
    image: "/images/pp-new/Rodadas Grátis de Lamber os Dedos.png",
    bets: ["R$ 0,20", "R$ 0,50", "R$ 1,00"],
    basePayout: 84,
    category: "Food",
    provider: "pp"
  }
};

// ═══════════════════════════════════════════════════════════════════════════════
// AMIGO GAMING - 50 jogos APENAS para AG, BG, WG
// ═══════════════════════════════════════════════════════════════════════════════

const AMIGO_ORDER = [
  "Rivais do Olimpo",
  "Sacos da Sorte",
  "3 Almas da Sorte",
  "Guardiãs da Lua",
  "Deuses da Areia",
  "Três Mortos",
  "3 Coroas de Energia",
  "3 Vulcões Espirituais",
  "Irmãos da Sorte",
  "3 Túmulos",
  "Coroa Flamejante Deluxe",
  "Invasão de Diamantes",
  "Pimenta Tripla",
  "Trovão e Amor",
  "5 Invasores de Fruta",
  "Frutas & Moedas",
  "Poder de Hades",
  "Moedas de Porquinho",
  "Invasores de Frutas",
  "3 Animais Totem",
  "Amuletos de Vodu",
  "Gatos Samurai",
  "Rapazes do Cubo",
  "Invasores de Dados",
  "Regal Fruits 1000",
  "Riquezas do Coinboy",
  "Moedas de Caveira",
  "Fúria Máxima",
  "1ª Liga de Críquete",
  "Bênção de Olimpo",
  "Macaco Amigo 2",
  "Mega Coroa",
  "Macaco Punk",
  "Mania de Presentes",
  "Frutas VIP",
  "Cidade do Crime",
  "Lâmpada dos Desejos",
  "Perseguição Galáctica",
  "Dragão do Destino",
  "Coringa Vampiro",
  "Coroa do Reino",
  "Livro de Zeus",
  "Bonança de Coelhos",
  "Três Faraós",
  "Dinheiro Fácil",
  "Clube de Dados",
  "Explosão de Frutas",
  "Senhorita Neko",
  "Fênix Ardente",
  "Três Coroas Congeladas"
];

const amigoGamesData = {
  "Rivais do Olimpo": {
    id: 201, name: "Rivais do Olimpo", image: "/images/amigo/1.png",
    bets: ["R$ 0,20", "R$ 0,50", "R$ 1,00"], basePayout: 89, category: "Greek", provider: "amigo"
  },
  "Sacos da Sorte": {
    id: 202, name: "Sacos da Sorte", image: "/images/amigo/2.png",
    bets: ["R$ 0,20", "R$ 0,50", "R$ 1,00"], basePayout: 87, category: "Fortune", provider: "amigo"
  },
  "3 Almas da Sorte": {
    id: 203, name: "3 Almas da Sorte", image: "/images/amigo/3.png",
    bets: ["R$ 0,20", "R$ 0,50", "R$ 1,00"], basePayout: 86, category: "Horror", provider: "amigo"
  },
  "Guardiãs da Lua": {
    id: 204, name: "Guardiãs da Lua", image: "/images/amigo/4.png",
    bets: ["R$ 0,20", "R$ 0,50", "R$ 1,00"], basePayout: 88, category: "Fantasy", provider: "amigo"
  },
  "Deuses da Areia": {
    id: 205, name: "Deuses da Areia", image: "/images/amigo/5.png",
    bets: ["R$ 0,20", "R$ 0,50", "R$ 1,00"], basePayout: 90, category: "Egyptian", provider: "amigo"
  },
  "Três Mortos": {
    id: 206, name: "Três Mortos", image: "/images/amigo/6.png",
    bets: ["R$ 0,20", "R$ 0,50", "R$ 1,00"], basePayout: 85, category: "Horror", provider: "amigo"
  },
  "3 Coroas de Energia": {
    id: 207, name: "3 Coroas de Energia", image: "/images/amigo/7.png",
    bets: ["R$ 0,20", "R$ 0,50", "R$ 1,00"], basePayout: 87, category: "Classic", provider: "amigo"
  },
  "3 Vulcões Espirituais": {
    id: 208, name: "3 Vulcões Espirituais", image: "/images/amigo/8.png",
    bets: ["R$ 0,20", "R$ 0,50", "R$ 1,00"], basePayout: 86, category: "Nature", provider: "amigo"
  },
  "Irmãos da Sorte": {
    id: 209, name: "Irmãos da Sorte", image: "/images/amigo/9.png",
    bets: ["R$ 0,20", "R$ 0,50", "R$ 1,00"], basePayout: 84, category: "Fortune", provider: "amigo"
  },
  "3 Túmulos": {
    id: 210, name: "3 Túmulos", image: "/images/amigo/10.png",
    bets: ["R$ 0,20", "R$ 0,50", "R$ 1,00"], basePayout: 88, category: "Egyptian", provider: "amigo"
  },
  "Coroa Flamejante Deluxe": {
    id: 211, name: "Coroa Flamejante Deluxe", image: "/images/amigo/11.png",
    bets: ["R$ 0,20", "R$ 0,50", "R$ 1,00"], basePayout: 89, category: "Fire", provider: "amigo"
  },
  "Invasão de Diamantes": {
    id: 212, name: "Invasão de Diamantes", image: "/images/amigo/12.png",
    bets: ["R$ 0,20", "R$ 0,50", "R$ 1,00"], basePayout: 87, category: "Gems", provider: "amigo"
  },
  "Pimenta Tripla": {
    id: 213, name: "Pimenta Tripla", image: "/images/amigo/13.png",
    bets: ["R$ 0,20", "R$ 0,50", "R$ 1,00"], basePayout: 85, category: "Food", provider: "amigo"
  },
  "Trovão e Amor": {
    id: 214, name: "Trovão e Amor", image: "/images/amigo/14.png",
    bets: ["R$ 0,20", "R$ 0,50", "R$ 1,00"], basePayout: 86, category: "Fantasy", provider: "amigo"
  },
  "5 Invasores de Fruta": {
    id: 215, name: "5 Invasores de Fruta", image: "/images/amigo/15.png",
    bets: ["R$ 0,20", "R$ 0,50", "R$ 1,00"], basePayout: 84, category: "Fruit", provider: "amigo"
  },
  "Frutas & Moedas": {
    id: 216, name: "Frutas & Moedas", image: "/images/amigo/16.png",
    bets: ["R$ 0,20", "R$ 0,50", "R$ 1,00"], basePayout: 83, category: "Fruit", provider: "amigo"
  },
  "Poder de Hades": {
    id: 217, name: "Poder de Hades", image: "/images/amigo/17.png",
    bets: ["R$ 0,20", "R$ 0,50", "R$ 1,00"], basePayout: 90, category: "Greek", provider: "amigo"
  },
  "Moedas de Porquinho": {
    id: 218, name: "Moedas de Porquinho", image: "/images/amigo/18.png",
    bets: ["R$ 0,20", "R$ 0,50", "R$ 1,00"], basePayout: 85, category: "Animal", provider: "amigo"
  },
  "Invasores de Frutas": {
    id: 219, name: "Invasores de Frutas", image: "/images/amigo/19.png",
    bets: ["R$ 0,20", "R$ 0,50", "R$ 1,00"], basePayout: 84, category: "Fruit", provider: "amigo"
  },
  "3 Animais Totem": {
    id: 220, name: "3 Animais Totem", image: "/images/amigo/20.png",
    bets: ["R$ 0,20", "R$ 0,50", "R$ 1,00"], basePayout: 87, category: "Animal", provider: "amigo"
  },
  "Amuletos de Vodu": {
    id: 221, name: "Amuletos de Vodu", image: "/images/amigo/21.png",
    bets: ["R$ 0,20", "R$ 0,50", "R$ 1,00"], basePayout: 86, category: "Horror", provider: "amigo"
  },
  "Gatos Samurai": {
    id: 222, name: "Gatos Samurai", image: "/images/amigo/22.png",
    bets: ["R$ 0,20", "R$ 0,50", "R$ 1,00"], basePayout: 88, category: "Asian", provider: "amigo"
  },
  "Rapazes do Cubo": {
    id: 223, name: "Rapazes do Cubo", image: "/images/amigo/23.png",
    bets: ["R$ 0,20", "R$ 0,50", "R$ 1,00"], basePayout: 83, category: "Fun", provider: "amigo"
  },
  "Invasores de Dados": {
    id: 224, name: "Invasores de Dados", image: "/images/amigo/24.png",
    bets: ["R$ 0,20", "R$ 0,50", "R$ 1,00"], basePayout: 85, category: "Classic", provider: "amigo"
  },
  "Regal Fruits 1000": {
    id: 225, name: "Regal Fruits 1000", image: "/images/amigo/25.png",
    bets: ["R$ 0,20", "R$ 0,50", "R$ 1,00"], basePayout: 91, category: "Fruit", provider: "amigo"
  },
  "Riquezas do Coinboy": {
    id: 226, name: "Riquezas do Coinboy", image: "/images/amigo/26.png",
    bets: ["R$ 0,20", "R$ 0,50", "R$ 1,00"], basePayout: 86, category: "Money", provider: "amigo"
  },
  "Moedas de Caveira": {
    id: 227, name: "Moedas de Caveira", image: "/images/amigo/27.png",
    bets: ["R$ 0,20", "R$ 0,50", "R$ 1,00"], basePayout: 85, category: "Horror", provider: "amigo"
  },
  "Fúria Máxima": {
    id: 228, name: "Fúria Máxima", image: "/images/amigo/28.png",
    bets: ["R$ 0,20", "R$ 0,50", "R$ 1,00"], basePayout: 89, category: "Action", provider: "amigo"
  },
  "1ª Liga de Críquete": {
    id: 229, name: "1ª Liga de Críquete", image: "/images/amigo/29.png",
    bets: ["R$ 0,20", "R$ 0,50", "R$ 1,00"], basePayout: 84, category: "Sports", provider: "amigo"
  },
  "Bênção de Olimpo": {
    id: 230, name: "Bênção de Olimpo", image: "/images/amigo/30.png",
    bets: ["R$ 0,20", "R$ 0,50", "R$ 1,00"], basePayout: 90, category: "Greek", provider: "amigo"
  },
  "Macaco Amigo 2": {
    id: 231, name: "Macaco Amigo 2", image: "/images/amigo/31.png",
    bets: ["R$ 0,20", "R$ 0,50", "R$ 1,00"], basePayout: 86, category: "Animal", provider: "amigo"
  },
  "Mega Coroa": {
    id: 232, name: "Mega Coroa", image: "/images/amigo/32.png",
    bets: ["R$ 0,20", "R$ 0,50", "R$ 1,00"], basePayout: 88, category: "Classic", provider: "amigo"
  },
  "Macaco Punk": {
    id: 233, name: "Macaco Punk", image: "/images/amigo/33.png",
    bets: ["R$ 0,20", "R$ 0,50", "R$ 1,00"], basePayout: 85, category: "Animal", provider: "amigo"
  },
  "Mania de Presentes": {
    id: 234, name: "Mania de Presentes", image: "/images/amigo/34.png",
    bets: ["R$ 0,20", "R$ 0,50", "R$ 1,00"], basePayout: 84, category: "Party", provider: "amigo"
  },
  "Frutas VIP": {
    id: 235, name: "Frutas VIP", image: "/images/amigo/35.png",
    bets: ["R$ 0,20", "R$ 0,50", "R$ 1,00"], basePayout: 83, category: "Fruit", provider: "amigo"
  },
  "Cidade do Crime": {
    id: 236, name: "Cidade do Crime", image: "/images/amigo/36.png",
    bets: ["R$ 0,20", "R$ 0,50", "R$ 1,00"], basePayout: 87, category: "Action", provider: "amigo"
  },
  "Lâmpada dos Desejos": {
    id: 237, name: "Lâmpada dos Desejos", image: "/images/amigo/37.png",
    bets: ["R$ 0,20", "R$ 0,50", "R$ 1,00"], basePayout: 88, category: "Fantasy", provider: "amigo"
  },
  "Perseguição Galáctica": {
    id: 238, name: "Perseguição Galáctica", image: "/images/amigo/38.png",
    bets: ["R$ 0,20", "R$ 0,50", "R$ 1,00"], basePayout: 86, category: "Space", provider: "amigo"
  },
  "Dragão do Destino": {
    id: 239, name: "Dragão do Destino", image: "/images/amigo/39.png",
    bets: ["R$ 0,20", "R$ 0,50", "R$ 1,00"], basePayout: 89, category: "Dragon", provider: "amigo"
  },
  "Coringa Vampiro": {
    id: 240, name: "Coringa Vampiro", image: "/images/amigo/40.png",
    bets: ["R$ 0,20", "R$ 0,50", "R$ 1,00"], basePayout: 85, category: "Horror", provider: "amigo"
  },
  "Coroa do Reino": {
    id: 241, name: "Coroa do Reino", image: "/images/amigo/41.png",
    bets: ["R$ 0,20", "R$ 0,50", "R$ 1,00"], basePayout: 87, category: "Kingdom", provider: "amigo"
  },
  "Livro de Zeus": {
    id: 242, name: "Livro de Zeus", image: "/images/amigo/42.png",
    bets: ["R$ 0,20", "R$ 0,50", "R$ 1,00"], basePayout: 90, category: "Greek", provider: "amigo"
  },
  "Bonança de Coelhos": {
    id: 243, name: "Bonança de Coelhos", image: "/images/amigo/43.png",
    bets: ["R$ 0,20", "R$ 0,50", "R$ 1,00"], basePayout: 86, category: "Animal", provider: "amigo"
  },
  "Três Faraós": {
    id: 244, name: "Três Faraós", image: "/images/amigo/44.png",
    bets: ["R$ 0,20", "R$ 0,50", "R$ 1,00"], basePayout: 88, category: "Egyptian", provider: "amigo"
  },
  "Dinheiro Fácil": {
    id: 245, name: "Dinheiro Fácil", image: "/images/amigo/45.png",
    bets: ["R$ 0,20", "R$ 0,50", "R$ 1,00"], basePayout: 84, category: "Money", provider: "amigo"
  },
  "Clube de Dados": {
    id: 246, name: "Clube de Dados", image: "/images/amigo/46.png",
    bets: ["R$ 0,20", "R$ 0,50", "R$ 1,00"], basePayout: 83, category: "Classic", provider: "amigo"
  },
  "Explosão de Frutas": {
    id: 247, name: "Explosão de Frutas", image: "/images/amigo/47.png",
    bets: ["R$ 0,20", "R$ 0,50", "R$ 1,00"], basePayout: 85, category: "Fruit", provider: "amigo"
  },
  "Senhorita Neko": {
    id: 248, name: "Senhorita Neko", image: "/images/amigo/48.png",
    bets: ["R$ 0,20", "R$ 0,50", "R$ 1,00"], basePayout: 86, category: "Asian", provider: "amigo"
  },
  "Fênix Ardente": {
    id: 249, name: "Fênix Ardente", image: "/images/amigo/49.png",
    bets: ["R$ 0,20", "R$ 0,50", "R$ 1,00"], basePayout: 88, category: "Fire", provider: "amigo"
  },
  "Três Coroas Congeladas": {
    id: 250, name: "Três Coroas Congeladas", image: "/images/amigo/50.png",
    bets: ["R$ 0,20", "R$ 0,50", "R$ 1,00"], basePayout: 87, category: "Ice", provider: "amigo"
  }
};

// ═══════════════════════════════════════════════════════════════════════════════
// MICRO GAMING - 49 jogos APENAS para AG, BG, WG
// ═══════════════════════════════════════════════════════════════════════════════

const MICROGAMING_ORDER = [
  "12 Caveiras dos Mortos",
  "Aves Abundantes",
  "Tesouros do Tigre",
  "3 Vulcões em Chamas Power Combo",
  "Relâmpago de Dinheiro Extremo",
  "Mania do Açúcar 8000",
  "Jackpot dos Gêmeos Sortudos",
  "Captura de Bass Super Up",
  "Combo de Pote Doce",
  "Gemas do Tesouro",
  "Andvari O Peixe Dourado",
  "Monkey Bonanza",
  "Diamante Diva Porco",
  "Pilhas de Tesouro Selvagens",
  "Três Riquezas Astecas Power Combo",
  "Bronco Big Bounty",
  "Trilha de Multiplicador do Joker Loko",
  "Dinheiro nos Carretéis",
  "Selvagens Africanos",
  "Ursos Fazem Banco! Power Combo",
  "Aventura Africana",
  "Fortunas do Gato Dourado",
  "Tesouro Estelar 7 Selvagens",
  "Fire and Roses : Joker",
  "Dados Dourados",
  "FlyX",
  "Bênção da Prosperidade",
  "Carnaval Festa",
  "Febre Noturna das Galinhas",
  "Ritmo do Dragão Link&Win",
  "Ouro maciço",
  "Riquezas Trancadas da Múmia",
  "Ancient Fortunes: Zeus",
  "Blitz de Ouro Extremo",
  "Explosão Frenética do Coringa",
  "3 Anjos Power Combo",
  "Inferno de Diamante",
  "Wildfire Wins",
  "Vá! Pescar: Enrolando Fortunas",
  "Fishin' Bigger Pots Of Gold™",
  "Reinado do Fogo",
  "Fogo Asgardiano",
  "Romance ao Luar - O Despertar",
  "Sweet Jar Combo de Natal",
  "Doce Corrida Selvagem 2",
  "Tesouros Perdidos de Hades",
  "Império Todo-Poderoso de Poseidon",
  "Queen of Alexandria™",
  "Hatching Gold! Rooster's Riches",
  "Curinga de Gelo"
];

const microgamingGamesData = {
  "12 Caveiras dos Mortos": {
    id: 301, name: "12 Caveiras dos Mortos", image: "/images/microgaming/1.png",
    bets: ["R$ 0,20", "R$ 0,50", "R$ 1,00"], basePayout: 89, category: "Horror", provider: "microgaming"
  },
  "Aves Abundantes": {
    id: 302, name: "Aves Abundantes", image: "/images/microgaming/2.png",
    bets: ["R$ 0,20", "R$ 0,50", "R$ 1,00"], basePayout: 84, category: "Animal", provider: "microgaming"
  },
  "Tesouros do Tigre": {
    id: 303, name: "Tesouros do Tigre", image: "/images/microgaming/3.png",
    bets: ["R$ 0,20", "R$ 0,50", "R$ 1,00"], basePayout: 88, category: "Asian", provider: "microgaming"
  },
  "3 Vulcões em Chamas Power Combo": {
    id: 304, name: "3 Vulcões em Chamas Power Combo", image: "/images/microgaming/4.png",
    bets: ["R$ 0,20", "R$ 0,50", "R$ 1,00"], basePayout: 88, category: "Fire", provider: "microgaming"
  },
  "Relâmpago de Dinheiro Extremo": {
    id: 305, name: "Relâmpago de Dinheiro Extremo", image: "/images/microgaming/5.png",
    bets: ["R$ 0,20", "R$ 0,50", "R$ 1,00"], basePayout: 90, category: "Money", provider: "microgaming"
  },
  "Mania do Açúcar 8000": {
    id: 306, name: "Mania do Açúcar 8000", image: "/images/microgaming/6.png",
    bets: ["R$ 0,20", "R$ 0,50", "R$ 1,00"], basePayout: 92, category: "Candy", provider: "microgaming"
  },
  "Jackpot dos Gêmeos Sortudos": {
    id: 307, name: "Jackpot dos Gêmeos Sortudos", image: "/images/microgaming/7.png",
    bets: ["R$ 0,20", "R$ 0,50", "R$ 1,00"], basePayout: 87, category: "Asian", provider: "microgaming"
  },
  "Captura de Bass Super Up": {
    id: 308, name: "Captura de Bass Super Up", image: "/images/microgaming/8.png",
    bets: ["R$ 0,20", "R$ 0,50", "R$ 1,00"], basePayout: 86, category: "Fishing", provider: "microgaming"
  },
  "Combo de Pote Doce": {
    id: 309, name: "Combo de Pote Doce", image: "/images/microgaming/9.png",
    bets: ["R$ 0,20", "R$ 0,50", "R$ 1,00"], basePayout: 87, category: "Candy", provider: "microgaming"
  },
  "Gemas do Tesouro": {
    id: 310, name: "Gemas do Tesouro", image: "/images/microgaming/10.png",
    bets: ["R$ 0,20", "R$ 0,50", "R$ 1,00"], basePayout: 85, category: "Gems", provider: "microgaming"
  },
  "Andvari O Peixe Dourado": {
    id: 311, name: "Andvari O Peixe Dourado", image: "/images/microgaming/11.png",
    bets: ["R$ 0,20", "R$ 0,50", "R$ 1,00"], basePayout: 86, category: "Sea", provider: "microgaming"
  },
  "Monkey Bonanza": {
    id: 312, name: "Monkey Bonanza", image: "/images/microgaming/12.png",
    bets: ["R$ 0,20", "R$ 0,50", "R$ 1,00"], basePayout: 86, category: "Animal", provider: "microgaming"
  },
  "Diamante Diva Porco": {
    id: 313, name: "Diamante Diva Porco", image: "/images/microgaming/13.png",
    bets: ["R$ 0,20", "R$ 0,50", "R$ 1,00"], basePayout: 86, category: "Animal", provider: "microgaming"
  },
  "Pilhas de Tesouro Selvagens": {
    id: 314, name: "Pilhas de Tesouro Selvagens", image: "/images/microgaming/14.png",
    bets: ["R$ 0,20", "R$ 0,50", "R$ 1,00"], basePayout: 87, category: "Adventure", provider: "microgaming"
  },
  "Três Riquezas Astecas Power Combo": {
    id: 315, name: "Três Riquezas Astecas Power Combo", image: "/images/microgaming/15.png",
    bets: ["R$ 0,20", "R$ 0,50", "R$ 1,00"], basePayout: 88, category: "Adventure", provider: "microgaming"
  },
  "Bronco Big Bounty": {
    id: 316, name: "Bronco Big Bounty", image: "/images/microgaming/16.png",
    bets: ["R$ 0,20", "R$ 0,50", "R$ 1,00"], basePayout: 87, category: "Western", provider: "microgaming"
  },
  "Trilha de Multiplicador do Joker Loko": {
    id: 317, name: "Trilha de Multiplicador do Joker Loko", image: "/images/microgaming/17.png",
    bets: ["R$ 0,20", "R$ 0,50", "R$ 1,00"], basePayout: 86, category: "Classic", provider: "microgaming"
  },
  "Dinheiro nos Carretéis": {
    id: 318, name: "Dinheiro nos Carretéis", image: "/images/microgaming/18.png",
    bets: ["R$ 0,20", "R$ 0,50", "R$ 1,00"], basePayout: 88, category: "Money", provider: "microgaming"
  },
  "Selvagens Africanos": {
    id: 319, name: "Selvagens Africanos", image: "/images/microgaming/19.png",
    bets: ["R$ 0,20", "R$ 0,50", "R$ 1,00"], basePayout: 85, category: "Adventure", provider: "microgaming"
  },
  "Ursos Fazem Banco! Power Combo": {
    id: 320, name: "Ursos Fazem Banco! Power Combo", image: "/images/microgaming/20.png",
    bets: ["R$ 0,20", "R$ 0,50", "R$ 1,00"], basePayout: 87, category: "Animal", provider: "microgaming"
  },
  "Aventura Africana": {
    id: 321, name: "Aventura Africana", image: "/images/microgaming/21.png",
    bets: ["R$ 0,20", "R$ 0,50", "R$ 1,00"], basePayout: 85, category: "Adventure", provider: "microgaming"
  },
  "Fortunas do Gato Dourado": {
    id: 322, name: "Fortunas do Gato Dourado", image: "/images/microgaming/22.png",
    bets: ["R$ 0,20", "R$ 0,50", "R$ 1,00"], basePayout: 87, category: "Asian", provider: "microgaming"
  },
  "Tesouro Estelar 7 Selvagens": {
    id: 323, name: "Tesouro Estelar 7 Selvagens", image: "/images/microgaming/23.png",
    bets: ["R$ 0,20", "R$ 0,50", "R$ 1,00"], basePayout: 87, category: "Space", provider: "microgaming"
  },
  "Fire and Roses : Joker": {
    id: 324, name: "Fire and Roses : Joker", image: "/images/microgaming/24.png",
    bets: ["R$ 0,20", "R$ 0,50", "R$ 1,00"], basePayout: 86, category: "Classic", provider: "microgaming"
  },
  "Dados Dourados": {
    id: 325, name: "Dados Dourados", image: "/images/microgaming/25.png",
    bets: ["R$ 0,20", "R$ 0,50", "R$ 1,00"], basePayout: 83, category: "Classic", provider: "microgaming"
  },
  "FlyX": {
    id: 326, name: "FlyX", image: "/images/microgaming/26.png",
    bets: ["R$ 0,20", "R$ 0,50", "R$ 1,00"], basePayout: 90, category: "Crash", provider: "microgaming"
  },
  "Bênção da Prosperidade": {
    id: 327, name: "Bênção da Prosperidade", image: "/images/microgaming/27.png",
    bets: ["R$ 0,20", "R$ 0,50", "R$ 1,00"], basePayout: 88, category: "Asian", provider: "microgaming"
  },
  "Carnaval Festa": {
    id: 328, name: "Carnaval Festa", image: "/images/microgaming/28.png",
    bets: ["R$ 0,20", "R$ 0,50", "R$ 1,00"], basePayout: 85, category: "Party", provider: "microgaming"
  },
  "Febre Noturna das Galinhas": {
    id: 329, name: "Febre Noturna das Galinhas", image: "/images/microgaming/29.png",
    bets: ["R$ 0,20", "R$ 0,50", "R$ 1,00"], basePayout: 85, category: "Animal", provider: "microgaming"
  },
  "Ritmo do Dragão Link&Win": {
    id: 330, name: "Ritmo do Dragão Link&Win", image: "/images/microgaming/30.png",
    bets: ["R$ 0,20", "R$ 0,50", "R$ 1,00"], basePayout: 88, category: "Dragon", provider: "microgaming"
  },
  "Ouro maciço": {
    id: 331, name: "Ouro maciço", image: "/images/microgaming/31.png",
    bets: ["R$ 0,20", "R$ 0,50", "R$ 1,00"], basePayout: 85, category: "Gold", provider: "microgaming"
  },
  "Riquezas Trancadas da Múmia": {
    id: 332, name: "Riquezas Trancadas da Múmia", image: "/images/microgaming/32.png",
    bets: ["R$ 0,20", "R$ 0,50", "R$ 1,00"], basePayout: 87, category: "Egyptian", provider: "microgaming"
  },
  "Ancient Fortunes: Zeus": {
    id: 333, name: "Ancient Fortunes: Zeus", image: "/images/microgaming/33.png",
    bets: ["R$ 0,20", "R$ 0,50", "R$ 1,00"], basePayout: 91, category: "Greek", provider: "microgaming"
  },
  "Blitz de Ouro Extremo": {
    id: 334, name: "Blitz de Ouro Extremo", image: "/images/microgaming/34.png",
    bets: ["R$ 0,20", "R$ 0,50", "R$ 1,00"], basePayout: 90, category: "Gold", provider: "microgaming"
  },
  "Explosão Frenética do Coringa": {
    id: 335, name: "Explosão Frenética do Coringa", image: "/images/microgaming/35.png",
    bets: ["R$ 0,20", "R$ 0,50", "R$ 1,00"], basePayout: 87, category: "Classic", provider: "microgaming"
  },
  "3 Anjos Power Combo": {
    id: 336, name: "3 Anjos Power Combo", image: "/images/microgaming/36.png",
    bets: ["R$ 0,20", "R$ 0,50", "R$ 1,00"], basePayout: 87, category: "Fantasy", provider: "microgaming"
  },
  "Inferno de Diamante": {
    id: 337, name: "Inferno de Diamante", image: "/images/microgaming/37.png",
    bets: ["R$ 0,20", "R$ 0,50", "R$ 1,00"], basePayout: 88, category: "Gems", provider: "microgaming"
  },
  "Wildfire Wins": {
    id: 338, name: "Wildfire Wins", image: "/images/microgaming/38.png",
    bets: ["R$ 0,20", "R$ 0,50", "R$ 1,00"], basePayout: 86, category: "Fire", provider: "microgaming"
  },
  "Vá! Pescar: Enrolando Fortunas": {
    id: 339, name: "Vá! Pescar: Enrolando Fortunas", image: "/images/microgaming/39.png",
    bets: ["R$ 0,20", "R$ 0,50", "R$ 1,00"], basePayout: 86, category: "Fishing", provider: "microgaming"
  },
  "Fishin' Bigger Pots Of Gold™": {
    id: 340, name: "Fishin' Bigger Pots Of Gold™", image: "/images/microgaming/40.png",
    bets: ["R$ 0,20", "R$ 0,50", "R$ 1,00"], basePayout: 88, category: "Fishing", provider: "microgaming"
  },
  "Reinado do Fogo": {
    id: 341, name: "Reinado do Fogo", image: "/images/microgaming/41.png",
    bets: ["R$ 0,20", "R$ 0,50", "R$ 1,00"], basePayout: 88, category: "Dragon", provider: "microgaming"
  },
  "Fogo Asgardiano": {
    id: 342, name: "Fogo Asgardiano", image: "/images/microgaming/42.png",
    bets: ["R$ 0,20", "R$ 0,50", "R$ 1,00"], basePayout: 89, category: "Norse", provider: "microgaming"
  },
  "Romance ao Luar - O Despertar": {
    id: 343, name: "Romance ao Luar - O Despertar", image: "/images/microgaming/43.png",
    bets: ["R$ 0,20", "R$ 0,50", "R$ 1,00"], basePayout: 86, category: "Fantasy", provider: "microgaming"
  },
  "Sweet Jar Combo de Natal": {
    id: 344, name: "Sweet Jar Combo de Natal", image: "/images/microgaming/44.png",
    bets: ["R$ 0,20", "R$ 0,50", "R$ 1,00"], basePayout: 84, category: "Holiday", provider: "microgaming"
  },
  "Doce Corrida Selvagem 2": {
    id: 345, name: "Doce Corrida Selvagem 2", image: "/images/microgaming/45.png",
    bets: ["R$ 0,20", "R$ 0,50", "R$ 1,00"], basePayout: 89, category: "Candy", provider: "microgaming"
  },
  "Tesouros Perdidos de Hades": {
    id: 346, name: "Tesouros Perdidos de Hades", image: "/images/microgaming/46.png",
    bets: ["R$ 0,20", "R$ 0,50", "R$ 1,00"], basePayout: 90, category: "Greek", provider: "microgaming"
  },
  "Império Todo-Poderoso de Poseidon": {
    id: 347, name: "Império Todo-Poderoso de Poseidon", image: "/images/microgaming/47.png",
    bets: ["R$ 0,20", "R$ 0,50", "R$ 1,00"], basePayout: 91, category: "Greek", provider: "microgaming"
  },
  "Queen of Alexandria™": {
    id: 348, name: "Queen of Alexandria™", image: "/images/microgaming/48.png",
    bets: ["R$ 0,20", "R$ 0,50", "R$ 1,00"], basePayout: 89, category: "Egyptian", provider: "microgaming"
  },
  "Hatching Gold! Rooster's Riches": {
    id: 349, name: "Hatching Gold! Rooster's Riches", image: "/images/microgaming/49.png",
    bets: ["R$ 0,20", "R$ 0,50", "R$ 1,00"], basePayout: 86, category: "Animal", provider: "microgaming"
  },
  "Curinga de Gelo": {
    id: 350, name: "Curinga de Gelo", image: "/images/microgaming/50.png",
    bets: ["R$ 0,20", "R$ 0,50", "R$ 1,00"], basePayout: 84, category: "Classic", provider: "microgaming"
  }
};

// ═══════════════════════════════════════════════════════════════════════════════
// FA CHAI GAMING - 50 jogos APENAS para AG, BG, WG
// ═══════════════════════════════════════════════════════════════════════════════

const FACHAI_ORDER = [
  "Ovelha da Fortuna 3x3",
  "Gladiatriz de Roma",
  "Segredos da tumba",
  "Ganar en Póker",
  "Selva Bang Bang",
  "Açúcar Bang Bang 2",
  "Caminhos do Búfalo",
  "Espada do Rei",
  "Febre da Fênix",
  "Diosa de la Fortuna",
  "Tesouros de Odin",
  "Chilihuahua",
  "Koi pula sobre o dinheiro",
  "Os três porquinhos",
  "Poker Vitória 2",
  "Bonança Egípcia",
  "Explosão de doces",
  "Riquezas del Boxeo",
  "Gato da Sorte",
  "Rainha do Inca",
  "Busca por Tesouros",
  "Véspera de Ano Novo 2",
  "Dragão da Fortuna",
  "Deus Cibernético da Fortuna",
  "Fusão e Magia",
  "FORTUNAS DA SORTE 3x3",
  "Ano Novo Chinês Moreways",
  "Máquina de Dinheiro da Catla",
  "Legend of Inca",
  "Zeus",
  "Lâmpada mágica",
  "Caça ao tesouro do mar gigante",
  "SUGAR BANG BANG PLUS",
  "Night Market 2",
  "Bisão louco",
  "Ovo de Ouro da Sorte",
  "Super Elementos",
  "Magnata rico",
  "Fortunas da Sorte",
  "Clique para enviar",
  "Gladiadores",
  "Impulsor de moeda de circo",
  "Caça ao tesouro",
  "Mines",
  "Feijões Mágicos",
  "DJ BOOM BOOM",
  "Mercado Noturno",
  "Gato Musculoso da Fortuna",
  "Robin Hood",
  "Véspera de Ano Novo"
];

const fachaiGamesData = {
  "Ovelha da Fortuna 3x3": {
    id: 401, name: "Ovelha da Fortuna 3x3", image: "/images/fachai/1.png",
    bets: ["R$ 0,20", "R$ 0,50", "R$ 1,00"], basePayout: 87, category: "Fortune", provider: "fachai"
  },
  "Gladiatriz de Roma": {
    id: 402, name: "Gladiatriz de Roma", image: "/images/fachai/2.png",
    bets: ["R$ 0,20", "R$ 0,50", "R$ 1,00"], basePayout: 88, category: "Roman", provider: "fachai"
  },
  "Segredos da tumba": {
    id: 403, name: "Segredos da tumba", image: "/images/fachai/3.png",
    bets: ["R$ 0,20", "R$ 0,50", "R$ 1,00"], basePayout: 86, category: "Egyptian", provider: "fachai"
  },
  "Ganar en Póker": {
    id: 404, name: "Ganar en Póker", image: "/images/fachai/4.png",
    bets: ["R$ 0,20", "R$ 0,50", "R$ 1,00"], basePayout: 85, category: "Cards", provider: "fachai"
  },
  "Selva Bang Bang": {
    id: 405, name: "Selva Bang Bang", image: "/images/fachai/5.png",
    bets: ["R$ 0,20", "R$ 0,50", "R$ 1,00"], basePayout: 87, category: "Adventure", provider: "fachai"
  },
  "Açúcar Bang Bang 2": {
    id: 406, name: "Açúcar Bang Bang 2", image: "/images/fachai/6.png",
    bets: ["R$ 0,20", "R$ 0,50", "R$ 1,00"], basePayout: 89, category: "Candy", provider: "fachai"
  },
  "Caminhos do Búfalo": {
    id: 407, name: "Caminhos do Búfalo", image: "/images/fachai/7.png",
    bets: ["R$ 0,20", "R$ 0,50", "R$ 1,00"], basePayout: 88, category: "Animal", provider: "fachai"
  },
  "Espada do Rei": {
    id: 408, name: "Espada do Rei", image: "/images/fachai/8.png",
    bets: ["R$ 0,20", "R$ 0,50", "R$ 1,00"], basePayout: 86, category: "Kingdom", provider: "fachai"
  },
  "Febre da Fênix": {
    id: 409, name: "Febre da Fênix", image: "/images/fachai/9.png",
    bets: ["R$ 0,20", "R$ 0,50", "R$ 1,00"], basePayout: 90, category: "Fire", provider: "fachai"
  },
  "Diosa de la Fortuna": {
    id: 410, name: "Diosa de la Fortuna", image: "/images/fachai/10.png",
    bets: ["R$ 0,20", "R$ 0,50", "R$ 1,00"], basePayout: 89, category: "Fortune", provider: "fachai"
  },
  "Tesouros de Odin": {
    id: 411, name: "Tesouros de Odin", image: "/images/fachai/11.png",
    bets: ["R$ 0,20", "R$ 0,50", "R$ 1,00"], basePayout: 88, category: "Norse", provider: "fachai"
  },
  "Chilihuahua": {
    id: 412, name: "Chilihuahua", image: "/images/fachai/12.png",
    bets: ["R$ 0,20", "R$ 0,50", "R$ 1,00"], basePayout: 84, category: "Animal", provider: "fachai"
  },
  "Koi pula sobre o dinheiro": {
    id: 413, name: "Koi pula sobre o dinheiro", image: "/images/fachai/13.png",
    bets: ["R$ 0,20", "R$ 0,50", "R$ 1,00"], basePayout: 87, category: "Asian", provider: "fachai"
  },
  "Os três porquinhos": {
    id: 414, name: "Os três porquinhos", image: "/images/fachai/14.png",
    bets: ["R$ 0,20", "R$ 0,50", "R$ 1,00"], basePayout: 85, category: "Fantasy", provider: "fachai"
  },
  "Poker Vitória 2": {
    id: 415, name: "Poker Vitória 2", image: "/images/fachai/15.png",
    bets: ["R$ 0,20", "R$ 0,50", "R$ 1,00"], basePayout: 86, category: "Cards", provider: "fachai"
  },
  "Bonança Egípcia": {
    id: 416, name: "Bonança Egípcia", image: "/images/fachai/16.png",
    bets: ["R$ 0,20", "R$ 0,50", "R$ 1,00"], basePayout: 89, category: "Egyptian", provider: "fachai"
  },
  "Explosão de doces": {
    id: 417, name: "Explosão de doces", image: "/images/fachai/17.png",
    bets: ["R$ 0,20", "R$ 0,50", "R$ 1,00"], basePayout: 85, category: "Candy", provider: "fachai"
  },
  "Riquezas del Boxeo": {
    id: 418, name: "Riquezas del Boxeo", image: "/images/fachai/18.png",
    bets: ["R$ 0,20", "R$ 0,50", "R$ 1,00"], basePayout: 87, category: "Sports", provider: "fachai"
  },
  "Gato da Sorte": {
    id: 419, name: "Gato da Sorte", image: "/images/fachai/19.png",
    bets: ["R$ 0,20", "R$ 0,50", "R$ 1,00"], basePayout: 88, category: "Asian", provider: "fachai"
  },
  "Rainha do Inca": {
    id: 420, name: "Rainha do Inca", image: "/images/fachai/20.png",
    bets: ["R$ 0,20", "R$ 0,50", "R$ 1,00"], basePayout: 86, category: "Adventure", provider: "fachai"
  },
  "Busca por Tesouros": {
    id: 421, name: "Busca por Tesouros", image: "/images/fachai/21.png",
    bets: ["R$ 0,20", "R$ 0,50", "R$ 1,00"], basePayout: 87, category: "Adventure", provider: "fachai"
  },
  "Véspera de Ano Novo 2": {
    id: 422, name: "Véspera de Ano Novo 2", image: "/images/fachai/22.png",
    bets: ["R$ 0,20", "R$ 0,50", "R$ 1,00"], basePayout: 85, category: "Holiday", provider: "fachai"
  },
  "Dragão da Fortuna": {
    id: 423, name: "Dragão da Fortuna", image: "/images/fachai/23.png",
    bets: ["R$ 0,20", "R$ 0,50", "R$ 1,00"], basePayout: 90, category: "Dragon", provider: "fachai"
  },
  "Deus Cibernético da Fortuna": {
    id: 424, name: "Deus Cibernético da Fortuna", image: "/images/fachai/24.png",
    bets: ["R$ 0,20", "R$ 0,50", "R$ 1,00"], basePayout: 88, category: "Cyber", provider: "fachai"
  },
  "Fusão e Magia": {
    id: 425, name: "Fusão e Magia", image: "/images/fachai/25.png",
    bets: ["R$ 0,20", "R$ 0,50", "R$ 1,00"], basePayout: 87, category: "Fantasy", provider: "fachai"
  },
  "FORTUNAS DA SORTE 3x3": {
    id: 426, name: "FORTUNAS DA SORTE 3x3", image: "/images/fachai/26.png",
    bets: ["R$ 0,20", "R$ 0,50", "R$ 1,00"], basePayout: 86, category: "Fortune", provider: "fachai"
  },
  "Ano Novo Chinês Moreways": {
    id: 427, name: "Ano Novo Chinês Moreways", image: "/images/fachai/27.png",
    bets: ["R$ 0,20", "R$ 0,50", "R$ 1,00"], basePayout: 89, category: "Asian", provider: "fachai"
  },
  "Máquina de Dinheiro da Catla": {
    id: 428, name: "Máquina de Dinheiro da Catla", image: "/images/fachai/28.png",
    bets: ["R$ 0,20", "R$ 0,50", "R$ 1,00"], basePayout: 85, category: "Money", provider: "fachai"
  },
  "Legend of Inca": {
    id: 429, name: "Legend of Inca", image: "/images/fachai/29.png",
    bets: ["R$ 0,20", "R$ 0,50", "R$ 1,00"], basePayout: 88, category: "Adventure", provider: "fachai"
  },
  "Zeus": {
    id: 430, name: "Zeus", image: "/images/fachai/30.png",
    bets: ["R$ 0,20", "R$ 0,50", "R$ 1,00"], basePayout: 91, category: "Greek", provider: "fachai"
  },
  "Lâmpada mágica": {
    id: 431, name: "Lâmpada mágica", image: "/images/fachai/31.png",
    bets: ["R$ 0,20", "R$ 0,50", "R$ 1,00"], basePayout: 87, category: "Fantasy", provider: "fachai"
  },
  "Caça ao tesouro do mar gigante": {
    id: 432, name: "Caça ao tesouro do mar gigante", image: "/images/fachai/32.png",
    bets: ["R$ 0,20", "R$ 0,50", "R$ 1,00"], basePayout: 86, category: "Sea", provider: "fachai"
  },
  "SUGAR BANG BANG PLUS": {
    id: 433, name: "SUGAR BANG BANG PLUS", image: "/images/fachai/33.png",
    bets: ["R$ 0,20", "R$ 0,50", "R$ 1,00"], basePayout: 88, category: "Candy", provider: "fachai"
  },
  "Night Market 2": {
    id: 434, name: "Night Market 2", image: "/images/fachai/34.png",
    bets: ["R$ 0,20", "R$ 0,50", "R$ 1,00"], basePayout: 85, category: "Asian", provider: "fachai"
  },
  "Bisão louco": {
    id: 435, name: "Bisão louco", image: "/images/fachai/35.png",
    bets: ["R$ 0,20", "R$ 0,50", "R$ 1,00"], basePayout: 87, category: "Animal", provider: "fachai"
  },
  "Ovo de Ouro da Sorte": {
    id: 436, name: "Ovo de Ouro da Sorte", image: "/images/fachai/36.png",
    bets: ["R$ 0,20", "R$ 0,50", "R$ 1,00"], basePayout: 86, category: "Fortune", provider: "fachai"
  },
  "Super Elementos": {
    id: 437, name: "Super Elementos", image: "/images/fachai/37.png",
    bets: ["R$ 0,20", "R$ 0,50", "R$ 1,00"], basePayout: 89, category: "Fantasy", provider: "fachai"
  },
  "Magnata rico": {
    id: 438, name: "Magnata rico", image: "/images/fachai/38.png",
    bets: ["R$ 0,20", "R$ 0,50", "R$ 1,00"], basePayout: 88, category: "Money", provider: "fachai"
  },
  "Fortunas da Sorte": {
    id: 439, name: "Fortunas da Sorte", image: "/images/fachai/39.png",
    bets: ["R$ 0,20", "R$ 0,50", "R$ 1,00"], basePayout: 87, category: "Fortune", provider: "fachai"
  },
  "Clique para enviar": {
    id: 440, name: "Clique para enviar", image: "/images/fachai/40.png",
    bets: ["R$ 0,20", "R$ 0,50", "R$ 1,00"], basePayout: 84, category: "Fun", provider: "fachai"
  },
  "Gladiadores": {
    id: 441, name: "Gladiadores", image: "/images/fachai/41.png",
    bets: ["R$ 0,20", "R$ 0,50", "R$ 1,00"], basePayout: 88, category: "Roman", provider: "fachai"
  },
  "Impulsor de moeda de circo": {
    id: 442, name: "Impulsor de moeda de circo", image: "/images/fachai/42.png",
    bets: ["R$ 0,20", "R$ 0,50", "R$ 1,00"], basePayout: 85, category: "Party", provider: "fachai"
  },
  "Caça ao tesouro": {
    id: 443, name: "Caça ao tesouro", image: "/images/fachai/43.png",
    bets: ["R$ 0,20", "R$ 0,50", "R$ 1,00"], basePayout: 86, category: "Adventure", provider: "fachai"
  },
  "Mines": {
    id: 444, name: "Mines", image: "/images/fachai/44.png",
    bets: ["R$ 0,20", "R$ 0,50", "R$ 1,00"], basePayout: 90, category: "Crash", provider: "fachai"
  },
  "Feijões Mágicos": {
    id: 445, name: "Feijões Mágicos", image: "/images/fachai/45.png",
    bets: ["R$ 0,20", "R$ 0,50", "R$ 1,00"], basePayout: 85, category: "Fantasy", provider: "fachai"
  },
  "DJ BOOM BOOM": {
    id: 446, name: "DJ BOOM BOOM", image: "/images/fachai/46.png",
    bets: ["R$ 0,20", "R$ 0,50", "R$ 1,00"], basePayout: 87, category: "Party", provider: "fachai"
  },
  "Mercado Noturno": {
    id: 447, name: "Mercado Noturno", image: "/images/fachai/47.png",
    bets: ["R$ 0,20", "R$ 0,50", "R$ 1,00"], basePayout: 84, category: "Asian", provider: "fachai"
  },
  "Gato Musculoso da Fortuna": {
    id: 448, name: "Gato Musculoso da Fortuna", image: "/images/fachai/48.png",
    bets: ["R$ 0,20", "R$ 0,50", "R$ 1,00"], basePayout: 86, category: "Animal", provider: "fachai"
  },
  "Robin Hood": {
    id: 449, name: "Robin Hood", image: "/images/fachai/49.png",
    bets: ["R$ 0,20", "R$ 0,50", "R$ 1,00"], basePayout: 88, category: "Adventure", provider: "fachai"
  },
  "Véspera de Ano Novo": {
    id: 450, name: "Véspera de Ano Novo", image: "/images/fachai/50.png",
    bets: ["R$ 0,20", "R$ 0,50", "R$ 1,00"], basePayout: 85, category: "Holiday", provider: "fachai"
  }
};

// ═══════════════════════════════════════════════════════════════════════════════
// PLATAFORMAS ANTIGAS (YG, DG, MG, EG, HG, FG) - SEM ALTERAÇÃO
// ═══════════════════════════════════════════════════════════════════════════════

// PG SOFT antigo - Ordem estratégica fixa (22 jogos)
const PG_SOFT_ORDER = [
  "Fortune Tiger",
  "Fortune Rabbit", 
  "Fortune Ox",
  "Fortune Mouse",
  "Fortune Dragon",
  "Fortune Snake",
  "Pinata Wins",
  "Double Fortune",
  "Wild Bounty Showdown",
  "Lucky Neko",
  "Wild Bandito",
  "Cocktail Nights",
  "Midas Fortune",
  "Ganesha Gold",
  "Dragon Hatch",
  "Cash Mania",
  "Anubis Wrath",
  "Lucky Piggy",
  "Circus Delight",
  "Dragon Hatch 2",
  "Diner Delights",
  "Forge of Wealth"
];

// PRAGMATIC PLAY - Ordem estratégica fixa
const PRAGMATIC_ORDER = [
  "Gates of Olympus",
  "Sugar Rush",
  "Sweet Bonanza",
  "Gold Party",
  "Big Bass Splash",
  "Gates of Olympus 1000",
  "Sugar Rush 1000",
  "Sweet Bonanza 1000",
  "Big Bass Bonanza 1000",
  "Gates of Olympus Xmas 1000",
  "Starlight Princess 1000",
  "Gates of Olympus Super Scatter",
  "3 Buzzing Wilds",
  "Zeus vs Hades - Gods of War",
  "Power of Merlin Megaways",
  "Big Bass Secrets of the Golden Lake",
  "Big Bass Bonanza",
  "Starlight Princess Super Scatter",
  "Big Bass Bonanza 3 Reeler",
  "Angel vs Sinner",
  "Big Bass Amazon Xtreme",
  "Big Bass Christmas – Frozen Lake",
  "Big Bass - Keeping it Reel",
  "Starlight Princess"
];

// TADA GAMING - Ordem estratégica fixa (jogos principais)
const TADA_ORDER = [
  "Crazy777",
  "Super ACE",
  "Zeus",
  "Money Coming 2",
  "Fortune Gems 2",
  "Golden Empire",
  "Lucky Jaguar 500",
  "Lucky Jaguar 2",
  "Crazy Hunter",
  "Fortune Gems 3",
  "Fortune Hook",
  "Fortune Hook Boom",
  "Lucky Jaguar",
  "Devil Fire Twins",
  "Money Coming Expanded Bets",
  "3 Lucky Piggy",
  "Golden Bank",
  "Fortune Gems 500",
  "Fortune Coins",
  "Fortune Coins 2",
  "3 Coin Treasures",
  "Clover Coins 4x4",
  "Clover Coins 3x3",
  "3 Coin Wild Horse",
  "3 Coin Golden OX",
  "Coin infinity Surge Reel",
  "Devil Fire 2",
  "Devil Fire"
];

// SPIRIT GAMING - Ordem estratégica fixa
const SPIRIT_ORDER = [
  "Tiger Fortune",
  "Rabbit Fortune",
  "Ox Fortune",
  "Mouse Fortune",
  "Wrath of Olympus",
  "Gems Fortune 2",
  "Coming Money",
  "Wild Buffalo",
  "God Of Wealth",
  "Gems Fortune",
  "Merry Christmas",
  "Ice Princess",
  "Carnival",
  "Joker Spin",
  "Wild Lion",
  "Ace Wild"
];

// ═══════════════════════════════════════════════════════════════════════════════
// DADOS DOS JOGOS ANTIGOS (para YG, DG, MG, EG, HG, FG)
// ═══════════════════════════════════════════════════════════════════════════════

// PG SOFT GAMES antigos
const pgGamesData = {
  "Fortune Tiger": {
    id: 1,
    name: "Fortune Tiger",
    image: "/pg/100402010.jpg",
    bets: ["R$ 0,80", "R$ 1,20", "R$ 4,80"],
    basePayout: 77,
    category: "Fortune",
    provider: "pg"
  },
  "Fortune Rabbit": {
    id: 2,
    name: "Fortune Rabbit",
    image: "/pg/100402089.jpg",
    bets: ["R$ 0,50", "R$ 1,50", "R$ 2,50"],
    basePayout: 85,
    category: "Fortune",
    provider: "pg"
  },
  "Fortune Ox": {
    id: 3,
    name: "Fortune Ox",
    image: "/pg/100402059.jpg",
    bets: ["R$ 0,50", "R$ 1,50", "R$ 2,50"],
    basePayout: 82,
    category: "Fortune",
    provider: "pg"
  },
  "Fortune Mouse": {
    id: 4,
    name: "Fortune Mouse",
    image: "/pg/100402009.jpg",
    bets: ["R$ 0,50", "R$ 3,50", "R$ 4,00"],
    basePayout: 87,
    category: "Fortune",
    provider: "pg"
  },
  "Fortune Dragon": {
    id: 5,
    name: "Fortune Dragon",
    image: "/pg/100402125.jpg",
    bets: ["R$ 0,50", "R$ 3,50", "R$ 4,00"],
    basePayout: 88,
    category: "Fortune",
    provider: "pg"
  },
  "Fortune Snake": {
    id: 6,
    name: "Fortune Snake",
    image: "/pg/100402146.jpg",
    bets: ["R$ 0,40", "R$ 3,60", "R$ 4,00"],
    basePayout: 85,
    category: "Fortune",
    provider: "pg"
  },
  "Pinata Wins": {
    id: 7,
    name: "Pinata Wins",
    image: "/pg/100402131.jpg",
    bets: ["R$ 0,50", "R$ 3,50", "R$ 4,00"],
    basePayout: 86,
    category: "Party",
    provider: "pg"
  },
  "Double Fortune": {
    id: 8,
    name: "Double Fortune",
    image: "/pg/100402064.jpg",
    bets: ["R$ 0,50", "R$ 1,50", "R$ 3,00"],
    basePayout: 84,
    category: "Fortune",
    provider: "pg"
  },
  "Wild Bounty Showdown": {
    id: 9,
    name: "Wild Bounty Showdown",
    image: "/pg/100402095.jpg",
    bets: ["R$ 0,40", "R$ 2,00", "R$ 4,00"],
    basePayout: 88,
    category: "Western",
    provider: "pg"
  },
  "Lucky Neko": {
    id: 10,
    name: "Lucky Neko",
    image: "/pg/100402065.jpg",
    bets: ["R$ 0,80", "R$ 1,20", "R$ 2,40"],
    basePayout: 79,
    category: "Asian",
    provider: "pg"
  },
  "Wild Bandito": {
    id: 11,
    name: "Wild Bandito",
    image: "/pg/100402058.jpg",
    bets: ["R$ 0,40", "R$ 3,60", "R$ 4,00"],
    basePayout: 77,
    category: "Western",
    provider: "pg"
  },
  "Cocktail Nights": {
    id: 12,
    name: "Cocktail Nights",
    image: "/pg/100402041.jpg",
    bets: ["R$ 0,50", "R$ 2,00", "R$ 4,00"],
    basePayout: 83,
    category: "Party",
    provider: "pg"
  },
  "Midas Fortune": {
    id: 13,
    name: "Midas Fortune",
    image: "/pg/100402106.jpg",
    bets: ["R$ 0,50", "R$ 2,50", "R$ 4,00"],
    basePayout: 86,
    category: "Mythical",
    provider: "pg"
  },
  "Ganesha Gold": {
    id: 14,
    name: "Ganesha Gold",
    image: "/pg/100402012.jpg",
    bets: ["R$ 0,40", "R$ 3,60", "R$ 4,00"],
    basePayout: 85,
    category: "Hindu",
    provider: "pg"
  },
  "Dragon Hatch": {
    id: 15,
    name: "Dragon Hatch",
    image: "/pg/100402056.jpg",
    bets: ["R$ 0,50", "R$ 1,50", "R$ 2,50"],
    basePayout: 88,
    category: "Dragon",
    provider: "pg"
  },
  "Cash Mania": {
    id: 16,
    name: "Cash Mania",
    image: "/pg/100402130.jpg",
    bets: ["R$ 0,50", "R$ 3,50", "R$ 4,00"],
    basePayout: 83,
    category: "Money",
    provider: "pg"
  },
  "Anubis Wrath": {
    id: 17,
    name: "Anubis Wrath",
    image: "/pg/100402133.jpg",
    bets: ["R$ 0,50", "R$ 2,50", "R$ 4,00"],
    basePayout: 87,
    category: "Egyptian",
    provider: "pg"
  },
  "Lucky Piggy": {
    id: 18,
    name: "Lucky Piggy",
    image: "/pg/100402092.jpg",
    bets: ["R$ 0,50", "R$ 2,00", "R$ 4,00"],
    basePayout: 84,
    category: "Fortune",
    provider: "pg"
  },
  "Circus Delight": {
    id: 19,
    name: "Circus Delight",
    image: "/pg/100402042.jpg",
    bets: ["R$ 0,50", "R$ 2,00", "R$ 4,00"],
    basePayout: 82,
    category: "Party",
    provider: "pg"
  },
  "Dragon Hatch 2": {
    id: 20,
    name: "Dragon Hatch 2",
    image: "/pg/100402127.jpg",
    bets: ["R$ 0,50", "R$ 3,50", "R$ 4,00"],
    basePayout: 93,
    category: "Dragon",
    provider: "pg"
  },
  "Diner Delights": {
    id: 21,
    name: "Diner Delights",
    image: "/pg/100402091.jpg",
    bets: ["R$ 0,50", "R$ 2,00", "R$ 4,00"],
    basePayout: 85,
    category: "Food",
    provider: "pg"
  },
  "Forge of Wealth": {
    id: 22,
    name: "Forge of Wealth",
    image: "/pg/100402122.jpg",
    bets: ["R$ 0,50", "R$ 3,00", "R$ 4,00"],
    basePayout: 89,
    category: "Mythical",
    provider: "pg"
  }
};

// PRAGMATIC PLAY GAMES
const pragmaticGamesData = {
  "Gates of Olympus": {
    id: 16,
    name: "Gates of Olympus",
    image: "/images/pp/Gates of Olympus.jpg",
    bets: ["R$ 0,20", "R$ 0,40", "R$ 1,00"],
    basePayout: 89,
    category: "Greek",
    provider: "pragmatic"
  },
  "Sugar Rush": {
    id: 15,
    name: "Sugar Rush",
    image: "/images/pp/Sugar Rush.jpg",
    bets: ["R$ 0,20", "R$ 0,40", "R$ 1,00"],
    basePayout: 87,
    category: "Sweet",
    provider: "pragmatic"
  },
  "Sweet Bonanza": {
    id: 17,
    name: "Sweet Bonanza",
    image: "/images/pp/Sweet Bonanza.jpg",
    bets: ["R$ 0,20", "R$ 0,40", "R$ 1,00"],
    basePayout: 92,
    category: "Candy",
    provider: "pragmatic"
  },
  "Gates of Olympus 1000": {
    id: 28,
    name: "Gates of Olympus 1000",
    image: "/images/pp/Gates of Olympus 1000.jpg",
    bets: ["R$ 0,20", "R$ 0,40", "R$ 1,00"],
    basePayout: 92,
    category: "Greek",
    provider: "pragmatic"
  },
  "Sugar Rush 1000": {
    id: 37,
    name: "Sugar Rush 1000",
    image: "/images/pp/Sugar Rush 1000.jpg",
    bets: ["R$ 0,20", "R$ 0,40", "R$ 1,00"],
    basePayout: 91,
    category: "Sweet",
    provider: "pragmatic"
  },
  "Sweet Bonanza 1000": {
    id: 38,
    name: "Sweet Bonanza 1000",
    image: "/images/pp/Sweet Bonanza 1000.jpg",
    bets: ["R$ 0,20", "R$ 0,40", "R$ 1,00"],
    basePayout: 95,
    category: "Candy",
    provider: "pragmatic"
  },
  "Big Bass Bonanza": {
    id: 18,
    name: "Big Bass Bonanza",
    image: "/images/pp/Big Bass Bonanza.jpg",
    bets: ["R$ 0,20", "R$ 0,40", "R$ 1,00"],
    basePayout: 85,
    category: "Fishing",
    provider: "pragmatic"
  },
  "Starlight Princess": {
    id: 14,
    name: "Starlight Princess",
    image: "/images/pp/Starlight Princess.jpg",
    bets: ["R$ 0,20", "R$ 0,40", "R$ 1,00"],
    basePayout: 94,
    category: "Fantasy",
    provider: "pragmatic"
  },
  "Gold Party": {
    id: 50,
    name: "Gold Party",
    image: "/images/pp/Gold Party.jpg",
    bets: ["R$ 0,20", "R$ 0,40", "R$ 1,00"],
    basePayout: 88,
    category: "Gold",
    provider: "pragmatic"
  },
  "Big Bass Splash": {
    id: 51,
    name: "Big Bass Splash",
    image: "/images/pp/Big Bass Splash.jpg",
    bets: ["R$ 0,20", "R$ 0,40", "R$ 1,00"],
    basePayout: 87,
    category: "Fishing",
    provider: "pragmatic"
  },
  "Big Bass Bonanza 1000": {
    id: 52,
    name: "Big Bass Bonanza 1000",
    image: "/images/pp/Big Bass Bonanza 1000.jpg",
    bets: ["R$ 0,20", "R$ 0,40", "R$ 1,00"],
    basePayout: 91,
    category: "Fishing",
    provider: "pragmatic"
  },
  "Gates of Olympus Xmas 1000": {
    id: 53,
    name: "Gates of Olympus Xmas 1000",
    image: "/images/pp/Gates of Olympus Xmas 1000.jpg",
    bets: ["R$ 0,20", "R$ 0,40", "R$ 1,00"],
    basePayout: 92,
    category: "Greek",
    provider: "pragmatic"
  },
  "Starlight Princess 1000": {
    id: 54,
    name: "Starlight Princess 1000",
    image: "/images/pp/Starlight Princess 1000.jpg",
    bets: ["R$ 0,20", "R$ 0,40", "R$ 1,00"],
    basePayout: 94,
    category: "Fantasy",
    provider: "pragmatic"
  },
  "Gates of Olympus Super Scatter": {
    id: 55,
    name: "Gates of Olympus Super Scatter",
    image: "/images/pp/Gates of Olympus Super Scatter.jpg",
    bets: ["R$ 0,20", "R$ 0,40", "R$ 1,00"],
    basePayout: 93,
    category: "Greek",
    provider: "pragmatic"
  },
  "3 Buzzing Wilds": {
    id: 56,
    name: "3 Buzzing Wilds",
    image: "/images/pp/3 Buzzing Wilds.jpg",
    bets: ["R$ 0,20", "R$ 0,40", "R$ 1,00"],
    basePayout: 86,
    category: "Animal",
    provider: "pragmatic"
  },
  "Zeus vs Hades - Gods of War": {
    id: 57,
    name: "Zeus vs Hades - Gods of War",
    image: "/images/pp/Zeus vs Hades - Gods of War.jpg",
    bets: ["R$ 0,20", "R$ 0,40", "R$ 1,00"],
    basePayout: 91,
    category: "Greek",
    provider: "pragmatic"
  },
  "Power of Merlin Megaways": {
    id: 58,
    name: "Power of Merlin Megaways",
    image: "/images/pp/Power of Merlin Megaways.jpg",
    bets: ["R$ 0,20", "R$ 0,40", "R$ 1,00"],
    basePayout: 89,
    category: "Fantasy",
    provider: "pragmatic"
  },
  "Big Bass Secrets of the Golden Lake": {
    id: 59,
    name: "Big Bass Secrets of the Golden Lake",
    image: "/images/pp/Big Bass Secrets of the Golden Lake.jpg",
    bets: ["R$ 0,20", "R$ 0,40", "R$ 1,00"],
    basePayout: 88,
    category: "Fishing",
    provider: "pragmatic"
  },
  "Starlight Princess Super Scatter": {
    id: 60,
    name: "Starlight Princess Super Scatter",
    image: "/images/pp/Starlight Princess Super Scatter.jpg",
    bets: ["R$ 0,20", "R$ 0,40", "R$ 1,00"],
    basePayout: 95,
    category: "Fantasy",
    provider: "pragmatic"
  },
  "Big Bass Bonanza 3 Reeler": {
    id: 61,
    name: "Big Bass Bonanza 3 Reeler",
    image: "/images/pp/Big Bass Bonanza 3 Reeler.jpg",
    bets: ["R$ 0,20", "R$ 0,40", "R$ 1,00"],
    basePayout: 85,
    category: "Fishing",
    provider: "pragmatic"
  },
  "Angel vs Sinner": {
    id: 62,
    name: "Angel vs Sinner",
    image: "/images/pp/Angel vs Sinner.jpg",
    bets: ["R$ 0,20", "R$ 0,40", "R$ 1,00"],
    basePayout: 90,
    category: "Fantasy",
    provider: "pragmatic"
  },
  "Big Bass Amazon Xtreme": {
    id: 63,
    name: "Big Bass Amazon Xtreme",
    image: "/images/pp/Big Bass Amazon Xtreme.jpg",
    bets: ["R$ 0,20", "R$ 0,40", "R$ 1,00"],
    basePayout: 87,
    category: "Fishing",
    provider: "pragmatic"
  },
  "Big Bass Christmas – Frozen Lake": {
    id: 64,
    name: "Big Bass Christmas – Frozen Lake",
    image: "/images/pp/Big Bass Christmas – Frozen Lake.jpg",
    bets: ["R$ 0,20", "R$ 0,40", "R$ 1,00"],
    basePayout: 86,
    category: "Fishing",
    provider: "pragmatic"
  },
  "Big Bass - Keeping it Reel": {
    id: 65,
    name: "Big Bass - Keeping it Reel",
    image: "/images/pp/Big Bass - Keeping it Reel.jpg",
    bets: ["R$ 0,20", "R$ 0,40", "R$ 1,00"],
    basePayout: 88,
    category: "Fishing",
    provider: "pragmatic"
  }
};

// TADA GAMING - Dados completos (50 jogos)
const tadaGamesData = {
  "Crazy777": {
    id: 200,
    name: "Crazy777",
    image: "/images/tada/Crazy777.jpg",
    bets: ["R$ 0,20", "R$ 0,50", "R$ 1,00"],
    basePayout: 88,
    category: "Classic",
    provider: "tada"
  },
  "Jackpot Fishing": {
    id: 201,
    name: "Jackpot Fishing",
    image: "/images/tada/Jackpot Fishing.jpg",
    bets: ["R$ 0,20", "R$ 0,50", "R$ 1,00"],
    basePayout: 85,
    category: "Fishing",
    provider: "tada"
  },
  "Bombing fishing": {
    id: 202,
    name: "Bombing fishing",
    image: "/images/tada/Bombing fishing.jpg",
    bets: ["R$ 0,20", "R$ 0,50", "R$ 1,00"],
    basePayout: 86,
    category: "Fishing",
    provider: "tada"
  },
  "Super ACE": {
    id: 203,
    name: "Super ACE",
    image: "/images/tada/Super ACE.jpg",
    bets: ["R$ 0,20", "R$ 0,50", "R$ 1,00"],
    basePayout: 90,
    category: "Cards",
    provider: "tada"
  },
  "Zeus": {
    id: 204,
    name: "Zeus",
    image: "/images/tada/Zeus.jpg",
    bets: ["R$ 0,20", "R$ 0,50", "R$ 1,00"],
    basePayout: 89,
    category: "Greek",
    provider: "tada"
  },
  "Money Coming 2": {
    id: 205,
    name: "Money Coming 2",
    image: "/images/tada/Money Coming 2.jpg",
    bets: ["R$ 0,20", "R$ 0,50", "R$ 1,00"],
    basePayout: 91,
    category: "Money",
    provider: "tada"
  },
  "Fortune Gems 2": {
    id: 206,
    name: "Fortune Gems 2",
    image: "/images/tada/Fortune Gems 2.jpg",
    bets: ["R$ 0,20", "R$ 0,50", "R$ 1,00"],
    basePayout: 88,
    category: "Gems",
    provider: "tada"
  },
  "Golden Empire": {
    id: 207,
    name: "Golden Empire",
    image: "/images/tada/Golden Empire.jpg",
    bets: ["R$ 0,20", "R$ 0,50", "R$ 1,00"],
    basePayout: 87,
    category: "Gold",
    provider: "tada"
  },
  "Lucky Jaguar 500": {
    id: 208,
    name: "Lucky Jaguar 500",
    image: "/images/tada/Lucky Jaguar 500.jpg",
    bets: ["R$ 0,20", "R$ 0,50", "R$ 1,00"],
    basePayout: 92,
    category: "Animal",
    provider: "tada"
  },
  "Lucky Jaguar 2": {
    id: 209,
    name: "Lucky Jaguar 2",
    image: "/images/tada/Lucky Jaguar 2.jpg",
    bets: ["R$ 0,20", "R$ 0,50", "R$ 1,00"],
    basePayout: 89,
    category: "Animal",
    provider: "tada"
  },
  "Crazy Hunter": {
    id: 210,
    name: "Crazy Hunter",
    image: "/images/tada/Crazy Hunter.jpg",
    bets: ["R$ 0,20", "R$ 0,50", "R$ 1,00"],
    basePayout: 86,
    category: "Action",
    provider: "tada"
  },
  "Fortune Gems 3": {
    id: 211,
    name: "Fortune Gems 3",
    image: "/images/tada/Fortune Gems 3.jpg",
    bets: ["R$ 0,20", "R$ 0,50", "R$ 1,00"],
    basePayout: 87,
    category: "Gems",
    provider: "tada"
  },
  "Fortune Hook": {
    id: 212,
    name: "Fortune Hook",
    image: "/images/tada/Fortune Hook.jpg",
    bets: ["R$ 0,20", "R$ 0,50", "R$ 1,00"],
    basePayout: 88,
    category: "Fishing",
    provider: "tada"
  },
  "Fortune Hook Boom": {
    id: 213,
    name: "Fortune Hook Boom",
    image: "/images/tada/Fortune Hook Boom.jpg",
    bets: ["R$ 0,20", "R$ 0,50", "R$ 1,00"],
    basePayout: 90,
    category: "Fishing",
    provider: "tada"
  },
  "Lucky Jaguar": {
    id: 214,
    name: "Lucky Jaguar",
    image: "/images/tada/Lucky Jaguar.jpg",
    bets: ["R$ 0,20", "R$ 0,50", "R$ 1,00"],
    basePayout: 85,
    category: "Animal",
    provider: "tada"
  },
  "Devil Fire Twins": {
    id: 215,
    name: "Devil Fire Twins",
    image: "/images/tada/Devil Fire Twins.jpg",
    bets: ["R$ 0,20", "R$ 0,50", "R$ 1,00"],
    basePayout: 89,
    category: "Fire",
    provider: "tada"
  },
  "Money Coming Expanded Bets": {
    id: 216,
    name: "Money Coming Expanded Bets",
    image: "/images/tada/Money Coming Expanded Bets.jpg",
    bets: ["R$ 0,20", "R$ 0,50", "R$ 1,00"],
    basePayout: 91,
    category: "Money",
    provider: "tada"
  },
  "3 Lucky Piggy": {
    id: 217,
    name: "3 Lucky Piggy",
    image: "/images/tada/3 Lucky Piggy.jpg",
    bets: ["R$ 0,20", "R$ 0,50", "R$ 1,00"],
    basePayout: 86,
    category: "Animal",
    provider: "tada"
  },
  "Golden Bank": {
    id: 218,
    name: "Golden Bank",
    image: "/images/tada/Golden Bank.jpg",
    bets: ["R$ 0,20", "R$ 0,50", "R$ 1,00"],
    basePayout: 88,
    category: "Gold",
    provider: "tada"
  },
  "Fortune Gems 500": {
    id: 219,
    name: "Fortune Gems 500",
    image: "/images/tada/Fortune Gems 500.jpg",
    bets: ["R$ 0,20", "R$ 0,50", "R$ 1,00"],
    basePayout: 92,
    category: "Gems",
    provider: "tada"
  },
  "Devil Fire 2": {
    id: 220,
    name: "Devil Fire 2",
    image: "/images/tada/Devil Fire 2.jpg",
    bets: ["R$ 0,20", "R$ 0,50", "R$ 1,00"],
    basePayout: 87,
    category: "Fire",
    provider: "tada"
  },
  "3 Coin Treasures": {
    id: 221,
    name: "3 Coin Treasures",
    image: "/images/tada/3 Coin Treasures.jpg",
    bets: ["R$ 0,20", "R$ 0,50", "R$ 1,00"],
    basePayout: 89,
    category: "Coins",
    provider: "tada"
  },
  "Devil Fire": {
    id: 222,
    name: "Devil Fire",
    image: "/images/tada/Devil Fire.jpg",
    bets: ["R$ 0,20", "R$ 0,50", "R$ 1,00"],
    basePayout: 85,
    category: "Fire",
    provider: "tada"
  },
  "Fortune Coins": {
    id: 228,
    name: "Fortune Coins",
    image: "/images/tada/Fortune Coins.jpg",
    bets: ["R$ 0,20", "R$ 0,50", "R$ 1,00"],
    basePayout: 86,
    category: "Coins",
    provider: "tada"
  },
  "Clover Coins 4x4": {
    id: 231,
    name: "Clover Coins 4x4",
    image: "/images/tada/Clover Coins 4x4.jpg",
    bets: ["R$ 0,20", "R$ 0,50", "R$ 1,00"],
    basePayout: 89,
    category: "Coins",
    provider: "tada"
  },
  "Fortune Coins 2": {
    id: 232,
    name: "Fortune Coins 2",
    image: "/images/tada/Fortune Coins 2.jpg",
    bets: ["R$ 0,20", "R$ 0,50", "R$ 1,00"],
    basePayout: 88,
    category: "Coins",
    provider: "tada"
  },
  "3 Coin Wild Horse": {
    id: 235,
    name: "3 Coin Wild Horse",
    image: "/images/tada/3 Coin Wild Horse.jpg",
    bets: ["R$ 0,20", "R$ 0,50", "R$ 1,00"],
    basePayout: 88,
    category: "Coins",
    provider: "tada"
  },
  "Clover Coins 3x3": {
    id: 240,
    name: "Clover Coins 3x3",
    image: "/images/tada/Clover Coins 3x3.jpg",
    bets: ["R$ 0,20", "R$ 0,50", "R$ 1,00"],
    basePayout: 88,
    category: "Coins",
    provider: "tada"
  },
  "3 Coin Golden OX": {
    id: 242,
    name: "3 Coin Golden OX",
    image: "/images/tada/3 Coin Golden OX.jpg",
    bets: ["R$ 0,20", "R$ 0,50", "R$ 1,00"],
    basePayout: 89,
    category: "Coins",
    provider: "tada"
  },
  "Coin infinity Surge Reel": {
    id: 243,
    name: "Coin infinity Surge Reel",
    image: "/images/tada/Coin infinity Surge Reel.jpg",
    bets: ["R$ 0,20", "R$ 0,50", "R$ 1,00"],
    basePayout: 91,
    category: "Coins",
    provider: "tada"
  }
};

// SPIRIT GAMING - Dados completos
const spiritGamesData = {
  "Tiger Fortune": {
    id: 100,
    name: "Tiger Fortune",
    image: "/spirit/103802003.jpg",
    bets: ["R$ 0,50", "R$ 1,50", "R$ 3,00"],
    basePayout: 88,
    category: "Fortune",
    provider: "spirit"
  },
  "Rabbit Fortune": {
    id: 101,
    name: "Rabbit Fortune",
    image: "/spirit/103802009.jpg",
    bets: ["R$ 0,50", "R$ 1,50", "R$ 3,00"],
    basePayout: 86,
    category: "Fortune",
    provider: "spirit"
  },
  "Ox Fortune": {
    id: 102,
    name: "Ox Fortune",
    image: "/spirit/103802004.jpg",
    bets: ["R$ 0,50", "R$ 1,50", "R$ 3,00"],
    basePayout: 85,
    category: "Fortune",
    provider: "spirit"
  },
  "Mouse Fortune": {
    id: 103,
    name: "Mouse Fortune",
    image: "/spirit/103802010.jpg",
    bets: ["R$ 0,50", "R$ 1,50", "R$ 3,00"],
    basePayout: 84,
    category: "Fortune",
    provider: "spirit"
  },
  "Wrath of Olympus": {
    id: 104,
    name: "Wrath of Olympus",
    image: "/spirit/103802005.jpg",
    bets: ["R$ 0,50", "R$ 1,50", "R$ 3,00"],
    basePayout: 90,
    category: "Greek",
    provider: "spirit"
  },
  "Gems Fortune 2": {
    id: 105,
    name: "Gems Fortune 2",
    image: "/spirit/103802036.jpg",
    bets: ["R$ 0,50", "R$ 1,50", "R$ 3,00"],
    basePayout: 87,
    category: "Gems",
    provider: "spirit"
  },
  "Coming Money": {
    id: 106,
    name: "Coming Money",
    image: "/spirit/103802035.jpg",
    bets: ["R$ 0,50", "R$ 1,50", "R$ 3,00"],
    basePayout: 83,
    category: "Money",
    provider: "spirit"
  },
  "Wild Buffalo": {
    id: 107,
    name: "Wild Buffalo",
    image: "/spirit/103802012.jpg",
    bets: ["R$ 0,50", "R$ 1,50", "R$ 3,00"],
    basePayout: 86,
    category: "Animal",
    provider: "spirit"
  },
  "God Of Wealth": {
    id: 108,
    name: "God Of Wealth",
    image: "/spirit/103802037.jpg",
    bets: ["R$ 0,50", "R$ 1,50", "R$ 3,00"],
    basePayout: 89,
    category: "Asian",
    provider: "spirit"
  },
  "Gems Fortune": {
    id: 109,
    name: "Gems Fortune",
    image: "/spirit/103802032.jpg",
    bets: ["R$ 0,50", "R$ 1,50", "R$ 3,00"],
    basePayout: 85,
    category: "Gems",
    provider: "spirit"
  },
  "Merry Christmas": {
    id: 110,
    name: "Merry Christmas",
    image: "/spirit/103802007.jpg",
    bets: ["R$ 0,50", "R$ 1,50", "R$ 3,00"],
    basePayout: 82,
    category: "Holiday",
    provider: "spirit"
  },
  "Ice Princess": {
    id: 111,
    name: "Ice Princess",
    image: "/spirit/103802001.jpg",
    bets: ["R$ 0,50", "R$ 1,50", "R$ 3,00"],
    basePayout: 84,
    category: "Fantasy",
    provider: "spirit"
  },
  "Carnival": {
    id: 112,
    name: "Carnival",
    image: "/spirit/103802008.jpg",
    bets: ["R$ 0,50", "R$ 1,50", "R$ 3,00"],
    basePayout: 81,
    category: "Party",
    provider: "spirit"
  },
  "Joker Spin": {
    id: 113,
    name: "Joker Spin",
    image: "/spirit/103802011.jpg",
    bets: ["R$ 0,50", "R$ 1,50", "R$ 3,00"],
    basePayout: 80,
    category: "Classic",
    provider: "spirit"
  },
  "Wild Lion": {
    id: 114,
    name: "Wild Lion",
    image: "/spirit/103802002.jpg",
    bets: ["R$ 0,50", "R$ 1,50", "R$ 3,00"],
    basePayout: 85,
    category: "Animal",
    provider: "spirit"
  },
  "Ace Wild": {
    id: 115,
    name: "Ace Wild",
    image: "/spirit/103802034.jpg",
    bets: ["R$ 0,50", "R$ 1,50", "R$ 3,00"],
    basePayout: 83,
    category: "Classic",
    provider: "spirit"
  }
};

// ═══════════════════════════════════════════════════════════════════════════════
// FUNÇÃO PARA ORDENAR JOGOS NA SEQUÊNCIA FIXA
// ═══════════════════════════════════════════════════════════════════════════════

function getOrderedGames(orderList, gamesData) {
  const orderedGames = [];
  
  for (const gameName of orderList) {
    if (gamesData[gameName]) {
      orderedGames.push(gamesData[gameName]);
    }
  }
  
  for (const gameName of Object.keys(gamesData)) {
    if (!orderList.includes(gameName)) {
      orderedGames.push(gamesData[gameName]);
    }
  }
  
  return orderedGames;
}

// ═══════════════════════════════════════════════════════════════════════════════
// EXPORTAR DADOS ORDENADOS POR PLATAFORMA
// ═══════════════════════════════════════════════════════════════════════════════

// Jogos PG (novo ranking)
const newPlatformGames = getOrderedGames(PG_NEW_ORDER, pgNewGamesData);

// Jogos PP (novo ranking) 
const newPPGames = getOrderedGames(PP_NEW_ORDER, ppNewGamesData);

// Jogos Amigo Gaming (apenas para AG, BG, WG)
const newAmigoGames = getOrderedGames(AMIGO_ORDER, amigoGamesData);

// Jogos Micro Gaming (apenas para AG, BG, WG)
const newMicroGames = getOrderedGames(MICROGAMING_ORDER, microgamingGamesData);

// Jogos FA CHAI Gaming (apenas para AG, BG, WG)
const newFachaiGames = getOrderedGames(FACHAI_ORDER, fachaiGamesData);

// Jogos para YG, DG, MG, EG, HG, FG (antigos - sem alteração)
const oldPlatformGames = {
  pg: getOrderedGames(PG_SOFT_ORDER, pgGamesData),
  pragmatic: getOrderedGames(PRAGMATIC_ORDER, pragmaticGamesData),
  spirit: getOrderedGames(SPIRIT_ORDER, spiritGamesData),
  tada: getOrderedGames(TADA_ORDER, tadaGamesData)
};

// Dados exportados por plataforma
export const slotsDataByPlatform = {
  // AG, BG, WG têm TODOS os providers: PG, PP, Amigo, Micro Gaming, FA CHAI, Revenge
  AGJOGO: {
    pg: newPlatformGames,
    pp: newPPGames,
    amigo: newAmigoGames,
    microgaming: newMicroGames,
    fachai: newFachaiGames,
    revenge: []
  },
  BGJOGO: {
    pg: newPlatformGames,
    pp: newPPGames,
    amigo: newAmigoGames,
    microgaming: newMicroGames,
    fachai: newFachaiGames,
    revenge: []
  },
  WGJOGO: {
    pg: newPlatformGames,
    pp: newPPGames,
    amigo: newAmigoGames,
    microgaming: newMicroGames,
    fachai: newFachaiGames,
    revenge: []
  },
  // YG, DG, MG, EG, HG, FG - PG, PP, Spirit, Tada e Revenge
  YGJOGO: {
    pg: newPlatformGames,
    pp: newPPGames,
    spirit: oldPlatformGames.spirit,
    tada: oldPlatformGames.tada,
    revenge: []
  },
  DGJOGO: {
    pg: newPlatformGames,
    pp: newPPGames,
    spirit: oldPlatformGames.spirit,
    tada: oldPlatformGames.tada,
    revenge: []
  },
  MGJOGO: {
    pg: newPlatformGames,
    pp: newPPGames,
    spirit: oldPlatformGames.spirit,
    tada: oldPlatformGames.tada,
    revenge: []
  },
  EGJOGO: {
    pg: newPlatformGames,
    pp: newPPGames,
    spirit: oldPlatformGames.spirit,
    tada: oldPlatformGames.tada,
    revenge: []
  },
  HGJOGO: {
    pg: newPlatformGames,
    pp: newPPGames,
    spirit: oldPlatformGames.spirit,
    tada: oldPlatformGames.tada,
    revenge: []
  },
  FGJOGO: {
    pg: newPlatformGames,
    pp: newPPGames,
    spirit: oldPlatformGames.spirit,
    tada: oldPlatformGames.tada,
    revenge: []
  }
};

// Export padrão para compatibilidade
export const slotsData = {
  pg: newPlatformGames,
  pp: newPPGames,
  spirit: oldPlatformGames.spirit,
  tada: oldPlatformGames.tada,
  revenge: []
};

// Provider ranking por plataforma
export const providersByPlatform = {
  // AG, BG, WG têm novos providers
  AGJOGO: [
    { id: 'pg', name: 'PG', rank: 1 },
    { id: 'pp', name: 'PP', rank: 2 },
    { id: 'amigo', name: 'Amigo Gaming', rank: 3 },
    { id: 'microgaming', name: 'Micro Gaming', rank: 4 },
    { id: 'fachai', name: 'FA CHAI Gaming', rank: 5 },
    { id: 'revenge', name: 'Revenge', rank: 6 }
  ],
  BGJOGO: [
    { id: 'pg', name: 'PG', rank: 1 },
    { id: 'pp', name: 'PP', rank: 2 },
    { id: 'amigo', name: 'Amigo Gaming', rank: 3 },
    { id: 'microgaming', name: 'Micro Gaming', rank: 4 },
    { id: 'fachai', name: 'FA CHAI Gaming', rank: 5 },
    { id: 'revenge', name: 'Revenge', rank: 6 }
  ],
  WGJOGO: [
    { id: 'pg', name: 'PG', rank: 1 },
    { id: 'pp', name: 'PP', rank: 2 },
    { id: 'amigo', name: 'Amigo Gaming', rank: 3 },
    { id: 'microgaming', name: 'Micro Gaming', rank: 4 },
    { id: 'fachai', name: 'FA CHAI Gaming', rank: 5 },
    { id: 'revenge', name: 'Revenge', rank: 6 }
  ],
  // Outras plataformas (YG, DG, MG, EG, HG, FG) - PG, PP, Spirit, Tada e Revenge
  DEFAULT: [
    { id: 'pg', name: 'PG', rank: 1 },
    { id: 'pp', name: 'PP', rank: 2 },
    { id: 'tada', name: 'Tada Gaming', rank: 3 },
    { id: 'spirit', name: 'Spirit Gaming', rank: 4 },
    { id: 'revenge', name: 'Revenge', rank: 5 }
  ]
};

// Provider ranking priority (ordem de exibição) - padrão
export const providerRankingOrder = [
  { id: 'pg', name: 'PG', rank: 1 },
  { id: 'pp', name: 'PP', rank: 2 },
  { id: 'tada', name: 'Tada Gaming', rank: 3 },
  { id: 'spirit', name: 'Spirit Gaming', rank: 4 },
  { id: 'revenge', name: 'Revenge', rank: 5 }
];

// Função para gerar payout dinâmico
export const generateDynamicPayout = (basePayout) => {
  const variation = Math.random() * 42 + 55;
  return Math.round(variation);
};

// Função para gerar sinal do slot
export const generateSignal = (slot) => {
  const now = new Date();
  const signalTime = new Date(now.getTime() + 3 * 60000);
  const endTime = new Date(signalTime.getTime() + 5 * 60000);
  
  const randomBetIndex = Math.floor(Math.random() * slot.bets.length);
  const selectedBet = slot.bets[randomBetIndex];
  
  const modes = ['Normal', 'Turbo'];
  const selectedMode = modes[Math.floor(Math.random() * modes.length)];
  
  const baseConfidence = slot.basePayout;
  const confidenceVariation = Math.random() * 20 - 10;
  const confidence = Math.max(60, Math.min(99, baseConfidence + confidenceVariation));

  return {
    id: Date.now(),
    slotId: slot.id,
    slotName: slot.name,
    timeWindow: {
      start: signalTime.toLocaleTimeString('pt-BR', { 
        hour: '2-digit', 
        minute: '2-digit',
        timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone
      }),
      end: endTime.toLocaleTimeString('pt-BR', { 
        hour: '2-digit', 
        minute: '2-digit',
        timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone
      })
    },
    mode: selectedMode,
    recommendedBet: selectedBet,
    confidence: Math.round(confidence),
    generatedAt: now.getTime()
  };
};

// Função para verificar cooldown (10 minutos)
export const checkCooldown = (lastGenerationTime) => {
  const now = Date.now();
  const cooldownTime = 10 * 60 * 1000;
  const timePassed = now - lastGenerationTime;
  
  if (timePassed >= cooldownTime) {
    return { canGenerate: true, remainingTime: 0 };
  } else {
    return { 
      canGenerate: false, 
      remainingTime: cooldownTime - timePassed 
    };
  }
};

// Função para formatar tempo restante
export const formatRemainingTime = (milliseconds) => {
  const minutes = Math.floor(milliseconds / 60000);
  const seconds = Math.floor((milliseconds % 60000) / 1000);
  return `${minutes}:${seconds.toString().padStart(2, '0')}`;
};
