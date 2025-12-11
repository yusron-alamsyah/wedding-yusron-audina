# Wedding Invitation Website

A beautiful, modern wedding invitation website built with React, Next.js, TypeScript, and Tailwind CSS. Inspired by elegant wedding invitation designs with smooth animations and interactive features.

## 🌟 Features

- **Hero Section** - Eye-catching landing page with animated entrance
- **Couple Information** - Display bride & groom details with Islamic quotes
- **Countdown Timer** - Real-time countdown to the wedding day
- **Event Details** - Akad Nikah & Reception information with locations
- **Love Story Timeline** - Beautiful animated timeline of the couple's journey
- **Photo Gallery** - Showcase memorable moments
- **RSVP Form** - Guest confirmation and message book
- **Wedding Gift** - Digital envelope for well-wishers
- **Live Streaming** - Virtual attendance option
- **Music Player** - Background music control
- **Responsive Design** - Looks great on all devices

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## 🎨 Customization

### Update Wedding Information

Edit the following files to customize with your wedding details:

- **src/components/HeroSection.tsx** - Names and opening message
- **src/components/CoupleSection.tsx** - Bride & groom details and parents' names
- **src/components/CountdownSection.tsx** - Wedding date (line 7)
- **src/components/EventSection.tsx** - Event times and locations
- **src/components/LoveStorySection.tsx** - Your love story timeline
- **src/components/RSVPSection.tsx** - Bank account details for gifts

### Add Your Photos

Replace placeholder emojis with real photos:

1. Add your photos to `public/images/` directory
2. Update image references in components
3. Update the couple photos in `CoupleSection.tsx`
4. Add gallery photos in `GallerySection.tsx`

### Color Scheme

The color palette can be customized in `tailwind.config.ts`:
- Primary rose colors
- Gold/yellow accent colors
- Custom gradient combinations

### Add Background Music

To add background music:

1. Add your audio file to `public/audio/` directory
2. Update `MusicPlayer.tsx` to include the audio element
3. Connect the play/pause controls

## 📦 Build for Production

```bash
npm run build
npm start
```

## 🛠️ Tech Stack

- **Next.js 15** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **React Icons** - Icon library
- **Lucide React** - Additional icons

## 📱 Responsive Design

The website is fully responsive and tested on:
- Desktop (1920px+)
- Laptop (1024px - 1919px)
- Tablet (768px - 1023px)
- Mobile (320px - 767px)

## 🎯 Features to Add (Optional)

- [ ] Backend integration for RSVP storage
- [ ] Photo upload for guests
- [ ] Map integration for venue locations
- [ ] Email notifications for RSVPs
- [ ] Admin dashboard to view responses
- [ ] Multiple language support
- [ ] WhatsApp share integration
- [ ] Downloadable calendar invites

## 📄 License

This project is open source and available under the MIT License.

## 🙏 Acknowledgments

- Design inspired by [invisimple.id](https://the.invisimple.id/)
- Icons by React Icons and Lucide
- Animations by Framer Motion

## 💝 Support

If you find this useful, please consider:
- ⭐ Starring the repository
- 🐛 Reporting bugs
- 💡 Suggesting new features
- 🔀 Contributing to the code

---

Made with ❤️ for your special day!
