// ═══════════════════════════════════════════════════════════════════════════
// THE VADI BAR — db.js
// This file holds all default inventory and cocktail recipes.
// Edit this file to permanently add bottles or recipes to the bar.
// User additions (made in-app) are stored in localStorage and always preserved.
// ═══════════════════════════════════════════════════════════════════════════

const DEFAULT_INVENTORY = [
  // ── GIN ──────────────────────────────────────────────────────────────────
  { id:"i1",  cat:"Spirit", kind:"Gin", label:"Deer Premium Dry", on:true },
  { id:"i2",  cat:"Spirit", kind:"Gin", label:"Deer Vegetable Dry", on:true },
  { id:"i3",  cat:"Spirit", kind:"Gin", label:"Tanqueray No. Ten", on:true },
  { id:"i4",  cat:"Spirit", kind:"Gin", label:"Tanqueray Rangpur", on:true },
  { id:"i5",  cat:"Spirit", kind:"Gin", label:"Votanikon", on:true },
  { id:"i6",  cat:"Spirit", kind:"Gin", label:"Zohara Gin", on:true },

  // ── VODKA ─────────────────────────────────────────────────────────────────
  { id:"i10", cat:"Spirit", kind:"Vodka", label:"Ketel One", on:true },
  { id:"i11", cat:"Spirit", kind:"Vodka", label:"Berlin Vodka", on:true },
  { id:"i12", cat:"Spirit", kind:"Vodka", label:"Ciroc Vodka", on:true },
  { id:"i14", cat:"Spirit", kind:"Vodka", label:"Stolichnaya Vanilla", on:true },
  { id:"i15", cat:"Spirit", kind:"Vodka", label:"Van Gogh Acai Blueberry", on:true },
  { id:"i16", cat:"Spirit", kind:"Vodka", label:"Zubrówka Palona", on:true },

  // ── RUM ───────────────────────────────────────────────────────────────────
  { id:"i20", cat:"Spirit", kind:"Rum", label:"Calypso Red Rum", on:true },
  { id:"i21", cat:"Spirit", kind:"Rum", label:"El Supremo 8", on:true },
  { id:"i23", cat:"Spirit", kind:"Rum", label:"Smith & Cross", on:true },
  { id:"i24", cat:"Spirit", kind:"Rum", label:"Takamaka Zepis Kreol", on:true },
  { id:"i25", cat:"Spirit", kind:"Rum", label:"The Kraken Black Spiced", on:true },
  { id:"i26", cat:"Spirit", kind:"Rum", label:"Jang & Wulff Barbados No. 3", on:true },

  // ── BLENDED SCOTCH ────────────────────────────────────────────────────────
  { id:"i30", cat:"Spirit", kind:"Blended Scotch", label:"Compass Box Spice Tree", on:true },
  { id:"i31", cat:"Spirit", kind:"Blended Scotch", label:"Talisker Select", on:true },

  // ── PEATED SCOTCH ─────────────────────────────────────────────────────────
  { id:"i35", cat:"Spirit", kind:"Peated Scotch", label:"Laphroaig 10", on:true },
  { id:"i36", cat:"Spirit", kind:"Peated Scotch", label:"Kilchoman Machir Bay", on:true },
  { id:"i37", cat:"Spirit", kind:"Peated Scotch", label:"Talisker 10", on:true },
  { id:"i38", cat:"Spirit", kind:"Peated Scotch", label:"Barrach The Smoky 12", on:true },

  // ── BOURBON ───────────────────────────────────────────────────────────────
  { id:"i40", cat:"Spirit", kind:"Bourbon", label:"1792 Ridgewood Reserve", on:true },
  { id:"i41", cat:"Spirit", kind:"Bourbon", label:"Woodford Reserve Bourbon", on:true },

  // ── RYE WHISKEY ───────────────────────────────────────────────────────────
  { id:"i45", cat:"Spirit", kind:"Rye Whiskey", label:"Woodford Reserve Rye", on:true },

  // ── TEQUILA ───────────────────────────────────────────────────────────────
  { id:"i50", cat:"Spirit", kind:"Tequila", label:"Don Julio 1942", on:true },
  { id:"i51", cat:"Spirit", kind:"Tequila", label:"Jose Cuervo Especial", on:true },
  { id:"i52", cat:"Spirit", kind:"Tequila", label:"Cenote Anejo", on:true },
  { id:"i53", cat:"Spirit", kind:"Tequila", label:"Cenote Ahumado", on:true },
  { id:"i54", cat:"Spirit", kind:"Tequila", label:"Patron Silver", on:true },

  // ── MEZCAL ────────────────────────────────────────────────────────────────
  { id:"i58", cat:"Spirit", kind:"Mezcal", label:"Sin Broca Mezcal Joven", on:true },

  // ── COGNAC / BRANDY ───────────────────────────────────────────────────────
  { id:"i60", cat:"Spirit", kind:"Cognac", label:"Courvoisier VS", on:true },
  { id:"i61", cat:"Spirit", kind:"Cognac", label:"Torres 10", on:true },

  // ── CACHACA ───────────────────────────────────────────────────────────────
  { id:"i65", cat:"Spirit", kind:"Cachaca", label:"El Cachaca", on:true },

  // ── SCHNAPPS ──────────────────────────────────────────────────────────────
  { id:"i68", cat:"Spirit", kind:"Schnapps", label:"Hollander Apple Schnapps", on:true },

  // ── RAKIA ─────────────────────────────────────────────────────────────────
  { id:"i70", cat:"Spirit", kind:"Rakia", label:"Rakia Kvatka", on:true },
  { id:"i71", cat:"Spirit", kind:"Rakia", label:"Rakia Medvesica", on:true },

  // ── SWEET VERMOUTH ────────────────────────────────────────────────────────
  { id:"i80", cat:"Modifier", kind:"Sweet Vermouth", label:"Carpano Antica Formula", on:true },
  { id:"i81", cat:"Modifier", kind:"Sweet Vermouth", label:"Julius Vermut", on:true },
  { id:"i82", cat:"Modifier", kind:"Sweet Vermouth", label:"Dolin Sweet", on:true },
  { id:"i83", cat:"Modifier", kind:"Sweet Vermouth", label:"Martini Bianco", on:true },
  { id:"i84", cat:"Modifier", kind:"Sweet Vermouth", label:"Martini Rosso", on:true },

  // ── DRY VERMOUTH ──────────────────────────────────────────────────────────
  { id:"i87", cat:"Modifier", kind:"Dry Vermouth", label:"Dolin Dry", on:true },

  // ── BITTER LIQUEURS ───────────────────────────────────────────────────────
  { id:"i90", cat:"Modifier", kind:"Campari", label:"Campari", on:true },
  { id:"i91", cat:"Modifier", kind:"Aperol", label:"Aperol", on:true },
  { id:"i92", cat:"Modifier", kind:"Amaro", label:"Fernet-Branca", on:true },
  { id:"i93", cat:"Modifier", kind:"Amaro", label:"Picon", on:true },

  // ── ORANGE LIQUEURS ───────────────────────────────────────────────────────
  { id:"i95", cat:"Modifier", kind:"Triple Sec", label:"Cointreau", on:true },
  { id:"i96", cat:"Modifier", kind:"Triple Sec", label:"Grand Marnier", on:true },

  // ── HERBAL & BOTANICAL ────────────────────────────────────────────────────
  { id:"i100", cat:"Modifier", kind:"Herbal Liqueur", label:"Benedictine", on:true },
  { id:"i105", cat:"Modifier", kind:"Herbal Liqueur", label:"B&B Liqueur", on:true },
  { id:"i106", cat:"Pantry", kind:"Grenadine", label:"Grenadine", on:false },
  { id:"i151", cat:"Pantry", kind:"Tonic Water", label:"Tonic Water", on:true },
  { id:"i152", cat:"Pantry", kind:"Salt", label:"Salt", on:true },
  { id:"i101", cat:"Modifier", kind:"Herbal Liqueur", label:"Green Chartreuse", on:true },
  { id:"i102", cat:"Modifier", kind:"Herbal Liqueur", label:"Genepi L\'Ancienne", on:true },
  { id:"i103", cat:"Spirit", kind:"Irish Whiskey", label:"Jameson Irish Whiskey", on:true },
  { id:"i104", cat:"Pantry", kind:"Ginger Beer", label:"Ginger Beer", on:true },
  { id:"i110", cat:"Modifier", kind:"Herbal Liqueur", label:"Drambuie", on:true },

  // ── ANISE ─────────────────────────────────────────────────────────────────
  { id:"i111", cat:"Modifier", kind:"Anise Spirit", label:"Askalon Arack Extra Fine", on:true },
  { id:"i150", cat:"Modifier", kind:"Anise Spirit", label:"Pernod Paris", on:true },
  { id:"i107", cat:"Modifier", kind:"Anise Spirit", label:"Pilavas Ouzo", on:true },
  { id:"i108", cat:"Modifier", kind:"Anise Spirit", label:"Sans Rival Ouzo", on:true },
  { id:"i109", cat:"Modifier", kind:"Anise Spirit", label:"Zoara Arak", on:true },

  // ── OTHER LIQUEURS ────────────────────────────────────────────────────────
  { id:"i112", cat:"Modifier", kind:"Cream Liqueur", label:"Baileys", on:true },
  { id:"i113", cat:"Modifier", kind:"Cherry Liqueur", label:"Cherry Liqueur", on:true },
  { id:"i114", cat:"Modifier", kind:"Coffee Liqueur", label:"Coffee Liqueur", on:true },
  { id:"i115", cat:"Modifier", kind:"Cassis", label:"Cassis", on:true },
  { id:"i116", cat:"Modifier", kind:"Limoncello", label:"Limoncello (Homemade)", on:true },

  // ── SYRUPS ────────────────────────────────────────────────────────────────
  { id:"i120", cat:"Syrup", kind:"Simple Syrup", label:"Simple Syrup (Homemade)", on:true },
  { id:"i121", cat:"Syrup", kind:"Honey Ginger Syrup", label:"Honey Ginger (Homemade)", on:true },
  { id:"i122", cat:"Syrup", kind:"Grenadine", label:"Monin Grenadine", on:true },
  { id:"i123", cat:"Syrup", kind:"Strawberry Syrup", label:"Monin Strawberry", on:true },

  // ── PANTRY ────────────────────────────────────────────────────────────────
  { id:"i130", cat:"Pantry", kind:"Angostura Bitters", label:"Angostura", on:true },
  { id:"i131", cat:"Pantry", kind:"Orange Bitters", label:"Orange Bitters", on:true },
  { id:"i132", cat:"Pantry", kind:"Lemon Juice", label:"Fresh", on:true },
  { id:"i133", cat:"Pantry", kind:"Lime Juice", label:"Fresh", on:true },
  { id:"i134", cat:"Pantry", kind:"Egg White", label:"Fresh", on:true },
  {
    id:"c39", name:"Gin & Tonic", glass:"Highball", method:"Build", liked:false, house:false,
    garnish:"Lime wedge, cucumber slice or juniper berries",
    ingredients:[
      {name:"Gin", amount:"2 oz", kind:"Gin"},
      {name:"Tonic Water", amount:"4 oz", kind:"Tonic Water"},
      {name:"Fresh Lime Juice", amount:"1/2 oz", kind:"Lime Juice"},
    ],
    steps:["Fill a highball glass with ice.","Pour gin over the ice.","Add fresh lime juice.","Top with cold tonic water and stir gently once.","Garnish with a lime wedge."],
    mood:["refreshing","citrus"],
    source:"Classic",
    notes:"Use your best gin — it's the star here. Tanqueray No. Ten or Deer Premium Dry work beautifully. Serve very cold."
  },
  {
    id:"c40", name:"A1", glass:"Coupe", method:"Stir", liked:false, house:false,
    garnish:"Lemon twist",
    ingredients:[
      {name:"Gin", amount:"1 3/4 shot", kind:"Gin"},
      {name:"Grand Marnier", amount:"1 shot", kind:"Triple Sec"},
      {name:"Lemon Juice", amount:"1/4 shot", kind:"Lemon Juice"},
      {name:"Grenadine", amount:"1/8 shot", kind:"Grenadine"},
    ],
    steps:["Pour all ingredients into a cocktail shaker with ice.","Shake well until chilled.","Strain into a chilled coupe glass.","Garnish with a lemon twist."],
    mood:["citrus","elegant"],
    source:"TheCocktailDB",
    notes:"A classic pre-Prohibition cocktail. Grand Marnier gives it a rich orange depth. Try with Tanqueray No. Ten for a bright, citrus-forward version."
  },
  {
    id:"c41", name:"Margarita", glass:"Rocks", method:"Shake", liked:false, house:false,
    garnish:"Salt rim, lime wheel",
    ingredients:[
      {name:"Blanco Tequila", amount:"2 oz", kind:"Tequila"},
      {name:"Fresh Lime Juice", amount:"1 oz", kind:"Lime Juice"},
      {name:"Cointreau", amount:"1 oz", kind:"Triple Sec"},
    ],
    steps:[
      "Rim a rocks glass with salt and fill with ice.",
      "Add tequila, lime juice, and Cointreau to a shaker filled with ice.",
      "Shake until well chilled, about 15 seconds.",
      "Strain into the prepared rocks glass over fresh ice.",
      "Garnish with a lime wheel."
    ],
    mood:["citrus","refreshing"],
    source:"Liquor.com",
    notes:"Use fresh lime juice — bottled won't cut it. Patron Silver or Cenote Ahumado work beautifully here. Cointreau over cheaper triple sec makes a real difference."
  },
];

