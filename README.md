# Precision Refractory Solutions - Stara Group Website

A modern, responsive website for Stara Group's precision refractory solutions for steel and foundry operations.

## Features

- ✅ Fully responsive design
- ✅ Modern UI with Tailwind CSS
- ✅ All content from PDF accurately replicated
- ✅ Optimized for production
- ✅ Ready for Vercel deployment

## Tech Stack

- **Next.js 16** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **App Router** - Next.js App Router architecture

## Getting Started

### Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build

```bash
npm run build
npm start
```

## Deployment to Vercel

### Option 1: Deploy via Vercel CLI

1. Install Vercel CLI:
```bash
npm i -g vercel
```

2. Deploy:
```bash
cd stara-refractory-website
vercel
```

### Option 2: Deploy via Vercel Dashboard

1. Push your code to GitHub/GitLab/Bitbucket
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Import your repository
5. Vercel will automatically detect Next.js and configure the project
6. Click "Deploy"

### Option 3: Deploy via Git Integration

1. Connect your Git repository to Vercel
2. Vercel will automatically deploy on every push to main/master branch

## Project Structure

```
stara-refractory-website/
├── app/
│   ├── layout.tsx       # Root layout
│   ├── page.tsx         # Home page
│   └── globals.css      # Global styles
├── components/
│   ├── Navbar.tsx       # Navigation component
│   ├── Hero.tsx         # Hero section
│   ├── ManufacturingExcellence.tsx
│   ├── WhyChoose.tsx
│   ├── CompanyProfile.tsx
│   ├── Philosophy.tsx
│   ├── CoreProducts.tsx
│   ├── ProductDetails.tsx
│   ├── Industries.tsx
│   ├── QualityControl.tsx
│   ├── Commitment.tsx
│   ├── Contact.tsx
│   └── Footer.tsx
└── public/              # Static assets
```

## Sections

- **Hero** - Main landing section with CTA buttons
- **Manufacturing Excellence** - Overview and product categories
- **Why Choose** - Key benefits
- **Company Profile** - About the organization
- **Philosophy** - Technical approach
- **Core Products** - Product portfolio overview
- **Product Details** - Detailed product information
- **Industries** - Industries served
- **Quality Control** - Quality and manufacturing infrastructure
- **Commitment** - Customer operations commitment
- **Contact** - Contact information and RFQ form

## Contact Information

- **Email**: yash@staragroup.in
- **Phone**: +91 7004856516
- **Location**: Jamshedpur, Jharkhand - 831001, India

## License

© 2024 Stara Group. All rights reserved.
