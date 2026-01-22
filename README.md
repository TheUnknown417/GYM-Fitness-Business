# Fitness Studio Website

A modern, community-focused fitness studio website inspired by DEMCO Fitness. Built with Next.js 14, Tailwind CSS, and Framer Motion.

## Features

- **Clean, Minimal Design** - Black/white/cream color palette with strategic accent colors
- **Authentic Photography** - Real gym aesthetic using Unsplash images
- **Mobile-First** - Fully responsive design optimized for all devices
- **Community-Focused** - Warm, personal copy that builds trust
- **Multiple Pages**:
  - Homepage with hero, mission, coaches, gallery, and newsletter
  - About page with coach profiles
  - Memberships page with pricing tiers
  - Wellness Hub (blog) with articles
  - Testimonials page with client success stories
  - Contact page with form and location info

## Getting Started

### Install Dependencies

```bash
npm install
```

### Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the website.

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
src/
├── app/                    # Next.js app router pages
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Homepage
│   ├── about/             # About pages
│   ├── memberships/       # Membership pricing
│   ├── wellness-hub/      # Blog pages
│   ├── testimonials/      # Client reviews
│   ├── contact/           # Contact form
│   └── api/               # API routes
├── components/            # React components
├── lib/                   # Utilities and data
│   ├── data/             # Static data (coaches, memberships, etc.)
│   ├── animations.ts     # Framer Motion configs
│   └── utils.ts          # Utility functions
└── styles/               # Global styles
```

## Customization

### Update Studio Information

1. **Studio Name**: Replace `[Studio Name]` throughout the codebase
2. **Contact Info**: Update in `src/app/contact/page.tsx` and `src/components/Footer.tsx`
3. **Coaches**: Edit `src/lib/data/coaches.ts`
4. **Memberships**: Edit `src/lib/data/memberships.ts`
5. **Testimonials**: Edit `src/lib/data/testimonials.ts`
6. **Blog Posts**: Edit `src/lib/data/blog.ts`

### Colors

Edit `tailwind.config.ts` to customize the color palette:

```typescript
colors: {
  accent: "#FF6B35",  // Change accent color
  cream: "#F5F1ED",   // Change cream background
  // ... other colors
}
```

### Images

All images currently use Unsplash source API. To use your own images:

1. Add images to `public/images/` directory
2. Update image paths in components and data files
3. Ensure images are optimized (use Next.js Image component)

## API Integration

The following API routes need to be connected to your services:

- **Newsletter** (`/api/newsletter`): Connect to Mailchimp, ConvertKit, etc.
- **Contact Form** (`/api/contact`): Connect to SendGrid, Resend, etc.
- **Booking** (`/api/booking`): Connect to Calendly, Acuity, etc.

See the route files in `src/app/api/` for integration points.

## Design Philosophy

This website follows DEMCO Fitness-inspired design principles:

- **Lowercase headlines** for a modern, approachable feel
- **First-person plural** copy ("We help you..." not "Our trainers...")
- **Benefits over features** - Focus on what clients get, not what you do
- **Authentic voice** - Conversational, warm, real
- **Community emphasis** - Show real people and genuine connections

## License

MIT

