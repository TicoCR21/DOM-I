const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])


// Task 1
document.getElementById( "cta-img" ).src = siteContent[ "cta" ][ "img-src" ];
document.getElementById( "middle-img" ).src = siteContent[ "main-content" ][ "middle-img-src" ];

// Task 2
let nav_a = document.querySelectorAll( "nav a" );
nav_a.forEach( ( a, index ) => a.textContent = siteContent.nav[ "nav-item-" + ( index + 1 ) ] );

let cta_text = document.querySelector( ".cta-text" );
cta_text.firstElementChild.textContent = siteContent.cta.h1;
cta_text.lastElementChild.textContent = siteContent.cta.button;

let main_content = document.querySelectorAll( ".main-content .text-content" );
main_content[ 0 ].firstElementChild.textContent = siteContent[ "main-content" ][ "features-h4" ];
main_content[ 0 ].lastElementChild.textContent = siteContent[ "main-content" ][ "features-content" ];

main_content[ 1 ].firstElementChild.textContent = siteContent[ "main-content" ][ "about-h4" ];
main_content[ 1 ].lastElementChild.textContent = siteContent[ "main-content" ][ "about-content" ];

main_content[ 2 ].firstElementChild.textContent = siteContent[ "main-content" ][ "services-h4" ];
main_content[ 2 ].lastElementChild.textContent = siteContent[ "main-content" ][ "services-content" ];

main_content[ 3 ].firstElementChild.textContent = siteContent[ "main-content" ][ "product-h4" ];
main_content[ 3 ].lastElementChild.textContent = siteContent[ "main-content" ][ "product-content" ];

main_content[ 4 ].firstElementChild.textContent = siteContent[ "main-content" ][ "vision-h4" ];
main_content[ 4 ].lastElementChild.textContent = siteContent[ "main-content" ][ "vision-content" ];

document.querySelector( ".contact h4" ).textContent = siteContent[ "contact" ][ "contact-h4" ];

let contact_p = document.querySelectorAll( ".contact p" );
contact_p[ 0 ].textContent = siteContent[ "contact" ][ "address" ];
contact_p[ 1 ].textContent = siteContent[ "contact" ][ "phone" ];
contact_p[ 2 ].textContent = siteContent[ "contact" ][ "email" ];

document.querySelector( "footer p" ).textContent = siteContent.footer.copyright;

// Task 3
let one = document.createElement( "a" );
one.href = "#";
one.textContent = "Home";

let two = document.createElement( "a" );
two.setAttribute( "href", "#" );
two.appendChild( document.createTextNode( "Help" ) );

let nav = document.querySelector( "nav" );
nav.prepend( one );
nav.appendChild( two );

document.querySelectorAll( "nav a" ).forEach( a => a.style.color = "green" );

// Stretch
let button = document.querySelector( "button" );

let test = true;

button.addEventListener( "click", function( e )
{
  e.preventDefault();
  if( test )
  {
    document.getElementById( "middle-img" ).style.borderRadius = '100px';
    document.querySelectorAll( "nav a" ).forEach( a => a.style.color = "red" );

    test = false;
  }
  else
  {
    document.getElementById( "middle-img" ).style.borderRadius = '0px';
    document.querySelectorAll( "nav a" ).forEach( a => a.style.color = "green" );

    test = true;
  }
} );