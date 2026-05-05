# Shreyas Gupta - Professional Profile Website

A modern, responsive professional profile website built with Next.js and hosted on GitHub Pages with a custom domain.

## 🚀 Features

- **Modern Design**: Clean and professional layout with Tailwind CSS
- **Responsive**: Fully responsive design that works on desktop, tablet, and mobile
- **Fast Performance**: Static site generation with Next.js
- **Resume Download**: Easy download of your resume/CV
- **Smooth Navigation**: Anchor-based navigation with smooth scroll behavior
- **GitHub Pages Ready**: Automated deployment to GitHub Pages

## 📋 Sections

- **Header**: Navigation bar with quick links
- **Hero**: Introduction section with your name and tagline
- **About**: Professional bio and key statistics
- **Experience**: Work history and achievements
- **Resume**: Resume download section
- **Footer**: Contact information and social links

## 🛠️ Setup Instructions

### 1. Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

### 2. Installation

```bash
# Clone the repository
git clone https://github.com/guptayashu99/shreyasgupta.co.in.git
cd shreyasgupta.co.in

# Install dependencies
npm install
```

### 3. Customize Your Profile

#### Update Personal Information
Edit the following files to add your information:

- **`components/Hero.tsx`**: Update your name, title, and introduction
- **`components/About.tsx`**: Add your bio and statistics
- **`components/Experience.tsx`**: Add your work experience entries
- **`components/Footer.tsx`**: Update your contact information and social links

#### Add Your Resume
1. Create a PDF of your resume
2. Place it in the `public/` directory as `resume.pdf`
3. The download button will automatically work

### 4. Local Development

```bash
# Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see your website.

### 5. Build for Production

```bash
# Create a production build
npm run build

# The build output will be in the 'out' directory
```

## 🌐 Deployment

### GitHub Pages Setup

1. **Enable GitHub Pages**:
   - Go to your repository settings
   - Navigate to "Pages" section
   - Set source to "Deploy from a branch"
   - Select the `gh-pages` branch

2. **Configure Custom Domain**:
   - In repository Settings > Pages
   - Under "Custom domain", enter `shreyasgupta.co.in`
   - GitHub will create a CNAME file automatically

3. **Update DNS Records**:
   - Point your domain's DNS records to GitHub Pages:
     - Add A records pointing to GitHub's IP addresses
     - Or add CNAME record pointing to `guptayashu99.github.io`

### Automatic Deployment

The GitHub Actions workflow (`.github/workflows/deploy.yml`) automatically:
1. Installs dependencies
2. Builds the site
3. Deploys to the `gh-pages` branch

**To deploy**: Simply push to the `main` branch!

```bash
git add .
git commit -m "Update profile content"
git push origin main
```

## 📝 Customization

### Colors and Styling
- Edit `app/globals.css` for global styles
- Update `tailwind.config.js` to customize color scheme
- Components use Tailwind CSS classes for styling

### Content Structure
- All components are in the `components/` directory
- Each section can be independently customized
- Add new sections by creating new components and importing them in `app/page.tsx`

### Navigation
- Update navigation links in `components/Header.tsx`
- Links use anchor IDs (#about, #experience, etc.)
- Add new sections and their corresponding anchors

## 📦 Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Main page
│   └── globals.css         # Global styles
├── components/
│   ├── Header.tsx          # Navigation header
│   ├── Hero.tsx            # Introduction section
│   ├── About.tsx           # About section
│   ├── Experience.tsx      # Work experience
│   ├── Resume.tsx          # Resume download
│   └── Footer.tsx          # Footer with contact
├── public/
│   ├── CNAME               # Custom domain configuration
│   └── resume.pdf          # Your resume (add this)
├── .github/workflows/
│   └── deploy.yml          # GitHub Actions workflow
├── package.json            # Dependencies
├── next.config.js          # Next.js configuration
├── tsconfig.json           # TypeScript configuration
└── tailwind.config.js      # Tailwind CSS configuration
```

## 🚀 Next Steps

1. Update your personal information in all components
2. Add your resume to `public/resume.pdf`
3. Customize colors and styling to match your brand
4. Test locally with `npm run dev`
5. Commit and push to deploy!

## 📄 License

This project is open source and available under the MIT License.

## 💡 Tips

- **Custom Domain**: Make sure to update your domain's DNS settings to point to GitHub Pages
- **CNAME File**: The `public/CNAME` file is already configured for your custom domain
- **Mobile Testing**: Always test on mobile devices before deploying
- **SEO**: Update metadata in `app/layout.tsx` for better search engine visibility

## 🤝 Support

For issues or questions:
1. Check the [Next.js Documentation](https://nextjs.org/docs)
2. Review [GitHub Pages Documentation](https://docs.github.com/en/pages)
3. Check [Tailwind CSS Documentation](https://tailwindcss.com/docs)

---

**Happy building! 🎉**
