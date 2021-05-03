<script context="module">
  const posts = import.meta.glob('../napimenu/*.md')

let body = []

//console.log(posts)
for (const path in posts) {
  //body.push(posts[path]().then(({metadata}) => metadata))
  
  const push = posts[path]().then(({metadata}) => transform(metadata,path))//.then(({metadata}) => metadata)
  body.push(push)
}
export async function load({ page, fetch }) {
  const posts = await Promise.all(body)
  //console.log(Promise.all(body))
  return {
    props: {
      posts
    }
  }
}
function transform(m,p) {
  const s = p.split('.')
  m.lang = s[s.length-2]
  const d = new Date(m.date)
  m.date = d.toLocaleDateString(m.lang, { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })
  m.value = d.valueOf() || 0
  //console.log(date.toLocaleDateString(y), { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })
  return m
}
</script>
<script>
  import Artcafe from '$lib/Artcafe.svelte'
  import Bistro from '$lib/Bistro.svelte'
  import Etlap from '$lib/Etlap.svelte'
  export let posts
  let d = new Date().valueOf()
  //d = d.valueOf()
  console.log(posts)
</script>

<input id="checked0" name="change" type="radio" checked>
<input id="checked1" name="change" type="radio">
<input id="checked2" name="change" type="radio">
<input id="checked3" name="change" type="radio">
<input id="checked4" name="change" type="radio">
<input id="lang" type="checkbox" value="en" />

<main id="app">
  <section class="checked0">
    <img loading="lazy" src="/images/remix/header.png" alt="header" />
    <label for=""><span>TRANZIT</span></label>
    <div>
      <h2><span lang="hu">Újra nyitva a Terasz!</span><span lang="en">Our Terrace is open again!</span></h2>
      <a href="https://www.facebook.com/tranzitcafe" target="_blank" rel="noopener"><img src="images/tranzit_nyitnikek_fb_post_optim.png" alt="tranzit->heves"/></a>
      <p><span lang="hu">Napi ajánlataink a <a href="https://www.facebook.com/tranzitcafe" target="_blank" rel="noopener">Facebook oldalunkon</a>!</span><span lang="en">See our dayly offers on our <a href="https://www.facebook.com/tranzitcafe" target="_blank" rel="noopener">Facebook page</a>!</span></p>

      <h1><span lang="hu">Nyitva tartás</span><span lang="en">Opening hours</span></h1>

      <p><span lang="hu">Hétfőtől szombatig: 9.00–21.30</span><span lang="en">Monday to Saturday: 9.00AM to 9.30PM</span></p>

      <h5><span lang="hu">Cím:</span><span lang="en">Address:</span> <a rel="noopener" href="https://g.page/tranzitcafe?share">1114
          Budapest, Tranzit Art Café</a></h5>
      <dl>
        <dt><b><span lang="hu">Asztalfoglalás, rendelés</span><span lang="en">Reservations, preorders</span></b></dt>
        <dd><span lang="hu">Telefon:</span><span lang="en">Phone:</span> <a href="tel:+3612093070">+36 1 209 3070</a>
        </dd>
        <dd>Email: <a href="mailto:tranzitcafe@gmail.com">tranzitcafe@gmail.com</a></dd>
      </dl>
      <p><b>Facebook:</b> <a href="https://www.facebook.com/tranzitcafe" target="_blank"
          rel="noreferrer noopener">fb.com/tranzitcafe</a></p>
      <header>

        <label class="checked1" for="checked1"><span>BISTRO</span></label>
        
        <label class="checked2" for="checked2"><span lang="hu">ÉTLAP</span><span lang="en">MENU</span></label>
        <details>
          <summary><label for="checked2"><span lang="hu">ÉTLAP</span><span lang="en">MENU</span></label></summary>
          <a href="#special">Tranzit Special</a>
          <a href="#light"><span lang="hu">Könnyű falatok</span><span lang="en">Light snacks</span></a>
          <a href="#coffee"><span lang="hu">Kávéitalok</span><span lang="en">Coffee drinks</span></a>
          <a href="#tea"><span lang="hu">Teák</span><span lang="en">Teas</span></a>
          <a href="#blender"><span lang="hu">Turmixok</span><span lang="en">Blenders</span></a>
          <a href="#choco"><span lang="hu">Csokoládéitalok</span><span lang="en">Chocolates</span></a>
          <a href="#soft"><span lang="hu">Üdítőitalok</span><span lang="en">Soft drinks</span></a>
          <a href="#brf"><span lang="hu">Reggeli</span><span lang="en">Breakfast</span></a>
          <a href="#sandwich"><span lang="hu">Szendvicsek</span><span lang="en">Sandwiches</span></a>
          <a href="#salad"><span lang="hu">Saláták</span><span lang="en">Salads</span></a>
          <a href="#quesadilla"><span lang="hu">Quesadillák</span><span lang="en">Quesadillas</span></a>
          <a href="#alc"><span lang="hu">Alkoholos italok</span><span lang="en">Alcoholic drinks</span></a>
        </details>

        <label class="checked3" for="checked3"><span>ART CAFÉ</span></label>
        <label for="lang"><span class="hu">HU</span> / <span class="en">EN</span></label>
      </header>

      <h1 id="menutext"><span lang="hu">Napi ajánlat</span><span lang="en">Daily offers</span></h1>
      <p><span lang="hu">Hétfőtől péntekig 12 órától</span><span lang="en">Monday to Friday From 12 PM</span></p>
      <p id="menudate"><span lang="hu"></span><span lang="en"></span></p>
