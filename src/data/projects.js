export const projects = [
  {
    id: 1,
    index: '01',
    name: 'BookKart — Full-Stack Marketplace',
    description: 'A full-stack marketplace for buying and selling used books. Next.js 16 App Router frontend with role-separated customer/admin layouts, Express + TypeScript API, JWT access/refresh auth, Razorpay checkout, and Cloudinary image handling.',
    type: 'full-stack',
    tags: ['Next.js 16', 'TypeScript', 'Express', 'MongoDB', 'Redux Toolkit', 'Razorpay'],
    images: [
      '/BookKart/0.PNG',
      '/BookKart/1.PNG',
      '/BookKart/2.PNG',
      '/BookKart/3.PNG',
      '/BookKart/4.PNG',
      '/BookKart/6.PNG',
      '/BookKart/7.PNG',
    ],
    image: 'https://via.placeholder.com/1200x600?text=BookKart+Marketplace',
    logo: '/BookKart/Logo.jpg',
    links: {
      live: 'https://bookkartecommerce.netlify.app',
      source: 'https://github.com/mushahid2120/BookKart_Ecommerce_FullStack'
    }
  },
  {
    id: 2,
    index: '02',
    name: 'Drive — Cloud Storage Platform',
    description: 'A Google-Drive-style storage app with paid subscription tiers. Session-based auth with instant revocation, direct-to-S3 uploads via pre-signed URLs, CloudFront-signed downloads, and Razorpay billing driven entirely by signature-verified webhooks. Shipped to both a traditional server and AWS Lambda from one codebase.',
    type: 'full-stack',
    tags: ['React 19', 'Node / Express 5', 'MongoDB', 'AWS S3 + CloudFront', 'Redis'],
    images: [
      '/YourDrive/1.PNG',
      '/YourDrive/2.PNG',
      '/YourDrive/3.PNG',
      '/YourDrive/6.PNG',
      '/YourDrive/7.PNG',
    ],
    image: 'https://via.placeholder.com/1200x600?text=Cloud+Storage',
    logo: '/YourDrive/Logo.svg',
    links: {
      live: 'https://cf.mushahidjs.dpdns.org/home',
      source: 'https://github.com/mushahid2120/your-drive-storage-app-backend'
    }
  },
]
