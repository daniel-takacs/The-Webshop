
let header = `
<!--HEADER-->
<div class="wrapper">
    <header>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <a class="navbar-brand" href="#">The Webshop</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <a class="nav-link" href="index.html">Home <span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="tablets/tablets.html">Tablets</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="phones/phones.html">Phones</a>
            </li>
      
            <li class="nav-item">
              <a class="nav-link" href="contacts.html">Contact</a>
            </li>
          </ul>
         
        </div>
      </nav>
    </header>

    

<!--CAROUSEL-->

      <main>
        <div id="carouselExampleIndicators" class="carousel slide carousel-fade" data-ride="carousel">
          <ol class="carousel-indicators">
            <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
          </ol>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img src="pictures/maxresdefault.jpg" class="d-block w-100" alt="sony mobile phone">
            </div>
            <div class="carousel-item">
              <img src="pictures/iphone12.jpg" class="d-block w-100" alt="iphone 12">
            </div>
            <div class="carousel-item">
              <img src="pictures/s20new.jpg" class="d-block w-100 tales" alt="galaxy s20">
            </div>
          </div>
          <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>
        </div>
`;

let main = `
<!--devices-->

<div class="devices">
  <div class="devices-box">
    <div class="product-image">
      <a href="tablets_subpages/ipadpro64gb.html"
      ><img
        src="pictures/ipadpro12.9.jpg"
        alt="Apple iPad Pro 12.9 (2018) WiFi + Cellular 64GB Silver"
    /></a>
  </div>
  <p>Apple iPad Pro 12.9 (2018) WiFi + Cellular 64GB Silver</p>
  <h2>1190 €</h2>
    <div class="basketbutton-box">
      <button type="button" class="basketbutton">
        Add to basket
      </button>
    </div>
  </div>
  <div class="devices-box">
    <div class="product-image">
      <a href="phone_subpages/galaxys20.html"
        ><img
          src="pictures/samsung-galaxy-s20-ultra-lte-dual-sim-128gb-12gb-ram-sm-g988f-ds-cosmic-black.jpg"
          alt="samsung galaxy s20"
      /></a>
    </div>
    <p>
      Samsung Galaxy S20 Ultra LTE Dual SIM 128GB Cosmic Black
    </p>
    <h2>990 €</h2>
    <div class="basketbutton-box">
      <button type="button" class="basketbutton">
        Add to basket
      </button>
    </div>
  </div>


  <div class="devices-box">
    <div class="product-image">
      <a href="watches_subpages/watchactive.html"
        ><img
          src="pictures/samsung-galaxy-watch-active-2-wifi-44mm-sm-r820-aluminum-black.jpg"
          alt="#"
      /></a>
    </div>
    <p>Samsung Galaxy Watch Active 2 WiFi 44mm SM-R820 Aluminum Black</p>
    <h2>290 €</h2>
    <div class="basketbutton-box">
      <button type="button" class="basketbutton">
        Add to basket
      </button>
    </div>
  </div>


  <div class="devices-box">
    <div class="product-image">
      <a href="phone_subpages/iphonese.html"
        ><img
          src="pictures/apple-iphone-se-2020-dual-esim-64gb-3gb-ram-black.jpg"
          alt="iphonese"
      /></a>
    </div>
    <p>Apple iPhone SE (2020) Dual eSIM 64GB 3GB RAM Black</p>
    <h2>490 €</h2>
    <div class="basketbutton-box">
      <button type="button" class="basketbutton">
        Add to basket
      </button>
    </div>
  </div>

  <div class="devices-box">
    <div class="product-image">
      <a href="airpods/airpods.html"
        ><img
          src="pictures/apple-airpods-2019-with-charging-case-white.jpg"
          alt="Apple AirPods (2019) with charging case White"
      /></a>
    </div>
    <p>Apple AirPods (2019) with charging case White</p>
    <h2>190 €</h2>
    <div class="basketbutton-box">
      <button type="button" class="basketbutton">
        Add to basket
      </button>
    </div>
  </div>

  <div class="devices-box">
    <div class="product-image">
      <a href="phone_subpages/huaweip40lite.html"
        ><img
          src="pictures/huawei-p40-lite-e-dual-sim-64gb-4gb-ram-aurora-blue.jpg"
          alt="huaweip40lite"
      /></a>
    </div>
    <p>Huawei P40 Lite E Dual SIM 64GB 4GB RAM Aurora Blue</p>
    <h2>490 €</h2>
    <div class="basketbutton-box">
      <button type="button" class="basketbutton">
        Add to basket
      </button>
    </div>
  </div>

  <div class="devices-box">
    <div class="product-image">
      <a href="phone_subpages/huaweip30dualsim.html"
        ><img
          src="pictures/huawei-p30-pro-dual-sim-128gb-6gb-ram-vog-l29-black.jpg"
          alt="huaweip30dualsim"
      /></a>
    </div>
    <p>Huawei P30 Pro Dual SIM 128GB 6GB RAM VOG-L29 Black</p>
    <h2>590 €</h2>
    <div class="basketbutton-box">
      <button type="button" class="basketbutton">
        Add to basket
      </button>
    </div>
  </div>
  <div class="devices-box">
    <div class="product-image">
      <a href="phone_subpages/iphone11.html"
        ><img
          src="pictures/apple-iphone-11-dual-esim-64gb-4gb-ram-black.jpg"
          alt="iphone11"
      /></a>
    </div>
    <p>Apple iPhone 11 Dual eSIM 64GB 4GB RAM Black</p>
    <h2>790 €</h2>
    <div class="basketbutton-box">
      <button type="button" class="basketbutton">
        Add to basket
      </button>
    </div>
  </div>

 
  <div class="devices-box">
    <div class="product-image">
      <a href="phone_subpages/iphone11pro.html"
        ><img
          src="pictures/apple-iphone-11-pro-dual-esim-256gb-4gb-ram-silver.jpg"
          alt="iphone11pro"
      /></a>
    </div>
    <p>Apple iPhone 11 Pro Dual eSIM 256GB 4GB RAM Silver</p>
    <h2>1290 €</h2>
    <div class="basketbutton-box">
      <button type="button" class="basketbutton">
        Add to basket
      </button>
    </div>
  </div>


 

  <div class="devices-box">
    <div class="product-image">
      <a href="phone_subpages/iphone11pro.html"
        ><img
          src="pictures/apple-iphone-11-pro-dual-esim-256gb-4gb-ram-silver.jpg"
          alt="iphone11pro"
      /></a>
    </div>
    <p>Apple iPhone 11 Pro Dual eSIM 128GB 4GB RAM Silver</p>
    <h2>1090 €</h2>
    <div class="basketbutton-box">
      <button type="button" class="basketbutton">
        Add to basket
      </button>
    </div>
  </div>

  <div class="devices-box">
    <div class="product-image">
      <a href="phone_subpages/huaweip40.html"
        ><img
          src="pictures/huawei-p40-pro-5g-dual-sim-256gb-8gb-ram-black.jpg"
          alt="Huawei P40 Pro 5G Dual SIM 256GB 8GB RAM Black"
      /></a>
    </div>
    <p>Huawei P40 Pro 5G Dual SIM 256GB 8GB RAM Black</p>
    <h2>790 €</h2>
    <div class="basketbutton-box">
      <button type="button" class="basketbutton">
        Add to basket
      </button>
    </div>
  </div>

  <div class="devices-box">
    <div class="product-image">
      <a href="watches_subpages/apple5.html"
        ><img
          src="pictures/apple-watch-series-5-40mm-gps-cellular-aluminium-case-grey-sport-band-black.jpg"
          alt="Apple Watch Series 5 40mm (GPS + Cellular) Aluminium Case Grey Sport Band Black"
      /></a>
    </div>
    <p>Apple Watch Series 5 40mm (GPS + Cellular) Aluminium Case Grey Sport Band Black</p>
    <h2>490 €</h2>
    <div class="basketbutton-box">
      <button type="button" class="basketbutton">
        Add to basket
      </button>
    </div>
  </div>

</div>
</main>


`;

let footer = `
<footer class="footer-container">
Copyright © 2020 Daniel Takacs
</footer>

`;


let markup = `
${header}
${main}
${footer}
`
document.body.innerHTML = markup;