const DEFAULT_COCKTAILS = [
  {
    id:"c1", name:"Negroni", glass:"Rocks", method:"Stir", liked:true, house:true,
    garnish:"Orange peel", source:"Classic", mood:["bitter","classic"],
    ingredients:[
      {name:"Gin", amount:"1 oz", kind:"Gin"},
      {name:"Sweet Vermouth", amount:"1 oz", kind:"Sweet Vermouth"},
      {name:"Campari", amount:"1 oz", kind:"Campari"},
    ],
    steps:["Combine all in mixing glass over ice.","Stir 35-40 rotations until well chilled.","Strain into rocks glass over large ice.","Express orange peel over drink and garnish."],
    notes:"Use Carpano Antica for richness. Tanqueray Ten makes it especially floral."
  },
  {
    id:"c2", name:"Manhattan", glass:"Coupe", method:"Stir", liked:true, house:true,
    garnish:"Cherry", source:"Classic", mood:["strong","classic"],
    ingredients:[
      {name:"Rye Whiskey", amount:"2 oz", kind:"Rye Whiskey"},
      {name:"Sweet Vermouth", amount:"1 oz", kind:"Sweet Vermouth"},
      {name:"Angostura Bitters", amount:"2 dashes", kind:"Angostura Bitters"},
    ],
    steps:["Combine all in mixing glass over ice.","Stir 35-40 rotations.","Strain into chilled coupe.","Garnish with cherry."],
    notes:"Carpano Antica Formula makes this sing. Classic rye Manhattan."
  },
  {
    id:"c3", name:"Whiskey Sour", glass:"Coupe", method:"Shake", liked:true, house:true,
    garnish:"Lemon wheel + cherry", source:"Classic", mood:["bright","classic"],
    ingredients:[
      {name:"Rye Whiskey", amount:"2 oz", kind:"Rye Whiskey"},
      {name:"Lemon Juice", amount:"3/4 oz", kind:"Lemon Juice"},
      {name:"Simple Syrup", amount:"1/2 oz", kind:"Simple Syrup"},
      {name:"Egg White", amount:"1", kind:"Egg White"},
    ],
    steps:["Dry shake all without ice for 15 seconds.","Add ice, shake hard for 12 seconds.","Double strain into chilled coupe.","Garnish with lemon wheel and cherry."],
    notes:"Dry shake first for the foam. Jameson works beautifully here too."
  },
  {
    id:"c4", name:"Mezcal Negroni", glass:"Rocks", method:"Stir", liked:true, house:true,
    garnish:"Orange peel", source:"PDT Cocktail Book", mood:["bitter","smoky"],
    ingredients:[
      {name:"Mezcal", amount:"1 oz", kind:"Mezcal"},
      {name:"Sweet Vermouth", amount:"1 oz", kind:"Sweet Vermouth"},
      {name:"Campari", amount:"1 oz", kind:"Campari"},
    ],
    steps:["Combine all in mixing glass over ice.","Stir well, ~40 rotations.","Strain into rocks glass over large ice.","Garnish with orange peel."],
    notes:"Cenote Ahumado works great here for extra smoke. Julius Vermut for a sweeter spin."
  },
  {
    id:"c5", name:"Smoky Margarita", glass:"Rocks", method:"Shake", liked:true, house:true,
    garnish:"Lime wheel + salt rim", source:"House", mood:["smoky","bright"],
    ingredients:[
      {name:"Mezcal", amount:"1.5 oz", kind:"Mezcal"},
      {name:"Tequila", amount:"0.5 oz", kind:"Tequila"},
      {name:"Lime Juice", amount:"3/4 oz", kind:"Lime Juice"},
      {name:"Simple Syrup", amount:"1/2 oz", kind:"Simple Syrup"},
    ],
    steps:["Rim half the glass with salt.","Combine all in shaker with ice.","Shake well for 12 seconds.","Strain over fresh ice.","Garnish with lime wheel."],
    notes:"Split base of mezcal and Cenote Ahumado tequila for layered smoke."
  },
  {
    id:"c6", name:"Gimlet", glass:"Coupe", method:"Shake", liked:false, house:false,
    garnish:"Lime wheel", source:"Classic", mood:["bright"],
    ingredients:[
      {name:"Gin", amount:"2 oz", kind:"Gin"},
      {name:"Lime Juice", amount:"3/4 oz", kind:"Lime Juice"},
      {name:"Simple Syrup", amount:"3/4 oz", kind:"Simple Syrup"},
    ],
    steps:["Combine all in shaker with ice.","Shake well.","Strain into chilled coupe.","Garnish with lime wheel."],
    notes:"Tanqueray Ten is exceptional here. Fresh lime only."
  },
  {
    id:"c7", name:"Daiquiri", glass:"Coupe", method:"Shake", liked:true, house:true,
    garnish:"Lime wheel", source:"Classic", mood:["bright","classic"],
    ingredients:[
      {name:"Rum", amount:"2 oz", kind:"Rum"},
      {name:"Lime Juice", amount:"3/4 oz", kind:"Lime Juice"},
      {name:"Simple Syrup", amount:"1/2 oz", kind:"Simple Syrup"},
    ],
    steps:["Combine all in shaker with ice.","Shake hard for 12 seconds.","Double strain into chilled coupe.","Garnish with lime wheel."],
    notes:"El Supremo 8 adds depth and molasses. Kraken for a spiced twist."
  },
  {
    id:"c8", name:"Dark and Stormy", glass:"Highball", method:"Build", liked:true, house:false,
    garnish:"Lime wedge", source:"Classic", mood:["sweet","bright"],
    ingredients:[
      {name:"Rum", amount:"2 oz", kind:"Rum"},
      {name:"Ginger Beer", amount:"4 oz", kind:"Ginger Beer"},
      {name:"Lime Juice", amount:"1/2 oz", kind:"Lime Juice"},
      {name:"Grenadine", amount:"dash", kind:"Grenadine"},
    ],
    steps:["Fill highball with ice.","Add rum and lime juice.","Top with ginger beer.","Add a dash of grenadine for color.","Garnish with lime wedge."],
    notes:"Kraken is perfect here. The grenadine adds a beautiful sunset effect."
  },
  {
    id:"c9", name:"French 75", glass:"Highball", method:"Shake", liked:true, house:false,
    garnish:"Lemon twist", source:"Classic", mood:["bright","classic"],
    ingredients:[
      {name:"Gin", amount:"1.5 oz", kind:"Gin"},
      {name:"Lemon Juice", amount:"1/2 oz", kind:"Lemon Juice"},
      {name:"Simple Syrup", amount:"1/2 oz", kind:"Simple Syrup"},
    ],
    steps:["Shake gin, lemon, syrup with ice.","Strain into flute or highball.","Top with sparkling wine.","Garnish with lemon twist."],
    notes:"Deer Premium Dry keeps it crisp. Cognac version with Courvoisier is just as classic."
  },
  {
    id:"c10", name:"Vieux Carre", glass:"Rocks", method:"Stir", liked:true, house:false,
    garnish:"Lemon peel", source:"Hotel Monteleone New Orleans", mood:["strong","bitter"],
    ingredients:[
      {name:"Rye Whiskey", amount:"3/4 oz", kind:"Rye Whiskey"},
      {name:"Cognac", amount:"3/4 oz", kind:"Cognac"},
      {name:"Sweet Vermouth", amount:"3/4 oz", kind:"Sweet Vermouth"},
      {name:"Benedictine", amount:"1 tsp", kind:"Herbal Liqueur"},
      {name:"Angostura Bitters", amount:"1 dash", kind:"Angostura Bitters"},
    ],
    steps:["Combine all in mixing glass over ice.","Stir until well chilled.","Strain into rocks glass over ice.","Garnish with lemon peel."],
    notes:"New Orleans classic. Your Benedictine is essential here. Courvoisier VS works perfectly."
  },
  {
    id:"c11", name:"Penicillin", glass:"Rocks", method:"Shake", liked:true, house:false,
    garnish:"Candied ginger", source:"Sam Ross 2005", mood:["smoky","bright"],
    ingredients:[
      {name:"Blended Scotch", amount:"2 oz", kind:"Blended Scotch"},
      {name:"Lemon Juice", amount:"3/4 oz", kind:"Lemon Juice"},
      {name:"Honey Ginger Syrup", amount:"3/4 oz", kind:"Honey Ginger Syrup"},
    ],
    steps:["Combine scotch, lemon, honey ginger in shaker with ice.","Shake well.","Double strain into rocks glass over large ice.","Optional: float 1/2 oz Laphroaig on top for smoke.","Garnish with candied ginger."],
    notes:"Compass Box as the base, float Laphroaig for the signature smoke. Your honey ginger syrup is made for this."
  },
  {
    id:"c12", name:"Peated Rob Roy", glass:"Coupe", method:"Stir", liked:false, house:false,
    garnish:"Cherry", source:"House", mood:["strong","smoky"],
    ingredients:[
      {name:"Peated Scotch", amount:"2 oz", kind:"Peated Scotch"},
      {name:"Sweet Vermouth", amount:"1 oz", kind:"Sweet Vermouth"},
      {name:"Angostura Bitters", amount:"2 dashes", kind:"Angostura Bitters"},
    ],
    steps:["Combine in mixing glass over ice.","Stir 35 rotations.","Strain into chilled coupe.","Garnish with cherry."],
    notes:"Laphroaig makes this intensely smoky. Kilchoman is slightly softer."
  },
  {
    id:"c13", name:"Bees Knees", glass:"Coupe", method:"Shake", liked:false, house:false,
    garnish:"Lemon twist", source:"Prohibition Era", mood:["bright","sweet"],
    ingredients:[
      {name:"Gin", amount:"2 oz", kind:"Gin"},
      {name:"Lemon Juice", amount:"3/4 oz", kind:"Lemon Juice"},
      {name:"Honey Ginger Syrup", amount:"3/4 oz", kind:"Honey Ginger Syrup"},
    ],
    steps:["Combine all in shaker with ice.","Shake well.","Double strain into chilled coupe.","Garnish with lemon twist."],
    notes:"Your homemade honey ginger syrup adds a beautiful spice note to this Prohibition classic."
  },
  {
    id:"c14", name:"Tequila Sour", glass:"Coupe", method:"Shake", liked:true, house:false,
    garnish:"Lime wheel", source:"House", mood:["bright"],
    ingredients:[
      {name:"Tequila", amount:"2 oz", kind:"Tequila"},
      {name:"Lime Juice", amount:"3/4 oz", kind:"Lime Juice"},
      {name:"Simple Syrup", amount:"1/2 oz", kind:"Simple Syrup"},
      {name:"Egg White", amount:"1", kind:"Egg White"},
    ],
    steps:["Dry shake all without ice 15 seconds.","Add ice, shake hard 12 seconds.","Double strain into chilled coupe.","Garnish with lime wheel."],
    notes:"Don Julio 1942 elevates this massively. Cenote Ahumado for a smoky variation."
  },
  {
    id:"c15", name:"Strawberry Daiquiri", glass:"Coupe", method:"Shake", liked:true, house:true,
    garnish:"Fresh strawberry", source:"House", mood:["sweet","bright"],
    ingredients:[
      {name:"Rum", amount:"2 oz", kind:"Rum"},
      {name:"Lime Juice", amount:"3/4 oz", kind:"Lime Juice"},
      {name:"Strawberry Syrup", amount:"1/2 oz", kind:"Strawberry Syrup"},
    ],
    steps:["Combine all in shaker with ice.","Shake vigorously for 12 seconds.","Double strain into chilled coupe.","Garnish with a fresh strawberry."],
    notes:"Monin Strawberry keeps it clean. Calypso or El Supremo both work great."
  },
  {
    id:"c16", name:"Rum Sour", glass:"Coupe", method:"Shake", liked:false, house:false,
    garnish:"Orange slice", source:"House", mood:["bright","sweet"],
    ingredients:[
      {name:"Rum", amount:"2 oz", kind:"Rum"},
      {name:"Lemon Juice", amount:"3/4 oz", kind:"Lemon Juice"},
      {name:"Grenadine", amount:"1/2 oz", kind:"Grenadine"},
      {name:"Egg White", amount:"1", kind:"Egg White"},
    ],
    steps:["Dry shake without ice 15 seconds.","Add ice, shake hard.","Double strain into coupe.","Garnish with orange slice."],
    notes:"Grenadine adds color and sweetness. Monin keeps it consistent every time."
  },
  {
    id:"c17", name:"Dry Martini", glass:"Coupe", method:"Stir", liked:true, house:false,
    garnish:"Lemon twist or olive", source:"Classic", mood:["strong","classic"],
    ingredients:[
      {name:"Gin", amount:"2.5 oz", kind:"Gin"},
      {name:"Dry Vermouth", amount:"1/2 oz", kind:"Dry Vermouth"},
    ],
    steps:["Chill coupe in freezer.","Combine gin and vermouth in mixing glass over ice.","Stir 40 rotations.","Strain into frozen coupe.","Express lemon twist or drop in olive."],
    notes:"Tanqueray Ten is exceptional here. Dolin Dry for a softer, more floral result."
  },
  {
    id:"c18", name:"Limoncello Collins", glass:"Highball", method:"Build", liked:true, house:true,
    garnish:"Lemon wheel + mint", source:"House", mood:["bright","sweet"],
    ingredients:[
      {name:"Gin", amount:"1.5 oz", kind:"Gin"},
      {name:"Limoncello", amount:"1/2 oz", kind:"Limoncello"},
      {name:"Lemon Juice", amount:"1/2 oz", kind:"Lemon Juice"},
      {name:"Simple Syrup", amount:"1/4 oz", kind:"Simple Syrup"},
    ],
    steps:["Add gin, limoncello, lemon juice and syrup to ice-filled highball.","Stir gently to combine.","Top with soda water.","Garnish with lemon wheel and mint."],
    notes:"Your homemade limoncello is the star here — adjust sweetness to taste."
  },
  {
    id:"c20", name:"Sidecar", glass:"Coupe", method:"Shake", liked:false, house:false,
    garnish:"Sugar rim, lemon twist", source:"Liquor.com", mood:["bright","classic"],
    ingredients:[
      {name:"Cognac", amount:"2 oz", kind:"Cognac"},
      {name:"Cointreau", amount:"3/4 oz", kind:"Triple Sec"},
      {name:"Fresh Lemon Juice", amount:"3/4 oz", kind:"Lemon Juice"},
    ],
    steps:[
      "Rub the rim of a chilled coupe with a lemon wedge and dip in sugar.",
      "Combine cognac, Cointreau, and lemon juice in a shaker with ice.",
      "Shake vigorously for 15 seconds until well chilled.",
      "Double-strain into the prepared coupe.",
      "Garnish with a lemon twist."
    ],
    notes:"A 1:1:1 ratio works but 2:3/4:3/4 is more spirit-forward. Use Courvoisier VS for an approachable version."
  },
  {
    id:"c21", name:"Espresso Martini", glass:"Coupe", method:"Shake", liked:false, house:false,
    garnish:"3 coffee beans", source:"Liquor.com", mood:["strong","sweet"],
    ingredients:[
      {name:"Vodka", amount:"2 oz", kind:"Vodka"},
      {name:"Coffee Liqueur", amount:"1 oz", kind:"Coffee Liqueur"},
      {name:"Fresh Espresso", amount:"1 oz", kind:"Coffee Liqueur"},
      {name:"Simple Syrup", amount:"1/4 oz", kind:"Simple Syrup"},
    ],
    steps:[
      "Pull a fresh espresso shot and let it cool slightly.",
      "Combine vodka, coffee liqueur, espresso, and simple syrup in a shaker.",
      "Fill with ice and shake hard for 20 seconds — the vigorous shake creates the foam.",
      "Double-strain into a chilled coupe to get a smooth, foamy top.",
      "Garnish with three coffee beans placed in the centre."
    ],
    notes:"The key is shaking hard with plenty of ice. Cold brew concentrate works as a substitute if no espresso machine."
  },
  // ── FROM ROBB REPORT: Whiskey Sour Variations ─────────────────────────────
  {
    id:"c22", name:"Eggless Whiskey Sour", glass:"Rocks", method:"Shake", liked:false, house:false,
    garnish:"Orange slice, cherry", source:"Robb Report", mood:["classic","easy"],
    ingredients:[
      {name:"Irish Whiskey", amount:"2 oz", kind:"Irish Whiskey"},
      {name:"Fresh Lemon Juice", amount:"3/4 oz", kind:"Lemon Juice"},
      {name:"Simple Syrup", amount:"3/4 oz", kind:"Simple Syrup"},
    ],
    steps:["Add all ingredients to a shaker with ice.","Shake hard for 6-10 seconds.","Strain over fresh ice in a rocks glass.","Garnish with an orange slice, cherry, or both."],
    notes:"Use Irish or Canadian whiskey - lighter styles work best without egg white to tame tannins."
  },
  {
    id:"c23", name:"Juicy Whiskey Sour", glass:"Rocks", method:"Shake", liked:false, house:false,
    garnish:"Lemon peel, Angostura dashes", source:"Robb Report", mood:["strong","bright"],
    ingredients:[
      {name:"Rye Whiskey", amount:"2 oz", kind:"Rye Whiskey"},
      {name:"Fresh Lemon Juice", amount:"3/4 oz", kind:"Lemon Juice"},
      {name:"Simple Syrup", amount:"1/2 oz", kind:"Simple Syrup"},
      {name:"Fresh Orange Juice", amount:"1/2 oz", kind:"Orange Juice"},
      {name:"Egg White", amount:"1", kind:"Egg White"},
      {name:"Absinthe", amount:"1 tsp", kind:"Absinthe"},
    ],
    steps:["Dry shake all ingredients without ice for 10-12 seconds.","Add ice and shake hard for 10-12 seconds.","Strain into a rocks glass over fresh ice.","Garnish with Angostura dashes and a lemon peel."],
    notes:"The absinthe and OJ make this juicier and more assertive than a classic sour."
  },
  {
    id:"c24", name:"Whiskey Smash", glass:"Rocks", method:"Shake", liked:false, house:false,
    garnish:"Mint crown", source:"Robb Report", mood:["bright","refreshing"],
    ingredients:[
      {name:"Bourbon", amount:"2 oz", kind:"Bourbon"},
      {name:"Fresh Lemon Juice", amount:"3/4 oz", kind:"Lemon Juice"},
      {name:"Simple Syrup", amount:"3/4 oz", kind:"Simple Syrup"},
      {name:"Mint Leaves", amount:"6-8", kind:"Mint"},
      {name:"Lemon Peel", amount:"1 strip (2 inch)", kind:"Lemon Juice"},
    ],
    steps:["Add all ingredients including mint and lemon peel to a shaker tin.","Add ice and shake hard for 6-10 seconds.","Strain over fresh ice into a rocks glass.","Garnish with a mint crown."],
    notes:"Created by Dale DeGroff at the Rainbow Room. Shaking the lemon peel in extracts the oils for a distinctly brighter result."
  },
  {
    id:"c25", name:"Napoleon", glass:"Coupe", method:"Shake", liked:false, house:false,
    garnish:"None", source:"Robb Report", mood:["bright","fruity"],
    ingredients:[
      {name:"High-Proof Bourbon", amount:"1 1/2 oz", kind:"Bourbon"},
      {name:"Blanc Vermouth", amount:"1/2 oz", kind:"Sweet Vermouth"},
      {name:"Simple Syrup", amount:"3/4 oz", kind:"Simple Syrup"},
      {name:"Fresh Lemon Juice", amount:"3/4 oz", kind:"Lemon Juice"},
      {name:"Fresh Raspberries", amount:"3-4", kind:"Raspberry"},
      {name:"Campari", amount:"1 tsp", kind:"Campari"},
      {name:"Egg White", amount:"1", kind:"Egg White"},
    ],
    steps:["Add all ingredients to a shaker without ice.","Dry shake for 3-5 seconds.","Add ice and shake for 8-10 seconds.","Fine strain into a coupe or cocktail glass."],
    notes:"From Sam Penton at the Manor Bar, Rosewood Miramar. Strawberries can substitute raspberries."
  },
  {
    id:"c26", name:"Morgenthaler Sour", glass:"Rocks", method:"Shake", liked:false, house:false,
    garnish:"Lemon peel, cherry", source:"Robb Report", mood:["sweet","strong"],
    ingredients:[
      {name:"Amaretto", amount:"1 1/2 oz", kind:"Amaretto"},
      {name:"Cask-Strength Bourbon", amount:"3/4 oz", kind:"Bourbon"},
      {name:"Fresh Lemon Juice", amount:"1 oz", kind:"Lemon Juice"},
      {name:"Simple Syrup", amount:"1/4 oz", kind:"Simple Syrup"},
      {name:"Egg White", amount:"1", kind:"Egg White"},
    ],
    steps:["Dry shake without ice for 5-7 seconds.","Add ice and shake hard for 8-10 seconds.","Strain over ice in a rocks glass or up in a coupe.","Garnish with a lemon peel and cherry."],
    notes:"Jeffrey Morgenthaler's reinvention of the Amaretto Sour. High-proof bourbon is essential - it lifts the drink out of sweetness."
  },
  {
    id:"c27", name:"Wild Eyed Rose", glass:"Coupe", method:"Shake", liked:false, house:false,
    garnish:"Lime wheel", source:"Robb Report", mood:["bright","classic"],
    ingredients:[
      {name:"Irish Whiskey", amount:"2 oz", kind:"Irish Whiskey"},
      {name:"Fresh Lime Juice", amount:"3/4 oz", kind:"Lime Juice"},
      {name:"Grenadine", amount:"3/4 oz", kind:"Grenadine"},
    ],
    steps:["Add all ingredients to a shaker with ice.","Shake for 8-10 seconds.","Strain over fresh ice in a rocks glass or up into a coupe.","Garnish with a lime wheel or pomegranate seeds."],
    notes:"From Hugo Ensslin's 1916 Recipes for Mixed Drinks. Better than its sibling the Jack Rose - Irish whiskey lets the grenadine shine."
  },
  {
    id:"c28", name:"Blood and Sand", glass:"Coupe", method:"Shake", liked:false, house:false,
    garnish:"Orange peel", source:"Robb Report", mood:["classic","strong"],
    ingredients:[
      {name:"Scotch", amount:"1 oz", kind:"Blended Scotch"},
      {name:"Sweet Vermouth", amount:"3/4 oz", kind:"Sweet Vermouth"},
      {name:"Cherry Heering", amount:"3/4 oz", kind:"Cherry Liqueur"},
      {name:"Fresh Orange Juice", amount:"1 oz", kind:"Orange Juice"},
      {name:"Fresh Lemon Juice", amount:"1/4 tsp", kind:"Lemon Juice"},
    ],
    steps:["Add all ingredients to a shaker with ice.","Shake hard for 12-15 seconds.","Strain up into a coupe.","Garnish with an orange peel."],
    notes:"A nearly 100-year-old classic. The Cherry Heering and OJ synergize with the Scotch in a way that has to be tasted to be believed."
  },
  {
    id:"c29", name:"Cameron's Kick", glass:"Coupe", method:"Shake", liked:false, house:false,
    garnish:"Lemon peel", source:"Robb Report", mood:["bright","classic"],
    ingredients:[
      {name:"Irish Whiskey", amount:"2 oz", kind:"Irish Whiskey"},
      {name:"Fresh Lemon Juice", amount:"3/4 oz", kind:"Lemon Juice"},
      {name:"Orgeat", amount:"3/4 oz", kind:"Orgeat"},
      {name:"Angostura Bitters", amount:"1 dash", kind:"Angostura Bitters"},
    ],
    steps:["Add all ingredients to a shaker with ice.","Shake hard for 10-12 seconds.","Strain into a coupe or over fresh ice in a rocks glass.","Garnish with a lemon peel."],
    notes:"One of the few classic Irish whiskey cocktails. Orgeat and Irish whiskey's gentle malt make a perfect pairing."
  },
  {
    id:"c30", name:"New York Sour", glass:"Rocks", method:"Shake", liked:false, house:false,
    garnish:"Red wine float", source:"Robb Report", mood:["bright","classic"],
    ingredients:[
      {name:"Rye Whiskey", amount:"2 oz", kind:"Rye Whiskey"},
      {name:"Fresh Lemon Juice", amount:"3/4 oz", kind:"Lemon Juice"},
      {name:"Simple Syrup", amount:"3/4 oz", kind:"Simple Syrup"},
      {name:"Light Red Wine", amount:"1/2-1 oz", kind:"Red Wine"},
    ],
    steps:["Add rye, lemon juice, and simple syrup to a shaker with ice.","Shake hard for 10-12 seconds.","Strain over fresh ice in a rocks glass, leaving 1/2 inch clearance at the top.","Float red wine over the back of a spoon on top."],
    notes:"Invented in 1880s Chicago despite the name. The red wine float fills in the gaps a Whiskey Sour alone leaves open."
  },
  {
    id:"c31", name:"Gold Rush", glass:"Rocks", method:"Shake", liked:false, house:false,
    garnish:"None", source:"Robb Report", mood:["classic","sweet"],
    ingredients:[
      {name:"Bourbon", amount:"2 oz", kind:"Bourbon"},
      {name:"Fresh Lemon Juice", amount:"3/4 oz", kind:"Lemon Juice"},
      {name:"Honey Syrup", amount:"3/4 oz", kind:"Honey Ginger Syrup"},
      {name:"Grapefruit Peel", amount:"1 strip (1x2 inch)", kind:"Grapefruit Juice"},
    ],
    steps:["Add all ingredients including grapefruit peel to a shaker with ice.","Shake hard for 8-10 seconds.","Strain into a rocks glass over fresh ice."],
    notes:"The 'regal shake' - adding a grapefruit peel to the shaker - transforms this from good to genuinely complex. Don't skip it."
  },
  {
    id:"c32", name:"Brown Derby", glass:"Rocks", method:"Shake", liked:false, house:false,
    garnish:"Grapefruit peel", source:"Robb Report", mood:["bright","classic"],
    ingredients:[
      {name:"Bourbon", amount:"2 oz", kind:"Bourbon"},
      {name:"Fresh Grapefruit Juice", amount:"1 oz", kind:"Grapefruit Juice"},
      {name:"Fresh Lemon Juice", amount:"1/4 oz", kind:"Lemon Juice"},
      {name:"Honey Syrup", amount:"1/2 oz", kind:"Honey Ginger Syrup"},
      {name:"Grapefruit Peel", amount:"1 strip", kind:"Grapefruit Juice"},
    ],
    steps:["Add all ingredients including grapefruit peel to a shaker with ice.","Shake hard for 8-10 seconds.","Strain over fresh ice in a rocks glass or up in a coupe.","Garnish with a grapefruit peel."],
    notes:"The lemon juice is what takes this from pedestrian to outstanding. Don't omit it."
  },
  {
    id:"c33", name:"Paper Plane", glass:"Coupe", method:"Shake", liked:false, house:false,
    garnish:"None", source:"Robb Report", mood:["bright","classic"],
    ingredients:[
      {name:"Bourbon", amount:"3/4 oz", kind:"Bourbon"},
      {name:"Fresh Lemon Juice", amount:"3/4 oz", kind:"Lemon Juice"},
      {name:"Amaro Nonino", amount:"3/4 oz", kind:"Amaro Nonino"},
      {name:"Aperol", amount:"3/4 oz", kind:"Aperol"},
    ],
    steps:["Add all ingredients to a shaker with ice.","Shake for 6-10 seconds.","Strain up into a coupe or cocktail glass."],
    notes:"Invented by Sam Ross in 2008. Equal-parts - bittersweet, tart, effortlessly crowd-pleasing."
  },
  {
    id:"c34", name:"Ponton Smash", glass:"Rocks", method:"Shake", liked:false, house:false,
    garnish:"Mint sprig, pineapple slice", source:"Robb Report", mood:["refreshing","tropical"],
    ingredients:[
      {name:"Bourbon", amount:"1 7/8 oz", kind:"Bourbon"},
      {name:"Absinthe", amount:"1/8 oz", kind:"Absinthe"},
      {name:"Fresh Lemon Juice", amount:"3/4 oz", kind:"Lemon Juice"},
      {name:"Pineapple Juice", amount:"1 oz", kind:"Pineapple Juice"},
      {name:"Simple Syrup", amount:"1/2 oz", kind:"Simple Syrup"},
      {name:"Mint Leaves", amount:"6-8", kind:"Mint"},
    ],
    steps:["Add all ingredients to a shaker with ice - no need to muddle the mint.","Shake hard for 6-8 seconds.","Fine strain into a rocks glass over fresh ice.","Garnish with a mint sprig and pineapple slice."],
    notes:"A bourbon drink that convincingly cosplays as a tiki drink. The absinthe is the magic element."
  },
  {
    id:"c35", name:"Lion's Tail", glass:"Coupe", method:"Shake", liked:false, house:false,
    garnish:"Lime peel or lime wheel", source:"Robb Report", mood:["spiced","classic"],
    ingredients:[
      {name:"Bourbon", amount:"2 oz", kind:"Bourbon"},
      {name:"Fresh Lime Juice", amount:"3/4 oz", kind:"Lime Juice"},
      {name:"Allspice Dram", amount:"1/2 oz", kind:"Allspice Dram"},
      {name:"Simple Syrup", amount:"1/4 oz", kind:"Simple Syrup"},
    ],
    steps:["Add all ingredients to a shaker with ice.","Shake hard for 8-10 seconds.","Strain into a coupe or cocktail glass.","Garnish with a lime peel or lime wheel."],
    notes:"A 1937 classic. Allspice dram (pimento dram) gives an avalanche of warm spice. Lime sets it apart from other whiskey sours."
  },
  {
    id:"c36", name:"Cardboard Plane", glass:"Rocks", method:"Shake", liked:false, house:false,
    garnish:"Grapefruit peel", source:"Robb Report", mood:["refreshing","bright"],
    ingredients:[
      {name:"Bourbon", amount:"1 oz", kind:"Bourbon"},
      {name:"Cointreau", amount:"3/4 oz", kind:"Triple Sec"},
      {name:"Amaro Meletti", amount:"1/2 oz", kind:"Amaro Meletti"},
      {name:"Fresh Lemon Juice", amount:"3/4 oz", kind:"Lemon Juice"},
      {name:"Fresh Grapefruit Juice", amount:"1/2 oz", kind:"Grapefruit Juice"},
    ],
    steps:["Add all ingredients to a shaker with ice.","Shake hard.","Strain into a rocks glass over fresh ice.","Garnish with a grapefruit peel."],
    notes:"The lighter, more citrus-forward sibling of the Paper Plane. Amaro Averna works as a substitute for Meletti."
  },
  {
    id:"c38", name:"Monkey Gland", glass:"Coupe", method:"Shake", liked:false, house:false,
    garnish:"Orange twist",
    ingredients:[
      {name:"Gin", amount:"1.5 oz", kind:"Gin"},
      {name:"Fresh Orange Juice", amount:"1 oz", kind:"Orange Juice"},
      {name:"Grenadine", amount:"1 tsp", kind:"Grenadine"},
      {name:"Pernod / Absinthe", amount:"1 tsp", kind:"Pastis"},
    ],
    steps:["Add all ingredients to a shaker with ice.","Shake well until chilled.","Double-strain into a chilled coupe.","Garnish with an orange twist."],
    mood:["citrus","fruity"],
    source:"Classic",
    notes:"A Prohibition-era classic by Harry MacElhone of Harry's New York Bar, Paris. The anise rinse gives it a mysterious depth. Use Pernod Paris from your bar."
  },
  {
    id:"c37", name:"Irish Breakfast", glass:"Coupe", method:"Shake", liked:false, house:false,
    garnish:"Orange peel", source:"Robb Report", mood:["bright","sweet"],
    ingredients:[
      {name:"Irish Whiskey", amount:"1 1/2 oz", kind:"Irish Whiskey"},
      {name:"Fresh Lemon Juice", amount:"3/4 oz", kind:"Lemon Juice"},
      {name:"Cointreau", amount:"1/2 oz", kind:"Triple Sec"},
      {name:"Simple Syrup", amount:"1/4 oz", kind:"Simple Syrup"},
      {name:"Orange Marmalade", amount:"1 tsp", kind:"Orange Marmalade"},
    ],
    steps:["Add all ingredients to a shaker with ice.","Shake hard for 8-10 seconds.","Strain up into a chilled martini or coupe glass.","Garnish with an orange peel."],
    notes:"Clean and bright. The marmalade adds candied orange punch. No egg white needed - Irish whiskey's low tannins keep it smooth."
  }
];
