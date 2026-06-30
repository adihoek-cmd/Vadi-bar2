// ═══════════════════════════════════════════════════════════════════════════
// THE VADI BAR — db.js
// This file holds all default inventory and cocktail recipes.
// Edit this file to permanently add bottles or recipes to the bar.
// User additions (made in-app) are stored in localStorage and always preserved.
// ═══════════════════════════════════════════════════════════════════════════

const DEFAULT_INVENTORY = [
  // ── SPIRIT ────────────────────────────────────────────
  // Gin
  { id:"i1", cat:"Spirit", kind:"Gin", label:"Deer Premium Dry", on:true },
  { id:"i2", cat:"Spirit", kind:"Gin", label:"Deer Vegetable Dry", on:true },
  { id:"i3", cat:"Spirit", kind:"Gin", label:"Tanqueray No. Ten", on:true, info:{ abv:"47.3%", origin:"Scotland", description:"Tanqueray No. Ten is a small-batch gin distilled with fresh whole citrus (orange, lime, grapefruit) and chamomile, giving a bright, fresh-pressed citrus character with a smooth juniper backbone. Named after the 'Tiny Ten' still." } },
  { id:"i4", cat:"Spirit", kind:"Gin", label:"Tanqueray Rangpur", on:true, info:{ abv:"41.3%", origin:"Scotland", description:"Tanqueray Rangpur is infused with rangpur limes (a citrus hybrid), bay leaf and ginger, producing a zesty, lime-forward gin that shines in a Gin & Tonic." } },
  { id:"i5", cat:"Spirit", kind:"Gin", label:"Votanikon", on:true },
  { id:"i6", cat:"Spirit", kind:"Gin", label:"Zohara Gin", on:true },
  { id:"i154", cat:"Spirit", kind:"Gin", label:"Gin Mare Capri", on:true, info:{ abv:"42.7%", origin:"Capri, Italy", description:"Gin Mare Capri is a Mediterranean gin built on savory botanicals — Arbequina olives, rosemary, thyme and basil — with this edition adding Capri lemon for a brighter citrus lift. Distinctly herbal rather than juniper-forward." } },
  { id:"i155", cat:"Spirit", kind:"Gin", label:"Nordés Atlantic Galician Gin", on:true, info:{ abv:"40%", origin:"Galicia, Spain", description:"Nordés is an Atlantic Galician gin made with a grape-based spirit (Albariño) and 11 botanicals including local herbs, eucalyptus and bay. Soft, floral and slightly saline, reflecting its coastal origin." } },
  // Vodka
  { id:"i11", cat:"Spirit", kind:"Vodka", label:"Berlin Vodka", on:false },
  { id:"i17", cat:"Spirit", kind:"Vodka", label:"Belvedere", on:true, info:{ abv:"40%", origin:"Poland", description:"Belvedere is a Polish rye vodka made from Dankowskie rye and purified water, four times distilled. Full-bodied with a touch of vanilla sweetness and a clean, rounded finish." } },
  { id:"i12", cat:"Spirit", kind:"Vodka", label:"Ciroc Vodka", on:true, info:{ abv:"40%", origin:"France", description:"Cîroc is unusual in being distilled from French grapes (Mauzac Blanc and Ugni Blanc) rather than grain, giving a smooth, slightly fruity and crisp character." } },
  { id:"i10", cat:"Spirit", kind:"Vodka", label:"Ketel One", on:true, info:{ abv:"40%", origin:"Netherlands", description:"Ketel One is a wheat-based vodka from the Nolet distillery, distilled in copper pot stills. Crisp and clean with a subtle citrus and honey note." } },
  { id:"i170", cat:"Spirit", kind:"Vodka", label:"Stolichnaya", on:true, info:{ abv:"40%", origin:"Latvia", description:"Stolichnaya (Stoli) is a classic Russian-style wheat and rye vodka, distilled and blended in Latvia. Clean and neutral with a subtle grain sweetness — versatile across all vodka cocktails." } },
  { id:"i14", cat:"Spirit", kind:"Vodka", label:"Stolichnaya Vanilla", on:true, info:{ abv:"37.5%", origin:"Latvia (Stoli)", description:"Stoli Vanil is a vanilla-flavored vodka with smooth, sweet Madagascar-vanilla character. Easy in dessert cocktails, White Russians and coffee drinks." } },
  { id:"i15", cat:"Spirit", kind:"Vodka", label:"Van Gogh Acai Blueberry", on:true },
  { id:"i16", cat:"Spirit", kind:"Vodka", label:"Zubrówka Palona", on:true, info:{ abv:"40%", origin:"Białystok, Poland", description:"Żubrówka is a Polish rye vodka infused with bison grass from the Białowieża Forest, giving notes of vanilla, almond and fresh-cut grass. The Palona expression adds a toasted, caramel character." } },
  // Irish Whiskey
  { id:"i103", cat:"Spirit", kind:"Irish Whiskey", label:"Jameson Irish Whiskey", on:true, info:{ abv:"40%", origin:"Ireland", description:"Jameson is a triple-distilled blend of pot still and grain whiskey, matured in oak. Smooth and approachable with notes of vanilla, toasted wood and light spice." } },
  // Blended Scotch
  { id:"i30", cat:"Spirit", kind:"Blended Scotch", label:"Compass Box Spice Tree", on:true, info:{ abv:"46%", origin:"Scotland", description:"Compass Box Spice Tree is a blended malt finished with French oak, delivering warm baking spice, clove and nutmeg over a rich malty base. Bottled without chill-filtration." } },
  // Highland Scotch
  { id:"i32", cat:"Spirit", kind:"Highland Scotch", label:"Glenmorangie Triple Cask Reserve", on:true, info:{ abv:"40%", origin:"Highlands, Scotland", description:"Glenmorangie Triple Cask Reserve is matured in three cask types including charred oak, giving extra sweetness and spice over the classic 10-year — honey, vanilla and a hint of cinnamon." } },

  // Israeli Whisky
  { id:"i160", cat:"Spirit", kind:"Israeli Whisky", label:"Ruach Chosen 421", on:true },

  // Peated Scotch
  { id:"i38", cat:"Spirit", kind:"Peated Scotch", label:"Barrach The Smoky 12", on:true },
  { id:"i36", cat:"Spirit", kind:"Peated Scotch", label:"Kilchoman Machir Bay", on:true, info:{ abv:"46%", origin:"Islay, Scotland", description:"Kilchoman Machir Bay is a heavily peated Islay single malt with maritime smoke, citrus and vanilla. Non-chill-filtered, from one of Islay's smallest farm distilleries." } },
  { id:"i35", cat:"Spirit", kind:"Peated Scotch", label:"Laphroaig 10", on:true, info:{ abv:"40%", origin:"Islay, Scotland", description:"Laphroaig 10 is the quintessential medicinal Islay malt — intense peat smoke, iodine, seaweed and a sweet vanilla core. Bold and unmistakable." } },
  { id:"i161", cat:"Spirit", kind:"Peated Scotch", label:"Laphroaig Quarter Cask", on:false, info:{ abv:"48%", origin:"Islay, Scotland", description:"Laphroaig Quarter Cask is aged in smaller quarter casks to accelerate wood contact, amplifying the classic medicinal peat, iodine and seaweed with added richness — vanilla, caramel and a long, warming finish. Bolder and fuller than the 10-year." } },
  { id:"i37", cat:"Spirit", kind:"Peated Scotch", label:"Talisker 10", on:true, info:{ abv:"45.8%", origin:"Isle of Skye, Scotland", description:"Talisker 10 is a maritime single malt with peppery smoke, brine and a warming, peaty finish. Famous for its 'lava' pepper kick." } },
  // Bourbon
  { id:"i40", cat:"Spirit", kind:"Bourbon", label:"1792 Ridgewood Reserve", on:true, info:{ abv:"46.85%", origin:"Kentucky, USA", description:"1792 is a high-rye small-batch bourbon, bold and spicy with caramel, vanilla and a dry, peppery finish." } },
  { id:"i41", cat:"Spirit", kind:"Bourbon", label:"Woodford Reserve Bourbon", on:true, info:{ abv:"43.2%", origin:"Kentucky, USA", description:"Woodford Reserve is a small-batch bourbon with rich notes of dried fruit, vanilla, toffee and spice, distilled partly in copper pot stills." } },
  // Rye Whiskey
  { id:"i45", cat:"Spirit", kind:"Rye Whiskey", label:"Woodford Reserve Rye", on:true, info:{ abv:"45.2%", origin:"Kentucky, USA", description:"Woodford Reserve Rye is a spicy, full-bodied rye with black pepper, mint and baking-spice notes balanced by sweet oak." } },
  // English Whisky
  { id:"i46", cat:"Spirit", kind:"English Whisky", label:"The Lakes Respeber", on:true },

  // Rum
  { id:"i20", cat:"Spirit", kind:"Rum", label:"Calypso Red Rum", on:true },
  { id:"i21", cat:"Spirit", kind:"Rum", label:"El Supremo 8", on:true },
  { id:"i26", cat:"Spirit", kind:"Rum", label:"Jang & Wulff Barbados No. 3", on:true },
  { id:"i23", cat:"Spirit", kind:"Rum", label:"Smith & Cross", on:true, info:{ abv:"57%", origin:"Jamaica", description:"Smith & Cross is a navy-strength Jamaican pot still rum bursting with funky, overripe-banana esters, molasses and tropical fruit. A classic tiki and Mai Tai workhorse." } },
  { id:"i24", cat:"Spirit", kind:"Rum", label:"Takamaka Zepis Kreol", on:true, info:{ abv:"43%", origin:"Seychelles", description:"Takamaka Zepis Kreol is a Seychelles spiced rum infused with island botanicals — cinnamon, nutmeg, vanilla and citrus. Warm, aromatic and tropical." } },
  { id:"i25", cat:"Spirit", kind:"Rum", label:"The Kraken Black Spiced", on:true, info:{ abv:"40%", origin:"Trinidad & Tobago", description:"The Kraken is a dark spiced rum flavored with cinnamon, clove and ginger, named after the legendary sea monster. Rich, sweet and bold." } },
  // Tequila
  { id:"i53", cat:"Spirit", kind:"Tequila", label:"Cenote Ahumado", on:true },
  { id:"i52", cat:"Spirit", kind:"Tequila", label:"Cenote Blanco", on:true },
  { id:"i50", cat:"Spirit", kind:"Tequila", label:"Don Julio 1942", on:true, info:{ abv:"40%", origin:"Jalisco, Mexico", description:"Don Julio 1942 is a luxury añejo aged at least 2.5 years in American oak, with rich caramel, vanilla, roasted agave and warm spice. Smooth enough to sip neat." } },
  { id:"i51", cat:"Spirit", kind:"Tequila", label:"Jose Cuervo Especial", on:true, info:{ abv:"38%", origin:"Jalisco, Mexico", description:"Jose Cuervo Especial is a gold mixto tequila, smooth and lightly sweet — a margarita staple." } },
  { id:"i54", cat:"Spirit", kind:"Tequila", label:"Patron Silver", on:true, info:{ abv:"40%", origin:"Jalisco, Mexico", description:"Patrón Silver is a crisp, handcrafted blanco tequila with fresh agave, citrus and light pepper. Versatile in cocktails." } },
  // Mezcal
  { id:"i57", cat:"Spirit", kind:"Mezcal", label:"Espina Dorada", on:true },
  { id:"i58", cat:"Spirit", kind:"Mezcal", label:"Se Busca Joven", on:true },
  { id:"i59", cat:"Spirit", kind:"Mezcal", label:"Se Busca Reposado", on:true },
  // Cachaca
  { id:"i65", cat:"Spirit", kind:"Cachaca", label:"El Cachaca", on:true },
  // Cognac
  { id:"i60", cat:"Spirit", kind:"Cognac", label:"Courvoisier VS", on:true, info:{ abv:"40%", origin:"Cognac, France", description:"Courvoisier VS is a young cognac with bright fruit, vanilla and a touch of oak. A solid mixing brandy for Sidecars and Sazeracs." } },
  { id:"i61", cat:"Spirit", kind:"Cognac", label:"Torres 10", on:true, info:{ abv:"38%", origin:"Penedès, Spain", description:"Torres 10 is Spain's best-known brandy — a 10-year solera-aged blend in American oak (since 1928), rich and rounded with vanilla, cinnamon and oak spice." } },
  { id:"i176", cat:"Spirit", kind:"Cognac", label:"Kakhetian XO", on:false, info:{ abv:"40%", origin:"Kakheti, Georgia", description:"Kakhetian XO is a 7-year Georgian grape brandy from Kakheti, oak-aged. Oak-forward and characterful — dried fruit, bitter chocolate and roasted nut with real backbone. The bitter-cocoa edge counterbalances Bénédictine's sweetness, making it an excellent, well-structured B&B base. Not yet in stock — arriving." } },
  { id:"i177", cat:"Spirit", kind:"Cognac", label:"Vecherni Tbilisi VSOP", on:false, info:{ abv:"40%", origin:"Kvareli, Georgia", description:"Vecherni Tbilisi VSOP is a 5-year Georgian grape brandy from the Kvareli winery, oak-aged. Vanilla, caramel, dried fruit, roasted nuts and sweet spice on the nose; round and warm with oak, bitter chocolate and dried apricot, and a long balanced finish. Smooth and approachable — the closest swap for Torres 10 in a B&B, though sweeter, so skew the ratio toward brandy. Not yet in stock — arriving." } },
  // Rakia
  { id:"i70", cat:"Spirit", kind:"Rakia", label:"Rakia Kvatka", on:true },
  { id:"i71", cat:"Spirit", kind:"Rakia", label:"Rakia Medvesica", on:true },
  // Schnapps
  { id:"i68", cat:"Spirit", kind:"Schnapps", label:"Hollander Apple Schnapps", on:true },
  { id:"i166", cat:"Spirit", kind:"Schnapps", label:"Silvretta House Schnapps", on:true, info:{ abv:"?%", origin:"Ischgl, Austria", description:"A house-made schnapps gifted from the Silvretta Sport Hotel in Ischgl, Austria — a traditional Alpine Selbstgebrannter (home-distilled spirit). Herbaceous and warming." } },

  // ── MODIFIER ──────────────────────────────────────────
  // Sweet Vermouth
  { id:"i80", cat:"Modifier", kind:"Sweet Vermouth", label:"Carpano Antica Formula", on:true, info:{ abv:"16.5%", origin:"Italy", description:"Carpano Antica Formula is a rich, full-bodied sweet vermouth with vanilla, dried fig, cocoa and bitter-orange depth. A premium choice for a Manhattan or Negroni." } },
  { id:"i82", cat:"Modifier", kind:"Sweet Vermouth", label:"Dolin Sweet", on:true, info:{ abv:"16%", origin:"France", description:"Dolin Rouge (Sweet) is a lighter, more delicate sweet vermouth from Chambéry — floral, gently bitter and less sugary than Italian styles." } },
  { id:"i81", cat:"Modifier", kind:"Sweet Vermouth", label:"Julius Vermut", on:true },
  { id:"i83", cat:"Modifier", kind:"Sweet Vermouth", label:"Martini Bianco", on:true, info:{ abv:"15%", origin:"Pessione, Italy", description:"Martini Bianco is a sweet white (bianco) vermouth with vanilla, citrus peel and Alpine herbs over a Trebbiano wine base. Floral and lightly spiced — great over ice, in a spritz, or a White Negroni." } },
  { id:"i84", cat:"Modifier", kind:"Sweet Vermouth", label:"Martini Rosso", on:true, info:{ abv:"15%", origin:"Pessione, Italy", description:"Martini Rosso is the original Italian sweet red vermouth (since 1863) — fuller-bodied and caramelized with a subtle bitterness from over 30 botanicals. A classic in the Negroni, Americano and Manhattan." } },
  // Dry Vermouth
  { id:"i85", cat:"Modifier", kind:"Dry Vermouth", label:"Dolin Dry", on:true, info:{ abv:"17.5%", origin:"France", description:"Dolin Dry is a pale, crisp dry vermouth from Chambéry with alpine-herb and white-flower notes. Lighter and more floral than the French standard." } },
  // Campari
  { id:"i90", cat:"Modifier", kind:"Campari", label:"Campari", on:true, info:{ abv:"25%", origin:"Italy", description:"Campari is a bright-red bitter aperitivo with intense bitter-orange and herbal notes. The backbone of the Negroni, Americano and Spritz." } },
  // Aperol
  { id:"i91", cat:"Modifier", kind:"Aperol", label:"Aperol", on:true, info:{ abv:"11%", origin:"Italy", description:"Aperol is a low-proof orange aperitivo, gently bitter and sweet with rhubarb and orange. The classic Spritz base." } },
  // Bitter Bianco
  { id:"i153", cat:"Modifier", kind:"Bitter Bianco", label:"Luxardo Bitter Bianco", on:true, info:{ abv:"30%", origin:"Italy", description:"Luxardo Bitter Bianco is a clear bitter aperitivo — delicate, herbaceous and citrusy with rosemary and white pepper. A refined, colorless alternative to Campari for a White Negroni." } },
  // Amaro
  { id:"i92", cat:"Modifier", kind:"Amaro", label:"Fernet-Branca", on:true, info:{ abv:"39%", origin:"Italy", description:"Fernet-Branca is a powerful, bitter amaro with menthol, myrrh and saffron. Bracing as a digestif and key to the Hanky Panky." } },
  { id:"i93", cat:"Modifier", kind:"Amaro", label:"Picon", on:true, info:{ abv:"21%", origin:"France", description:"Picon is an orange-flavored bitter apéritif with gentian and quinine, traditionally added to beer or used to deepen a Negroni." } },
  // Triple Sec
  { id:"i95", cat:"Modifier", kind:"Triple Sec", label:"Cointreau", on:true, info:{ abv:"40%", origin:"France", description:"Cointreau is a premium triple sec — clear, balanced sweet-and-bitter orange from sun-dried peels. Essential in the Margarita, Sidecar and Cosmopolitan." } },
  { id:"i156", cat:"Modifier", kind:"Whiskey Liqueur", label:"Southern Comfort", on:true, info:{ abv:"35%", origin:"USA", description:"Southern Comfort is a fruit-and-spice whiskey liqueur with peach, citrus and warm baking spice. Sweet and smooth, used in punches and the Alabama Slammer." } },
  { id:"i96", cat:"Modifier", kind:"Triple Sec", label:"Grand Marnier", on:true, info:{ abv:"40%", origin:"France", description:"Grand Marnier blends cognac with bitter-orange liqueur for a richer, oakier orange note than plain triple sec." } },
  // Herbal Liqueur
  { id:"i100", cat:"Modifier", kind:"Herbal Liqueur", label:"Benedictine", on:true, info:{ abv:"40%", origin:"France", description:"Bénédictine is a herbal liqueur of 27 plants and spices with honeyed, saffron and citrus-peel sweetness. Found in the Vieux Carré and Singapore Sling." } },
  { id:"i110", cat:"Modifier", kind:"Herbal Liqueur", label:"Drambuie", on:true, info:{ abv:"40%", origin:"Scotland", description:"Drambuie is a Scotch-whisky liqueur sweetened with heather honey, herbs and spice — the heart of the Rusty Nail." } },
  { id:"i102", cat:"Modifier", kind:"Herbal Liqueur", label:"Genepi L\'Ancienne", on:true },
  { id:"i101", cat:"Modifier", kind:"Chartreuse", label:"Green Chartreuse", on:true, info:{ abv:"55%", origin:"France", description:"Green Chartreuse is a 110-proof herbal liqueur made by Carthusian monks from 130 plants. Intensely complex, vegetal and spicy — the Last Word's signature." } },
  // Anise Spirit
  { id:"i111", cat:"Modifier", kind:"Anise Spirit", label:"Askalon Arack Extra Fine", on:true },
  { id:"i150", cat:"Modifier", kind:"Anise Spirit", label:"Pernod Paris", on:true, info:{ abv:"40%", origin:"France", description:"Pernod is France's classic anise liqueur, made from star anise, fennel and 14 botanicals including coriander and mint. Lower in licorice than pastis; turns milky (louche) with water. A successor to absinthe." } },
  { id:"i107", cat:"Modifier", kind:"Anise Spirit", label:"Pilavas Ouzo", on:true },
  { id:"i108", cat:"Modifier", kind:"Anise Spirit", label:"Sans Rival Ouzo", on:true },
  { id:"i109", cat:"Modifier", kind:"Anise Spirit", label:"Zoara Arak", on:true },
  // Cream Liqueur
  { id:"i112", cat:"Modifier", kind:"Cream Liqueur", label:"Baileys", on:true, info:{ abv:"17%", origin:"Ireland", description:"Baileys is an Irish cream liqueur blending Irish whiskey with dairy cream and cocoa. Smooth, sweet and dessert-like." } },
  // Coffee Liqueur
  { id:"i114", cat:"Modifier", kind:"Coffee Liqueur", label:"Kahlúa", on:true, info:{ abv:"20%", origin:"Veracruz, Mexico", description:"Kahlúa is a Mexican coffee liqueur made from rum, Arabica coffee and sugar. Rich, sweet and unmistakably coffee-forward — the base of the Espresso Martini, White Russian and Mudslide." } },
  // Cherry Liqueur
  { id:"i113", cat:"Modifier", kind:"Cherry Liqueur", label:"Cherry Liqueur", on:true },
  // Maraschino Liqueur
  { id:"i171", cat:"Modifier", kind:"Maraschino Liqueur", label:"Luxardo Maraschino", on:false, info:{ abv:"32%", origin:"Torreglia, Italy", description:"Luxardo Maraschino is the benchmark maraschino liqueur — dry, nutty and faintly bitter with a clean cherry pit character. Not sweet like cherry liqueur; essential for Last Word, Aviation, Hemingway Daiquiri and Martinez. Not yet in stock." } },
  // Cassis
  { id:"i115", cat:"Modifier", kind:"Cassis", label:"Crème de Cassis de Dijon", on:true, info:{ abv:"20%", origin:"Alsace, France", description:"G.E. Massenez Crème de Cassis de Dijon — a classic blackcurrant liqueur from the Villé Valley in Alsace, made since 1870. Rich, deep and intensely fruity with real cassis character. The heart of a Kir, Kir Royale and El Diablo." } },
  // Limoncello
  { id:"i116", cat:"Modifier", kind:"Limoncello", label:"Limoncello (Homemade)", on:true },
  { id:"i118", cat:"Modifier", kind:"Limoncello", label:"Machya 13 Lemons", on:true },

  // ── SYRUP ─────────────────────────────────────────────
  // Simple Syrup
  { id:"i120", cat:"Syrup", kind:"Simple Syrup", label:"Simple Syrup (Homemade)", on:true },
  // Honey Ginger Syrup
  { id:"i121", cat:"Syrup", kind:"Honey Ginger Syrup", label:"Honey Ginger (Homemade)", on:true },
  // Grenadine
  { id:"i122", cat:"Syrup", kind:"Grenadine", label:"Monin Grenadine", on:true, info:{ abv:"0%", origin:"France", description:"Monin Grenadine is a pomegranate-flavored syrup used for color and sweetness in cocktails like the Tequila Sunrise and Shirley Temple." } },
  // Strawberry Syrup
  { id:"i123", cat:"Syrup", kind:"Strawberry Syrup", label:"Monin Strawberry", on:true, info:{ abv:"0%", origin:"France", description:"Monin Strawberry is a bright, sweet strawberry syrup for daiquiris, lemonades and fruit cocktails." } },
  // Salted Caramel Syrup
  { id:"i162", cat:"Syrup", kind:"Salted Caramel Syrup", label:"Monin Salted Caramel", on:true, info:{ abv:"0%", origin:"France", description:"Monin Salted Caramel syrup — rich buttery caramel balanced with a hint of salt. Excellent in espresso martinis, whisky sours and dessert cocktails." } },
  // White Peach Syrup
  { id:"i163", cat:"Syrup", kind:"White Peach Syrup", label:"Monin White Peach", on:true, info:{ abv:"0%", origin:"France", description:"Monin White Peach (Pêche Blanche) — a delicate, floral peach syrup. Lighter and more elegant than yellow peach; ideal in Bellinis, gin fizzes and spritz cocktails." } },
  // Blackcurrant Syrup
  { id:"i164", cat:"Syrup", kind:"Blackcurrant Syrup", label:"Monin Blackcurrant", on:true, info:{ abv:"0%", origin:"France", description:"Monin Blackcurrant (Cassis) syrup — deep, tart berry intensity. The non-alcoholic stand-in for crème de cassis; perfect in Kir-style mocktails, gin sours and sparkling drinks." } },

  // Honey Liqueur
  { id:"i165", cat:"Modifier", kind:"Honey Liqueur", label:"Rakomelo", on:true, info:{ abv:"~22%", origin:"Crete, Greece", description:"Rakomelo is a traditional Cretan liqueur made from tsikoudia (Cretan grappa) infused with honey and herbs (typically cinnamon and cloves). Warm, aromatic and slightly sweet — drunk warm in winter or over ice." } },
  // Rhubarb Liqueur
  { id:"i167", cat:"Modifier", kind:"Rhubarb Liqueur", label:"Rabarbara Rhubarb Liqueur", on:true, info:{ abv:"21%", origin:"Reykjavik, Iceland", description:"Rabarbara by Reykjavik Distillery is an Icelandic rhubarb liqueur — bright, tart and fruity with a distinctive Nordic rhubarb character. Excellent in spritz cocktails and as a sour modifier." } },
  // Homemade Liqueur
  { id:"i168", cat:"Modifier", kind:"Homemade Liqueur", label:"Vadi Buckthorn Liqueur", on:true, info:{ abv:"27%", origin:"Vadi Bar (Homemade)", description:"House-made sea buckthorn liqueur — a Vadi Bar original. Bright citrus-forward berry intensity with a slight tartness and natural sweetness. Unique to the bar." } },
  // Herbal Tonic / Bitters
  { id:"i169", cat:"Modifier", kind:"Herbal Tonic", label:"Über Herbal Tonic", on:true, info:{ abv:"37%", origin:"Israel", description:"Über Elixir Herbal Tonic by Bitters of Israel — a 37% herbal spirit in the style of a botanical elixir. Complex, bitter-sweet and aromatic; functions as both a digestif and a cocktail modifier." } },

  // ── PANTRY ────────────────────────────────────────────
  // Angostura Bitters
  { id:"i130", cat:"Pantry", kind:"Angostura Bitters", label:"Angostura", on:true, info:{ abv:"44.7%", origin:"Trinidad & Tobago", description:"Angostura aromatic bitters is the world's classic cocktail bitter — a concentrated gentian-and-spice tincture used by the dash in the Old Fashioned, Manhattan and countless others. High proof but used in tiny amounts." } },
  // Orange Bitters
  { id:"i131", cat:"Pantry", kind:"Orange Bitters", label:"Orange Bitters", on:true },
  { id:"i173", cat:"Pantry", kind:"Peychaud's Bitters", label:"Peychaud's Bitters", on:false, info:{ abv:"35%", origin:"New Orleans, USA", description:"Peychaud's is a bright, anise-and-cherry aromatic bitter — lighter and more floral than Angostura. Essential to the Sazerac and a key component of the Vieux Carré. Not yet in stock." } },
  { id:"i174", cat:"Pantry", kind:"Chocolate Bitters", label:"Bittermens Xocolatl Mole", on:false, info:{ abv:"53%", origin:"New Orleans, USA", description:"Bittermens Xocolatl Mole — the original Mexican-chocolate bitter (cacao, cinnamon and spice). Designed for aged tequila but excellent with aged rum, bourbon and rye, and a few drops transform an Old Fashioned, Manhattan or Negroni. Ordered — arriving ~mid July 2026." } },
  { id:"i175", cat:"Pantry", kind:"Chocolate Bitters", label:"The Bitter Truth Spiced Chocolate", on:false, info:{ abv:"44%", origin:"Germany", description:"The Bitter Truth Spiced Chocolate bitters — darker and earthier than Xocolatl Mole, with strong gentian and wormwood backbone. A favorite for balancing high-proof whiskey in a Manhattan. Not yet in stock." } },
  // Lemon Juice
  { id:"i132", cat:"Pantry", kind:"Lemon Juice", label:"Fresh", on:true },
  // Lime Juice
  { id:"i133", cat:"Pantry", kind:"Lime Juice", label:"Fresh", on:true },
  // Egg White
  { id:"i134", cat:"Pantry", kind:"Egg White", label:"Fresh", on:true },
  // Ginger Beer
  { id:"i104", cat:"Pantry", kind:"Ginger Beer", label:"Ginger Beer", on:true },
  // Tonic Water
  { id:"i151", cat:"Pantry", kind:"Tonic Water", label:"Tonic Water", on:true },
  { id:"i172", cat:"Pantry", kind:"Soda Water", label:"Soda Water", on:true },
  // Grenadine
  { id:"i106", cat:"Pantry", kind:"Grenadine", label:"Grenadine", on:false },
  // Salt
  { id:"i152", cat:"Pantry", kind:"Salt", label:"Salt", on:true },
  {
    id:"c43", name:"The Hermit", glass:"Highball", method:"Build", liked:false, house:false,
    garnish:"Lime wheel, candied ginger",
    ingredients:[
      {name:"Mezcal Joven", amount:"1.5 oz", kind:"Mezcal"},
      {name:"Green Chartreuse", amount:"0.5 oz", kind:"Chartreuse"},
      {name:"Fresh Lime Juice", amount:"0.75 oz", kind:"Lime Juice"},
      {name:"Simple Syrup", amount:"0.25 oz", kind:"Simple Syrup"},
      {name:"Ginger Beer", amount:"3 oz", kind:"Ginger Beer"},
    ],
    steps:[
      "Fill a highball glass with ice.",
      "Add mezcal, Chartreuse, lime juice and simple syrup.",
      "Stir briefly to combine.",
      "Top with cold ginger beer — do not over-stir.",
      "Garnish with a lime wheel and a piece of candied ginger."
    ],
    mood:["smoky","herbal","refreshing","adventurous"],
    source:"Vadi Bar Original",
    notes:"Use Se Busca Joven for its cleaner smoke profile — it lets the Chartreuse lead. Keep Chartreuse at 0.5 oz max; it\'s 110 proof and very assertive. The lime is essential: without it the herbal and smoky notes form a flat wall. Espina Dorada adds more complexity if you want a bolder version."
  },
];

