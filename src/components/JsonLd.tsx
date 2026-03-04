const JsonLd = () => {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "J&M Industry",
        "url": "https://jymindustry.com",
        "logo": "https://df50lbm4qcrt6.cloudfront.net/JYM_INDUSTRY/JyMlogo_no_bvackground-removebg-preview.png",
        "description": "Transformando negocios con inteligencia artificial y automatización avanzada.",
        "contactPoint": {
          "@type": "ContactPoint",
          "email": "jymindustry@jymindustry.com",
          "contactType": "customer service"
        },
        "sameAs": [
             "https://twitter.com/jymindustry", 
             "https://www.linkedin.com/company/jymindustry",
             "https://www.instagram.com/jymindustry"
        ]
    };
    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
    );
};

export default JsonLd;
