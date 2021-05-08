{@html html}
<script>
	let html = `
<style>
  i {
    visibility: hidden;
  }
</style>
<table id="menu">
      <thead>
        <tr>
          <td lang="hu">
            <p>Napi ajánlat</p>
          </td>
          <td></td>
          <td lang="en">
            <p>Daily offer</p>
          </td>
        </tr>
        <tr>
          <td lang="hu">
            <p>12 órától</p>
          </td>
          <td></td>
          <td lang="en">
            <p>From 12 PM</p>
          </td>
        </tr>
      </thead>
    </table>
    <table id="formules">
      <tbody>
        <tr>
          <th lang="hu">
            <p>Elegancia formula</p>
            <p>Leves <span>&amp;</span> főétel <span>vagy</span> főétel <span>&amp;</span> desszert</p>
          </th>
          <td>
            <p>2190</p>
          </td>
          <th lang="en">
            <p>Elegantsia formule</p>
            <p>Soup <span>&amp;</span> main <span>or</span> main <span>&amp;</span> dessert</p>
          </th>
        </tr>
        <tr>
          <th lang="hu">
            <p>Intelligencia formula</p>
            <p>Leves <span>&amp;</span> főétel <span>&amp;</span> desszert</p>
          </th>
          <td>
            <p>2690</p>
          </td>
          <th lang="en">
            <p>Intelligenzia formule</p>
            <p>Soup <span>&amp;</span> main <span>&amp;</span> dessert</p>
          </th>
        </tr>
        <tr>
          <th lang="hu">
            <p>Dekadencia formula</p>
            <p>Előétel <span>&amp;</span> leves <span>&amp;</span> főétel <span>&amp;</span> desszert</p>
          </th>
          <td>
            <p>3190</p>
          </td>
          <th lang="en">
            <p>Decadentic formule</p>
            <p>Starter <span>&amp;</span> soup <span>&amp;</span> main <span>&amp;</span> dessert</p>
          </th>
        </tr>
        <tr>
          <td lang="hu">
            <p></p>
            <p>Előétel</p>
            <p>Napi leves</p>
            <p>Húsos leves</p>
            <p>Főétel</p>
            <p>Napi desszert</p>
          </td>
          <td>
            <p></p>
            <p>890</p>
            <p>990</p>
            <p>1390</p>
            <p>1690</p>
            <p>800</p>
          </td>
          <td lang="en">
            <p></p>
            <p>Starter</p>
            <p>Daily soup</p>
            <p>Rich soup with meat</p>
            <p>Main course</p>
            <p>Daily dessert</p>
          </td>
        </tr>
        <tr>
          <td lang="hu">
            <p><span>Menühöz egy&#160;üveg&#160;ásványvíz féláron!</span></p>
          </td>
          <td></td>
          <td lang="en">
            <p><span>Mineral water w/combo for&#160;half&#160;price!</span></p>
          </td>
        </tr>
      </tbody>
    </table>
    <table id="special">
      <thead>
        <tr>
          <td lang="hu">
            <p>Tranzit Special</p>
          </td>
          <td></td>
          <td lang="en">
            <p>Tranzit Special</p>
          </td>
        </tr>
        <tr>
          <td lang="hu">
            <p>Meleg ételek</p>
          </td>
          <td></td>
          <td lang="en">
            <p>Warm dishes</p>
          </td>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td lang="hu">
            <p>Sajtkéregben sütött csirkemell</p>
            <p>Bazsalikomos salátával, fűszeres burgonyával</p>
          </td>
          <td>
            <p>3190</p>
          </td>
          <td lang="en">
            <p>Chicken breast in&#160;cheese crust</p>
            <p>Basil salad, spicy potatoes</p>
          </td>
        </tr>
        <tr>
          <td lang="hu">
            <p>Kacsacomb konfitálva</p>
            <p>Gyümölcs chutney-val, vajas pirított burgonyával</p>
          </td>
          <td>
            <p>3290</p>
          </td>
          <td lang="en">
            <p>Duck breatst confit</p>
            <p>With fruit&#160;chutney and potatoes</p>
          </td>
        </tr>
        <tr>
          <td lang="hu">
            <p>Lazacfilé</p>
            <p>Spenótos grillzöldséggel</p>
          </td>
          <td>
            <p>3590</p>
          </td>
          <td lang="en">
            <p>Salmon fillet</p>
            <p>With grilled spinach&#160;and&#160;vegetables</p>
          </td>
        </tr>
        <tr>
          <td lang="hu">
            <p>Francia kérges kecskesajt</p>
            <p>Mézes-diós-aszalt gyümölcsös salátaágyon</p>
          </td>
          <td>
            <p>3290</p>
          </td>
          <td lang="en">
            <p>French crusty goat cheese</p>
            <p>On lettuce with walnut, honey and dried fruits</p>
          </td>
        </tr>
      </tbody>
    </table>
    <table id="light">
      <thead>
        <tr>
          <td lang="hu">
            <p>Könnyű falatok</p>
          </td>
          <td></td>
          <td lang="en">
            <p>Light snacks</p>
          </td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td></td>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td lang="hu">
            <p>Zöldséges mártogató</p>
            <p>Angol zeller, kaliforniai&#160;paprika, zsenge sárgarépa kétféle mártogatóval</p>
          </td>
          <td>
            <p>1890</p>
          </td>
          <td lang="en">
            <p>Vegetable dip</p>
            <p>Celery, bell pepper, crunchy carrot with 2 types of dip</p>
          </td>
        </tr>
        <tr>
          <td lang="hu">
            <p>Baráti tál 4 személynek</p>
            <p>Vágott vegyes zöldség, tortillachips, pirított tortilla négyféle mártogatóval</p>
          </td>
          <td>
            <p>3280</p>
          </td>
          <td lang="en">
            <p>Friends&apos; bowl for 4</p>
            <p>Sliced mixed vegetables, tortilla chips, tortilla toast, 4 types of dip</p>
          </td>
        </tr>
        <tr>
          <td lang="hu">
            <p>Tortillachips</p>
            <p>Házi salsával és Tranzit mártogatóval</p>
          </td>
          <td>
            <p>1890</p>
          </td>
          <td lang="en">
            <p>Tortilla chips</p>
            <p>With salsa and Tranzit dip</p>
          </td>
        </tr>
        <tr>
          <td lang="hu">
            <p>Rozmaringos steakburgonya</p>
            <p>Tranzit mártogatóval</p>
          </td>
          <td>
            <p>1590</p>
          </td>
          <td lang="en">
            <p>Rosemary steak&#160;potatoes</p>
            <p>With Tranzit dip</p>
          </td>
        </tr>
        <tr>
          <td lang="hu">
            <p>Mediterrán borkorcsolyák 4 személynek</p>
            <p>Olívabogyó, napon szárított paradicsom, töltött szőlőlevél, feta sajttal töltött paprika, pirított
              tortilla</p>
          </td>
          <td>
            <p>3480</p>
          </td>
          <td lang="en">
            <p>Mediterranean Savory snacks for 4</p>
            <p>Olives, sundried tomatoes, stuffed grape leaves, pepper stuffed with feta cheese, tortilla toast</p>
          </td>
        </tr>
      </tbody>
    </table>
    <table id="coffee">
      <thead>
        <tr>
          <td lang="hu">
            <p>Kávéitalok</p>
          </td>
          <td></td>
          <td lang="en">
            <p>Coffee drinks</p>
          </td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td></td>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td lang="hu">
            <p>Espresso</p>
            <p>Egy jó erős Tranzit Blend kávé</p>
          </td>
          <td>
            <p>620</p>
          </td>
          <td lang="en">
            <p>Espresso</p>
            <p>A shot of Tranzit Blend</p>
          </td>
        </tr>
        <tr>
          <td lang="hu">
            <p>Ristretto</p>
            <p>Röviden, olaszosan</p>
          </td>
          <td>
            <p>620</p>
          </td>
          <td lang="en">
            <p>Ristretto</p>
            <p>A dense, extremely aromatic shot</p>
          </td>
        </tr>
        <tr>
          <td lang="hu">
            <p>Espresso Con Panna</p>
            <p>Egy jó erős kávé tejszínhabbal</p>
          </td>
          <td>
            <p>710</p>
          </td>
          <td lang="en">
            <p>Espresso Con Panna</p>
            <p>A shot with a dollop of whipped cream</p>
          </td>
        </tr>
        <tr>
          <td lang="hu">
            <p>Espresso Macchiato</p>
            <p>Espresso, tejhab</p>
          </td>
          <td>
            <p>710</p>
          </td>
          <td lang="en">
            <p>Espresso Macchiato</p>
            <p>Marked by a dollop of foamed milk</p>
          </td>
        </tr>
        <tr>
          <td lang="hu">
            <p>Cappuccino</p>
            <p>Espresso, gőzölt tej, tejhab</p>
          </td>
          <td>
            <p>760</p>
          </td>
          <td lang="en">
            <p>Cappuccino</p>
            <p>Espresso, creamy milk and foam</p>
          </td>
        </tr>
        <tr>
          <td lang="hu">
            <p>Tejes kávé</p>
            <p>Espresso sok tejjel és tejhabbal</p>
          </td>
          <td>
            <p>820</p>
          </td>
          <td lang="en">
            <p>Coffee with milk</p>
            <p>Call itt Cafe Con Leche if you’d like</p>
          </td>
        </tr>
        <tr>
          <td lang="hu">
            <p>Caffe Latte</p>
            <p>Tej, fölötte espresso friss tejhabbal</p>
          </td>
          <td>
            <p>860</p>
          </td>
          <td lang="en">
            <p>Caffe Latte</p>
            <p>Espresso, milk and foam in a glass</p>
          </td>
        </tr>
        <tr>
          <td lang="hu">
            <p>Ízesített Caffe Latte</p>
            <p><span>*&#160;</span>Vanília <br /><span>*&#160;</span>Karamell <br /><span>*&#160;</span>Fahéj
              <br /><span>*&#160;</span>Mogyoró</p>
          </td>
          <td>
            <p>960</p>
          </td>
          <td lang="en">
            <p>Latte with flavours</p>
            <p><span>*&#160;</span>Vanilla <br /><span>*&#160;</span>Caramel <br /><span>*&#160;</span>Cinnamon
              <br /><span>*&#160;</span>Hazelnut</p>
          </td>
        </tr>
        <tr>
          <td lang="hu">
            <p>Dupla espressóból</p>
          </td>
          <td>
            <p>+520</p>
          </td>
          <td lang="en">
            <p>Extra shot espresso</p>
          </td>
        </tr>
        <tr>
          <td lang="hu">
            <p>Mézes melange</p>
            <p>Egy Latte mézzel turbózva</p>
          </td>
          <td>
            <p>920</p>
          </td>
          <td lang="en">
            <p>Honey Mélange</p>
            <p>Latte upgraded with honey</p>
          </td>
        </tr>
        <tr>
          <td lang="hu">
            <p>Café Mocha</p>
            <p>Csokiszirup, tej, espresso, tejhab</p>
          </td>
          <td>
            <p>920</p>
          </td>
          <td lang="en">
            <p>Café Mocha</p>
            <p>Espresso, milk, chocolate syrup, foam</p>
          </td>
        </tr>
        <tr>
          <td lang="hu">
            <p>Mochaccino</p>
            <p>Espresso, forró csokoládé és tejhab</p>
          </td>
          <td>
            <p>1050</p>
          </td>
          <td lang="en">
            <p>Mochaccino</p>
            <p>Espresso, hot chocolate and foam</p>
          </td>
        </tr>
        <tr>
          <td lang="hu">
            <p>Americano</p>
            <p>Hosszú kávé amerikai módra</p>
          </td>
          <td>
            <p>760</p>
          </td>
          <td lang="en">
            <p>Americano</p>
            <p>A long coffee American style</p>
          </td>
        </tr>
        <tr>
          <td lang="hu">
            <p>Hosszú kávé</p>
            <p>Hosszan lefőzött espresso</p>
          </td>
          <td>
            <p>760</p>
          </td>
          <td lang="en">
            <p>Long coffee</p>
            <p>A long drawn espresso</p>
          </td>
        </tr>
        <tr>
          <td lang="hu">
            <p>Török kávé</p>
            <p>Finomra őrölt kávé török módra, kardamonnal</p>
          </td>
          <td>
            <p>760</p>
          </td>
          <td lang="en">
            <p>Turkish coffee</p>
            <p>Finely ground coffee boiled with cardamon</p>
          </td>
        </tr>
        <tr>
          <td lang="hu">
            <p>Istanbul kahvesi</p>
            <p>Karamellöntet, mogyorós forró csokoládé, espresso és tejhab</p>
          </td>
          <td>
            <p>1050</p>
          </td>
          <td lang="en">
            <p>Istanbul coffee</p>
            <p>Caramel topping, hazelnut, hot chocolate, espresso and foam</p>
          </td>
        </tr>
        <tr>
          <td lang="hu">
            <p>Jeges kávé</p>
            <p>Espresso két gombóc vanília fagylalttal, tejszínhabbal</p>
          </td>
          <td>
            <p>1080</p>
          </td>
          <td lang="en">
            <p>Iced coffee</p>
            <p>Espresso, 2 scoops of vanilla ice cream, milk and whipped cream</p>
          </td>
        </tr>
        <tr>
          <td lang="hu">
            <p>Frappé</p>
            <p>Hosszú espresso jéggel, tejjel</p>
          </td>
          <td>
            <p>1050</p>
          </td>
          <td lang="en">
            <p>Frappé</p>
            <p>Long drawn espresso, ice and milk</p>
          </td>
        </tr>
        <tr>
          <td lang="hu">
            <p>Ír kávé</p>
            <p>2 cl Jameson, hosszú kávé, tejszínab</p>
          </td>
          <td>
            <p>1550</p>
          </td>
          <td lang="en">
            <p>Irish coffee</p>
            <p>2 cl Jameson, whipped cream</p>
          </td>
        </tr>
      </tbody>
    </table>
    <table id="tea">
      <thead>
        <tr>
          <td lang="hu">
            <p>Teák 1.</p>
          </td>
          <td></td>
          <td lang="en">
            <p>Teas 1.</p>
          </td>
        </tr>
        <tr>
          <td lang="hu">
            <p>Filteres</p>
          </td>
          <td></td>
          <td lang="en">
            <p>Tea bag</p>
          </td>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td lang="hu">
            <p>Fekete tea</p>
            <p><span>*&#160;</span>Ceylon prémium <br /><span>*&#160;</span>English Breakfast
              <br /><span>*&#160;</span>Earl Grey <br /><span>*&#160;</span>Fekete ribizli</p>
            <p><span>*&#160;</span>Őszibarack <br /><span>*&#160;</span>Eper <br /><span>*&#160;</span>Málna
              <br /><span>*&#160;</span>Citrom &amp; Lime <br /><span>*&#160;</span>Mangó &amp; Eper </p>
          </td>
          <td>
            <p>780</p>
          </td>
          <td lang="en">
            <p>Black tea</p>
            <p><span>*&#160;</span>Ceylon Supreme <br /><span>*&#160;</span>English Breakfast
              <br /><span>*&#160;</span>Earl Grey <br /><span>*&#160;</span>Blackcurrant</p>
            <p><span>*&#160;</span>Peach <br /><span>*&#160;</span>Strawberry <br /><span>*&#160;</span>Raspberry
              <br /><span>*&#160;</span>Lemon &amp; Lime <br /><span>*&#160;</span>Mango &amp; Strawberry </p>
          </td>
        </tr>
        <tr>
          <td lang="hu">
            <p>Különleges zöld tea</p>
            <p><span>*&#160;</span>Natúr <br /><span>*&#160;</span>Marokkói menta <br /><span>*&#160;</span>Jázmin
              zöld tea</p>
          </td>
          <td>
            <p>780</p>
          </td>
          <td lang="en">
            <p>Special Green Tea</p>
            <p><span>*&#160;</span>Natural green tea <br /><span>*&#160;</span>Moroccan mint
              <br /><span>*&#160;</span>Jasmine green tea</p>
          </td>
        </tr>
        <tr>
          <td lang="hu">
            <p>Herba és gyümölcs</p>
            <p><span>*&#160;</span>Borsmenta </p>
            <p><span>*&#160;</span>Csipkebogyó &amp; Hibiszkusz</p>
            <p><span>*&#160;</span>Kamilla </p>
            <p><span>*&#160;</span>Roibos vöröstea</p>
            <p><span>*&#160;</span>Trópusi gyümölcs </p>
            <p><span>*&#160;</span>Erdei gyümölcs</p>
            <p><span>*&#160;</span>Kardamom, Gyömbér &amp; Narancs</p>
            <p><span>*&#160;</span>Kókusz &amp; Mango</p>
            <p><span>*&#160;</span>Mandarin, Rózsa &amp; Grapefruit</p>
          </td>
          <td>
            <p>780</p>
          </td>
          <td lang="en">
            <p>Herbal &amp; fruit infusions</p>
            <p><span>*&#160;</span>Peppermint </p>
            <p><span>*&#160;</span>Rosehips &amp; Hibiscus Flowers</p>
            <p><span>*&#160;</span>Chamomile </p>
            <p><span>*&#160;</span>Roibos Natural Organic </p>
            <p><span>*&#160;</span>Naturally Zesty Lemon </p>
            <p><span>*&#160;</span>Naturally Spicy Berry</p>
            <p><span>*&#160;</span>Cardamom, Ginger &amp; Orange</p>
            <p><span>*&#160;</span>Coconut &amp; Mango</p>
            <p><span>*&#160;</span>Tangerine, Rose &amp; Grapefruit</p>
          </td>
        </tr>
        <tr>
          <td lang="hu">
            <p>Jeges tea</p>
            <p>Bármely ízű filteres teából</p>
          </td>
          <td>
            <p>1400</p>
            <p>4 dl</p>
          </td>
          <td lang="en">
            <p>Iced Tea</p>
            <p>Freshly brewed from our tea bag selection</p>
          </td>
        </tr>
      </tbody>
    </table>
    <table>
      <thead>
        <tr>
          <td lang="hu">
            <p>Teák 2.</p>
          </td>
          <td></td>
          <td lang="en">
            <p>Teas 2.</p>
          </td>
        </tr>
        <tr>
          <td lang="hu">
            <p>Szálas</p>
          </td>
          <td></td>
          <td lang="en">
            <p>Leaf Tea</p>
          </td>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td lang="hu">
            <p>Fekete tea</p>
            <p><span>*&#160;</span>Ceylon&#160;Supreme&#160;Single&#160;Origin
              <br /><span>*&#160;</span>Earl&#160;Grey <br /><span>*&#160;</span>Brillant&#160;Breakfast </p>
          </td>
          <td>
            <p>1080</p>
          </td>
          <td lang="en">
            <p>Black tea</p>
            <p><span>*&#160;</span>Ceylon&#160;Supreme&#160;Single&#160;Origin
              <br /><span>*&#160;</span>Earl&#160;Grey <br /><span>*&#160;</span>Brillant&#160;Breakfast </p>
          </td>
        </tr>
        <tr>
          <td lang="hu">
            <p>Gyümölcsös fekete tea</p>
            <p><span>*&#160;</span>Mangó&#160;&amp;&#160;Eper <br /><span>*&#160;</span>Áfonya &amp;
              Gránátalma<br /><span>*&#160;</span>Mediterrán Mandarin</p>
          </td>
          <td>
            <p>1080</p>
          </td>
          <td lang="en">
            <p>Fruit Infusions</p>
            <p><span>*&#160;</span>Mango&#160;&amp;&#160;Strawberry <br /><span>*&#160;</span>Blueberry &amp;
              Pomegranate<br /><span>*&#160;</span>Mediterranean Mandarin Tea</p>
          </td>
        </tr>
        <tr>
          <td lang="hu">
            <p>Zöld tea</p>
            <p><span>*&#160;</span>Ceylon&#160;Young&#160;Hyson&#160;Zöld&#160;Tea
              <br /><span>*&#160;</span>Zöld&#160;Tea&#160;Jázminvirággal
              <br /><span>*&#160;</span>Marokkói&#160;Mentás&#160;Zöld&#160;Tea </p>
          </td>
          <td>
            <p>1080</p>
          </td>
          <td lang="en">
            <p>Green Tea</p>
            <p><span>*&#160;</span>Ceylon&#160;Young&#160;Hyson&#160;Green&#160;Tea
              <br /><span>*&#160;</span>Green&#160;Tea&#160;with&#160;Jasmine&#160;Flowers
              <br /><span>*&#160;</span>Moroccan&#160;Mint&#160;Green&#160;Tea </p>
          </td>
        </tr>
        <tr>
          <td lang="hu">
            <p>Herba és gyümölcs</p>
            <p><span>*&#160;</span>Csipkebogyó&#160;Hibiszkuszvirággal
              <br /><span>*&#160;</span>Borsmentás&#160;Gyógynövények <br /><span>*&#160;</span>Vérnarancs &amp;
              Eukaliptusz<br /><span>*&#160;</span>Áfonya<br /><span>*&#160;</span>Áfonya &amp;
              gránátalma<br /><span>*&#160;</span>Bodza &amp; Alma</p>
          </td>
          <td>
            <p>1080</p>
          </td>
          <td lang="en">
            <p>Herbal &amp; fruit infusions</p>
            <p><span>*&#160;</span>Rosehips&#160;with&#160;Hibiscus&#160;Flowers
              <br /><span>*&#160;</span>Peppermint&#160;Herbal&#160;Tea <br /><span>*&#160;</span>Blood Orange &amp;
              Eucalyptus<br /><span>*&#160;</span>Natural Infusion of Blueberry<br /><span>*&#160;</span>Blueberry
              &amp; pomegranate<br /><span>*&#160;</span>Elderflower &amp; Apple</p>
          </td>
        </tr>
        <tr>
          <td lang="hu">
            <p>Very Special Rare Tea</p>
            <p><span>*&#160;</span>Darjeeling<br /><span>*&#160;</span>Jasmine Pear Dragon white tea</p>
          </td>
          <td>
            <p>1290</p>
          </td>
          <td lang="en">
            <p>Very Special Rare Tea</p>
            <p><span>*&#160;</span>Darjeeling<br /><span>*&#160;</span>Jasmine Pear Dragon white tea</p>
          </td>
        </tr>
        <tr>
          <td lang="hu">
            <p>Extra 3 dl forró víz</p>
          </td>
          <td>
            <p>350</p>
          </td>
          <td lang="en">
            <p>Extra 3 dl of hot water</p>
          </td>
        </tr>
      </tbody>
    </table>
    <table id="blender">
      <thead>
        <tr>
          <td lang="hu">
            <p>Turmixok</p>
          </td>
          <td>
            <p>3 dl</p>
          </td>
          <td lang="en">
            <p>Blenders</p>
          </td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td></td>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td lang="hu">
            <p>Shake</p>
            <p>Vanília fagylalt, tej és gyümölcs tökéletes keveréke</p>
            <p><span>*&#160;</span>Csokoládé <br /><span>*&#160;</span>Vanília <br /><span>*&#160;</span>Kávé
              <br /><span>*&#160;</span>Karamell <br /><span>*&#160;</span>Banán <br /><span>*&#160;</span>Eper
              <br /><span>*&#160;</span>Erdei&#160;gyümölcs <br /><span>*&#160;</span>Meggy
              <br /><span>*&#160;</span>Málna <br /><span>*&#160;</span>Mangó</p>
          </td>
          <td>
            <p>1490</p>
          </td>
          <td lang="en">
            <p>Shake</p>
            <p>Perfect blend of ice&#160;cream, milk and flavorings or fruits</p>
            <p><span>*&#160;</span>Chocolate <br /><span>*&#160;</span>Vanilla <br /><span>*&#160;</span>Coffee
              <br /><span>*&#160;</span>Caramel <br /><span>*&#160;</span>Banana <br /><span>*&#160;</span>Strawberry
              <br /><span>*&#160;</span>Forest&#160;fruits <br /><span>*&#160;</span>Sour&#160;cherry
              <br /><span>*&#160;</span>Raspberry <br /><span>*&#160;</span>Mango</p>
          </td>
        </tr>
        <tr>
          <td lang="hu">
            <p>Tejturmix</p>
            <p>Könnyű, gyümölcsös tejturmix</p>
            <p><span>*&#160;</span>Banán <br /><span>*&#160;</span>Eper <br /><span>*&#160;</span>Málna
              <br /><span>*&#160;</span>Meggy <br /><span>*&#160;</span>Erdei&#160;gyümölcs
              <br /><span>*&#160;</span>Mangó</p>
          </td>
          <td>
            <p>1290</p>
          </td>
          <td lang="en">
            <p>Milkshake</p>
            <p>A shake without the ice cream</p>
            <p><span>*&#160;</span>Banana <br /><span>*&#160;</span>Strawberry <br /><span>*&#160;</span>Raspberry
              <br /><span>*&#160;</span>Sour&#160;cherry <br /><span>*&#160;</span>Forest&#160;Fruits
              <br /><span>*&#160;</span>Mango</p>
          </td>
        </tr>
        <tr>
          <th lang="hu">
            <p>Smoothie</p>
          </th>
          <td></td>
          <th lang="en">
            <p>Smoothie</p>
          </th>
        </tr>
        <tr>
          <td lang="hu">
            <p>Tranzit smoothie</p>
            <p>Alma- és őszilé erdei&#160;gyümölcsökkel</p>
          </td>
          <td>
            <p>1490</p>
          </td>
          <td lang="en">
            <p>Tranzit smoothie</p>
            <p>Apple and peach juice with forest fruits</p>
          </td>
        </tr>
        <tr>
          <td lang="hu">
            <p>Eper–narancs</p>
            <p>Eper, narancs, méz</p>
          </td>
          <td>
            <p>1490</p>
          </td>
          <td lang="en">
            <p>Strawberry–Orange</p>
            <p>Strawberry, orange juice, honey</p>
          </td>
        </tr>
        <tr>
          <td lang="hu">
            <p>Mangó-narancs</p>
            <p>Mangó, frissen facsart narancs</p>
          </td>
          <td>
            <p>1690</p>
          </td>
          <td lang="en">
            <p>Mango–Orange</p>
            <p>Mango &amp; fresh orange juice</p>
          </td>
        </tr>
      </tbody>
    </table>
    <table id="choco">
      <thead>
        <tr>
          <td lang="hu">
            <p>Csokoládéitalok</p>
          </td>
          <td>
            <p>3 dl</p>
          </td>
          <td lang="en">
            <p>Chocolates</p>
          </td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td></td>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td lang="hu">
            <p>Forró csoki</p>
            <p>Valódi tejszínhabbal a tetején</p>
            <p><span>*&#160;</span>Klasszikus <br /><span>*&#160;</span>Cukormentes tejcsokis
              <br /><span>*&#160;</span>Mogyorós <br /><span>*&#160;</span>Banános
              <br /><span>*&#160;</span>Fehércsokoládés <br /><span>*&#160;</span>Meggyes
              <br /><span>*&#160;</span>Chilis</p>
          </td>
          <td>
            <p>1090</p>
          </td>
          <td lang="en">
            <p>Hot chocolate</p>
            <p>Topped with real whipped cream</p>
            <p><span>*&#160;</span>Traditional <br /><span>*&#160;</span>Sugarfree milch chocolate
              <br /><span>*&#160;</span>Hazelnut <br /><span>*&#160;</span>Banana
              <br /><span>*&#160;</span>White&#160;chocolate <br /><span>*&#160;</span>Sour&#160;cherry
              <br /><span>*&#160;</span>Chili</p>
          </td>
        </tr>
        <tr>
          <td lang="hu">
            <p>Kakaó</p>
            <p>Holland kakaóporból készül, valódi tejszínhabbal a tetején</p>
          </td>
          <td>
            <p>1090</p>
          </td>
          <td lang="en">
            <p>Cocoa</p>
            <p>Made with Dutch cocoa powder, topped with whipped cream</p>
          </td>
        </tr>
        <tr>
          <td lang="hu">
            <p>Babakakaó</p>
            <p>Nesquik kakaóporból készül, valódi tejszínhabbal a tetején</p>
          </td>
          <td>
            <p>990</p>
          </td>
          <td lang="en">
            <p>Baby Cocoa</p>
            <p>Made with Nesquik cocoa powder, topped with whipped cream</p>
          </td>
        </tr>
      </tbody>
    </table>
    <table id="soft">
      <thead>
        <tr>
          <td lang="hu">
            <p>Tranzit Mix</p>
          </td>
          <td>
            <p>3 dl <span>/</span> 5 dl</p>
          </td>
          <td lang="en">
            <p>Tranzit Mix</p>
          </td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td></td>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td lang="hu">
            <p>Szörp</p>
            <p><span>*&#160;</span>Málna <br /><span>*&#160;</span>Bodza</p>
          </td>
          <td>
            <p>750 <span>/</span> 1200</p>
          </td>
          <td lang="en">
            <p>Syrup w/ water</p>
            <p><span>*&#160;</span>Raspberry <br /><span>*&#160;</span>Elderberry</p>
          </td>
        </tr>
        <tr>
          <td lang="hu">
            <p>Facsart limonádé</p>
            <p><span>*&#160;</span>Citrom <br /><span>*&#160;</span>Lime</p>
          </td>
          <td>
            <p>880 <span>/</span> 1400</p>
          </td>
          <td lang="en">
            <p>Squeezed lemonade</p>
            <p><span>*&#160;</span>Lemon <br /><span>*&#160;</span>Lime</p>
          </td>
        </tr>
        <tr>
          <td lang="hu">
            <p>Kevert limonádé</p>
            <p><span>*&#160;</span>Levendula <br /><span>*&#160;</span>Bodza <br /><span>*&#160;</span>Bazsalikom</p>
          </td>
          <td>
            <p>950 <span>/</span> 1500</p>
          </td>
          <td lang="en">
            <p>Mixed lemonade</p>
            <p><span>*&#160;</span>Lavender <br /><span>*&#160;</span>Elder <br /><span>*&#160;</span>Basil</p>
          </td>
        </tr>
        <tr>
          <td lang="hu">
            <p>Szódával</p>
          </td>
          <td>
            <p>+150 <span>/</span> +250</p>
          </td>
          <td lang="en">
            <p>With soda water</p>
          </td>
        </tr>
        <tr>
          <td lang="hu">
            <p>Gyümölcs-limonádé</p>
            <p><span>*&#160;</span>Eper <br /><span>*&#160;</span>Gránátalma <br /><span>*&#160;</span>Zöldalma
              <br /><span>*&#160;</span>Kiwi-zöldalma <br /><span>*&#160;</span>Maracuja</p>
          </td>
          <td>
            <p>1000 <span>/</span> 1600</p>
          </td>
          <td lang="en">
            <p>Fruit lemonade</p>
            <p><span>*&#160;</span>Strawberry <br /><span>*&#160;</span>Pomegranate
              <br /><span>*&#160;</span>Greenapple <br /><span>*&#160;</span>Kiwi-greenapple
              <br /><span>*&#160;</span>Passion fruit</p>
          </td>
        </tr>
        <tr>
          <td lang="hu">
            <p>Szódavíz citrommal</p>
          </td>
          <td>
            <p>300 <span>/</span> 500</p>
          </td>
          <td lang="en">
            <p>Soda water with lemon</p>
          </td>
        </tr>
      </tbody>
    </table>
    <table>
      <thead>
        <tr>
          <td lang="hu">
            <p>Üdítőitalok</p>
          </td>
          <td></td>
          <td lang="en">
            <p>Beverages</p>
          </td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td></td>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td lang="hu">
            <p>Frissen facsart</p>
            <p><span>*&#160;</span>Narancs <br /><span>*&#160;</span>Grapefruit</p>
          </td>
          <td>
            <p>580</p>
            <p>/dl</p>
          </td>
          <td lang="en">
            <p>Freshly squeezed</p>
            <p><span>*&#160;</span>Orange <br /><span>*&#160;</span>Grapefruit</p>
          </td>
        </tr>
        <tr>
          <td lang="hu">
            <p>Cappy</p>
            <p><span>*&#160;</span>Narancs <br /><span>*&#160;</span>Alma </p>
          </td>
          <td>
            <p>300</p>
            <p>/dl</p>
          </td>
          <td lang="en">
            <p>Cappy</p>
            <p><span>*&#160;</span>Orange <br /><span>*&#160;</span>Apple</p>
          </td>
        </tr>
        <tr>
          <td lang="hu">
            <p>Cappy (üveges)</p>
            <p><span>*&#160;</span>Narancs <br /><span>*&#160;</span>Őszi <br /><span>*&#160;</span>Alma
              <br /><span>*&#160;</span>Ananász <br /><span>*&#160;</span>Feketeribizli
              <br /><span>*&#160;</span>Paradicsom</p>
          </td>
          <td>
            <p>620</p>
            <p>2,5 dl</p>
          </td>
          <td lang="en">
            <p>Cappy (bottled)</p>
            <p><span>*&#160;</span>Orange <br /><span>*&#160;</span>Peach
              <br /><span>*&#160;</span>Apple<br /><span>*&#160;</span>Pineapple
              <br /><span>*&#160;</span>Blackcurrant <br /><span>*&#160;</span>Tomato</p>
          </td>
        </tr>
        <tr>
          <td lang="hu">
            <p>Szénsavas (üveges)</p>
            <p><span>*&#160;</span>Coke <br /><span>*&#160;</span>Coke&#160;Light <br /><span>*&#160;</span>Coke Zero
              <br /><span>*&#160;</span>Sprite <br /><span>*&#160;</span>Fanta&#160;Narancs
              <br /><span>*&#160;</span>Kinley&#160;Tonic <br /><span>*&#160;</span>Kinley&#160;Gyömbér</p>
          </td>
          <td>
            <p>580</p>
            <p>2,5 dl</p>
          </td>
          <td lang="en">
            <p>Sodas (bottled)</p>
            <p><span>*&#160;</span>Coke <br /><span>*&#160;</span>Diet Coke <br /><span>*&#160;</span>Coke Zero
              <br /><span>*&#160;</span>Sprite <br /><span>*&#160;</span>Fanta&#160;Orange
              <br /><span>*&#160;</span>Kinley&#160;Tonic <br /><span>*&#160;</span>Kinley&#160;Ginger</p>
          </td>
        </tr>
        <tr>
          <td lang="hu">
            <p>Ásványvíz</p>
            <p><span>*&#160;</span>Szénsavas <br /><span>*&#160;</span>Mentes</p>
          </td>
          <td>
            <p>520</p>
            <p>3,3 dl</p>
          </td>
          <td lang="en">
            <p>Spring water</p>
            <p><span>*&#160;</span>Sparkling <br /><span>*&#160;</span>Still</p>
          </td>
        </tr>
        <tr>
          <td lang="hu">
            <p>Club-Mate</p>
            <p>Koffeintartalmú szénsavas&#160;frissítő mate-kivonattal</p>
            <p><span>*&#160;</span>Original</p>
            <p><span>*&#160;</span>Cola</p>
            <p><span>*&#160;</span>Granat</p>
          </td>
          <td>
            <p>3 dl <span>/</span> 5 dl</p>
            <p><span><br /></span></p>
            <p>790 <span>/</span> 950</p>
            <p>790 <span>/</span> <i>950</i></p>
            <p><i>790</i> <span>/</span> 990</p>
          </td>
          <td lang="en">
            <p>Club-Mate</p>
            <p>Tea-based sparkling softdrink infused with Yerba Mate extract</p>
            <p><span>*&#160;</span>Original</p>
            <p><span>*&#160;</span>Cola</p>
            <p><span>*&#160;</span>Granat</p>
          </td>
        </tr>
        <tr>
          <td lang="hu">
            <p>Üvegbetét</p>
          </td>
          <td>
            <p>+65</p>
          </td>
          <td lang="en">
            <p>Take away</p>
          </td>
        </tr>
      </tbody>
    </table>
    <table id="brf">
      <thead>
        <tr>
          <td lang="hu">
            <p>Reggeli</p>
          </td>
          <td></td>
          <td lang="en">
            <p>Breakfast</p>
          </td>
        </tr>
        <tr>
          <td lang="hu">
            <p>Egész nap kapható</p>
          </td>
          <td></td>
          <td lang="en">
            <p>Served all day</p>
          </td>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td lang="hu">
            <p>Ham<span>&amp;</span>eggs</p>
            <p>Sonka, 2 tojás, kevert idénysaláta, pirítós</p>
          </td>
          <td>
            <p>1690</p>
          </td>
          <td lang="en">
            <p>Ham<span>&amp;</span>eggs</p>
            <p>Ham, 2 eggs, seasonal mixed salad, toast</p>
          </td>
        </tr>
        <tr>
          <td lang="hu">
            <p>Bacon<span>&amp;</span>eggs</p>
            <p>Bacon, 2 tojás, kevert idénysaláta, pirítós</p>
          </td>
          <td>
            <p>1690</p>
          </td>
          <td lang="en">
            <p>Bacon<span>&amp;</span>eggs</p>
            <p>Bacon, 2 eggs, seasonal mixed salad, toast</p>
          </td>
        </tr>
        <tr>
          <td lang="hu">
            <p>Spenót<span>&amp;</span>eggs</p>
            <p>Fokhagymás olívaolajon párolt friss spenótlevél, 2 tojás, kevert idénysaláta, pirítós</p>
          </td>
          <td>
            <p>1690</p>
          </td>
          <td lang="en">
            <p>Spinach<span>&amp;</span>eggs</p>
            <p>Fresh spinach leaves sauteed in garlic olive oil, 2 eggs, seasonal mixed salad</p>
          </td>
        </tr>
        <tr>
          <td lang="hu">
            <p>Tojásos reggeli</p>
            <p>2 tojás kívánság szerint elkészítve, házi kőrözött, Philadelphia krémsajt, kevert idénysaláta, piritós
            </p>
          </td>
          <td>
            <p>1690</p>
          </td>
          <td lang="en">
            <p>Eggs breakfast</p>
            <p>2 eggs (scrambled or fried), hommemade cheese spread, Philadelphia cream cheese, seasonal mixed salad,
              toast</p>
          </td>
        </tr>
        <tr>
          <td lang="hu">
            <p>Bécsi virsli</p>
            <p>1 pár sült virsli, torma, mustár, kevert idénysaláta, pirítós</p>
          </td>
          <td>
            <p>1690</p>
          </td>
          <td lang="en">
            <p>Vienna sausage</p>
            <p>A pair of roasted Vienna sausage, horse radish, seasonal mixed salad, toast</p>
          </td>
        </tr>
        <tr>
          <td lang="hu">
            <p>Hot dog</p>
            <p>Roppanós bécsi virsli átsütve, bagettben, salátaágyon</p>
          </td>
          <td>
            <p>1490</p>
          </td>
          <td lang="en">
            <p>Hot dog</p>
            <p>A roasted Vienna sausage in&#160;a&#160;baguette bun, on a bed of lettuce</p>
          </td>
        </tr>
        <tr>
          <td lang="hu">
            <p>Bundáskenyér light</p>
            <p>Rostlapon sütve, kevert&#160;idénysalátával</p>
            <p><span>*&#160;</span>Kétsajtos <br /><span>*&#160;</span>Sonkás-füstölt sajtos
              <br /><span>*&#160;</span>Szalámis-cheddar sajtos</p>
          </td>
          <td>
            <p>1690</p>
          </td>
          <td lang="en">
            <p>French toast light</p>
            <p>From the grill, with&#160;seasonal&#160;mixed&#160;salad</p>
            <p><span>*&#160;</span>2 types of cheese <br /><span>*&#160;</span>Ham and smoked cheese
              <br /><span>*&#160;</span>Salami and cheddar</p>
          </td>
        </tr>
        <tr>
          <td lang="hu">
            <p>Mediterrán reggeli</p>
            <p>Humusz, olíva, szárított paradicsom, szezonális grillzöldségek, piritós</p>
          </td>
          <td>
            <p>2090</p>
          </td>
          <td lang="en">
            <p>Mediterranean breakfast</p>
            <p>Humus, olives, sundried tomatoes, seasonal grilled vegetables, toast</p>
          </td>
        </tr>
        <tr>
          <td lang="hu">
            <p>Francia reggeli</p>
            <p>4 db vajas mini-croissant, vaj, méz, házi lekvár</p>
          </td>
          <td>
            <p>1690</p>
          </td>
          <td lang="en">
            <p>French breakfast</p>
            <p>4 mini croissants, butter, honey, jam</p>
          </td>
        </tr>
        <tr>
          <td lang="hu">
            <p>Müzlikehely</p>
            <p>Natúr joghurt friss gyümölcsökkel</p>
          </td>
          <td>
            <p>1490</p>
          </td>
          <td lang="en">
            <p>Muesli bowl</p>
            <p>Plain yoghurt with fresh fruit</p>
          </td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td lang="hu">
            <p>Választható extra feltétek</p>
          </td>
          <td></td>
          <td lang="en">
            <p>Optional extra toppings</p>
          </td>
        </tr>
        <tr>
          <td lang="hu">
            <p><span>*&#160;</span>Hagyma</p>
          </td>
          <td>
            <p>200</p>
          </td>
          <td lang="en">
            <p><span>*&#160;</span>Onion</p>
          </td>
        </tr>
        <tr>
          <td lang="hu">
            <p><span>*&#160;</span>Sajt <br /><span>*&#160;</span>Sonka <br /><span>*&#160;</span>Bacon
              <br /><span>*&#160;</span>Tojás <br /><span>*&#160;</span>Vegyes zöldség</p>
          </td>
          <td>
            <p>400</p>
          </td>
          <td lang="en">
            <p><span>*&#160;</span>Cheese <br /><span>*&#160;</span>Ham <br /><span>*&#160;</span>Bacon
              <br /><span>*&#160;</span>Egg <br /><span>*&#160;</span>Mixed vegetables</p>
          </td>
        </tr>
        <tr>
          <td lang="hu">
            <p><span>*&#160;</span>Extra dip <br /><span>*&#160;</span>Tejföl <br /><span>*&#160;</span>Saláta</p>
          </td>
          <td>
            <p>700</p>
          </td>
          <td lang="en">
            <p><span>*&#160;</span>Extra dip <br /><span>*&#160;</span>Sour cream <br /><span>*&#160;</span>Salad</p>
          </td>
        </tr>
        <tr>
          <td lang="hu">
            <p><span>*&#160;</span>Majonéz <br /><span>*&#160;</span>Mustár <br /><span>*&#160;</span>Ketchup
              <br /><span>*&#160;</span>Vaj</p>
          </td>
          <td>
            <p>300</p>
          </td>
          <td lang="en">
            <p><span>*&#160;</span>Mayo <br /><span>*&#160;</span>Mustard <br /><span>*&#160;</span>Ketchup
              <br /><span>*&#160;</span>Butter</p>
          </td>
        </tr>
      </tbody>
    </table>
    <p></p>
    <table id="sandwich">
      <thead>
        <tr>
          <td lang="hu">
            <p>Szendvicsek</p>
          </td>
          <td></td>
          <td lang="en">
            <p>Sandwiches</p>
          </td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td></td>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td lang="hu">
            <p>Bagett</p>
            <p>Paradicsom, sajt, kevert idénysaláta</p>
            <p><span>*&#160;</span>Szalámis <br /><span>*&#160;</span>Sonkás <br /><span>*&#160;</span>Csirkés
              <br /><span>*&#160;</span>Grillzöldséges <br /><span>*&#160;</span>Négysajtos</p>
          </td>
          <td>
            <p>2090</p>
          </td>
          <td lang="en">
            <p>Baguette</p>
            <p>Tomato, cheese, seasonal mixed salad</p>
            <p><span>*&#160;</span>Salami <br /><span>*&#160;</span>Ham <br /><span>*&#160;</span>Chicken
              <br /><span>*&#160;</span>Grilled vegetables <br /><span>*&#160;</span>4-cheese</p>
          </td>
        </tr>
        <tr>
          <td lang="hu">
            <p>Mozzarellás bagett</p>
            <p>Bazslikom pesto, mozzarella, paradicsom, kevert idénysaláta</p>
          </td>
          <td>
            <p>2090</p>
          </td>
          <td lang="en">
            <p>Mozzarella baguette</p>
            <p>Basil pesto, mozzarella, tomato, seasonal mixed salad</p>
          </td>
        </tr>
        <tr>
          <td lang="hu">
            <p>Pikáns bagett</p>
            <p>Pirított bacon, grillezett lilahagyma, sajt, paradicsom, jalapeño, kevert idénysaláta</p>
          </td>
          <td>
            <p>2190</p>
          </td>
          <td lang="en">
            <p>Spicy baguette</p>
            <p>Fried bacon, grilled red onions, cheese, tomato, jalapeño, seasonal mixed salad</p>
          </td>
        </tr>
        <tr>
          <td lang="hu">
            <p>Spenótos bagett</p>
            <p>Bazslikomos paraj, sonka, füstölt sajt, paradicsom, kevert idénysaláta</p>
          </td>
          <td>
            <p>2190</p>
          </td>
          <td lang="en">
            <p>Spinach baguette</p>
            <p>Spinach with basil, ham, smoked cheese, tomato, seasonal mixed salad</p>
          </td>
        </tr>
        <tr>
          <td lang="hu">
            <p>Omega-3 bagett</p>
            <p>Cézáröntet, sajt, kevert idénysaláta</p>
            <p><span>*&#160;</span>Tonhalas <br /><span>*&#160;</span>Füstölt lazacos</p>
          </td>
          <td>
            <p>2190</p>
          </td>
          <td lang="en">
            <p>Omega-3 baguette</p>
            <p>Caesar dressing, cheese, mixed salad</p>
            <p><span>*&#160;</span>Tuna <br /><span>*&#160;</span>Smoked salmon</p>
          </td>
        </tr>
        <tr>
          <td lang="hu">
            <p>Tranzit bruscetta</p>
            <p>Napon szárított paradicsom fokhagymával, friss bazsalikom, kevert idénysaláta, pirított bagett</p>
          </td>
          <td>
            <p>2090</p>
          </td>
          <td lang="en">
            <p>Tranzit bruscetta</p>
            <p>Sundried tomatoes with garlic, fresh basil, seasonal mixed salad, toasted baguette</p>
          </td>
        </tr>
        <tr>
          <td lang="hu">
            <p>Feketeerdő bruscetta</p>
            <p>Feketeerdő sonka, napon szárított paradicsom fokhagymával, friss bazsalikom, kevert idénysaláta,
              pirított bagett</p>
          </td>
          <td>
            <p>2590</p>
          </td>
          <td lang="en">
            <p>Black Forest bruscetta</p>
            <p>Black Forest ham, sundried tomatoes with garlic, fresh basil, seasonal mixed salad, toasted baguette
            </p>
          </td>
        </tr>
        <tr>
          <td lang="hu">
            <p>Club szendvics tükörtojással</p>
            <p>Toast kenyér, sonka, bacon, sajt, paradicsom, majonéz</p>
          </td>
          <td>
            <p>2590</p>
          </td>
          <td lang="en">
            <p>Club sandwich with eggs</p>
            <p>Toast, ham, bacon, cheese, tomato, mayo</p>
          </td>
        </tr>
      </tbody>
    </table>
    <table id="salad">
      <thead>
        <tr>
          <td lang="hu">
            <p>Saláták</p>
          </td>
          <td></td>
          <td lang="en">
            <p>Salads</p>
          </td>
        </tr>
        <tr>
          <td lang="hu">
            <p>Pirítóssal szervírozva</p>
          </td>
          <td></td>
          <td lang="en">
            <p>Served with toast</p>
          </td>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td lang="hu">
            <p>Thai saláta</p>
            <p>Wokban sült vegyes zöldségek&#160;salátaágyon, édes-csípős szósszal</p>
          </td>
          <td>
            <p>2090</p>
          </td>
          <td lang="en">
            <p>Thai salad</p>
            <p>Mixed vegetables roasted in wok, served on a bed of lettuce with sweet and spicy sauce</p>
          </td>
        </tr>
        <tr>
          <td lang="hu">
            <p>Pirított csirkecsíkokkal</p>
          </td>
          <td>
            <p>2690</p>
          </td>
          <td lang="en">
            <p>With roasted chicken</p>
          </td>
        </tr>
        <tr>
          <td lang="hu">
            <p>Caprese saláta</p>
            <p>Mozzarella, paradicsom és friss bazsalikom kevert salátaágyon</p>
          </td>
          <td>
            <p>2090</p>
          </td>
          <td lang="en">
            <p>Caprese salad</p>
            <p>Mozzarella, tomato and fresh&#160;basil on a bed of mixed salad</p>
          </td>
        </tr>
        <tr>
          <td lang="hu">
            <p>Feketeerdő sonkával</p>
          </td>
          <td>
            <p>2690</p>
          </td>
          <td lang="en">
            <p>With Black Forest ham</p>
          </td>
        </tr>
        <tr>
          <td lang="hu">
            <p>Görög saláta</p>
            <p>Jégsaláta, uborka, lilahagyma, koktélparadicsom, olíva, fetasajt</p>
          </td>
          <td>
            <p>2290</p>
          </td>
          <td lang="en">
            <p>Greek salad</p>
            <p>Iceberg lettuce, cucumber, red onion, cherry tomatoes, olives, feta cheese</p>
          </td>
        </tr>
        <tr>
          <td lang="hu">
            <p>Roston sült csirkecsíkokkal</p>
          </td>
          <td>
            <p>2890</p>
          </td>
          <td lang="en">
            <p>With roasted chicken</p>
          </td>
        </tr>
        <tr>
          <td lang="hu">
            <p>Mézes-mustáros csirke</p>
            <p>Bazslikomos spenótlevelek, koktélparadicsom, mézzel-mustárral grillezett csirkecsíkok</p>
          </td>
          <td>
            <p>2290</p>
          </td>
          <td lang="en">
            <p>Honey-mustard chicken</p>
            <p>Spinach leaves with basil, cherry tomatoes, chicken strips grilled in honey and mustard</p>
          </td>
        </tr>
        <tr>
          <td lang="hu">
            <p>Narancsos lazacsaláta</p>
            <p>Narancs húsával, marinált édesköménnyel gazdagított kevert saláta füstölt lazaccal koronázva, narancs
              dresszinggel locsolva</p>
          </td>
          <td>
            <p>2990</p>
          </td>
          <td lang="en">
            <p>Orange and Salmon salad</p>
            <p>Mixed salad with orange and fennel, topped with smoked salmon and drizzled with orange dressing</p>
          </td>
        </tr>
        <tr>
          <td lang="hu">
            <p>Tonhalsaláta</p>
            <p>Tonhalkrém salátaágyon olívával, koktélparadicsommal, cézáröntettel</p>
          </td>
          <td>
            <p>2290</p>
          </td>
          <td lang="en">
            <p>Tuna salad</p>
            <p>Tuna paste on a bed of lettuce with olives, cherry tomatoes, and caesar dressing</p>
          </td>
        </tr>
        <tr>
          <td lang="hu">
            <p>Grill cézár saláta</p>
            <p>Római saláta, koktélparadicsom, grillezett csirkemellcsíkok, cézáröntet, reszelt parmezán, fokhagymás
              kruton</p>
          </td>
          <td>
            <p>2290</p>
          </td>
          <td lang="en">
            <p>Grilled caesar salad</p>
            <p>Romaine lettuce, cherry tomatoes, strips of grilled chicken, caesar dressing, grated parmesan, garlic
              croutons</p>
          </td>
        </tr>
        <tr>
          <td lang="hu">
            <p>Füstölt lazacos cézár</p>
            <p>Római saláta, koktélparadicsom, füstölt lazac, cézáröntet, reszelt parmezán, fokhagymás kruton</p>
          </td>
          <td>
            <p>2890</p>
          </td>
          <td lang="en">
            <p>Smoked salmon caesar</p>
            <p>Romaine lettuce, cherry tomatoes, smoked salmon, caesar dressing, grated parmesan, garlic croutons</p>
          </td>
        </tr>
        <tr>
          <td lang="hu">
            <p>Királyráksaláta</p>
            <p>Fokhagymás olíván rosé borral forgatva, bambuszrüggyel, olajbogyóval és aszalt gyümölcsökkel kevert
              vitaminsaláta-ágyon</p>
          </td>
          <td>
            <p>3190</p>
          </td>
          <td lang="en">
            <p>King prawn salad</p>
            <p>Prepared in garlic olive oil and rosé wine with bamboo sprouts and olives served on a bed of mixed
              vitamin salad with dried fruits</p>
          </td>
        </tr>
      </tbody>
    </table>
    <table id="quesadilla">
      <thead>
        <tr>
          <td lang="hu">
            <p>Quesadillák</p>
          </td>
          <td></td>
          <td lang="en">
            <p>Quesadillas</p>
          </td>
        </tr>
        <tr>
          <td lang="hu">
            <p>Leválsaláta ágyon, 1 választható öntettel</p>
          </td>
          <td></td>
          <td lang="en">
            <p>On a bed of lettuce, with 1 chosen dip</p>
          </td>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td lang="hu">
            <p>Zöldséges quesadilla</p>
            <p>Grillezett idényzöldségekkel, sajttal</p>
          </td>
          <td>
            <p>2490</p>
          </td>
          <td lang="en">
            <p>Vegetable quesadilla</p>
            <p>Grilled seasonal vegetables, cheese</p>
          </td>
        </tr>
        <tr>
          <td lang="hu">
            <p>Csirkés quesadilla</p>
            <p>Grillezett csirkecsíkokkal, salátával, sajttal</p>
          </td>
          <td>
            <p>2690</p>
          </td>
          <td lang="en">
            <p>Chicken quesadilla</p>
            <p>Strips of roasted chicken, lettuce, cheese</p>
          </td>
        </tr>
        <tr>
          <td lang="hu">
            <p>Mexikói quesadilla</p>
            <p>Pikáns zöldségraguval, sajttal</p>
          </td>
          <td>
            <p>2490</p>
          </td>
          <td lang="en">
            <p>Mexican quesadilla</p>
            <p>Spicy mix of veggies, cheese</p>
          </td>
        </tr>
        <tr>
          <td lang="hu">
            <p>Grillezett csirkecsíkokkal</p>
          </td>
          <td>
            <p>3090</p>
          </td>
          <td lang="en">
            <p>With grilled chicken</p>
          </td>
        </tr>
        <tr>
          <td lang="hu">
            <p>4 sajtos quesadilla</p>
            <p>4 féle sajttal, salátával, paradicsommal</p>
          </td>
          <td>
            <p>2490</p>
          </td>
          <td lang="en">
            <p>4-cheese quesadilla</p>
            <p>4 cheese, lettuce, tomato</p>
          </td>
        </tr>
        <!--<tr>
          <td lang="hu">
            <p>Tojásos quesadilla</p>
            <p>Lilahagymás omlettel, sajttal</p>
          </td>
          <td>
            <p>2190</p>
          </td>
          <td lang="en">
            <p>Egg quesadilla</p>
            <p>Red onion omelette, cheese</p>
          </td>
        </tr>
        <tr>
          <td lang="hu">
            <p>Chorizóval</p>
          </td>
          <td>
            <p>2790</p>
          </td>
          <td lang="en">
            <p>With chorizo</p>
          </td>
        </tr>-->
        <tr>
          <td lang="hu">
            <p>Pikáns quesadilla</p>
            <p>Pirított baconnel, sonkával, grillezett lilahagymával, paradicsommal, jalapeñoval, sajttal</p>
          </td>
          <td>
            <p>2790</p>
          </td>
          <td lang="en">
            <p>Picant quesadilla</p>
            <p>Roasted bacon and ham, grilled red onion, tomato, jalapeño, cheese</p>
          </td>
        </tr>
        <tr>
          <td lang="hu">
            <p>Tonhalas quesadilla</p>
            <p>Tonhalkrémmel, salátával, sajttal</p>
          </td>
          <td>
            <p>2790</p>
          </td>
          <td lang="en">
            <p>Tuna quesadilla</p>
            <p>Tuna paste, lettuce, cheese</p>
          </td>
        </tr>
        <tr>
          <td lang="hu">
            <p>Kecskesajtos quesadilla</p>
            <p>Kecskesajttal, napon szárított paradicsommal, bazsalikomos, rukkolás salátával</p>
          </td>
          <td>
            <p>2790</p>
          </td>
          <td lang="en">
            <p>Goat cheese quesadilla</p>
            <p>Goat cheese, sundried tomatoes, basil and rocket salad</p>
          </td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td lang="hu">
            <p>Választható öntetek</p>
            <p><span>*&#160;</span>Salsa (enyhén csípős)</p>
            <p><span>*&#160;</span>Bazsalikompesto</p>
            <p><span>*&#160;</span>Cézár öntet</p>
            <p><span>*&#160;</span>Medvehagymás tejföl</p>
            <p><span>*&#160;</span>Rokfortöntet</p>
            <p><span>*&#160;</span>Guacamole</p>
            <p><span>*&#160;</span>„Tranzit” pikáns kenegető</p>
          </td>
          <td>
            <p>700</p>
          </td>
          <td lang="en">
            <p>Optional extra dips</p>
            <p><span>*&#160;</span>Salsa (slightly spicy)</p>
            <p><span>*&#160;</span>Basil pesto</p>
            <p><span>*&#160;</span>Caesar dressing</p>
            <p><span>*&#160;</span>Sour cream with wild garlic</p>
            <p><span>*&#160;</span>Blue cheese dressing</p>
            <p><span>*&#160;</span>Guacamole</p>
            <p><span>*&#160;</span>Piquant dip</p>
          </td>
        </tr>
      </tbody>
    </table>

    <table id="alc">
      <thead>
        <tr>
          <td lang="hu">
            <p>Sörök</p>
          </td>
          <td></td>
          <td lang="en">
            <p>Beers</p>
          </td>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th lang="hu">
            <p>Üveges</p>
          </th>
          <td></td>
          <th lang="en">
            <p>Bottled</p>
          </th>
        </tr>
        <tr>
          <td lang="hu">
            <p>Soproni 1895 <span>(0,5 l)</span></p>
          </td>
          <td>
            <p>880</p>
          </td>
          <td lang="en">
            <p>Soproni 1895 <span>(0.5 l)</span></p>
          </td>
        </tr>
        <tr>
          <td lang="hu">
            <p>Grimbergen Double Ambrée <span>(0,33 l)</span></p>
          </td>
          <td>
            <p>1290</p>
          </td>
          <td lang="en">
            <p>Grimbergen Double Ambrée <span>(0.33 l)</span></p>
          </td>
        </tr>
        <tr>
          <td lang="hu">
            <p>Gösser Natur Zitrone 2% <span>(0,33 l)</span></p>
          </td>
          <td>
            <p>880</p>
          </td>
          <td lang="en">
            <p>Gösser Natur Zitrone 2% <span>(0.33 l)</span></p>
          </td>
        </tr>
        <tr>
          <th lang="hu">
            <p>Csapolt Carlsberg</p>
          </th>
          <td></td>
          <th lang="en">
            <p>Draught Carlsberg</p>
          </th>
        </tr>
        <tr>
          <td lang="hu">
            <p>Pohár&#160;<span>(0,25 l)</span></p>
          </td>
          <td>
            <p>550</p>
          </td>
          <td lang="en">
            <p>Glass&#160;<span>(0.25&#160;l)</span></p>
          </td>
        </tr>
        <tr>
          <td lang="hu">
            <p>Korsó&#160;<span>(0,4 l)</span></p>
          </td>
          <td>
            <p>850</p>
          </td>
          <td lang="en">
            <p>Mug&#160;<span>(0.4&#160;l)</span></p>
          </td>
        </tr>
        <tr>
          <td lang="hu">
            <p>Kancsó&#160;<span>(1 l)</span></p>
          </td>
          <td>
            <p>2000</p>
          </td>
          <td lang="en">
            <p>Pitcher&#160;<span>(1&#160;l)</span></p>
          </td>
        </tr>
        <tr>
          <th lang="hu">
            <p>Kronenburg Búza</p>
          </th>
          <td></td>
          <th lang="en">
            <p>Kronenburg Blanc</p>
          </th>
        </tr>
        <tr>
          <td lang="hu">
            <p>Pohár&#160;<span>(0,25 l)</span></p>
          </td>
          <td>
            <p>750</p>
          </td>
          <td lang="en">
            <p>Glass&#160;<span>(0.25&#160;l)</span></p>
          </td>
        </tr>
        <tr>
          <td lang="hu">
            <p>Korsó&#160;<span>(0,5 l)</span></p>
          </td>
          <td>
            <p>1400</p>
          </td>
          <td lang="en">
            <p>Mug&#160;<span>(0.5&#160;l)</span></p>
          </td>
        </tr>
        <tr>
          <td lang="hu">
            <p>Kancsó&#160;<span>(1 l)</span></p>
          </td>
          <td>
            <p>2600</p>
          </td>
          <td lang="en">
            <p>Pitcher&#160;<span>(1&#160;l)</span></p>
          </td>
        </tr>
        <tr>
          <th lang="hu">
            <p>Alkoholmentes</p>
          </th>
          <td></td>
          <th lang="en">
            <p>Non-alcoholic</p>
          </th>
        </tr>
        <tr>
          <td lang="hu">
            <p>Soproni szűz <span>(0,5 l)</span></p>
          </td>
          <td>
            <p>880</p>
          </td>
          <td lang="en">
            <p>Soproni virgin <span>(0.5 l)</span></p>
          </td>
        </tr>
        <tr>
          <td lang="hu">
            <p>Gösser Natur Zitrone 0% <span>(0,33 l)</span></p>
          </td>
          <td>
            <p>880</p>
          </td>
          <td lang="en">
            <p>Gösser Natur Zitrone 0% <span>(0.33 l)</span></p>
          </td>
        </tr>
      </tbody>
    </table>
    <table>
      <thead>
        <tr>
          <td lang="hu">
            <p>Borok</p>
          </td>
          <td>
            <p>1 dl <span>/</span> 0,75 l</p>
          </td>
          <td lang="en">
            <p>Wines</p>
          </td>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th lang="hu">
            <p>Fehér bor</p>
          </th>
          <td></td>
          <th lang="en">
            <p>White wine</p>
          </th>
        </tr>
        <tr>
          <td lang="hu">
            <p>Nyakas „Aligvárom” </p>
          </td>
          <td>
            <p>490 <span>/</span> 3600</p>
          </td>
          <td lang="en">
            <p>Nyakas „Aligvárom” </p>
          </td>
        </tr>
        <tr>
          <td lang="hu">
            <p>Szeremley Olaszrizling </p>
          </td>
          <td>
            <p>620 <span>/</span> 4600</p>
          </td>
          <td lang="en">
            <p>Szeremley Olaszrizling </p>
          </td>
        </tr>
        <tr>
          <td lang="hu">
            <p>Bujdosó „Kapitány” </p>
          </td>
          <td>
            <p>470 <span>/</span> 3500</p>
          </td>
          <td lang="en">
            <p>Bujdosó „Kapitány” </p>
          </td>
        </tr>
        <tr>
          <td lang="hu">
            <p>Juhász Musc. Ottonel </p>
          </td>
          <td>
            <p>470 <span>/</span> 3500</p>
          </td>
          <td lang="en">
            <p>Juhász Musc. Ottonel </p>
          </td>
        </tr>
        <tr>
          <td lang="hu">
            <p>Figula Sauv. Blanc</p>
          </td>
          <td>
            <p>620 <span>/</span> 4600</p>
          </td>
          <td lang="en">
            <p>Figula Sauv. Blanc</p>
          </td>
        </tr>
        <tr>
          <th lang="hu">
            <p>Rosé bor</p>
          </th>
          <td></td>
          <th lang="en">
            <p>Rosé wine</p>
          </th>
        </tr>
        <tr>
          <td lang="hu">
            <p>Juhász Rosé </p>
          </td>
          <td>
            <p>470 <span>/</span> 3500</p>
          </td>
          <td lang="en">
            <p>Juhász Rosé </p>
          </td>
        </tr>
        <tr>
          <td lang="hu">
            <p>Takler Rosé</p>
          </td>
          <td>
            <p>620 <span>/</span> 4600</p>
          </td>
          <td lang="en">
            <p>Takler Rosé</p>
          </td>
        </tr>
        <tr>
          <th lang="hu">
            <p>Vörös bor</p>
          </th>
          <td></td>
          <th lang="en">
            <p>Red wine</p>
          </th>
        </tr>
        <tr>
          <td lang="hu">
            <p>Takler kékfrankos </p>
          </td>
          <td>
            <p>620 <span>/</span> 4600</p>
          </td>
          <td lang="en">
            <p>Takler kékfrankos </p>
          </td>
        </tr>
        <tr>
          <td lang="hu">
            <p>Juhász Merlot </p>
          </td>
          <td>
            <p>620 <span>/</span> 4600</p>
          </td>
          <td lang="en">
            <p>Juhász Merlot </p>
          </td>
        </tr>
        <tr>
          <td lang="hu">
            <p>Vesztergombi Cabernet&#160;Franc </p>
          </td>
          <td>
            <p>780 <span>/</span> 5800</p>
          </td>
          <td lang="en">
            <p>Vesztergombi Cabernet&#160;Franc </p>
          </td>
        </tr>
        <tr>
          <td lang="hu">
            <p>Vylyan&#160;Villányi Montenuovo&#160;Cuvée</p>
          </td>
          <td>
            <p><i>990</i> <span>/</span> 6800</p>
          </td>
          <td lang="en">
            <p>Vylyan&#160;Villányi Montenuovo&#160;Cuvée</p>
          </td>
        </tr>
      </tbody>
    </table>
    <table>
      <thead>
        <tr>
          <td></td>
          <td></td>
          <td></td>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th lang="hu">
            <p>Pezsgők</p>
          </th>
          <td>
            <p>2 dl <span>/</span> 0,75 l</p>
          </td>
          <th lang="en">
            <p>Sparkling wine</p>
          </th>
        </tr>
        <tr>
          <td lang="hu">
            <p>Törley Gála</p>
          </td>
          <td>
            <p>1190 <span>/</span> 2990</p>
          </td>
          <td lang="en">
            <p>Törley Gála</p>
          </td>
        </tr>
        <tr>
          <td lang="hu">
            <p>Törley Charmant Doux</p>
          </td>
          <td>
            <p>1190 <span>/</span> 2990</p>
          </td>
          <td lang="en">
            <p>Törley Charmant Doux</p>
          </td>
        </tr>
        <tr>
          <td lang="hu">
            <p>Hungária Extra Dry</p>
          </td>
          <td>
            <p>1490 <span>/</span> 5390</p>
          </td>
          <td lang="en">
            <p>Hungária Extra Dry</p>
          </td>
        </tr>
        <tr>
          <td lang="hu">
            <p>Gancia Prosecco</p>
          </td>
          <td>
            <p>1900 <span>/</span> 5900</p>
          </td>
          <td lang="en">
            <p>Gancia Prosecco</p>
          </td>
        </tr>
        <tr>
          <th lang="hu">
            <p>Sangria Gyümölcsökkel</p>
          </th>
          <td></td>
          <th lang="en">
            <p>Sangria with fruits</p>
          </th>
        </tr>
        <tr>
          <td lang="hu">
            <p>Pohár <span>(0,25 l)</span></p>
          </td>
          <td>
            <p>750</p>
          </td>
          <td lang="en">
            <p>Glass <span>(0.25 l)</span></p>
          </td>
        </tr>
        <tr>
          <td lang="hu">
            <p>Kancsó <span>(1 l)</span></p>
          </td>
          <td>
            <p>2800</p>
          </td>
          <td lang="en">
            <p>Pitcher <span>(1 l)</span></p>
          </td>
        </tr>
        <tr>
          <th lang="hu">
            <p>Cider</p>
          </th>
          <td></td>
          <th lang="en">
            <p>Cider</p>
          </th>
        </tr>
        <tr>
          <td lang="hu">
            <p>Somersby <span>(0,33 l)</span></p>
          </td>
          <td>
            <p>850</p>
          </td>
          <td lang="en">
            <p>Somersby <span>(0.33 l)</span></p>
          </td>
        </tr>
        <tr>
          <th lang="hu">
            <p>Fröccsözéshez</p>
          </th>
          <td></td>
          <th lang="en">
            <p>For a spritzer</p>
          </th>
        </tr>
        <tr>
          <td lang="hu">
            <p>a Bujdosó Pincészet borait ajánljuk</p>
          </td>
          <td>
            <p>300</p>
            <p>/dl</p>
          </td>
          <td lang="en">
            <p>we recommend the wines from the Bujdosó Winery</p>
          </td>
        </tr>
        <tr>
          <td lang="hu">
            <p><span>Szódavíz</span><span> </span>a fröccsökhöz</p>
          </td>
          <td>
            <p>50</p>
            <p>/dl</p>
          </td>
          <td lang="en">
            <p><span>Soda water</span> for spritzer</p>
          </td>
        </tr>
      </tbody>
    </table>
    <table>
      <thead>
        <tr>
          <td lang="hu">
            <p>Röviditalok</p>
          </td>
          <td>
            <p>2 cl <span>/</span> 4 cl</p>
          </td>
          <td lang="en">
            <p>Spirits</p>
          </td>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th lang="hu">
            <p>Pálinka</p>
          </th>
          <td></td>
          <th lang="en">
            <p>Schnapps</p>
          </th>
        </tr>
        <tr>
          <td lang="hu">
            <p>Árpád Kisüsti</p>
            <p><span>*&#160;</span>Barack <br /><span>*&#160;</span>Körte <br /><span>*&#160;</span>Csabai Házi
              Szilva<br /><span>*&#160;</span>Mézes Ágyas Meggy</p>
          </td>
          <td>
            <p>540 <span>/</span> 1080</p>
          </td>
          <td lang="en">
            <p>Árpád Kisüsti</p>
            <p><span>*&#160;</span>Peach <br /><span>*&#160;</span>Pear <br /><span>*&#160;</span>Homemade
              plum<br /><span>*&#160;</span>Sour cherry with honey</p>
          </td>
        </tr>
        <tr>
          <td lang="hu">
            <p>Árpád Kisüsti Birs</p>
          </td>
          <td>
            <p>650 <span>/</span> 1300</p>
          </td>
          <td lang="en">
            <p>Árpád Kisüsti quince</p>
          </td>
        </tr>
        <tr>
          <th lang="hu">
            <p>Vodka</p>
          </th>
          <td></td>
          <th lang="en">
            <p>Vodka</p>
          </th>
        </tr>
        <tr>
          <td lang="hu">
            <p>Finlandia</p>
          </td>
          <td>
            <p>460 <span>/</span> 920</p>
          </td>
          <td lang="en">
            <p>Finlandia</p>
          </td>
        </tr>
        <tr>
          <th lang="hu">
            <p>Whiskey</p>
          </th>
          <td></td>
          <th lang="en">
            <p>Whiskey</p>
          </th>
        </tr>
        <tr>
          <td lang="hu">
            <p>Jameson</p>
          </td>
          <td>
            <p>540 <span>/</span> 1080</p>
          </td>
          <td lang="en">
            <p>Jameson</p>
          </td>
        </tr>
        <tr>
          <td lang="hu">
            <p>Jack Daniel’s</p>
          </td>
          <td>
            <p>540 <span>/</span> 1080</p>
          </td>
          <td lang="en">
            <p>Jack Daniel’s</p>
          </td>
        </tr>
        <tr>
          <td lang="hu">
            <p>Johnnie Walker</p>
          </td>
          <td>
            <p>460 <span>/</span> 920</p>
          </td>
          <td lang="en">
            <p>Johnnie Walker</p>
          </td>
        </tr>
        <tr>
          <th lang="hu">
            <p>Rum</p>
          </th>
          <td></td>
          <th lang="en">
            <p>Rum</p>
          </th>
        </tr>
        <tr>
          <td lang="hu">
            <p>Captain Morgan</p>
            <p><span>*&#160;</span>Spiced Gold <br /><span>*&#160;</span>Black Label</p>
          </td>
          <td>
            <p>460 <span>/</span> 920</p>
          </td>
          <td lang="en">
            <p>Captain Morgan</p>
            <p><span>*&#160;</span>Spiced Gold <br /><span>*&#160;</span>Black Label</p>
          </td>
        </tr>
        <tr>
          <td lang="hu">
            <p>Bacardi</p>
          </td>
          <td>
            <p>460 <span>/</span> 920</p>
          </td>
          <td lang="en">
            <p>Bacardi</p>
          </td>
        </tr>
        <tr>
          <th lang="hu">
            <p>Gin</p>
          </th>
          <td></td>
          <th lang="en">
            <p>Gin</p>
          </th>
        </tr>
        <tr>
          <td lang="hu">
            <p>Gordon’s</p>
          </td>
          <td>
            <p>540 <span>/</span> 1080</p>
          </td>
          <td lang="en">
            <p>Gordon’s</p>
          </td>
        </tr>
        <tr>
          <th lang="hu">
            <p>Tequila</p>
          </th>
          <td></td>
          <th lang="en">
            <p>Tequila</p>
          </th>
        </tr>
        <tr>
          <td lang="hu">
            <p>Jose Cuervo Silver</p>
          </td>
          <td>
            <p>460 <span>/</span> 920</p>
          </td>
          <td lang="en">
            <p>Jose Cuervo Clasico</p>
          </td>
        </tr>
        <tr>
          <td lang="hu">
            <p>Jose Cuervo Reposado</p>
          </td>
          <td>
            <p>540 <span>/</span> 1080</p>
          </td>
          <td lang="en">
            <p>Jose Cuervo Especial</p>
          </td>
        </tr>
        <tr>
          <th lang="hu">
            <p>Brandy</p>
          </th>
          <td></td>
          <th lang="en">
            <p>Brandy</p>
          </th>
        </tr>
        <tr>
          <td lang="hu">
            <p>Metaxa </p>
          </td>
          <td>
            <p>460 <span>/</span> 920</p>
          </td>
          <td lang="en">
            <p>Metaxa</p>
          </td>
        </tr>
        <tr>
          <td lang="hu">
            <p>Calvados</p>
          </td>
          <td>
            <p>460 <span>/</span> 920</p>
          </td>
          <td lang="en">
            <p>Calvados</p>
          </td>
        </tr>
        <tr>
          <th lang="hu">
            <p>Keserűk</p>
          </th>
          <td></td>
          <th lang="en">
            <p>Bitters</p>
          </th>
        </tr>
        <tr>
          <td lang="hu">
            <p>Jägermeister</p>
          </td>
          <td>
            <p>460 <span>/</span> 920</p>
          </td>
          <td lang="en">
            <p>Jägermeister</p>
          </td>
        </tr>
        <tr>
          <td lang="hu">
            <p>Zwack Unicum</p>
          </td>
          <td>
            <p>460 <span>/</span> 920</p>
          </td>
          <td lang="en">
            <p>Zwack Unicum</p>
          </td>
        </tr>
        <tr>
          <td lang="hu">
            <p>Campari <span>(8 cl)</span></p>
          </td>
          <td>
            <p>1180</p>
          </td>
          <td lang="en">
            <p>Campari <span>(8 cl)</span></p>
          </td>
        </tr>
        <tr>
          <th lang="hu">
            <p>Vermut</p>
          </th>
          <td>
            <p>8 cl</p>
          </td>
          <th lang="en">
            <p>Vermouth</p>
          </th>
        </tr>
        <tr>
          <td lang="hu">
            <p>Martini</p>
            <p><span>*&#160;</span>Bianco <br /><span>*&#160;</span>Rosso <br /><span>*&#160;</span>Extra dry</p>
          </td>
          <td>
            <p>760</p>
          </td>
          <td lang="en">
            <p>Martini</p>
            <p><span>*&#160;</span>Bianco <br /><span>*&#160;</span>Rosso <br /><span>*&#160;</span>Extra dry</p>
          </td>
        </tr>
      </tbody>
    </table>
    <table>
      <thead>
        <tr>
          <td lang="hu">
            <p>Koktélok</p>
          </td>
          <td></td>
          <td lang="en">
            <p>Cocktails</p>
          </td>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td lang="hu">
            <p>Cuba Libre</p>
            <p>Bacardi (4 cl), cola, lime</p>
          </td>
          <td>
            <p>1890</p>
          </td>
          <td lang="en">
            <p>Cuba Libre</p>
            <p>Bacardi (4 cl), cola, lime</p>
          </td>
        </tr>
        <tr>
          <td lang="hu">
            <p>Long Island Ice Tea</p>
            <p>Vodka (2 cl), Gin (2 cl), Tequila (2 cl), Bacardi (2 cl), Triple Sec (2 cl), Cola, citrom</p>
          </td>
          <td>
            <p>2890</p>
          </td>
          <td lang="en">
            <p>Long Island Ice Tea</p>
            <p>Vodka (2 cl), Gin (2 cl), Tequila (2 cl), Bacardi (2 cl), Triple Sec (2 cl), Cola, lemon</p>
          </td>
        </tr>
        <tr>
          <td lang="hu">
            <p>Mojito</p>
            <p>Bacardi (4 cl), szóda, cukorszirup, mentalevél, lime</p>
          </td>
          <td>
            <p>1890</p>
          </td>
          <td lang="en">
            <p>Mojito</p>
            <p>Bacardi (4 cl), soda water, sugar syrup, mint leaves, lime</p>
          </td>
        </tr>
        <tr>
          <td lang="hu">
            <p>Epres Mojito</p>
            <p>Bacardi (4 cl), szóda, eperpüré, mentalevél, lime</p>
          </td>
          <td>
            <p>2090</p>
          </td>
          <td lang="en">
            <p>Strawberry Mojito</p>
            <p>Bacardi (4 cl), soda water, strawberry&#160;puree, mint leaves, lime</p>
          </td>
        </tr>
        <tr>
          <td lang="hu">
            <p>Piňa Colada</p>
            <p>Bacardi (4 cl), ananászlé, kókusz szirup, tejszín</p>
          </td>
          <td>
            <p>1890</p>
          </td>
          <td lang="en">
            <p>Piňa Colada</p>
            <p>Bacardi (4 cl), pineapple juice, coconut syrup, cream</p>
          </td>
        </tr>
        <tr>
          <td lang="hu">
            <p>Sex on the Beach</p>
            <p>Vodka (4 cl), baracklikőr (2 cl), narancslé, feketeribizlilé</p>
          </td>
          <td>
            <p>1890</p>
          </td>
          <td lang="en">
            <p>Sex on the Beach</p>
            <p>Vodka (4 cl), peach liquor (2 cl), orange juice, black currant juice</p>
          </td>
        </tr>
        <tr>
          <td lang="hu">
            <p>Tequila sunrise</p>
            <p>Tequila (4 cl), grenadine (1 cl), narancslé</p>
          </td>
          <td>
            <p>1890</p>
          </td>
          <td lang="en">
            <p>Tequila sunrise</p>
            <p>Tequila (4 cl), grenadine (1 cl), orange&#160;juice</p>
          </td>
        </tr>
        <tr>
          <td lang="hu">
            <p>Aperol Spritz</p>
            <p>Prosecco (1 dl), Aperol (6 cl), szóda&#160;(1&#160;spricc), jég, narancs</p>
          </td>
          <td>
            <p>1890</p>
          </td>
          <td lang="en">
            <p>Aperol Spritz</p>
            <p>Prosecco (1 dl), Aperol&#160;(6&#160;cl), soda&#160;water, ice, orange</p>
          </td>
        </tr>
        <tr>
          <td lang="hu">
            <p>Gin Fizz</p>
            <p>Gin (4 cl), szóda (3 dl), citromlé, cukorszirup, jég</p>
          </td>
          <td>
            <p>1790</p>
          </td>
          <td lang="en">
            <p>Gin Fizz</p>
            <p>Gin (4 cl), soda water (3 dl), lemon juice, sugar syrup, ice</p>
          </td>
        </tr>
        <tr>
          <th lang="hu">
            <p>Alkoholmentes</p>
          </th>
          <td></td>
          <th lang="en">
            <p>Non-alcoholic</p>
          </th>
        </tr>
        <tr>
          <td lang="hu">
            <p>Virgin Mojito</p>
            <p>Szóda, cukorszirup, lime, mentalevél</p>
          </td>
          <td>
            <p>1600</p>
          </td>
          <td lang="en">
            <p>Virgin Mojito</p>
            <p>Soda water, sugar syrup, lime, mint leaves</p>
          </td>
        </tr>
        <tr>
          <td lang="hu">
            <p>Virgin Colada</p>
            <p>Tejszín, kókusz szirup, ananászlé</p>
          </td>
          <td>
            <p>1600</p>
          </td>
          <td lang="en">
            <p>Virgin Colada</p>
            <p>Cream, coconut syrup, pineapple juice</p>
          </td>
        </tr>
      </tbody>
    </table>
`
</script>
