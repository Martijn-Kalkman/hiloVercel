export default function StructuredData() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://officialhilo.com";
  
  const musicGroupData = {
    "@context": "https://schema.org",
    "@type": "MusicGroup",
    "name": "HI-LO",
    "alternateName": "Oliver Heldens",
    "url": baseUrl,
    "sameAs": [
      "https://open.spotify.com/artist/0ETJQforv5OXgDgidQv9qd",
      "https://www.youtube.com/@HILOofficial",
      "https://soundcloud.com/official-hilo",
      "https://music.apple.com/us/artist/oliver-heldens/608826395",
      "https://www.instagram.com/hilo_ofc/",
      "https://x.com/official_hilo"
    ],
    "genre": ["Electronic Dance Music", "House Music", "EDM", "Techno"],
    "description": "HI-LO is the electronic music project of Oliver Heldens, featuring house music, EDM, and electronic dance music productions. Discover latest music releases, upcoming events, tour dates, and exclusive HILOMATIK merchandise.",
    "image": `${baseUrl}/images/hi-lo-bg.webp`,
    "foundingLocation": {
      "@type": "Place",
      "name": "Netherlands"
    },
    "knowsAbout": ["Electronic Music", "DJ", "Music Production", "Live Performance"]
  };

  const breadcrumbData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": baseUrl
      }
    ]
  };

  const websiteData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "HI-LO Official",
    "url": baseUrl,
    "description": "Official website of HI-LO (Oliver Heldens)",
    "publisher": {
      "@type": "MusicGroup",
      "name": "HI-LO"
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": `${baseUrl}/?q={search_term_string}`
      },
      "query-input": "required name=search_term_string"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(musicGroupData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteData) }}
      />
    </>
  );
}