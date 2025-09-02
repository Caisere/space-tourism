# Space Tourism Website

A modern, responsive space tourism website built with Next.js 15, React 19, and Tailwind CSS. This project showcases destinations, crew members, and space technology with an immersive user experience.

## 🚀 Features

### Core Functionality

- **Interactive Navigation**: Seamless navigation between different sections with numbered menu items
- **Responsive Design**: Fully responsive layout that works on mobile, tablet, and desktop
- **Dynamic Content**: Real-time content filtering and updates
- **Background Images**: Dynamic background images that change based on screen size

### Sections

1. **Home Page**: Landing page with space exploration call-to-action
2. **Destinations**: Interactive destination showcase with filtering
   - Moon, Mars, Europa, Titan
   - Distance and travel time information
   - Dynamic image switching
3. **Crew**: Meet the space crew members
   - Douglas Hurley (Commander)
   - Mark Shuttleworth (Mission Specialist)
   - Victor Glover (Pilot)
   - Anousheh Ansari (Pilot Engineer)
4. **Technology**: Space launch technology overview
   - Launch Vehicle
   - Spaceport
   - Space Capsule

## 🛠️ Technology Stack

- **Framework**: Next.js 15.5.2
- **Frontend**: React 19.1.0
- **Styling**: Tailwind CSS 4
- **Language**: TypeScript
- **Fonts**: Geist Sans & Geist Mono (Google Fonts)
- **Deployment**: Vercel-ready

## 📁 Project Structure

```
space-tourism/
├── app/
│   ├── _components/          # Reusable UI components
│   │   ├── navigation.tsx    # Main navigation component
│   │   ├── destinationcontent.tsx
│   │   ├── destinationfilter.tsx
│   │   ├── destinationimg.tsx
│   │   ├── crewcontent.tsx
│   │   ├── crewfilter.tsx
│   │   ├── crewimage.tsx
│   │   ├── technologycontent.tsx
│   │   ├── technologyfilter.tsx
│   │   ├── technologyimage.tsx
│   │   └── filterbutton.tsx
│   ├── api/                  # API routes
│   │   ├── destination/
│   │   ├── crew/
│   │   └── technology/
│   ├── libs/                 # Utility functions
│   │   ├── constant.ts       # Base URL configuration
│   │   └── data-service.ts   # Data fetching services
│   ├── destination/          # Destination page
│   ├── crew/                 # Crew page
│   ├── technology/           # Technology page
│   ├── globals.css           # Global styles
│   ├── layout.tsx            # Root layout
│   └── page.tsx              # Home page
├── public/                   # Static assets
│   └── images/               # Background and content images
├── package.json
├── next.config.ts
└── tsconfig.json
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ or Bun
- npm, yarn, or bun package manager

### Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd space-tourism
   ```

2. **Install dependencies**

   ```bash
   # Using npm
   npm install

   # Using yarn
   yarn install

   # Using bun
   bun install
   ```

3. **Run the development server**

   ```bash
   # Using npm
   npm run dev

   # Using yarn
   yarn dev

   # Using bun
   bun dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to view the application.

## 🏗️ Architecture

### Data Flow

1. **API Routes**: Server-side API endpoints provide data for destinations, crew, and technology
2. **Data Services**: Client-side services fetch data from API routes with caching
3. **Components**: UI components consume data and handle user interactions
4. **State Management**: URL search parameters manage filter state

### Key Components

#### Navigation (`app/_components/navigation.tsx`)

- Responsive navigation bar with numbered menu items
- Logo display and mobile-friendly design

#### Filter Components

- **Destination Filter**: Allows switching between different space destinations
- **Crew Filter**: Enables viewing different crew member profiles
- **Technology Filter**: Shows different space technology components

#### Content Components

- **Destination Content**: Displays destination details, distance, and travel time
- **Crew Content**: Shows crew member information and roles
- **Technology Content**: Presents technology descriptions and details

### API Structure

#### Destination API (`/api/destination`)

```typescript
interface DestinationData {
  id: number;
  name: string;
  description: string;
  averageDis: number;
  month: number;
  image: string;
}
```

#### Crew API (`/api/crew`)

```typescript
interface CrewData {
  id: number;
  position: string;
  name: string;
  description: string;
}
```

#### Technology API (`/api/technology`)

```typescript
interface TechData {
  id: number;
  name: string;
  description: string;
}
```

## 🎨 Design Features

### Responsive Design

- **Mobile-first approach** with progressive enhancement
- **Breakpoints**: sm (640px), md (768px), lg (1024px)
- **Background images** that adapt to screen size

### Visual Elements

- **Space-themed backgrounds** for each section
- **Typography**: Geist Sans for body text, Geist Mono for code
- **Color scheme**: White text on dark backgrounds with accent colors
- **Interactive elements**: Hover effects and smooth transitions

### User Experience

- **URL-based filtering** for shareable links
- **Smooth navigation** between sections
- **Loading states** and error handling
- **Accessibility** considerations

## 🔧 Configuration

### Environment Variables

The application uses environment variables for base URL configuration:

- `VERCEL_URL`: For Vercel deployment
- `NEXT_PUBLIC_APP_URL`: For custom domain configuration
- Default: `http://localhost:3000` for local development

### Tailwind CSS

- Custom color palette with space-themed colors
- Responsive utilities for mobile-first design
- Custom font configuration

## 🚀 Deployment

### Vercel (Recommended)

1. Connect your GitHub repository to Vercel
2. Vercel will automatically detect Next.js configuration
3. Deploy with zero configuration

### Manual Deployment

```bash
# Build the application
npm run build

# Start the production server
npm start
```

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Space tourism concept and design inspiration
- Next.js team for the amazing framework
- Tailwind CSS for the utility-first CSS framework
- Vercel for seamless deployment

## 📞 Support

For support and questions:

- Create an issue in the repository
- Contact the development team
- Check the documentation for common solutions

---

**Built with ❤️ using Next.js, React, and Tailwind CSS**
