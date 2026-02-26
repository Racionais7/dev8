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

// PG SOFT - Novo ranking de 28 jogos para AG, BG, WG (NOMES EM INGLÊS)
const PG_NEW_ORDER = [
  "Fortune Tiger",
  "Fortune Rabbit",
  "Fortune Ox",
  "Fortune Dragon",
  "Pinata Wins",
  "Fortune Snake",
  "Midas Fortune",
  "Wild Bounty Showdown",
  "Fortune Mouse",
  "Cash Mania",
  "Dragon Treasure",
  "Wild Bandito",
  "Wild Ape",
  "Anubis Wrath",
  "Chicky Run",
  "Ganesha Gold",
  "Majestic Kingdom",
  "Double Fortune",
  "Werewolf's Hunt",
  "Dragon Hatch",
  "Lucky Neko",
  "Treasures of Aztec",
  "Genie's 3 Wishes",
  "Kraken's Gold",
  "Grimm's Rewards",
  "Football Fever",
  "The Great Icescape",
  "Cocktail Nights"
];

// PG SOFT GAMES - Novo ranking para AG, BG, WG (28 jogos com NOMES EM INGLÊS)
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
  "Fortune Dragon": {
    id: 4,
    name: "Fortune Dragon",
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
  "Fortune Snake": {
    id: 6,
    name: "Fortune Snake",
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
  "Dragon Treasure": {
    id: 11,
    name: "Dragon Treasure",
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
  "Wild Ape": {
    id: 13,
    name: "Wild Ape",
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
  "Majestic Kingdom": {
    id: 17,
    name: "Majestic Kingdom",
    image: "/images/pg-new/Império Majestoso.png",
    bets: ["R$ 0,50", "R$ 3,00", "R$ 4,00"],
    basePayout: 86,
    category: "Kingdom",
    provider: "pg"
  },
  "Double Fortune": {
    id: 18,
    name: "Double Fortune",
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
  "Kraken's Gold": {
    id: 24,
    name: "Kraken's Gold",
    image: "/images/pg-new/Frenesi do Ouro do Kraken.png",
    bets: ["R$ 0,50", "R$ 3,00", "R$ 4,00"],
    basePayout: 86,
    category: "Sea",
    provider: "pg"
  },
  "Grimm's Rewards": {
    id: 25,
    name: "Grimm's Rewards",
    image: "/images/pg-new/Recompensa dos Grimm Hansel e Gretel.png",
    bets: ["R$ 0,50", "R$ 2,00", "R$ 4,00"],
    basePayout: 84,
    category: "Fantasy",
    provider: "pg"
  },
  "Football Fever": {
    id: 26,
    name: "Football Fever",
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
  }
};

// ═══════════════════════════════════════════════════════════════════════════════
// PP (PRAGMATIC PLAY) - Novo ranking de 46 jogos para TODAS as plataformas
// ═══════════════════════════════════════════════════════════════════════════════

const PP_NEW_ORDER = [
  "Zeus vs Hades – Gods of War",
  "Sweet Bonanza Super Scatter",
  "Lucky Tiger 1000",
  "Sugar Rush",
  "Gates of Olympus 1000",
  "Gates of Olympus",
  "Big Bass Boxing Bonus Round",
  "Starlight Princess",
  "Big Bass Bonanza 1000",
  "Sugar Rush 1000",
  "Lucky Monkey",
  "Wild West Duels",
  "The Dog House",
  "Tropicana Club",
  "Sweet Bonanza 1000",
  "Starlight Princess 1000",
  "Big Bass Secrets of the Golden Lake",
  "Bigger Bass Bonanza",
  "Joker's Jewels",
  "Zombie Carnival",
  "The Magic Cauldron",
  "Bigger Bass Splash",
  "Bounty Hunter",
  "Candy Stars",
  "After Hours 2",
  "Mermaid Riches",
  "Big Bass Splash 1000",
  "Big Bass Floats My Boat",
  "Fire Strike 2",
  "Starlight Princess Super",
  "Gates of Hades",
  "3 Buzzing Wilds",
  "Book of Cairo",
  "Lucky Dog",
  "Lucky Mouse",
  "Lucky Ox",
  "Captain Kraken Megaways",
  "Wild West Gold: Blazing Bounty",
  "Big Bass Halloween 2",
  "Gates of Olympus 1000 Dice",
  "Lobster Bob's Sea Food & Win It",
  "Genie's Gems",
  "Sweet Bonanza 1000 Dice",
  "Big Bass Mission Fishin'",
  "Dino Drop",
  "Finger Lickin' Free Spins"
];

// PP GAMES - Novo ranking para TODAS as plataformas (46 jogos)
const ppNewGamesData = {
  "Zeus vs Hades – Gods of War": {
    id: 101,
    name: "Zeus vs Hades – Gods of War",
    image: "/images/pp-new/Zeus vs Hades - Gods of War.png",
    bets: ["R$ 0,20", "R$ 0,50", "R$ 1,00"],
    basePayout: 91,
    category: "Greek",
    provider: "pp"
  },
  "Sweet Bonanza Super Scatter": {
    id: 102,
    name: "Sweet Bonanza Super Scatter",
    image: "/images/pp-new/Sweet Bonanza Super Dispersão.png",
    bets: ["R$ 0,20", "R$ 0,50", "R$ 1,00"],
    basePayout: 93,
    category: "Candy",
    provider: "pp"
  },
  "Lucky Tiger 1000": {
    id: 103,
    name: "Lucky Tiger 1000",
    image: "/images/pp-new/Tigre Sortudo 1000.png",
    bets: ["R$ 0,20", "R$ 0,50", "R$ 1,00"],
    basePayout: 92,
    category: "Fortune",
    provider: "pp"
  },
  "Sugar Rush": {
    id: 104,
    name: "Sugar Rush",
    image: "/images/pp-new/Sweet Rush Bonanza.png",
    bets: ["R$ 0,20", "R$ 0,50", "R$ 1,00"],
    basePayout: 87,
    category: "Sweet",
    provider: "pp"
  },
  "Gates of Olympus 1000": {
    id: 105,
    name: "Gates of Olympus 1000",
    image: "/images/pp-new/Gates of Olympus 1000.png",
    bets: ["R$ 0,20", "R$ 0,50", "R$ 1,00"],
    basePayout: 92,
    category: "Greek",
    provider: "pp"
  },
  "Gates of Olympus": {
    id: 106,
    name: "Gates of Olympus",
    image: "/images/pp-new/Portas de Olympus.png",
    bets: ["R$ 0,20", "R$ 0,50", "R$ 1,00"],
    basePayout: 89,
    category: "Greek",
    provider: "pp"
  },
  "Big Bass Boxing Bonus Round": {
    id: 107,
    name: "Big Bass Boxing Bonus Round",
    image: "/images/pp-new/Ronda Bónus de Boxe do Big Bass.png",
    bets: ["R$ 0,20", "R$ 0,50", "R$ 1,00"],
    basePayout: 88,
    category: "Fishing",
    provider: "pp"
  },
  "Starlight Princess": {
    id: 108,
    name: "Starlight Princess",
    image: "/images/pp-new/Vitórias da Luz das Estrelas.png",
    bets: ["R$ 0,20", "R$ 0,50", "R$ 1,00"],
    basePayout: 94,
    category: "Fantasy",
    provider: "pp"
  },
  "Big Bass Bonanza 1000": {
    id: 109,
    name: "Big Bass Bonanza 1000",
    image: "/images/pp-new/Bonança do Bass Gigante 1000.png",
    bets: ["R$ 0,20", "R$ 0,50", "R$ 1,00"],
    basePayout: 91,
    category: "Fishing",
    provider: "pp"
  },
  "Sugar Rush 1000": {
    id: 110,
    name: "Sugar Rush 1000",
    image: "/images/pp-new/Sugar Rush 1000.png",
    bets: ["R$ 0,20", "R$ 0,50", "R$ 1,00"],
    basePayout: 91,
    category: "Sweet",
    provider: "pp"
  },
  "Lucky Monkey": {
    id: 111,
    name: "Lucky Monkey",
    image: "/images/pp-new/Macaco Sortudo.png",
    bets: ["R$ 0,20", "R$ 0,50", "R$ 1,00"],
    basePayout: 86,
    category: "Fortune",
    provider: "pp"
  },
  "Wild West Duels": {
    id: 112,
    name: "Wild West Duels",
    image: "/images/pp-new/Wild West Duels.png",
    bets: ["R$ 0,20", "R$ 0,50", "R$ 1,00"],
    basePayout: 88,
    category: "Western",
    provider: "pp"
  },
  "The Dog House": {
    id: 113,
    name: "The Dog House",
    image: "/images/pp-new/Casa da Lagosta.png",
    bets: ["R$ 0,20", "R$ 0,50", "R$ 1,00"],
    basePayout: 85,
    category: "Animal",
    provider: "pp"
  },
  "Tropicana Club": {
    id: 114,
    name: "Tropicana Club",
    image: "/images/pp-new/Clube Tropicana – Hora Feliz.png",
    bets: ["R$ 0,20", "R$ 0,50", "R$ 1,00"],
    basePayout: 84,
    category: "Party",
    provider: "pp"
  },
  "Sweet Bonanza 1000": {
    id: 115,
    name: "Sweet Bonanza 1000",
    image: "/images/pp-new/Sweet Bonanza 1000.png",
    bets: ["R$ 0,20", "R$ 0,50", "R$ 1,00"],
    basePayout: 95,
    category: "Candy",
    provider: "pp"
  },
  "Starlight Princess 1000": {
    id: 116,
    name: "Starlight Princess 1000",
    image: "/images/pp-new/Princesa da Luz Estelar Super Brilhante.png",
    bets: ["R$ 0,20", "R$ 0,50", "R$ 1,00"],
    basePayout: 94,
    category: "Fantasy",
    provider: "pp"
  },
  "Big Bass Secrets of the Golden Lake": {
    id: 117,
    name: "Big Bass Secrets of the Golden Lake",
    image: "/images/pp-new/Big Bass Secrets of the Golden Lake.png",
    bets: ["R$ 0,20", "R$ 0,50", "R$ 1,00"],
    basePayout: 88,
    category: "Fishing",
    provider: "pp"
  },
  "Bigger Bass Bonanza": {
    id: 118,
    name: "Bigger Bass Bonanza",
    image: "/images/pp-new/Grande Bass Reel Repetir.png",
    bets: ["R$ 0,20", "R$ 0,50", "R$ 1,00"],
    basePayout: 87,
    category: "Fishing",
    provider: "pp"
  },
  "Joker's Jewels": {
    id: 119,
    name: "Joker's Jewels",
    image: "/images/pp-new/Joker's Jewels.png",
    bets: ["R$ 0,20", "R$ 0,50", "R$ 1,00"],
    basePayout: 83,
    category: "Classic",
    provider: "pp"
  },
  "Zombie Carnival": {
    id: 120,
    name: "Zombie Carnival",
    image: "/images/pp-new/Escola Zumbi Megaways.png",
    bets: ["R$ 0,20", "R$ 0,50", "R$ 1,00"],
    basePayout: 86,
    category: "Horror",
    provider: "pp"
  },
  "The Magic Cauldron": {
    id: 121,
    name: "The Magic Cauldron",
    image: "/images/pp-new/Mestre de Feitiços.png",
    bets: ["R$ 0,20", "R$ 0,50", "R$ 1,00"],
    basePayout: 85,
    category: "Fantasy",
    provider: "pp"
  },
  "Bigger Bass Splash": {
    id: 122,
    name: "Bigger Bass Splash",
    image: "/images/pp-new/Bigger Bass Splash.png",
    bets: ["R$ 0,20", "R$ 0,50", "R$ 1,00"],
    basePayout: 87,
    category: "Fishing",
    provider: "pp"
  },
  "Bounty Hunter": {
    id: 123,
    name: "Bounty Hunter",
    image: "/images/pp-new/Caçador de Recompensas.png",
    bets: ["R$ 0,20", "R$ 0,50", "R$ 1,00"],
    basePayout: 86,
    category: "Western",
    provider: "pp"
  },
  "Candy Stars": {
    id: 124,
    name: "Candy Stars",
    image: "/images/pp-new/Centenas e Milhares.png",
    bets: ["R$ 0,20", "R$ 0,50", "R$ 1,00"],
    basePayout: 84,
    category: "Candy",
    provider: "pp"
  },
  "After Hours 2": {
    id: 125,
    name: "After Hours 2",
    image: "/images/pp-new/Festa de Ouro 2 Depois do Expediente.png",
    bets: ["R$ 0,20", "R$ 0,50", "R$ 1,00"],
    basePayout: 85,
    category: "Party",
    provider: "pp"
  },
  "Mermaid Riches": {
    id: 126,
    name: "Mermaid Riches",
    image: "/images/pp-new/Tesouro da Sereia.png",
    bets: ["R$ 0,20", "R$ 0,50", "R$ 1,00"],
    basePayout: 86,
    category: "Sea",
    provider: "pp"
  },
  "Big Bass Splash 1000": {
    id: 127,
    name: "Big Bass Splash 1000",
    image: "/images/pp-new/Big Bass Respingo 1000.png",
    bets: ["R$ 0,20", "R$ 0,50", "R$ 1,00"],
    basePayout: 90,
    category: "Fishing",
    provider: "pp"
  },
  "Big Bass Floats My Boat": {
    id: 128,
    name: "Big Bass Floats My Boat",
    image: "/images/pp-new/Big Bass Floats My Boat.png",
    bets: ["R$ 0,20", "R$ 0,50", "R$ 1,00"],
    basePayout: 87,
    category: "Fishing",
    provider: "pp"
  },
  "Fire Strike 2": {
    id: 129,
    name: "Fire Strike 2",
    image: "/images/pp-new/Estampida de Fogo 2.png",
    bets: ["R$ 0,20", "R$ 0,50", "R$ 1,00"],
    basePayout: 85,
    category: "Fire",
    provider: "pp"
  },
  "Starlight Princess Super": {
    id: 130,
    name: "Starlight Princess Super",
    image: "/images/pp-new/Portões do Olimpo Super Dispersão.png",
    bets: ["R$ 0,20", "R$ 0,50", "R$ 1,00"],
    basePayout: 93,
    category: "Fantasy",
    provider: "pp"
  },
  "Gates of Hades": {
    id: 131,
    name: "Gates of Hades",
    image: "/images/pp-new/Portões do Hades.png",
    bets: ["R$ 0,20", "R$ 0,50", "R$ 1,00"],
    basePayout: 90,
    category: "Greek",
    provider: "pp"
  },
  "3 Buzzing Wilds": {
    id: 132,
    name: "3 Buzzing Wilds",
    image: "/images/pp-new/3 Buzzing Wilds.png",
    bets: ["R$ 0,20", "R$ 0,50", "R$ 1,00"],
    basePayout: 86,
    category: "Animal",
    provider: "pp"
  },
  "Book of Cairo": {
    id: 133,
    name: "Book of Cairo",
    image: "/images/pp-new/Código do Cairo.png",
    bets: ["R$ 0,20", "R$ 0,50", "R$ 1,00"],
    basePayout: 87,
    category: "Egyptian",
    provider: "pp"
  },
  "Lucky Dog": {
    id: 134,
    name: "Lucky Dog",
    image: "/images/pp-new/Cão Sortudo.png",
    bets: ["R$ 0,20", "R$ 0,50", "R$ 1,00"],
    basePayout: 84,
    category: "Fortune",
    provider: "pp"
  },
  "Lucky Mouse": {
    id: 135,
    name: "Lucky Mouse",
    image: "/images/pp-new/Ratinho Sortudo.png",
    bets: ["R$ 0,20", "R$ 0,50", "R$ 1,00"],
    basePayout: 84,
    category: "Fortune",
    provider: "pp"
  },
  "Lucky Ox": {
    id: 136,
    name: "Lucky Ox",
    image: "/images/pp-new/Touro Sortudo.png",
    bets: ["R$ 0,20", "R$ 0,50", "R$ 1,00"],
    basePayout: 85,
    category: "Fortune",
    provider: "pp"
  },
  "Captain Kraken Megaways": {
    id: 137,
    name: "Captain Kraken Megaways",
    image: "/images/pp-new/Capitão Kraken Megaways.png",
    bets: ["R$ 0,20", "R$ 0,50", "R$ 1,00"],
    basePayout: 88,
    category: "Sea",
    provider: "pp"
  },
  "Wild West Gold: Blazing Bounty": {
    id: 138,
    name: "Wild West Gold: Blazing Bounty",
    image: "/images/pp-new/Ouro Selvagem do Oeste Recompensa Ardente.png",
    bets: ["R$ 0,20", "R$ 0,50", "R$ 1,00"],
    basePayout: 89,
    category: "Western",
    provider: "pp"
  },
  "Big Bass Halloween 2": {
    id: 139,
    name: "Big Bass Halloween 2",
    image: "/images/pp-new/Big Bass Halloween 2.png",
    bets: ["R$ 0,20", "R$ 0,50", "R$ 1,00"],
    basePayout: 86,
    category: "Horror",
    provider: "pp"
  },
  "Gates of Olympus 1000 Dice": {
    id: 140,
    name: "Gates of Olympus 1000 Dice",
    image: "/images/pp-new/Portões do Olimpo 1000 Dados.png",
    bets: ["R$ 0,20", "R$ 0,50", "R$ 1,00"],
    basePayout: 91,
    category: "Greek",
    provider: "pp"
  },
  "Lobster Bob's Sea Food & Win It": {
    id: 141,
    name: "Lobster Bob's Sea Food & Win It",
    image: "/images/pp-new/Bigger Barn House Bonanza.png",
    bets: ["R$ 0,20", "R$ 0,50", "R$ 1,00"],
    basePayout: 85,
    category: "Sea",
    provider: "pp"
  },
  "Genie's Gems": {
    id: 142,
    name: "Genie's Gems",
    image: "/images/pp-new/Bonança de Gemas do Gênio.png",
    bets: ["R$ 0,20", "R$ 0,50", "R$ 1,00"],
    basePayout: 86,
    category: "Fantasy",
    provider: "pp"
  },
  "Sweet Bonanza 1000 Dice": {
    id: 143,
    name: "Sweet Bonanza 1000 Dice",
    image: "/images/pp-new/Sweet Bonanza 1000 Dados.png",
    bets: ["R$ 0,20", "R$ 0,50", "R$ 1,00"],
    basePayout: 94,
    category: "Candy",
    provider: "pp"
  },
  "Big Bass Mission Fishin'": {
    id: 144,
    name: "Big Bass Mission Fishin'",
    image: "/images/pp-new/Big Bass Mission Fishin.png",
    bets: ["R$ 0,20", "R$ 0,50", "R$ 1,00"],
    basePayout: 87,
    category: "Fishing",
    provider: "pp"
  },
  "Dino Drop": {
    id: 145,
    name: "Dino Drop",
    image: "/images/pp-new/Queda de Dinossauro.png",
    bets: ["R$ 0,20", "R$ 0,50", "R$ 1,00"],
    basePayout: 85,
    category: "Animal",
    provider: "pp"
  },
  "Finger Lickin' Free Spins": {
    id: 146,
    name: "Finger Lickin' Free Spins",
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
  "Olympus Rivals",
  "Lucky Bags",
  "3 Lucky Souls",
  "Moon Guardians",
  "Gods of Sand",
  "3 Dead",
  "3 Energy Crowns",
  "3 Spiritual Volcanoes",
  "Lucky Brothers",
  "3 Tombs",
  "Flaming Crown Deluxe",
  "Diamond Invasion",
  "Triple Chili",
  "Thunder & Love",
  "5 Fruit Invaders",
  "Fruits & Coins",
  "Power of Hades",
  "Piggy Coins",
  "Fruit Invaders",
  "3 Totem Animals",
  "Voodoo Amulets",
  "Samurai Cats",
  "Cube Guys",
  "Dice Invaders",
  "Regal Fruits 1000",
  "Coinboy Riches",
  "Skull Coins",
  "Maximum Fury",
  "Cricket 1st League",
  "Olympus Blessing",
  "Monkey Friend 2",
  "Mega Crown",
  "Punk Monkey",
  "Gift Mania",
  "VIP Fruits",
  "Crime City",
  "Lamp of Wishes",
  "Galactic Chase",
  "Dragon Destiny",
  "Vampire Joker",
  "Kingdom Crown",
  "Book of Zeus",
  "Rabbit Bonanza",
  "3 Pharaohs",
  "Easy Money",
  "Dice Club",
  "Fruit Explosion",
  "Miss Neko",
  "Fiery Phoenix",
  "3 Frozen Crowns"
];

const amigoGamesData = {
  "Olympus Rivals": {
    id: 201, name: "Olympus Rivals", image: "/images/amigo/1.png",
    bets: ["R$ 0,20", "R$ 0,50", "R$ 1,00"], basePayout: 89, category: "Greek", provider: "amigo"
  },
  "Lucky Bags": {
    id: 202, name: "Lucky Bags", image: "/images/amigo/2.png",
    bets: ["R$ 0,20", "R$ 0,50", "R$ 1,00"], basePayout: 87, category: "Fortune", provider: "amigo"
  },
  "3 Lucky Souls": {
    id: 203, name: "3 Lucky Souls", image: "/images/amigo/3.png",
    bets: ["R$ 0,20", "R$ 0,50", "R$ 1,00"], basePayout: 86, category: "Horror", provider: "amigo"
  },
  "Moon Guardians": {
    id: 204, name: "Moon Guardians", image: "/images/amigo/4.png",
    bets: ["R$ 0,20", "R$ 0,50", "R$ 1,00"], basePayout: 88, category: "Fantasy", provider: "amigo"
  },
  "Gods of Sand": {
    id: 205, name: "Gods of Sand", image: "/images/amigo/5.png",
    bets: ["R$ 0,20", "R$ 0,50", "R$ 1,00"], basePayout: 90, category: "Egyptian", provider: "amigo"
  },
  "3 Dead": {
    id: 206, name: "3 Dead", image: "/images/amigo/6.png",
    bets: ["R$ 0,20", "R$ 0,50", "R$ 1,00"], basePayout: 85, category: "Horror", provider: "amigo"
  },
  "3 Energy Crowns": {
    id: 207, name: "3 Energy Crowns", image: "/images/amigo/7.png",
    bets: ["R$ 0,20", "R$ 0,50", "R$ 1,00"], basePayout: 87, category: "Classic", provider: "amigo"
  },
  "3 Spiritual Volcanoes": {
    id: 208, name: "3 Spiritual Volcanoes", image: "/images/amigo/8.png",
    bets: ["R$ 0,20", "R$ 0,50", "R$ 1,00"], basePayout: 86, category: "Nature", provider: "amigo"
  },
  "Lucky Brothers": {
    id: 209, name: "Lucky Brothers", image: "/images/amigo/9.png",
    bets: ["R$ 0,20", "R$ 0,50", "R$ 1,00"], basePayout: 84, category: "Fortune", provider: "amigo"
  },
  "3 Tombs": {
    id: 210, name: "3 Tombs", image: "/images/amigo/10.png",
    bets: ["R$ 0,20", "R$ 0,50", "R$ 1,00"], basePayout: 88, category: "Egyptian", provider: "amigo"
  },
  "Flaming Crown Deluxe": {
    id: 211, name: "Flaming Crown Deluxe", image: "/images/amigo/11.png",
    bets: ["R$ 0,20", "R$ 0,50", "R$ 1,00"], basePayout: 89, category: "Fire", provider: "amigo"
  },
  "Diamond Invasion": {
    id: 212, name: "Diamond Invasion", image: "/images/amigo/12.png",
    bets: ["R$ 0,20", "R$ 0,50", "R$ 1,00"], basePayout: 87, category: "Gems", provider: "amigo"
  },
  "Triple Chili": {
    id: 213, name: "Triple Chili", image: "/images/amigo/13.png",
    bets: ["R$ 0,20", "R$ 0,50", "R$ 1,00"], basePayout: 85, category: "Food", provider: "amigo"
  },
  "Thunder & Love": {
    id: 214, name: "Thunder & Love", image: "/images/amigo/14.png",
    bets: ["R$ 0,20", "R$ 0,50", "R$ 1,00"], basePayout: 86, category: "Fantasy", provider: "amigo"
  },
  "5 Fruit Invaders": {
    id: 215, name: "5 Fruit Invaders", image: "/images/amigo/15.png",
    bets: ["R$ 0,20", "R$ 0,50", "R$ 1,00"], basePayout: 84, category: "Fruit", provider: "amigo"
  },
  "Fruits & Coins": {
    id: 216, name: "Fruits & Coins", image: "/images/amigo/16.png",
    bets: ["R$ 0,20", "R$ 0,50", "R$ 1,00"], basePayout: 83, category: "Fruit", provider: "amigo"
  },
  "Power of Hades": {
    id: 217, name: "Power of Hades", image: "/images/amigo/17.png",
    bets: ["R$ 0,20", "R$ 0,50", "R$ 1,00"], basePayout: 90, category: "Greek", provider: "amigo"
  },
  "Piggy Coins": {
    id: 218, name: "Piggy Coins", image: "/images/amigo/18.png",
    bets: ["R$ 0,20", "R$ 0,50", "R$ 1,00"], basePayout: 85, category: "Animal", provider: "amigo"
  },
  "Fruit Invaders": {
    id: 219, name: "Fruit Invaders", image: "/images/amigo/19.png",
    bets: ["R$ 0,20", "R$ 0,50", "R$ 1,00"], basePayout: 84, category: "Fruit", provider: "amigo"
  },
  "3 Totem Animals": {
    id: 220, name: "3 Totem Animals", image: "/images/amigo/20.png",
    bets: ["R$ 0,20", "R$ 0,50", "R$ 1,00"], basePayout: 87, category: "Animal", provider: "amigo"
  },
  "Voodoo Amulets": {
    id: 221, name: "Voodoo Amulets", image: "/images/amigo/21.png",
    bets: ["R$ 0,20", "R$ 0,50", "R$ 1,00"], basePayout: 86, category: "Horror", provider: "amigo"
  },
  "Samurai Cats": {
    id: 222, name: "Samurai Cats", image: "/images/amigo/22.png",
    bets: ["R$ 0,20", "R$ 0,50", "R$ 1,00"], basePayout: 88, category: "Asian", provider: "amigo"
  },
  "Cube Guys": {
    id: 223, name: "Cube Guys", image: "/images/amigo/23.png",
    bets: ["R$ 0,20", "R$ 0,50", "R$ 1,00"], basePayout: 83, category: "Fun", provider: "amigo"
  },
  "Dice Invaders": {
    id: 224, name: "Dice Invaders", image: "/images/amigo/24.png",
    bets: ["R$ 0,20", "R$ 0,50", "R$ 1,00"], basePayout: 85, category: "Classic", provider: "amigo"
  },
  "Regal Fruits 1000": {
    id: 225, name: "Regal Fruits 1000", image: "/images/amigo/25.png",
    bets: ["R$ 0,20", "R$ 0,50", "R$ 1,00"], basePayout: 91, category: "Fruit", provider: "amigo"
  },
  "Coinboy Riches": {
    id: 226, name: "Coinboy Riches", image: "/images/amigo/26.png",
    bets: ["R$ 0,20", "R$ 0,50", "R$ 1,00"], basePayout: 86, category: "Money", provider: "amigo"
  },
  "Skull Coins": {
    id: 227, name: "Skull Coins", image: "/images/amigo/27.png",
    bets: ["R$ 0,20", "R$ 0,50", "R$ 1,00"], basePayout: 85, category: "Horror", provider: "amigo"
  },
  "Maximum Fury": {
    id: 228, name: "Maximum Fury", image: "/images/amigo/28.png",
    bets: ["R$ 0,20", "R$ 0,50", "R$ 1,00"], basePayout: 89, category: "Action", provider: "amigo"
  },
  "Cricket 1st League": {
    id: 229, name: "Cricket 1st League", image: "/images/amigo/29.png",
    bets: ["R$ 0,20", "R$ 0,50", "R$ 1,00"], basePayout: 84, category: "Sports", provider: "amigo"
  },
  "Olympus Blessing": {
    id: 230, name: "Olympus Blessing", image: "/images/amigo/30.png",
    bets: ["R$ 0,20", "R$ 0,50", "R$ 1,00"], basePayout: 90, category: "Greek", provider: "amigo"
  },
  "Monkey Friend 2": {
    id: 231, name: "Monkey Friend 2", image: "/images/amigo/31.png",
    bets: ["R$ 0,20", "R$ 0,50", "R$ 1,00"], basePayout: 86, category: "Animal", provider: "amigo"
  },
  "Mega Crown": {
    id: 232, name: "Mega Crown", image: "/images/amigo/32.png",
    bets: ["R$ 0,20", "R$ 0,50", "R$ 1,00"], basePayout: 88, category: "Classic", provider: "amigo"
  },
  "Punk Monkey": {
    id: 233, name: "Punk Monkey", image: "/images/amigo/33.png",
    bets: ["R$ 0,20", "R$ 0,50", "R$ 1,00"], basePayout: 85, category: "Animal", provider: "amigo"
  },
  "Gift Mania": {
    id: 234, name: "Gift Mania", image: "/images/amigo/34.png",
    bets: ["R$ 0,20", "R$ 0,50", "R$ 1,00"], basePayout: 84, category: "Party", provider: "amigo"
  },
  "VIP Fruits": {
    id: 235, name: "VIP Fruits", image: "/images/amigo/35.png",
    bets: ["R$ 0,20", "R$ 0,50", "R$ 1,00"], basePayout: 83, category: "Fruit", provider: "amigo"
  },
  "Crime City": {
    id: 236, name: "Crime City", image: "/images/amigo/36.png",
    bets: ["R$ 0,20", "R$ 0,50", "R$ 1,00"], basePayout: 87, category: "Action", provider: "amigo"
  },
  "Lamp of Wishes": {
    id: 237, name: "Lamp of Wishes", image: "/images/amigo/37.png",
    bets: ["R$ 0,20", "R$ 0,50", "R$ 1,00"], basePayout: 88, category: "Fantasy", provider: "amigo"
  },
  "Galactic Chase": {
    id: 238, name: "Galactic Chase", image: "/images/amigo/38.png",
    bets: ["R$ 0,20", "R$ 0,50", "R$ 1,00"], basePayout: 86, category: "Space", provider: "amigo"
  },
  "Dragon Destiny": {
    id: 239, name: "Dragon Destiny", image: "/images/amigo/39.png",
    bets: ["R$ 0,20", "R$ 0,50", "R$ 1,00"], basePayout: 89, category: "Dragon", provider: "amigo"
  },
  "Vampire Joker": {
    id: 240, name: "Vampire Joker", image: "/images/amigo/40.png",
    bets: ["R$ 0,20", "R$ 0,50", "R$ 1,00"], basePayout: 85, category: "Horror", provider: "amigo"
  },
  "Kingdom Crown": {
    id: 241, name: "Kingdom Crown", image: "/images/amigo/41.png",
    bets: ["R$ 0,20", "R$ 0,50", "R$ 1,00"], basePayout: 87, category: "Kingdom", provider: "amigo"
  },
  "Book of Zeus": {
    id: 242, name: "Book of Zeus", image: "/images/amigo/42.png",
    bets: ["R$ 0,20", "R$ 0,50", "R$ 1,00"], basePayout: 90, category: "Greek", provider: "amigo"
  },
  "Rabbit Bonanza": {
    id: 243, name: "Rabbit Bonanza", image: "/images/amigo/43.png",
    bets: ["R$ 0,20", "R$ 0,50", "R$ 1,00"], basePayout: 86, category: "Animal", provider: "amigo"
  },
  "3 Pharaohs": {
    id: 244, name: "3 Pharaohs", image: "/images/amigo/44.png",
    bets: ["R$ 0,20", "R$ 0,50", "R$ 1,00"], basePayout: 88, category: "Egyptian", provider: "amigo"
  },
  "Easy Money": {
    id: 245, name: "Easy Money", image: "/images/amigo/45.png",
    bets: ["R$ 0,20", "R$ 0,50", "R$ 1,00"], basePayout: 84, category: "Money", provider: "amigo"
  },
  "Dice Club": {
    id: 246, name: "Dice Club", image: "/images/amigo/46.png",
    bets: ["R$ 0,20", "R$ 0,50", "R$ 1,00"], basePayout: 83, category: "Classic", provider: "amigo"
  },
  "Fruit Explosion": {
    id: 247, name: "Fruit Explosion", image: "/images/amigo/47.png",
    bets: ["R$ 0,20", "R$ 0,50", "R$ 1,00"], basePayout: 85, category: "Fruit", provider: "amigo"
  },
  "Miss Neko": {
    id: 248, name: "Miss Neko", image: "/images/amigo/48.png",
    bets: ["R$ 0,20", "R$ 0,50", "R$ 1,00"], basePayout: 86, category: "Asian", provider: "amigo"
  },
  "Fiery Phoenix": {
    id: 249, name: "Fiery Phoenix", image: "/images/amigo/49.png",
    bets: ["R$ 0,20", "R$ 0,50", "R$ 1,00"], basePayout: 88, category: "Fire", provider: "amigo"
  },
  "3 Frozen Crowns": {
    id: 250, name: "3 Frozen Crowns", image: "/images/amigo/50.png",
    bets: ["R$ 0,20", "R$ 0,50", "R$ 1,00"], basePayout: 87, category: "Ice", provider: "amigo"
  }
};

// ═══════════════════════════════════════════════════════════════════════════════
// MICRO GAMING - 49 jogos APENAS para AG, BG, WG
// ═══════════════════════════════════════════════════════════════════════════════

const MICROGAMING_ORDER = [
  "12 Skulls of the Dead",
  "3 Angels Power Combo",
  "3 Flaming Volcanoes Power Combo",
  "Ancient Fortunes: Zeus",
  "Andvari: The Golden Fish",
  "African Adventure",
  "Abundant Birds",
  "Extreme Gold Blitz",
  "Bronco Big Bounty",
  "Blessing of Prosperity",
  "Bass Capture Super Up",
  "Carnival Party",
  "Sweet Pot Combo",
  "Ice Joker",
  "Golden Dice",
  "Diamond Diva Pig",
  "Money on the Reels",
  "Sweet Wild Rush 2",
  "Frenetic Joker Explosion",
  "Night Chicken Fever",
  "Fire and Roses Joker",
  "Fishin' Bigger Pots of Gold™",
  "FlyX",
  "Asgardian Fire",
  "Golden Cat Fortunes",
  "Treasure Gems",
  "Hatching Gold! Rooster's Riches",
  "Poseidon's Mighty Empire",
  "Diamond Inferno",
  "Lucky Twins Jackpot",
  "Sugar Mania 8000",
  "Monkey Bonanza",
  "Solid Gold",
  "Wild Treasure Stacks",
  "Queen of Alexandria™",
  "Reign of Fire",
  "Extreme Money Lightning",
  "Locked Riches of the Mummy",
  "Dragon Rhythm Link&Win",
  "Moonlight Romance – Awakening",
  "African Wilds",
  "Sweet Jar Christmas Combo",
  "Stellar Treasure 7 Wilds",
  "Tiger Treasures",
  "Lost Treasures of Hades",
  "Joker Loko Multiplier Trail",
  "3 Aztec Riches Power Combo",
  "Bears Make Bank! Power Combo",
  "Go! Fishing Fortune Reels"
];

const microgamingGamesData = {
  "12 Skulls of the Dead": {
    id: 301, name: "12 Skulls of the Dead", image: "/images/microgaming/1.png",
    bets: ["R$ 0,20", "R$ 0,50", "R$ 1,00"], basePayout: 89, category: "Horror", provider: "microgaming"
  },
  "3 Angels Power Combo": {
    id: 302, name: "3 Angels Power Combo", image: "/images/microgaming/2.png",
    bets: ["R$ 0,20", "R$ 0,50", "R$ 1,00"], basePayout: 87, category: "Fantasy", provider: "microgaming"
  },
  "3 Flaming Volcanoes Power Combo": {
    id: 303, name: "3 Flaming Volcanoes Power Combo", image: "/images/microgaming/3.png",
    bets: ["R$ 0,20", "R$ 0,50", "R$ 1,00"], basePayout: 88, category: "Fire", provider: "microgaming"
  },
  "Ancient Fortunes: Zeus": {
    id: 304, name: "Ancient Fortunes: Zeus", image: "/images/microgaming/4.png",
    bets: ["R$ 0,20", "R$ 0,50", "R$ 1,00"], basePayout: 91, category: "Greek", provider: "microgaming"
  },
  "Andvari: The Golden Fish": {
    id: 305, name: "Andvari: The Golden Fish", image: "/images/microgaming/5.png",
    bets: ["R$ 0,20", "R$ 0,50", "R$ 1,00"], basePayout: 86, category: "Sea", provider: "microgaming"
  },
  "African Adventure": {
    id: 306, name: "African Adventure", image: "/images/microgaming/6.png",
    bets: ["R$ 0,20", "R$ 0,50", "R$ 1,00"], basePayout: 85, category: "Adventure", provider: "microgaming"
  },
  "Abundant Birds": {
    id: 307, name: "Abundant Birds", image: "/images/microgaming/7.png",
    bets: ["R$ 0,20", "R$ 0,50", "R$ 1,00"], basePayout: 84, category: "Animal", provider: "microgaming"
  },
  "Extreme Gold Blitz": {
    id: 308, name: "Extreme Gold Blitz", image: "/images/microgaming/8.png",
    bets: ["R$ 0,20", "R$ 0,50", "R$ 1,00"], basePayout: 90, category: "Gold", provider: "microgaming"
  },
  "Bronco Big Bounty": {
    id: 309, name: "Bronco Big Bounty", image: "/images/microgaming/9.png",
    bets: ["R$ 0,20", "R$ 0,50", "R$ 1,00"], basePayout: 87, category: "Western", provider: "microgaming"
  },
  "Blessing of Prosperity": {
    id: 310, name: "Blessing of Prosperity", image: "/images/microgaming/10.png",
    bets: ["R$ 0,20", "R$ 0,50", "R$ 1,00"], basePayout: 88, category: "Asian", provider: "microgaming"
  },
  "Bass Capture Super Up": {
    id: 311, name: "Bass Capture Super Up", image: "/images/microgaming/11.png",
    bets: ["R$ 0,20", "R$ 0,50", "R$ 1,00"], basePayout: 86, category: "Fishing", provider: "microgaming"
  },
  "Carnival Party": {
    id: 312, name: "Carnival Party", image: "/images/microgaming/12.png",
    bets: ["R$ 0,20", "R$ 0,50", "R$ 1,00"], basePayout: 85, category: "Party", provider: "microgaming"
  },
  "Sweet Pot Combo": {
    id: 313, name: "Sweet Pot Combo", image: "/images/microgaming/13.png",
    bets: ["R$ 0,20", "R$ 0,50", "R$ 1,00"], basePayout: 87, category: "Candy", provider: "microgaming"
  },
  "Ice Joker": {
    id: 314, name: "Ice Joker", image: "/images/microgaming/14.png",
    bets: ["R$ 0,20", "R$ 0,50", "R$ 1,00"], basePayout: 84, category: "Classic", provider: "microgaming"
  },
  "Golden Dice": {
    id: 315, name: "Golden Dice", image: "/images/microgaming/15.png",
    bets: ["R$ 0,20", "R$ 0,50", "R$ 1,00"], basePayout: 83, category: "Classic", provider: "microgaming"
  },
  "Diamond Diva Pig": {
    id: 316, name: "Diamond Diva Pig", image: "/images/microgaming/16.png",
    bets: ["R$ 0,20", "R$ 0,50", "R$ 1,00"], basePayout: 86, category: "Animal", provider: "microgaming"
  },
  "Money on the Reels": {
    id: 317, name: "Money on the Reels", image: "/images/microgaming/17.png",
    bets: ["R$ 0,20", "R$ 0,50", "R$ 1,00"], basePayout: 88, category: "Money", provider: "microgaming"
  },
  "Sweet Wild Rush 2": {
    id: 318, name: "Sweet Wild Rush 2", image: "/images/microgaming/18.png",
    bets: ["R$ 0,20", "R$ 0,50", "R$ 1,00"], basePayout: 89, category: "Candy", provider: "microgaming"
  },
  "Frenetic Joker Explosion": {
    id: 319, name: "Frenetic Joker Explosion", image: "/images/microgaming/19.png",
    bets: ["R$ 0,20", "R$ 0,50", "R$ 1,00"], basePayout: 87, category: "Classic", provider: "microgaming"
  },
  "Night Chicken Fever": {
    id: 320, name: "Night Chicken Fever", image: "/images/microgaming/20.png",
    bets: ["R$ 0,20", "R$ 0,50", "R$ 1,00"], basePayout: 85, category: "Animal", provider: "microgaming"
  },
  "Fire and Roses Joker": {
    id: 321, name: "Fire and Roses Joker", image: "/images/microgaming/21.png",
    bets: ["R$ 0,20", "R$ 0,50", "R$ 1,00"], basePayout: 86, category: "Classic", provider: "microgaming"
  },
  "Fishin' Bigger Pots of Gold™": {
    id: 322, name: "Fishin' Bigger Pots of Gold™", image: "/images/microgaming/22.png",
    bets: ["R$ 0,20", "R$ 0,50", "R$ 1,00"], basePayout: 88, category: "Fishing", provider: "microgaming"
  },
  "FlyX": {
    id: 323, name: "FlyX", image: "/images/microgaming/23.png",
    bets: ["R$ 0,20", "R$ 0,50", "R$ 1,00"], basePayout: 90, category: "Crash", provider: "microgaming"
  },
  "Asgardian Fire": {
    id: 324, name: "Asgardian Fire", image: "/images/microgaming/24.png",
    bets: ["R$ 0,20", "R$ 0,50", "R$ 1,00"], basePayout: 89, category: "Norse", provider: "microgaming"
  },
  "Golden Cat Fortunes": {
    id: 325, name: "Golden Cat Fortunes", image: "/images/microgaming/25.png",
    bets: ["R$ 0,20", "R$ 0,50", "R$ 1,00"], basePayout: 87, category: "Asian", provider: "microgaming"
  },
  "Treasure Gems": {
    id: 326, name: "Treasure Gems", image: "/images/microgaming/26.png",
    bets: ["R$ 0,20", "R$ 0,50", "R$ 1,00"], basePayout: 85, category: "Gems", provider: "microgaming"
  },
  "Hatching Gold! Rooster's Riches": {
    id: 327, name: "Hatching Gold! Rooster's Riches", image: "/images/microgaming/27.png",
    bets: ["R$ 0,20", "R$ 0,50", "R$ 1,00"], basePayout: 86, category: "Animal", provider: "microgaming"
  },
  "Poseidon's Mighty Empire": {
    id: 328, name: "Poseidon's Mighty Empire", image: "/images/microgaming/28.png",
    bets: ["R$ 0,20", "R$ 0,50", "R$ 1,00"], basePayout: 91, category: "Greek", provider: "microgaming"
  },
  "Diamond Inferno": {
    id: 329, name: "Diamond Inferno", image: "/images/microgaming/29.png",
    bets: ["R$ 0,20", "R$ 0,50", "R$ 1,00"], basePayout: 88, category: "Gems", provider: "microgaming"
  },
  "Lucky Twins Jackpot": {
    id: 330, name: "Lucky Twins Jackpot", image: "/images/microgaming/30.png",
    bets: ["R$ 0,20", "R$ 0,50", "R$ 1,00"], basePayout: 87, category: "Asian", provider: "microgaming"
  },
  "Sugar Mania 8000": {
    id: 331, name: "Sugar Mania 8000", image: "/images/microgaming/31.png",
    bets: ["R$ 0,20", "R$ 0,50", "R$ 1,00"], basePayout: 92, category: "Candy", provider: "microgaming"
  },
  "Monkey Bonanza": {
    id: 332, name: "Monkey Bonanza", image: "/images/microgaming/32.png",
    bets: ["R$ 0,20", "R$ 0,50", "R$ 1,00"], basePayout: 86, category: "Animal", provider: "microgaming"
  },
  "Solid Gold": {
    id: 333, name: "Solid Gold", image: "/images/microgaming/33.png",
    bets: ["R$ 0,20", "R$ 0,50", "R$ 1,00"], basePayout: 85, category: "Gold", provider: "microgaming"
  },
  "Wild Treasure Stacks": {
    id: 334, name: "Wild Treasure Stacks", image: "/images/microgaming/34.png",
    bets: ["R$ 0,20", "R$ 0,50", "R$ 1,00"], basePayout: 87, category: "Adventure", provider: "microgaming"
  },
  "Queen of Alexandria™": {
    id: 335, name: "Queen of Alexandria™", image: "/images/microgaming/35.png",
    bets: ["R$ 0,20", "R$ 0,50", "R$ 1,00"], basePayout: 89, category: "Egyptian", provider: "microgaming"
  },
  "Reign of Fire": {
    id: 336, name: "Reign of Fire", image: "/images/microgaming/36.png",
    bets: ["R$ 0,20", "R$ 0,50", "R$ 1,00"], basePayout: 88, category: "Dragon", provider: "microgaming"
  },
  "Extreme Money Lightning": {
    id: 337, name: "Extreme Money Lightning", image: "/images/microgaming/37.png",
    bets: ["R$ 0,20", "R$ 0,50", "R$ 1,00"], basePayout: 90, category: "Money", provider: "microgaming"
  },
  "Locked Riches of the Mummy": {
    id: 338, name: "Locked Riches of the Mummy", image: "/images/microgaming/38.png",
    bets: ["R$ 0,20", "R$ 0,50", "R$ 1,00"], basePayout: 87, category: "Egyptian", provider: "microgaming"
  },
  "Dragon Rhythm Link&Win": {
    id: 339, name: "Dragon Rhythm Link&Win", image: "/images/microgaming/39.png",
    bets: ["R$ 0,20", "R$ 0,50", "R$ 1,00"], basePayout: 88, category: "Dragon", provider: "microgaming"
  },
  "Moonlight Romance – Awakening": {
    id: 340, name: "Moonlight Romance – Awakening", image: "/images/microgaming/40.png",
    bets: ["R$ 0,20", "R$ 0,50", "R$ 1,00"], basePayout: 86, category: "Fantasy", provider: "microgaming"
  },
  "African Wilds": {
    id: 341, name: "African Wilds", image: "/images/microgaming/41.png",
    bets: ["R$ 0,20", "R$ 0,50", "R$ 1,00"], basePayout: 85, category: "Adventure", provider: "microgaming"
  },
  "Sweet Jar Christmas Combo": {
    id: 342, name: "Sweet Jar Christmas Combo", image: "/images/microgaming/42.png",
    bets: ["R$ 0,20", "R$ 0,50", "R$ 1,00"], basePayout: 84, category: "Holiday", provider: "microgaming"
  },
  "Stellar Treasure 7 Wilds": {
    id: 343, name: "Stellar Treasure 7 Wilds", image: "/images/microgaming/43.png",
    bets: ["R$ 0,20", "R$ 0,50", "R$ 1,00"], basePayout: 87, category: "Space", provider: "microgaming"
  },
  "Tiger Treasures": {
    id: 344, name: "Tiger Treasures", image: "/images/microgaming/44.png",
    bets: ["R$ 0,20", "R$ 0,50", "R$ 1,00"], basePayout: 88, category: "Asian", provider: "microgaming"
  },
  "Lost Treasures of Hades": {
    id: 345, name: "Lost Treasures of Hades", image: "/images/microgaming/45.png",
    bets: ["R$ 0,20", "R$ 0,50", "R$ 1,00"], basePayout: 90, category: "Greek", provider: "microgaming"
  },
  "Joker Loko Multiplier Trail": {
    id: 346, name: "Joker Loko Multiplier Trail", image: "/images/microgaming/46.png",
    bets: ["R$ 0,20", "R$ 0,50", "R$ 1,00"], basePayout: 86, category: "Classic", provider: "microgaming"
  },
  "3 Aztec Riches Power Combo": {
    id: 347, name: "3 Aztec Riches Power Combo", image: "/images/microgaming/47.png",
    bets: ["R$ 0,20", "R$ 0,50", "R$ 1,00"], basePayout: 88, category: "Adventure", provider: "microgaming"
  },
  "Bears Make Bank! Power Combo": {
    id: 348, name: "Bears Make Bank! Power Combo", image: "/images/microgaming/48.png",
    bets: ["R$ 0,20", "R$ 0,50", "R$ 1,00"], basePayout: 87, category: "Animal", provider: "microgaming"
  },
  "Go! Fishing Fortune Reels": {
    id: 349, name: "Go! Fishing Fortune Reels", image: "/images/microgaming/49.png",
    bets: ["R$ 0,20", "R$ 0,50", "R$ 1,00"], basePayout: 86, category: "Fishing", provider: "microgaming"
  }
};

// ═══════════════════════════════════════════════════════════════════════════════
// FA CHAI GAMING - 50 jogos APENAS para AG, BG, WG
// ═══════════════════════════════════════════════════════════════════════════════

const FACHAI_ORDER = [
  "Fortune Sheep 3x3",
  "Roma Gladiatrix",
  "Tomb Secrets",
  "Poker Win",
  "Jungle Bang Bang",
  "Sugar Bang Bang 2",
  "Buffalo Ways",
  "King's Sword",
  "Phoenix Fever",
  "Goddess of Fortune",
  "Odin's Treasures",
  "Chihuahua",
  "Koi Jumping for Gold",
  "Three Little Pigs",
  "Poker Win 2",
  "Egyptian Bonanza",
  "Candy Burst",
  "Boxing Riches",
  "Lucky Cat",
  "Inca Queen",
  "Treasure Quest",
  "New Year's Eve 2",
  "Fortune Dragon",
  "Cyber Fortune God",
  "Fusion Magic",
  "Lucky Fortunes 3x3",
  "Chinese New Year Moreways",
  "Money Machine Catla",
  "Legend of Inca",
  "Zeus",
  "Magic Lamp",
  "Giant Sea Treasure Hunt",
  "Sugar Bang Bang Plus",
  "Night Market 2",
  "Crazy Bison",
  "Golden Lucky Egg",
  "Super Elements",
  "Rich Tycoon",
  "Lucky Fortunes",
  "Click to Send",
  "Gladiators",
  "Circus Coin Pusher",
  "Treasure Hunt",
  "Mines",
  "Magic Beans",
  "DJ Boom Boom",
  "Night Market",
  "Fortune Muscle Cat",
  "Robin Hood",
  "New Year's Eve"
];

const fachaiGamesData = {
  "Fortune Sheep 3x3": {
    id: 401, name: "Fortune Sheep 3x3", image: "/images/fachai/1.png",
    bets: ["R$ 0,20", "R$ 0,50", "R$ 1,00"], basePayout: 87, category: "Fortune", provider: "fachai"
  },
  "Roma Gladiatrix": {
    id: 402, name: "Roma Gladiatrix", image: "/images/fachai/2.png",
    bets: ["R$ 0,20", "R$ 0,50", "R$ 1,00"], basePayout: 88, category: "Roman", provider: "fachai"
  },
  "Tomb Secrets": {
    id: 403, name: "Tomb Secrets", image: "/images/fachai/3.png",
    bets: ["R$ 0,20", "R$ 0,50", "R$ 1,00"], basePayout: 86, category: "Egyptian", provider: "fachai"
  },
  "Poker Win": {
    id: 404, name: "Poker Win", image: "/images/fachai/4.png",
    bets: ["R$ 0,20", "R$ 0,50", "R$ 1,00"], basePayout: 85, category: "Cards", provider: "fachai"
  },
  "Jungle Bang Bang": {
    id: 405, name: "Jungle Bang Bang", image: "/images/fachai/5.png",
    bets: ["R$ 0,20", "R$ 0,50", "R$ 1,00"], basePayout: 87, category: "Adventure", provider: "fachai"
  },
  "Sugar Bang Bang 2": {
    id: 406, name: "Sugar Bang Bang 2", image: "/images/fachai/6.png",
    bets: ["R$ 0,20", "R$ 0,50", "R$ 1,00"], basePayout: 89, category: "Candy", provider: "fachai"
  },
  "Buffalo Ways": {
    id: 407, name: "Buffalo Ways", image: "/images/fachai/7.png",
    bets: ["R$ 0,20", "R$ 0,50", "R$ 1,00"], basePayout: 88, category: "Animal", provider: "fachai"
  },
  "King's Sword": {
    id: 408, name: "King's Sword", image: "/images/fachai/8.png",
    bets: ["R$ 0,20", "R$ 0,50", "R$ 1,00"], basePayout: 86, category: "Kingdom", provider: "fachai"
  },
  "Phoenix Fever": {
    id: 409, name: "Phoenix Fever", image: "/images/fachai/9.png",
    bets: ["R$ 0,20", "R$ 0,50", "R$ 1,00"], basePayout: 90, category: "Fire", provider: "fachai"
  },
  "Goddess of Fortune": {
    id: 410, name: "Goddess of Fortune", image: "/images/fachai/10.png",
    bets: ["R$ 0,20", "R$ 0,50", "R$ 1,00"], basePayout: 89, category: "Fortune", provider: "fachai"
  },
  "Odin's Treasures": {
    id: 411, name: "Odin's Treasures", image: "/images/fachai/11.png",
    bets: ["R$ 0,20", "R$ 0,50", "R$ 1,00"], basePayout: 88, category: "Norse", provider: "fachai"
  },
  "Chihuahua": {
    id: 412, name: "Chihuahua", image: "/images/fachai/12.png",
    bets: ["R$ 0,20", "R$ 0,50", "R$ 1,00"], basePayout: 84, category: "Animal", provider: "fachai"
  },
  "Koi Jumping for Gold": {
    id: 413, name: "Koi Jumping for Gold", image: "/images/fachai/13.png",
    bets: ["R$ 0,20", "R$ 0,50", "R$ 1,00"], basePayout: 87, category: "Asian", provider: "fachai"
  },
  "Three Little Pigs": {
    id: 414, name: "Three Little Pigs", image: "/images/fachai/14.png",
    bets: ["R$ 0,20", "R$ 0,50", "R$ 1,00"], basePayout: 85, category: "Fantasy", provider: "fachai"
  },
  "Poker Win 2": {
    id: 415, name: "Poker Win 2", image: "/images/fachai/15.png",
    bets: ["R$ 0,20", "R$ 0,50", "R$ 1,00"], basePayout: 86, category: "Cards", provider: "fachai"
  },
  "Egyptian Bonanza": {
    id: 416, name: "Egyptian Bonanza", image: "/images/fachai/16.png",
    bets: ["R$ 0,20", "R$ 0,50", "R$ 1,00"], basePayout: 89, category: "Egyptian", provider: "fachai"
  },
  "Candy Burst": {
    id: 417, name: "Candy Burst", image: "/images/fachai/17.png",
    bets: ["R$ 0,20", "R$ 0,50", "R$ 1,00"], basePayout: 85, category: "Candy", provider: "fachai"
  },
  "Boxing Riches": {
    id: 418, name: "Boxing Riches", image: "/images/fachai/18.png",
    bets: ["R$ 0,20", "R$ 0,50", "R$ 1,00"], basePayout: 87, category: "Sports", provider: "fachai"
  },
  "Lucky Cat": {
    id: 419, name: "Lucky Cat", image: "/images/fachai/19.png",
    bets: ["R$ 0,20", "R$ 0,50", "R$ 1,00"], basePayout: 88, category: "Asian", provider: "fachai"
  },
  "Inca Queen": {
    id: 420, name: "Inca Queen", image: "/images/fachai/20.png",
    bets: ["R$ 0,20", "R$ 0,50", "R$ 1,00"], basePayout: 86, category: "Adventure", provider: "fachai"
  },
  "Treasure Quest": {
    id: 421, name: "Treasure Quest", image: "/images/fachai/21.png",
    bets: ["R$ 0,20", "R$ 0,50", "R$ 1,00"], basePayout: 87, category: "Adventure", provider: "fachai"
  },
  "New Year's Eve 2": {
    id: 422, name: "New Year's Eve 2", image: "/images/fachai/22.png",
    bets: ["R$ 0,20", "R$ 0,50", "R$ 1,00"], basePayout: 85, category: "Holiday", provider: "fachai"
  },
  "Fortune Dragon": {
    id: 423, name: "Fortune Dragon", image: "/images/fachai/23.png",
    bets: ["R$ 0,20", "R$ 0,50", "R$ 1,00"], basePayout: 90, category: "Dragon", provider: "fachai"
  },
  "Cyber Fortune God": {
    id: 424, name: "Cyber Fortune God", image: "/images/fachai/24.png",
    bets: ["R$ 0,20", "R$ 0,50", "R$ 1,00"], basePayout: 88, category: "Cyber", provider: "fachai"
  },
  "Fusion Magic": {
    id: 425, name: "Fusion Magic", image: "/images/fachai/25.png",
    bets: ["R$ 0,20", "R$ 0,50", "R$ 1,00"], basePayout: 87, category: "Fantasy", provider: "fachai"
  },
  "Lucky Fortunes 3x3": {
    id: 426, name: "Lucky Fortunes 3x3", image: "/images/fachai/26.png",
    bets: ["R$ 0,20", "R$ 0,50", "R$ 1,00"], basePayout: 86, category: "Fortune", provider: "fachai"
  },
  "Chinese New Year Moreways": {
    id: 427, name: "Chinese New Year Moreways", image: "/images/fachai/27.png",
    bets: ["R$ 0,20", "R$ 0,50", "R$ 1,00"], basePayout: 89, category: "Asian", provider: "fachai"
  },
  "Money Machine Catla": {
    id: 428, name: "Money Machine Catla", image: "/images/fachai/28.png",
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
  "Magic Lamp": {
    id: 431, name: "Magic Lamp", image: "/images/fachai/31.png",
    bets: ["R$ 0,20", "R$ 0,50", "R$ 1,00"], basePayout: 87, category: "Fantasy", provider: "fachai"
  },
  "Giant Sea Treasure Hunt": {
    id: 432, name: "Giant Sea Treasure Hunt", image: "/images/fachai/32.png",
    bets: ["R$ 0,20", "R$ 0,50", "R$ 1,00"], basePayout: 86, category: "Sea", provider: "fachai"
  },
  "Sugar Bang Bang Plus": {
    id: 433, name: "Sugar Bang Bang Plus", image: "/images/fachai/33.png",
    bets: ["R$ 0,20", "R$ 0,50", "R$ 1,00"], basePayout: 88, category: "Candy", provider: "fachai"
  },
  "Night Market 2": {
    id: 434, name: "Night Market 2", image: "/images/fachai/34.png",
    bets: ["R$ 0,20", "R$ 0,50", "R$ 1,00"], basePayout: 85, category: "Asian", provider: "fachai"
  },
  "Crazy Bison": {
    id: 435, name: "Crazy Bison", image: "/images/fachai/35.png",
    bets: ["R$ 0,20", "R$ 0,50", "R$ 1,00"], basePayout: 87, category: "Animal", provider: "fachai"
  },
  "Golden Lucky Egg": {
    id: 436, name: "Golden Lucky Egg", image: "/images/fachai/36.png",
    bets: ["R$ 0,20", "R$ 0,50", "R$ 1,00"], basePayout: 86, category: "Fortune", provider: "fachai"
  },
  "Super Elements": {
    id: 437, name: "Super Elements", image: "/images/fachai/37.png",
    bets: ["R$ 0,20", "R$ 0,50", "R$ 1,00"], basePayout: 89, category: "Fantasy", provider: "fachai"
  },
  "Rich Tycoon": {
    id: 438, name: "Rich Tycoon", image: "/images/fachai/38.png",
    bets: ["R$ 0,20", "R$ 0,50", "R$ 1,00"], basePayout: 88, category: "Money", provider: "fachai"
  },
  "Lucky Fortunes": {
    id: 439, name: "Lucky Fortunes", image: "/images/fachai/39.png",
    bets: ["R$ 0,20", "R$ 0,50", "R$ 1,00"], basePayout: 87, category: "Fortune", provider: "fachai"
  },
  "Click to Send": {
    id: 440, name: "Click to Send", image: "/images/fachai/40.png",
    bets: ["R$ 0,20", "R$ 0,50", "R$ 1,00"], basePayout: 84, category: "Fun", provider: "fachai"
  },
  "Gladiators": {
    id: 441, name: "Gladiators", image: "/images/fachai/41.png",
    bets: ["R$ 0,20", "R$ 0,50", "R$ 1,00"], basePayout: 88, category: "Roman", provider: "fachai"
  },
  "Circus Coin Pusher": {
    id: 442, name: "Circus Coin Pusher", image: "/images/fachai/42.png",
    bets: ["R$ 0,20", "R$ 0,50", "R$ 1,00"], basePayout: 85, category: "Party", provider: "fachai"
  },
  "Treasure Hunt": {
    id: 443, name: "Treasure Hunt", image: "/images/fachai/43.png",
    bets: ["R$ 0,20", "R$ 0,50", "R$ 1,00"], basePayout: 86, category: "Adventure", provider: "fachai"
  },
  "Mines": {
    id: 444, name: "Mines", image: "/images/fachai/44.png",
    bets: ["R$ 0,20", "R$ 0,50", "R$ 1,00"], basePayout: 90, category: "Crash", provider: "fachai"
  },
  "Magic Beans": {
    id: 445, name: "Magic Beans", image: "/images/fachai/45.png",
    bets: ["R$ 0,20", "R$ 0,50", "R$ 1,00"], basePayout: 85, category: "Fantasy", provider: "fachai"
  },
  "DJ Boom Boom": {
    id: 446, name: "DJ Boom Boom", image: "/images/fachai/46.png",
    bets: ["R$ 0,20", "R$ 0,50", "R$ 1,00"], basePayout: 87, category: "Party", provider: "fachai"
  },
  "Night Market": {
    id: 447, name: "Night Market", image: "/images/fachai/47.png",
    bets: ["R$ 0,20", "R$ 0,50", "R$ 1,00"], basePayout: 84, category: "Asian", provider: "fachai"
  },
  "Fortune Muscle Cat": {
    id: 448, name: "Fortune Muscle Cat", image: "/images/fachai/48.png",
    bets: ["R$ 0,20", "R$ 0,50", "R$ 1,00"], basePayout: 86, category: "Animal", provider: "fachai"
  },
  "Robin Hood": {
    id: 449, name: "Robin Hood", image: "/images/fachai/49.png",
    bets: ["R$ 0,20", "R$ 0,50", "R$ 1,00"], basePayout: 88, category: "Adventure", provider: "fachai"
  },
  "New Year's Eve": {
    id: 450, name: "New Year's Eve", image: "/images/fachai/50.png",
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
  // AG, BG, WG têm TODOS os providers: PG, PP, Amigo, Micro Gaming, FA CHAI
  AGJOGO: {
    pg: newPlatformGames,
    pp: newPPGames,
    amigo: newAmigoGames,
    microgaming: newMicroGames,
    fachai: newFachaiGames
  },
  BGJOGO: {
    pg: newPlatformGames,
    pp: newPPGames,
    amigo: newAmigoGames,
    microgaming: newMicroGames,
    fachai: newFachaiGames
  },
  WGJOGO: {
    pg: newPlatformGames,
    pp: newPPGames,
    amigo: newAmigoGames,
    microgaming: newMicroGames,
    fachai: newFachaiGames
  },
  // YG, DG, MG, EG, HG, FG NÃO têm Amigo, Micro Gaming nem FA CHAI
  YGJOGO: {
    pg: newPlatformGames,
    pp: newPPGames,
    pragmatic: oldPlatformGames.pragmatic,
    spirit: oldPlatformGames.spirit,
    tada: oldPlatformGames.tada
  },
  DGJOGO: {
    pg: newPlatformGames,
    pp: newPPGames,
    pragmatic: oldPlatformGames.pragmatic,
    spirit: oldPlatformGames.spirit,
    tada: oldPlatformGames.tada
  },
  MGJOGO: {
    pg: newPlatformGames,
    pp: newPPGames,
    pragmatic: oldPlatformGames.pragmatic,
    spirit: oldPlatformGames.spirit,
    tada: oldPlatformGames.tada
  },
  EGJOGO: {
    pg: newPlatformGames,
    pp: newPPGames,
    pragmatic: oldPlatformGames.pragmatic,
    spirit: oldPlatformGames.spirit,
    tada: oldPlatformGames.tada
  },
  HGJOGO: {
    pg: newPlatformGames,
    pp: newPPGames,
    pragmatic: oldPlatformGames.pragmatic,
    spirit: oldPlatformGames.spirit,
    tada: oldPlatformGames.tada
  },
  FGJOGO: {
    pg: newPlatformGames,
    pp: newPPGames,
    pragmatic: oldPlatformGames.pragmatic,
    spirit: oldPlatformGames.spirit,
    tada: oldPlatformGames.tada
  }
};

// Export padrão para compatibilidade (usa novos jogos PG e PP)
export const slotsData = {
  pg: newPlatformGames,
  pp: newPPGames,
  pragmatic: oldPlatformGames.pragmatic,
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
    { id: 'fachai', name: 'FA CHAI Gaming', rank: 5 }
  ],
  BGJOGO: [
    { id: 'pg', name: 'PG', rank: 1 },
    { id: 'pp', name: 'PP', rank: 2 },
    { id: 'amigo', name: 'Amigo Gaming', rank: 3 },
    { id: 'microgaming', name: 'Micro Gaming', rank: 4 },
    { id: 'fachai', name: 'FA CHAI Gaming', rank: 5 }
  ],
  WGJOGO: [
    { id: 'pg', name: 'PG', rank: 1 },
    { id: 'pp', name: 'PP', rank: 2 },
    { id: 'amigo', name: 'Amigo Gaming', rank: 3 },
    { id: 'microgaming', name: 'Micro Gaming', rank: 4 },
    { id: 'fachai', name: 'FA CHAI Gaming', rank: 5 }
  ],
  // Outras plataformas (YG, DG, MG, EG, HG, FG) com PG, PP e providers antigos
  DEFAULT: [
    { id: 'pg', name: 'PG', rank: 1 },
    { id: 'pp', name: 'PP', rank: 2 },
    { id: 'pragmatic', name: 'Pragmatic Play', rank: 3 },
    { id: 'tada', name: 'Tada Gaming', rank: 4 },
    { id: 'spirit', name: 'Spirit Gaming', rank: 5 }
  ]
};

// Provider ranking priority (ordem de exibição) - padrão
export const providerRankingOrder = [
  { id: 'pg', name: 'PG', rank: 1 },
  { id: 'pp', name: 'PP', rank: 2 },
  { id: 'pragmatic', name: 'Pragmatic Play', rank: 3 },
  { id: 'tada', name: 'Tada Gaming', rank: 4 },
  { id: 'spirit', name: 'Spirit Gaming', rank: 5 }
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