<!--<h1>{d}</h1>-->
      {#each posts as {date, soup, menua, menub, lang, value}}
<!--<h2>{value}</h2>-->
      {#if d <= value || true}
      <aside lang="{lang}">
        <h2>{date}</h2>
        <h3><span lang="hu">Leves</span><span lang="en">Soup</span></h3>
        <p>
          {soup}
        </p>
        <h3>Menu A</h3>
        <p>
          {menua}
        </p>
        <h3>Menu B</h3>
        <p>
          {menub}
        </p>
      </aside>
      {/if}
      {/each}
    

      <table id="formules">
        <tbody>
          <tr>
            <th lang="hu">
              <p>Elegancia formula</p>
              <p>Leves <span>&amp;</span> főétel <span>vagy</span> főétel <span>&amp;</span> desszert</p>
            </th>
            <td>
              <p>1890</p>
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
              <p>2390</p>
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
              <p>2890</p>
            </td>
            <th lang="en">
              <p>Decadentica formule</p>
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
              <p>690</p>
              <p>790</p>
              <p>1190</p>
              <p>1390</p>
              <p>750</p>
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
        </tbody>
      </table>
      <h1>
        <span lang="hu">Nyitva tartás</span>
        <span lang="en">Opening hours</span>
      </h1>
      <p lang="hu">Hétfőtől péntekig: 9–22h</p>
      <p lang="en">Weekdays: 9 AM – 10 PM</p>


      <figure id="pro-cultura">
        <img loading="lazy" alt="Pro Cultura Award" src="images/2020/pro-cultura-web.jpg" />
        <figcaption><span lang="hu">Pro Cultura-díj</span><span lang="en">Pro Cultura Award</span></figcaption>
      </figure>
      <iframe title="lasszik Reggeli - 2020.01.13. Egri Orsolya" scrolling="no" id="hearthis_at_track_4270004" width="100%" height="130"
        src="https://app.hearthis.at/embed/4270004/transparent/?hcolor=&color=&style=2&block_size=2&block_space=1&background=0&waveform=0&cover=1&autoplay=0&css="
        frameborder="0" allowtransparency allow="autoplay">
        <p>Listen to <a rel="noopener" href="https://hearthis.at/klasszikradio92.1/klasszik-reggeli-2020.01.13.-egri-orsolya/"
            target="_blank">Klasszik Reggeli - 2020.01.13. Egri Orsolya</a> <span>by</span><a
            rel="noopener" href="https://hearthis.at/klasszikradio92.1/" target="_blank">KlasszikRadio92.1</a> <span>on</span> <a
            rel="noopener" href="https://hearthis.at/" target="_blank">hearthis.at</a></p>
      </iframe>


      <iframe title="Facebook/tranzitcafe" src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Ftranzitcafe%2F&tabs=timeline%2Cevents&width=360&height=640&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=false&appId=122069431235370" width="360" height="640" style="margin:0 -2rem;border:none;overflow:hidden" scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
    </div>
  </section>

  <section class="checked1">
    <img loading="lazy" src="/images/remix/header.png" alt="header" />
    <label for="checked1"><span>BISTRO</span></label>
    <Bistro/>
  </section>

  <section class="checked2">
    <img loading="lazy" src="/images/remix/fortepan_4588-fej-min.jpg" alt="header" />
    <label for="checked2"><span lang="hu">ÉTLAP</span><span lang="en">MENU</span></label>
     <Etlap/> 
  </section>

  <section class="checked3">
    <img loading="lazy" src="/images/remix/IMG_0241_0,5.jpg" alt="header" />
    <label for="checked3"><span>ART CAFÉ</span></label>
    <Artcafe/> 
  </section>
</main>
<aside>
  <pre><span>js-less spa </span><span>by <a href="mailto:me@vhollo.hu">me@vhollo.hu</a></span></pre>
</aside>

<footer>
  <label for="checked0" class="logo">
    <div id="logo"></div>
  </label>

  <label class="checked1" for="checked1"><span class="menuicon"><svg xmlns="http://www.w3.org/2000/svg" width="32"
        height="32" viewBox="0 0 32 32">
        <radialGradient id="aa" cx="26.131" cy="10.075" r=".198" gradientUnits="userSpaceOnUse">
          <stop offset="0" stop-color="#1c1b22" stop-opacity=".6" />
          <stop offset="1" stop-color="#1c1b22" />
        </radialGradient>
        <path fill="url(#aa)" d="M26.03 10H26l-.14.15c.18-.03.35-.051.54-.07a1.28 1.28 0 0 0-.37-.08z" />
        <radialGradient id="ab" cx="16" cy="16.5" r="11.23" gradientUnits="userSpaceOnUse">
          <stop offset="0" stop-color="#1c1b22" stop-opacity=".6" />
          <stop offset="1" stop-color="#1c1b22" />
        </radialGradient>
        <path fill="url(#ab)"
          d="M28.93 9.67c-.15-.4-.52-.67-.93-.67-3.56 0-6 1.04-8.65 3.27-.24-.17-.53-.27-.85-.27h-5c-.32 0-.61.1-.86.27C10 10.04 7.56 9 4 9c-.41 0-.78.27-.93.67C3.03 9.79 2 12.59 2 16.5c0 3.88 1.01 6.63 1.05 6.77.14.44.52.73.95.73 3.48 0 5.97-1.08 8.62-3.29.25.18.55.29.88.29h5c.33 0 .63-.11.88-.29C22.03 22.92 24.52 24 28 24c.43 0 .81-.29.95-.73.04-.14 1.05-2.89 1.05-6.77 0-3.91-1.03-6.71-1.07-6.83zM8.5 17H10s2 0 2 2v.5c0 .14.03.27.06.4C9.42 22.16 7.22 23 4 23c0 0-1-2.71-1-6.5S4 10 4 10c3.22 0 5.42.84 8.06 3.1-.03.13-.06.26-.06.4V15s0 1-1 1H8.5c-.28 0-.5.22-.5.5s.22.5.5.5zm6.5 3c-2 0-2-2-2-2v-4c0-1 1-1 1-1h3s1 0 1 2 0 5-3 5zm8.63 2.25c-1.24-.5-2.41-1.26-3.689-2.35.039-.13.059-.26.059-.4V18c0-1 1-1 1-1h2.5c.28 0 .5-.22.5-.5s-.22-.5-.5-.5H22c-2 0-2-2-2-2v-.5c0-.14-.02-.27-.06-.4 2.01-1.72 3.77-2.619 5.92-2.949L26 10h.03c.06 0 .2.02.37.08.439.15 1.1.59 1.1 1.92 0 2 .291 10.333-3.87 10.25z" />
        <radialGradient id="ac" cx="25.945" cy="10.075" r=".08" gradientUnits="userSpaceOnUse">
          <stop offset="0" stop-color="#1c1b22" stop-opacity=".6" />
          <stop offset="1" stop-color="#1c1b22" />
        </radialGradient>
        <path fill="url(#ac)" d="M26.03 10l-.17.15L26 10h.03z" />
      </svg></span><span>BISTRO</span></label>
  <label class="checked2" for="checked2"><span class="menuicon"><svg xmlns="http://www.w3.org/2000/svg" width="32"
        height="32" viewBox="0 0 32 32">
        <radialGradient id="ba" cx="-188" cy="72" r="12.165" gradientTransform="matrix(1 0 0 -1 204 88)"
          gradientUnits="userSpaceOnUse">
          <stop offset="0" stop-color="#1c1b23" stop-opacity=".6" />
          <stop offset="1" stop-color="#1c1b23" />
        </radialGradient>
        <path fill="url(#ba)"
          d="M25.41 9L19 2.59c-.35-.36-.38-.59-1-.59H7.5C6.67 2 6 2.67 6 3.5v25c0 .83.67 1.5 1.5 1.5H23c3 0 3-3 3-3V10c0-.63-.23-.65-.59-1zM19 6s0-1 1-1l2.68 2.68c.89.89-.27 1.32-.27 1.32H19.5c-.279 0-.5-.22-.5-.5V6zm-2 23h-5-.02c-.35-.01-4.98-.189-4.98-5V7s0-4 4-4h7v5.5c0 .83.67 1.5 1.5 1.5H21s3 0 3 4 1 15-7 15z" />
        <radialGradient id="bb" cx="10.5" cy="12.5" r="1.5" gradientUnits="userSpaceOnUse">
          <stop offset="0" stop-color="#1c1b23" stop-opacity=".6" />
          <stop offset="1" stop-color="#1c1b23" />
        </radialGradient>
        <circle fill="url(#bb)" cx="10.5" cy="12.5" r="1.5" />
        <radialGradient id="bc" cx="10.5" cy="17.5" r="1.5" gradientUnits="userSpaceOnUse">
          <stop offset="0" stop-color="#1c1b23" stop-opacity=".6" />
          <stop offset="1" stop-color="#1c1b23" />
        </radialGradient>
        <circle fill="url(#bc)" cx="10.5" cy="17.5" r="1.5" />
        <radialGradient id="bd" cx="10.5" cy="22.5" r="1.5" gradientUnits="userSpaceOnUse">
          <stop offset="0" stop-color="#1c1b23" stop-opacity=".6" />
          <stop offset="1" stop-color="#1c1b23" />
        </radialGradient>
        <circle fill="url(#bd)" cx="10.5" cy="22.5" r="1.5" />
        <radialGradient id="be" cx="17.5" cy="13" r="3.26" gradientUnits="userSpaceOnUse">
          <stop offset="0" stop-color="#1c1b23" stop-opacity=".6" />
          <stop offset="1" stop-color="#1c1b23" />
        </radialGradient>
        <path fill="url(#be)" d="M22 13s0 1-1 1-1-1-5-1h-2.5c-.28 0-.5-.22-.5-.5s.22-.5.5-.5H21s1 0 1 1z" />
        <radialGradient id="bf" cx="17.5" cy="18" r="3.26" gradientUnits="userSpaceOnUse">
          <stop offset="0" stop-color="#1c1b23" stop-opacity=".6" />
          <stop offset="1" stop-color="#1c1b23" />
        </radialGradient>
        <path fill="url(#bf)" d="M22 18s0 1-1 1-1-1-5-1h-2.5c-.28 0-.5-.22-.5-.5s.22-.5.5-.5H21s1 0 1 1z" />
        <radialGradient id="bg" cx="17.5" cy="23" r="3.26" gradientUnits="userSpaceOnUse">
          <stop offset="0" stop-color="#1c1b23" stop-opacity=".6" />
          <stop offset="1" stop-color="#1c1b23" />
        </radialGradient>
        <path fill="url(#bg)" d="M22 23s0 1-1 1-1-1-5-1h-2.5c-.28 0-.5-.22-.5-.5s.22-.5.5-.5H21s1 0 1 1z" />
      </svg></span><span lang="hu">ÉTLAP</span><span lang="en">MENU</span></label>
  <label class="checked3" for="checked3"><span class="menuicon"><svg xmlns="http://www.w3.org/2000/svg" width="32"
        height="32" viewBox="0 0 32 32">
        <radialGradient id="ca" cx="16.5" cy="16.109" r="10.697" gradientUnits="userSpaceOnUse">
          <stop offset="0" stop-color="#1c1a22" stop-opacity=".2" />
          <stop offset="1" stop-color="#1c1a22" />
        </radialGradient>
        <path fill="url(#ca)"
          d="M26.43 9.838l-9.5-4.53a1.066 1.066 0 0 0-.86 0l-9.5 4.53a.995.995 0 0 0-.57.901V21.48c0 .379.22.738.57.898l9.5 4.531a1.071 1.071 0 0 0 .86.001l9.5-4.531a.99.99 0 0 0 .57-.898V10.739c0-.38-.22-.74-.57-.901zM16 24.18c0 .34-.18.66-.47.84a.925.925 0 0 1-.53.16.923.923 0 0 1-.43-.1L10 22.91c-.01 0-.01-.01-.02-.01C6.969 21.391 7 18 7 18v-4.961a.999.999 0 0 1 1-1c.15 0 .31.03.45.1l7 3.5c.34.17.55.521.55.9v7.641zm.5-9.252c-.15 0-.31-.029-.45-.1l-6.77-3.38c-.34-.17-.55-.53-.55-.91.01-.38.229-.73.569-.89l6.771-3.23c.069-.03.14-.05.21-.07a.818.818 0 0 1 .44 0c.07.021.141.04.21.07l3.42 1.63c.011 0 .04.021.091.05.56.301 3.669 2.839.56 4.71l-4.05 2.021c-.141.07-.301.099-.451.099zm4.55 8.902c-.02.01-.03.02-.05.029l-2.57 1.221c-.14.07-.279.1-.43.1a.925.925 0 0 1-.53-.16.995.995 0 0 1-.47-.84v-7.641c0-.379.21-.73.55-.9l5.37-2.68v.01S25 12.86 25 15.86c0 2.99 0 5.97-3.95 7.97z" />
      </svg></span><span>ART CAFÉ</span></label>
  <label for="lang"><span class="hu">HU</span><span class="en">EN</span></label>
</footer>
