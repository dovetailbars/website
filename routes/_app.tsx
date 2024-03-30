import { type PageProps } from "$fresh/server.ts";
import { asset } from "$fresh/runtime.ts";

export default function App({ Component }: PageProps) {  

  return (
    <html lang="en">
    
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>The Dovetail Bar Covent Garden</title>
          
        <link rel="profile" href="https://gmpg.org/xfn/11" />
        <meta name='robots' content='index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1' />
      
        <meta name="description" content="The Dovetail Bar is your hideaway for all private affairs. In a hidden room above Covent Garden Market, we serve creative and refined cocktails."  />
        <link rel="canonical" href="https://dovetailbars.co.uk/"  />
        <meta property="og:locale" content="en_US"/>
        <meta property="og:type" content="website"/>
        <meta property="og:title" content="The Dovetail Bar Covent Garden"  />
        <meta property="og:description" content="The Dovetail Bar is your hideaway for all private affairs. In a hidden room above Covent Garden Market, we serve creative and refined cocktails."  />
        <meta property="og:url" content="https://dovetailbars.co.uk/"  />
        <meta property="og:site_name" content="Dovetail Bar"  />
        <meta property="og:image" content="/images/DTB-Initial-Cocktail-Shoot-LR-055.png"  />
        <meta property="og:image:width" content="2048"  />
        <meta property="og:image:height" content="1366"  />
        <meta property="og:image:type" content="image/jpeg"  />
        <meta name="twitter:card" content="summary_large_image"  />
      
        <link rel="icon" href="/images/favicon-large.png" />
        <link rel="apple-touch-icon" href="/images/favicon-large.png" />
        <meta name="msapplication-TileImage" content="/images/favicon-large.png" />
    
        {/* <script type="application/ld+json">{"@context":"https://schema.org","@graph":[{"@type":"WebPage","@id":"https://dovetailbars.co.uk/","url":"https://dovetailbars.co.uk/","name":"The Dovetail Bar Covent Garden | A Private Affair","isPartOf":{"@id":"https://dovetailbars.co.uk/#website"},"about":{"@id":"https://dovetailbars.co.uk/#organization"},"primaryImageOfPage":{"@id":"https://dovetailbars.co.uk/#primaryimage"},"image":{"@id":"https://dovetailbars.co.uk/#primaryimage"},"thumbnailUrl":"https://i0.wp.com/dovetailbars.co.uk/wp-content/uploads/2023/08/DTB-Initial-Cocktail-Shoot-LR-055.jpg?fit=2048%2C1366&ssl=1","datePublished":"2023-07-12T11:55:24+00:00","dateModified":"2023-09-07T12:54:36+00:00","description":"The Dovetail Bar is your hideaway for all private affairs. In a hidden room above Covent Garden Market, we serve creative and refined cocktails.","breadcrumb":{"@id":"https://dovetailbars.co.uk/#breadcrumb"},"inLanguage":"en-US","potentialAction":[{"@type":"ReadAction","target":["https://dovetailbars.co.uk/"]}]},{"@type":"ImageObject","inLanguage":"en-US","@id":"https://dovetailbars.co.uk/#primaryimage","url":"https://i0.wp.com/dovetailbars.co.uk/wp-content/uploads/2023/08/DTB-Initial-Cocktail-Shoot-LR-055.jpg?fit=2048%2C1366&ssl=1","contentUrl":"https://i0.wp.com/dovetailbars.co.uk/wp-content/uploads/2023/08/DTB-Initial-Cocktail-Shoot-LR-055.jpg?fit=2048%2C1366&ssl=1","width":2048,"height":1366},{"@type":"BreadcrumbList","@id":"https://dovetailbars.co.uk/#breadcrumb","itemListElement":[{"@type":"ListItem","position":1,"name":"Home"}]},{"@type":"WebSite","@id":"https://dovetailbars.co.uk/#website","url":"https://dovetailbars.co.uk/","name":"Dovetail Bar - Covent Garden","description":"A Private Affair","publisher":{"@id":"https://dovetailbars.co.uk/#organization"},"alternateName":"The Dovetail Bar","potentialAction":[{"@type":"SearchAction","target":{"@type":"EntryPoint","urlTemplate":"https://dovetailbars.co.uk/?s={search_term_string}"},"query-input":"required name=search_term_string"}],"inLanguage":"en-US"},{"@type":"Organization","@id":"https://dovetailbars.co.uk/#organization","name":"Dovetail Bar - Covent Garden","url":"https://dovetailbars.co.uk/","logo":{"@type":"ImageObject","inLanguage":"en-US","@id":"https://dovetailbars.co.uk/#/schema/logo/image/","url":"https://i0.wp.com/dovetailbars.co.uk/wp-content/uploads/2023/07/Dovetail-Site-Logo.png?fit=801%2C800&ssl=1","contentUrl":"https://i0.wp.com/dovetailbars.co.uk/wp-content/uploads/2023/07/Dovetail-Site-Logo.png?fit=801%2C800&ssl=1","width":801,"height":800,"caption":"Dovetail Bar - Covent Garden"},"image":{"@id":"https://dovetailbars.co.uk/#/schema/logo/image/"}}]}</script> */}


        <link rel="stylesheet" href={asset("/css/index.css")} />        
        <link rel="stylesheet" href={asset("/css/components/Layout.css")} />        
        <link rel="stylesheet" href={asset("/css/components/CarouselBackground.css")} />
    </head>
    
    <body>      
        <Component />
    </body>
    
    </html>
  );

}


// import { type PageProps } from "$fresh/server.ts";
// export default function App({ Component }: PageProps) {
//   return (
//     <html>
//       <head>
//         <meta charset="utf-8" />
//         <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//         <title>fresh-project</title>
//         <link rel="stylesheet" href="/styles.css" />
//       </head>
//       <body>
//         <Component />
//       </body>
//     </html>
//   );
// }