const DEFAULT_COCKTAILS = [
  {
    id:"c1", name:"Negroni", glass:"Rocks", method:"Stir", liked:false, house:false,
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
    id:"c2", name:"Manhattan", glass:"Coupe", method:"Stir", liked:false, house:false,
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
    id:"c3", name:"Whiskey Sour", glass:"Coupe", method:"Shake", liked:false, house:false,
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
    id:"c4", name:"Mezcal Negroni", glass:"Rocks", method:"Stir", liked:false, house:false,
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
    id:"c5", name:"Smoky Margarita", glass:"Rocks", method:"Shake", liked:false, house:false,
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
    id:"c7", name:"Daiquiri", glass:"Coupe", method:"Shake", liked:false, house:false,
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
    id:"c8", name:"Dark and Stormy", glass:"Highball", method:"Build", liked:false, house:false,
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
    id:"c9", name:"French 75", glass:"Highball", method:"Shake", liked:false, house:false,
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
    id:"c10", name:"Vieux Carre", glass:"Rocks", method:"Stir", liked:false, house:false,
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
    id:"c11", name:"Penicillin", glass:"Rocks", method:"Shake", liked:false, house:false,
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
    id:"c14", name:"Tequila Sour", glass:"Coupe", method:"Shake", liked:false, house:false,
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
    id:"c15", name:"Strawberry Daiquiri", glass:"Coupe", method:"Shake", liked:false, house:false,
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
    id:"c17", name:"Dry Martini", glass:"Coupe", method:"Stir", liked:false, house:false,
    garnish:"Lemon twist or olive", source:"Classic", mood:["strong","classic"],
    ingredients:[
      {name:"Gin", amount:"2.5 oz", kind:"Gin"},
      {name:"Dry Vermouth", amount:"1/2 oz", kind:"Dry Vermouth"},
    ],
    steps:["Chill coupe in freezer.","Combine gin and vermouth in mixing glass over ice.","Stir 40 rotations.","Strain into frozen coupe.","Express lemon twist or drop in olive."],
    notes:"Tanqueray Ten is exceptional here. Dolin Dry for a softer, more floral result."
  },
  {
    id:"c18", name:"Limoncello Collins", glass:"Highball", method:"Build", liked:false, house:false,
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
    id:"c20", name:"Sidecar", url:"https://www.liquor.com/recipes/sidecar/", glass:"Coupe", method:"Shake", liked:false, house:false,
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
    id:"c21", name:"Espresso Martini", url:"https://www.liquor.com/recipes/espresso-martini/", glass:"Coupe", method:"Shake", liked:false, house:false,
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
    id:"c39", name:"Gin & Tonic", glass:"Highball", method:"Build", liked:false, house:false,
    garnish:"Lime wedge, cucumber slice",
    ingredients:[
      {name:"Gin", amount:"2 oz", kind:"Gin"},
      {name:"Tonic Water", amount:"4 oz", kind:"Tonic Water"},
      {name:"Fresh Lime Juice", amount:"0.5 oz", kind:"Lime Juice"},
    ],
    steps:["Fill a highball glass with ice.","Pour gin and lime juice over the ice.","Top with cold tonic water and stir gently once.","Garnish with a lime wedge."],
    mood:["refreshing","citrus"],
    source:"Classic",
    notes:"Use your best gin — it's the star here. Tanqueray No. Ten or Deer Premium Dry work beautifully. Serve very cold."
  },
  {
    id:"c40", name:"A1", glass:"Coupe", method:"Stir", liked:false, house:false,
    garnish:"Lemon twist",
    ingredients:[
      {name:"Gin", amount:"1.75 oz", kind:"Gin"},
      {name:"Grand Marnier", amount:"1 oz", kind:"Triple Sec"},
      {name:"Fresh Lemon Juice", amount:"0.25 oz", kind:"Lemon Juice"},
      {name:"Grenadine", amount:"0.125 oz", kind:"Grenadine"},
    ],
    steps:["Add all ingredients to a mixing glass with ice.","Stir until well chilled.","Strain into a chilled coupe.","Garnish with a lemon twist."],
    mood:["citrus","elegant","classic"],
    source:"TheCocktailDB",
    notes:"A classic pre-Prohibition cocktail. Grand Marnier gives it rich orange depth. Try with Tanqueray No. Ten for a bright, citrus-forward version."
  },
  {
    id:"c41", name:"Margarita", glass:"Rocks", method:"Shake", liked:false, house:false, url:"https://www.liquor.com/recipes/margarita/",
    garnish:"Salt rim, lime wheel",
    ingredients:[
      {name:"Blanco Tequila", amount:"2 oz", kind:"Tequila"},
      {name:"Fresh Lime Juice", amount:"1 oz", kind:"Lime Juice"},
      {name:"Cointreau", amount:"0.75 oz", kind:"Triple Sec"},
      {name:"Simple Syrup", amount:"0.25 oz", kind:"Simple Syrup"},
    ],
    steps:["Rim a rocks glass with salt and fill with ice.","Add all ingredients to a shaker filled with ice.","Shake until well chilled, about 15 seconds.","Strain into the prepared glass over fresh ice.","Garnish with a lime wheel."],
    mood:["citrus","refreshing"],
    source:"Liquor.com",
    notes:"Use fresh lime juice — bottled won\'t cut it. Patron Silver or Cenote Blanco work beautifully here. Adjust the simple syrup to taste depending on your lime."
  },
  {
    id:"c42", name:"Monkey Gland No.2", glass:"Rocks", method:"Shake", liked:false, house:false,
    garnish:"Orange slice",
    ingredients:[
      {name:"London Dry Gin", amount:"1.5 oz", kind:"Gin"},
      {name:"Bénédictine", amount:"1/3 oz", kind:"Herbal Liqueur"},
      {name:"Fresh Orange Juice", amount:"3/4 oz", kind:"Orange Juice"},
      {name:"Grenadine", amount:"1 tsp", kind:"Grenadine"},
      {name:"Orange Bitters", amount:"2 dashes", kind:"Orange Bitters"},
    ],
    steps:["Pre-chill an old-fashioned glass.","Prepare an orange slice for garnish.","Add all ingredients to a shaker with ice.","Shake well until chilled.","Strain into the ice-filled glass.","Garnish with an orange slice."],
    mood:["citrus","fruity","bright"],
    source:"Difford's Guide",
    notes:"A gin-forward riff on the classic Monkey Gland, swapping absinthe for Bénédictine and moving to a rocks glass. The herbal liqueur adds complexity without the anise hit."
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
  }  ,{
    id:"c43", name:"White Negroni", glass:"Rocks", method:"Stir", liked:false, house:true,
    garnish:"Lemon twist", source:"Classic",
    mood:["spirit-forward","bitter","elegant"],
    ingredients:[
      {name:"Gin", amount:"1 1/2 oz", kind:"Gin"},
      {name:"Luxardo Bitter Bianco", amount:"3/4 oz", kind:"Bitter Bianco"},
      {name:"Dolin Dry", amount:"3/4 oz", kind:"Dry Vermouth"},
    ],
    steps:["Combine all ingredients in a mixing glass over ice.","Stir for 30–40 rotations until well-chilled.","Strain into a rocks glass over a large ice cube.","Express a lemon twist over the glass and place on the rim."],
    notes:"Use Tanqueray No. Ten or Gin Mare for the best result — both complement the herbal bitterness of the Bianco. The Dolin Dry keeps it dry and clean; avoid sweet vermouth. 1.5:0.75:0.75 is spirit-forward; go 1:1:1 for a more aperitivo-style build."
  }
  ,{
    id:"c44", name:"Blanco Diablo", glass:"Rocks", method:"Stir", liked:true, house:true,
    garnish:"Orange peel", source:"Vadi Bar",
    mood:["spirit-forward","bitter","smoky"],
    ingredients:[
      {name:"Mezcal Joven", amount:"1 1/2 oz", kind:"Mezcal"},
      {name:"Luxardo Bitter Bianco", amount:"3/4 oz", kind:"Bitter Bianco"},
      {name:"Dolin Dry", amount:"3/4 oz", kind:"Dry Vermouth"},
      {name:"Orange Bitters", amount:"2 dashes", kind:"Orange Bitters"},
    ],
    steps:["Chill a rocks glass with ice water or place in freezer.","Combine all ingredients in a mixing glass over ice.","Stir 35–40 rotations until well-chilled.","Discard chilling ice. Strain into rocks glass over one large cube.","Express a wide orange peel over the glass, rub the rim, and drop it in."],
    notes:"Se Busca Joven keeps smoke in the background so the Bitter Bianco leads. Use Espina Dorada for a bolder, smokier version. Orange bitters are essential — they bridge the mezcal and Bianco's herbal notes. Try a 50/50 mezcal/gin split for a more complex base."
  }
  ,{
    id:"c45", name:"El Diablo", glass:"Highball", method:"Build", liked:false, house:false,
    garnish:"Lime wedge, candied ginger",
    source:"Classic",
    mood:["refreshing","fruity","spicy"],
    ingredients:[
      {name:"Tequila Blanco", amount:"1 1/2 oz", kind:"Tequila"},
      {name:"Crème de Cassis", amount:"1/2 oz", kind:"Cassis"},
      {name:"Fresh Lime Juice", amount:"1/2 oz", kind:"Lime Juice"},
      {name:"Ginger Beer", amount:"3 oz", kind:"Ginger Beer"},
    ],
    steps:[
      "Fill a highball glass with ice.",
      "Add tequila and lime juice directly into the glass.",
      "Pour crème de cassis — it will sink to the bottom.",
      "Top with ginger beer and give one gentle stir to combine.",
      "Garnish with a lime wedge and a piece of candied ginger on the rim."
    ],
    notes:"Cenote Blanco or Patron Silver work best here — the cassis and ginger need a clean, bright tequila to shine. Don't over-stir; let the cassis bleed up through the drink for visual drama. For a smokier twist, swap half the tequila for Se Busca Joven."
  }
  ,{
    id:"c46", name:"The Bramble", glass:"Rocks", method:"Build", liked:false, house:false,
    garnish:"Lemon slice, fresh blackberries or blackcurrant",
    source:"Dick Bradsell, 1984",
    mood:["fruity","sour","refreshing"],
    ingredients:[
      {name:"Gin", amount:"2 oz", kind:"Gin"},
      {name:"Fresh Lemon Juice", amount:"3/4 oz", kind:"Lemon Juice"},
      {name:"Simple Syrup", amount:"1/2 oz", kind:"Simple Syrup"},
      {name:"Crème de Cassis", amount:"1/2 oz", kind:"Cassis"},
    ],
    steps:[
      "Fill a rocks glass with crushed ice.",
      "Add gin, lemon juice and simple syrup directly over the ice.",
      "Give a brief stir to combine.",
      "Slowly drizzle the crème de cassis over the top — let it bleed down through the ice.",
      "Garnish with a lemon slice and blackberries or blackcurrant on top."
    ],
    notes:"Tanqueray No. Ten is the pick here — its citrus botanicals amplify the lemon-cassis pairing beautifully. Nordés also works for a softer, Atlantic character. The cassis float is essential — don't stir it in. Crushed ice is non-negotiable for the classic presentation. Dial the simple syrup up or down depending on how tart your lemon is."
  }
  ,{
    id:"c47", name:"Toronto", glass:"Coupe", method:"Stir", liked:false, house:false,
    garnish:"Orange twist",
    source:"Classic",
    mood:["spirit-forward","bitter","complex"],
    ingredients:[
      {name:"Rye Whiskey", amount:"2 oz", kind:"Rye Whiskey"},
      {name:"Fernet-Branca", amount:"1/4 oz", kind:"Amaro"},
      {name:"Simple Syrup", amount:"1/4 oz", kind:"Simple Syrup"},
      {name:"Angostura Bitters", amount:"2 dashes", kind:"Angostura Bitters"},
    ],
    steps:["Combine all ingredients in a mixing glass over ice.","Stir for 30-40 rotations until well-chilled.","Strain into a chilled coupe.","Express an orange twist over the glass and discard or place on the rim."],
    notes:"Woodford Reserve Rye is ideal — its spice backbone stands up to the Fernet without being overwhelmed. Don't be tempted to increase the Fernet; 1/4 oz is the sweet spot where it adds bitter herbal complexity rather than dominating. A genuinely underrated speakeasy classic."
  }
  ,{
    id:"c48", name:"Rusty Nail", glass:"Rocks", method:"Stir", liked:false, house:false,
    garnish:"Lemon twist",
    source:"Classic",
    mood:["spirit-forward","sweet","smoky"],
    ingredients:[
      {name:"Blended Scotch", amount:"1 1/2 oz", kind:"Blended Scotch"},
      {name:"Drambuie", amount:"3/4 oz", kind:"Herbal Liqueur"},
    ],
    steps:["Add both ingredients to a rocks glass over a large ice cube.","Stir gently in the glass for 10-15 seconds.","Express a lemon twist over the drink and place on the rim."],
    notes:"Compass Box Spice Tree is the natural pick here — its warm spice and vanilla notes harmonise beautifully with Drambuie's honey-herb character. Adjust the ratio to taste: more Scotch for drier, more Drambuie for sweeter. Deceptively simple and deeply satisfying — a proper after-dinner dram."
  }
  ,{
    id:"c49", name:"Bobby Burns", glass:"Coupe", method:"Stir", liked:false, house:false,
    garnish:"Lemon twist",
    source:"Classic",
    mood:["spirit-forward","herbal","elegant"],
    ingredients:[
      {name:"Blended Scotch", amount:"1 1/2 oz", kind:"Blended Scotch"},
      {name:"Sweet Vermouth", amount:"3/4 oz", kind:"Sweet Vermouth"},
      {name:"Benedictine", amount:"1/4 oz", kind:"Herbal Liqueur"},
      {name:"Angostura Bitters", amount:"2 dashes", kind:"Angostura Bitters"},
    ],
    steps:["Combine all ingredients in a mixing glass over ice.","Stir for 35-40 rotations until well-chilled.","Strain into a chilled coupe.","Express a lemon twist over the glass and place on the rim."],
    notes:"Think of it as a Scotch Manhattan elevated by Benedictine's herbal complexity. Compass Box Spice Tree works beautifully; Carpano Antica Formula is the vermouth of choice for its vanilla-rich depth. The Benedictine should whisper, not shout — keep it at 1/4 oz."
  }
  ,{
    id:"c50", name:"Caipirinha", glass:"Rocks", method:"Muddle", liked:false, house:false,
    garnish:"Lime wheel",
    source:"Classic",
    mood:["refreshing","sour","tropical"],
    ingredients:[
      {name:"Cachaca", amount:"2 oz", kind:"Cachaca"},
      {name:"Fresh Lime", amount:"1/2 lime", kind:"Lime Juice"},
      {name:"Simple Syrup", amount:"3/4 oz", kind:"Simple Syrup"},
    ],
    steps:["Cut half a lime into 4 wedges and place in a rocks glass.","Add simple syrup and muddle firmly to release the juice and oils.","Fill the glass with crushed ice.","Pour cachaca over the ice and stir briefly to combine.","Top with a little more crushed ice and garnish with a lime wheel."],
    notes:"El Cachaca's grassy, funky character is exactly what a Caipirinha should taste like — don't substitute vodka. Muddle the lime firmly but don't shred it; you want juice and oils, not bitter pith. Use raw or demerara simple syrup if available — adds a molasses note that suits cachaca perfectly."
  }
  ,{
    id:"c51", name:"B&B", glass:"Snifter", method:"Build", liked:true, house:true,
    garnish:"None",
    source:"Classic",
    mood:["spirit-forward","herbal","digestif"],
    ingredients:[
      {name:"Cognac", amount:"1 oz", kind:"Cognac"},
      {name:"Benedictine", amount:"1 oz", kind:"Herbal Liqueur"},
    ],
    steps:["Pour Benedictine into a snifter or rocks glass.","Float the cognac gently on top by pouring over the back of a spoon.","Serve without ice — or over one large cube if preferred.","No garnish needed."],
    notes:"The quintessential Vadi Bar digestif. Torres 10 works beautifully with its dried-fruit warmth; Courvoisier VS for a cleaner, lighter build. The float is traditional but can be stirred — the layers make for a nice presentation. Equal parts is classic; nudge cognac to 1.5 oz if you want the brandy to lead more."
  }
  ,{
    id:"c52", name:"Vadi Buckthorn Sour", glass:"Coupe", method:"Shake", liked:false, house:true,
    garnish:"Dehydrated lemon wheel or sea buckthorn berries",
    source:"Vadi Bar Original",
    mood:["sour","fruity","refreshing"],
    ingredients:[
      {name:"Vadi Buckthorn Liqueur", amount:"1 1/2 oz", kind:"Homemade Liqueur"},
      {name:"Vodka", amount:"3/4 oz", kind:"Vodka"},
      {name:"Fresh Lemon Juice", amount:"3/4 oz", kind:"Lemon Juice"},
      {name:"Simple Syrup", amount:"1/2 oz", kind:"Simple Syrup"},
      {name:"Egg White", amount:"1", kind:"Egg White"},
    ],
    steps:["Combine all ingredients in a shaker without ice (dry shake) for 15 seconds to emulsify the egg white.","Add ice and shake hard for another 15 seconds.","Double-strain into a chilled coupe.","Let the foam settle and garnish with a dehydrated lemon wheel or a few sea buckthorn berries."],
    notes:"A Vadi Bar original built around the house-made buckthorn liqueur. Sea buckthorn is intensely tart and citrus-forward — balance is key. Taste the liqueur batch by batch and adjust simple syrup accordingly. Belvedere or Ketel One for the vodka base — neutral enough to let the buckthorn lead. This is the bar's signature sour."
  }
  ,{
    id:"c53", name:"Mojito", glass:"Highball", method:"Build", liked:false, house:false,
    garnish:"Fresh mint sprig, lime wheel",
    source:"Classic",
    mood:["refreshing","bright","garden"],
    ingredients:[
      {name:"White Rum", amount:"2 oz", kind:"White Rum"},
      {name:"Fresh Lime Juice", amount:"3/4 oz", kind:"Lime Juice"},
      {name:"Simple Syrup", amount:"3/4 oz", kind:"Simple Syrup"},
      {name:"Fresh Mint", amount:"10 leaves", kind:"Herb"},
      {name:"Soda Water", amount:"2 oz", kind:"Soda Water"},
    ],
    steps:["Add mint leaves and simple syrup to a highball glass.","Gently muddle — press and twist, don't shred.","Add lime juice and rum.","Fill with crushed ice and stir briefly to combine.","Top with soda water and give one gentle stir.","Garnish with a fresh mint sprig (slap it first to release the oils) and a lime wheel."],
    notes:"Use garden-fresh mint — the difference from supermarket mint is remarkable. Bacardi Carta Blanca or Santa Teresa Blanco work well; for more character try Smith & Cross at 1.5 oz. Slap the mint garnish against your palm before placing — it opens up the aroma beautifully. Don't over-muddle or it turns bitter."
  }
  ,{
    id:"c54", name:"Rosemary Gin Fizz", glass:"Highball", method:"Shake", liked:false, house:true,
    garnish:"Fresh rosemary sprig",
    source:"Vadi Bar Original",
    mood:["bright","refreshing","garden"],
    ingredients:[
      {name:"Gin", amount:"2 oz", kind:"Gin"},
      {name:"Fresh Lemon Juice", amount:"3/4 oz", kind:"Lemon Juice"},
      {name:"Simple Syrup", amount:"3/4 oz", kind:"Simple Syrup"},
      {name:"Fresh Rosemary", amount:"1 sprig", kind:"Herb"},
      {name:"Egg White", amount:"1", kind:"Egg White"},
      {name:"Soda Water", amount:"1 oz", kind:"Soda Water"},
    ],
    steps:["Add rosemary sprig and simple syrup to shaker and muddle gently.","Add gin, lemon juice and egg white. Dry shake hard for 15 seconds.","Add ice and shake again for 15 seconds.","Double-strain into a highball glass over ice.","Top with soda water — pour slowly down the side to preserve the foam.","Garnish with a fresh rosemary sprig standing upright in the foam."],
    notes:"A Vadi Bar garden original. Tanqueray No. Ten and Nordés both excel here — Nordés especially has a coastal herbal quality that pairs brilliantly with rosemary. Don't muddle the rosemary too hard — gentle bruising extracts the aromatic oils without the harsh piney bitterness. The egg white foam holds the rosemary aroma at nose level with every sip."
  }
  ,{
    id:"c55", name:"Lemon Verbena Daiquiri", glass:"Coupe", method:"Shake", liked:false, house:true,
    garnish:"Fresh lemon verbena leaf",
    source:"Vadi Bar Original",
    mood:["bright","sour","garden"],
    ingredients:[
      {name:"White Rum", amount:"2 oz", kind:"White Rum"},
      {name:"Fresh Lime Juice", amount:"3/4 oz", kind:"Lime Juice"},
      {name:"Simple Syrup", amount:"1/2 oz", kind:"Simple Syrup"},
      {name:"Fresh Lemon Verbena", amount:"6 leaves", kind:"Herb"},
    ],
    steps:["Add lemon verbena leaves and simple syrup to shaker and muddle gently.","Add rum and lime juice.","Fill with ice and shake hard for 15 seconds.","Double-strain into a chilled coupe to remove all leaf fragments.","Garnish with a single fresh lemon verbena leaf floating on top."],
    notes:"Lemon verbena (לואיזה) is one of the most intensely aromatic herbs in the garden — more citrus than lemon itself, almost perfumed. Double-straining is essential for a clean presentation. Smith & Cross adds funky depth; Bacardi Blanca keeps it delicate and herb-forward. Adjust simple syrup carefully — the verbena adds its own floral sweetness. A genuinely extraordinary drink that no bar menu has."
  }
  ,{
    id:"c56", name:"Sage Smash", glass:"Rocks", method:"Shake", liked:false, house:true,
    garnish:"Fresh sage leaf, lemon slice",
    source:"Vadi Bar Original",
    mood:["bright","spirit-forward","garden"],
    ingredients:[
      {name:"Bourbon", amount:"2 oz", kind:"Bourbon"},
      {name:"Fresh Lemon Juice", amount:"3/4 oz", kind:"Lemon Juice"},
      {name:"Simple Syrup", amount:"3/4 oz", kind:"Simple Syrup"},
      {name:"Fresh Sage", amount:"4 leaves", kind:"Herb"},
    ],
    steps:["Add sage leaves and simple syrup to shaker and muddle firmly.","Add bourbon and lemon juice.","Fill with ice and shake hard for 12 seconds.","Double-strain into a rocks glass over a large ice cube.","Garnish with a fresh sage leaf and a lemon slice."],
    notes:"Sage and bourbon is an underrated pairing — the herb's earthy, slightly peppery quality amplifies the oak and vanilla in the whiskey. Woodford Reserve Double Oaked is exceptional here. Four Roses Single Barrel for a spicier build. Use 4 leaves maximum — sage is powerful and can easily dominate. A beautiful autumn-leaning cocktail that feels completely original."
  }
];


