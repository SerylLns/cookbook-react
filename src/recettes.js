// Une liste de recettes pour remplir directement ta boîte !!
const recettes = {
  recette1: {
    nom: 'Salade d\'épinards du Soleil',
    image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.UeLpFNRMel7HZ4ujw2TpugHaEL%26pid%3DApi&f=1',
    ingredients: '450g d\'Épinards, 2 Pommes, 6 tranches de Bacon, 1 Oignon',
    instructions: "Laver et couper en 2 les feuilles d'épinards.\nPréparer une sauce vinaigrette.\nLaver et couper les pommes. Emincer l'oignon. Faire griller le Bacon.\nAjouter le tout aux épinards.\nS'accorde bien avec un Pinot Blanc."
  },
  recette2: {
    nom: 'Amour de Saumon',
    image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.yg8wObxCEBIiBuiDMvQwKwAAAA%26pid%3DApi&f=1',
    ingredients: '2 pavés de Saumon, 10 Tomates Cerises, 1 gousse d\'Ail, 1 Citron',
    instructions: "Préchauffer le four à 180°C.\nPeler et émincer la gousse d'ail.\nCouper les tomates cerises en deux.\nDéposer chaque pavé de saumon au centre d'une feuille de cuisson et ajouter autour l'ail, les tomates cerises et le jus de citron.\nFermer les papillotes et enfourner 30 minutes.\nS'accorde bien avec un Pouilly Fumé."
  },
  recette3: {
    nom: 'Hamburger Maison',
    image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.aIy-Z8xA1IHPUzQcxyBfvwAAAA%26pid%3DApi&f=1',
    ingredients: '2 gros Steacks Hachés, 2 Buns, 80g de Cheddar, 4 tranches de Bacon, 1 Oignon, Ketchup ou sauce BBQ, Salade',
    instructions: "Peler et couper l'oignon en rondelles puis les faire fondre à la poêle avec une noix de beurre.\nFaire cuire les Steacks.\nFaire revenir les tranches de Bacon.\nFaire dorer les Buns au four.\nMonter le Hamburger dans cet ordre : oignons, bacon, steack, sauce, cheddar, salade.\nS'accorde bien avec un Coca-Cola."
  },
  recette4: {
    nom: 'Tartines à l\'Italienne',
    image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.NGy_9sJuS_QbwuN3bYfuDAAAAA%26pid%3DApi&f=1',
    ingredients: '1/2 Baguette, Mozzarella, Jambon, Tapenade verte, 1 Tomate, 1 gousse d\'Ail, Basilic',
    instructions: "Trancher la baguette pour en faire des tartines.\nLes faire légèrement dorer au four avec un peu d'huile d'olive.\nFrotter le pain avec la gousse d'ail coupée en deux.\nTartiner la tapenade sur les tartines.\nAjouter les tranches de jambon et les feuilles de basilic ciselées.\nS'accorde bien avec un Pinot Noir."
  },
  recette5: {
    nom: 'Pizza au Chorizo',
    image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.2f2ZW7cc9EH06UnJbH6FYgAAAA%26pid%3DApi&f=1',
    ingredients: 'Pâte à Pizza, Sauce Tomate, Fromage rapé, 100g de Chorizo, 1 Poivron, Olives',
    instructions: "Émincer le poivron et le faire revenir dans un peu d'huile.\nÉtaler la sauce tomate sur la pâte à Pizza et ajouter le chorizo et les olives.\nParsemer de fromage rapé.\nEnfourner 20 minutes à 180°C.\nS'accorde bien avec un Madiran."
  },
  recette6: {
    nom: 'Moelleux au Chocolat',
    image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.ufZq-EE-HBiJagYxO2S6mQHaDt%26pid%3DApi&f=1',
    ingredients: '200g de Chocolat, 125g de Beurre, 125g de Sucre, 4 Oeufs, 125g de Farine, 1 sachet de Levure',
    instructions: "Préchauffer le four à 180°C.\nFaire fondre le chocolat au bain-marie avec le beurre.\nMélanger les jaunes avec le sucre.\nAjouter le chocolat fondu.\nAjouter la farine et la levure.\nMonter les blancs en neige et incorporer le mélange précédent.\nCuire pendant 30 minutes.\nS'accorde bien avec un Banyuls."
  }
}

export default recettes
