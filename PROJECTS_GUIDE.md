# Projects Management Guide

This guide explains how to build, manage, and list projects in your portfolio website.

## 🚀 How to Build and Run the Project

### Prerequisites

- Node.js (version 18 or higher)
- npm or yarn package manager

### Installation

```bash
# Install dependencies
npm install
# or
yarn install
```

### Development

```bash
# Start development server
npm run dev
# or
yarn dev
```

The application will be available at `http://localhost:3000`

### Production Build

```bash
# Build for production
npm run build
# or
yarn build

# Start production server
npm start
# or
yarn start
```

## 📁 Project Structure

```
src/
├── app/
│   ├── projects/
│   │   └── page.jsx          # Main projects listing page
│   └── home_components/
│       └── ProjectsSection.jsx # Featured projects on homepage
├── lib/
│   └── projects-data.js      # Centralized project data
└── components/
    └── ui/                   # Reusable UI components
```

## 📝 How to Add New Projects

### 1. Edit the Projects Data File

Open `src/lib/projects-data.js` and add your new project to the `projects` array:

```javascript
{
  id: 9, // Unique ID (increment from existing projects)
  title: "Your Project Title",
  client: "Client Name",
  category: "Corporate", // Choose from: Corporate, Wedding, Charity, Education, Entertainment
  date: "2024-01-15", // YYYY-MM-DD format
  location: "City Name",
  description: "Detailed description of the project...",
  image: "https://your-image-url.com/image.jpg",
  highlights: ["Key highlight 1", "Key highlight 2", "Key highlight 3"],
  technologies: ["Technology 1", "Technology 2", "Technology 3"],
  status: "Completed", // or "In Progress", "Upcoming"
  featured: true, // Set to true to show on homepage
  highlight: false, // Set to true for special highlighting
}
```

### 2. Project Data Fields Explained

| Field          | Type    | Description                  | Required |
| -------------- | ------- | ---------------------------- | -------- |
| `id`           | number  | Unique identifier            | ✅       |
| `title`        | string  | Project name                 | ✅       |
| `client`       | string  | Client or organization name  | ✅       |
| `category`     | string  | Project category             | ✅       |
| `date`         | string  | Project date (YYYY-MM-DD)    | ✅       |
| `location`     | string  | Project location             | ✅       |
| `description`  | string  | Detailed project description | ✅       |
| `image`        | string  | Project image URL            | ✅       |
| `highlights`   | array   | Key project highlights       | ✅       |
| `technologies` | array   | Technologies/services used   | ✅       |
| `status`       | string  | Project status               | ✅       |
| `featured`     | boolean | Show on homepage             | ❌       |
| `highlight`    | boolean | Special highlighting         | ❌       |

### 3. Available Categories

- **Corporate**: Business events, conferences, product launches
- **Wedding**: Wedding ceremonies and celebrations
- **Charity**: Fundraising events, galas
- **Education**: Training workshops, educational events
- **Entertainment**: Music festivals, entertainment events

### 4. Project Status Options

- **Completed**: Finished projects
- **In Progress**: Currently ongoing projects
- **Upcoming**: Planned future projects

## 🎨 Customizing the Projects Display

### Homepage Featured Projects

The homepage shows featured projects automatically. To control which projects appear:

1. Set `featured: true` in the project data
2. The homepage will display these projects in the hero section

### Projects Page Features

The projects page includes:

- **Search**: Search by title, client, description, or location
- **Category Filtering**: Filter by project category
- **Detailed Modal**: Click any project to see full details
- **Responsive Grid**: Automatically adjusts to screen size

### Styling Customization

To customize the appearance:

1. **Colors**: Edit `src/app/globals.css` for theme colors
2. **Layout**: Modify the grid layout in `src/app/projects/page.jsx`
3. **Components**: Update UI components in `src/components/ui/`

## 🔧 Advanced Features

### Adding New Categories

1. Add the new category to the `categories` array in `src/lib/projects-data.js`
2. The filter buttons will automatically update

### Custom Project Fields

You can add custom fields to projects:

```javascript
{
  // ... existing fields
  customField: "Custom value",
  budget: "$50,000",
  duration: "3 days",
}
```

Then update the display components to show these fields.

### Image Management

For better performance:

1. **Optimize Images**: Use compressed, web-optimized images
2. **CDN**: Host images on a CDN for faster loading
3. **Formats**: Use WebP or AVIF for better compression
4. **Sizes**: Provide multiple sizes for responsive design

## 📊 Project Analytics (Optional)

To track project performance, you can add analytics fields:

```javascript
{
  // ... existing fields
  analytics: {
    views: 1250,
    inquiries: 15,
    conversionRate: 1.2
  }
}
```

## 🚀 Deployment

### Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Netlify

```bash
# Build the project
npm run build

# Deploy the 'out' directory
```

### Other Platforms

The project works with any static hosting platform that supports Next.js.

## 🔄 Updating Projects

### Regular Updates

1. Edit `src/lib/projects-data.js`
2. Add new projects or update existing ones
3. Commit and push changes
4. Deploy to update the live site

### Bulk Updates

For large updates, consider:

1. Using a CMS (Contentful, Strapi)
2. Database integration (MongoDB, PostgreSQL)
3. API endpoints for dynamic content

## 📱 Mobile Optimization

The projects page is fully responsive and includes:

- Touch-friendly interactions
- Optimized images for mobile
- Readable text sizes
- Proper spacing for mobile devices

## 🎯 Best Practices

1. **Keep Descriptions Concise**: 2-3 sentences maximum
2. **Use High-Quality Images**: Minimum 800x600px
3. **Regular Updates**: Add new projects monthly
4. **Consistent Data**: Follow the same format for all projects
5. **SEO Optimization**: Include relevant keywords in descriptions

## 🆘 Troubleshooting

### Common Issues

1. **Images Not Loading**: Check image URLs and CORS settings
2. **Build Errors**: Ensure all required fields are present
3. **Styling Issues**: Check CSS class names and Tailwind configuration
4. **Performance**: Optimize images and reduce bundle size

### Getting Help

- Check the console for error messages
- Verify all required fields are present
- Test on different devices and browsers
- Review the Next.js documentation for advanced features

---

This guide covers the essential aspects of managing projects in your portfolio. For additional customization or advanced features, refer to the Next.js and React documentation.
