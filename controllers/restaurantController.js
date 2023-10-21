function asian(req, res){
    const asianRestaurants = ["Two Sticks", "Papa Thai", "Shanghai Wok", "Ari Sushi"]
    const twoSticks = ["Spicy Ramen", "Pork Katsu", "Hosomaki"]
    const papaThai = ["Pad Thai","Tom Yum Goong", "Khao Soi"]
    const shanghaiWok = ["Xiao Long Bao", "Peking Duck", "Shanghai Fried Noodles"]
    const ariSushi = ["Tako", "Temaki", "Ari's Dragon Roll"]
    res.render("asian", {asianRestaurants, twoSticks, papaThai, shanghaiWok, ariSushi})
}

function indian(req, res){
    const indianRestaurants = ["Punjabi Dhaba", "Tandoori Bites", "Kaur Cafe"]
    const punjabiDhaba = ["Rajma Curry", "Punjabi Chloe Masala", "Dal Makhani"]
    const tandooriBites = ["Chicken Barrah", "Tandoori Roti", "Paneer Tandoori"]
    const kaurCafe = ["Dal Makhani", "Mutton Curry", "Palak Paneer"]
    res.render("indian", {indianRestaurants, punjabiDhaba, tandooriBites, kaurCafe})
}

function italian(req, res){
    const italianRestaurants = ["Osteria Mozza", "Chi Spacca", "Antico Nuovo"]
    const osteriaMozza = ["Burratina Pugliese", "Burricotta & Artichoke", "Smoked Mozzarella di Bufala"]
    const chiSpacca = ["Spacca Affettati Misti", "Salanova Lettuces", "Whole Branzino alla piastra"]
    const anticoNuovo = ["Amberjack Crudo", "Pollo e Crostone", "Agnello Dorato"]
    res.render("italian", {italianRestaurants, osteriaMozza, chiSpacca, anticoNuovo})
}

function mediterranean(req, res){
    const mediterraneanRestaurants = ["Cafe Santorini", "Piccolo Paradiso", "Joe's Falafel"]
    const cafeSantorini = ["Babaghanoush", "Borek & Spanakopita", "Fried Kubbe"]
    const piccoloParadiso = ["Bresaola", "Polenta Soffice", "Carpaccio di Salmone"]
    const joesFalafel = ["Chicken Shawarma", "Beef Kabob", "Beef Kafta"]
    res.render("mediterranean", {mediterraneanRestaurants, cafeSantorini, piccoloParadiso, joesFalafel})
}

module.exports = {asian, indian, italian, mediterranean};