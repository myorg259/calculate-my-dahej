# 🎭 Calculate My Dahej - The Satirical Dowry Auction

A satirical web application that exposes the absurdity of dowry culture through humor and social commentary.

## ⚠️ **Important Disclaimer**

**This is a satirical tool designed to mock and criticize the dowry system. Dowry is ILLEGAL and UNETHICAL. This application is meant to highlight the absurdity of quantifying human worth through humor and spark conversations about this harmful practice.**

## 🎯 Purpose

- **Social Commentary**: Uses humor to expose the absurdity of dowry calculations
- **Educational Tool**: Raises awareness about the harmful practice of dowry
- **Theatre/Presentation**: Suitable for live audiences, workshops, and social awareness campaigns
- **Conversation Starter**: Designed to provoke thought and discussion about gender equality and human dignity

## ✨ Features

### 📋 Progressive Form Interface
- **Step-by-step Accordion**: 7 categories of "evaluation"
- **Progress Tracking**: Visual progress bar showing completion
- **Interactive Icons**: Lucide React icons for each category
- **Tooltips**: Satirical messages showing "bonus percentages"

### 🎨 Matrimonial-Style Design
- **Soft Color Palette**: Blues and ivory backgrounds with elegant gradients
- **Responsive Design**: Works on desktop, tablet, and mobile
- **Smooth Animations**: Fade-ins, bounces, and transitions
- **Modern Typography**: Inter and Playfair Display fonts

### 🧮 Weighted Calculation System
- **Age Factor**: 20-24 (×0.8) to 25-30 (×1.0) to 35+ (×0.7)
- **Job Type**: Government (×2.0), Private (×1.0), Entrepreneur (×1.5)
- **Salary Ranges**: <₹50k (×0.8) to ₹200k+ (×1.5)
- **Education**: High School (×0.7) to PhD (×1.3)
- **Location**: India (×1.0) vs Abroad (×1.4)
- **Height**: Under 5'6" (×0.8) to 6'+ (×1.2)
- **Bonus Traits**: English, Sports, Music, Cooking, Car, House ownership

### 🎉 Result Display
- **Animated Counter**: Shows final "dahej" amount
- **Currency Formatting**: Displays in Lakhs/Crores appropriately
- **Satirical Messages**: Random witty comments about the "score"
- **Confetti Effect**: Triggers for high-value calculations
- **Reset Functionality**: Calculate again with different inputs

### 🔒 Safety Features
- **Multiple Disclaimers**: Clear warnings about satirical nature
- **Educational Context**: Explains the illegal and unethical nature of dowry
- **No Data Storage**: Completely client-side, no personal data collected
- **Responsible Messaging**: Emphasizes human dignity and worth

## 🚀 Getting Started

### Prerequisites
- Node.js (14.0 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/myorg259/calculate-my-dahej.git
   cd calculate-my-dahej
   ```

2. **Switch to development branch**
   ```bash
   git checkout development
   ```

3. **Install dependencies**
   ```bash
   npm install
   ```

4. **Start the development server**
   ```bash
   npm start
   ```

5. **Open in browser**
   Navigate to `http://localhost:3000`

### Building for Production

```bash
npm run build
```

This creates a `build` folder with optimized files for deployment.

### Deploying to GitHub Pages

This project is configured for easy deployment to GitHub Pages:

1. **Push to GitHub**:
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin development
   ```

2. **Deploy to GitHub Pages**:
   ```bash
   npm run deploy
   ```

3. **Enable GitHub Pages**:
   - Go to [repository settings](https://github.com/myorg259/calculate-my-dahej/settings/pages)
   - Select source: "Deploy from a branch"
   - Select branch: "gh-pages"
   - Click "Save"

4. **Access your live site**:
   - Your site will be available at: `https://calculatemydahej.publicvm.com`
   - GitHub Pages will be configured with the custom domain

### DNS Configuration for Custom Domain

To use the custom domain `calculatemydahej.publicvm.com`, you need to configure your DNS records:

1. **A Records** - Point your domain to GitHub Pages IPs:
   ```
   185.199.108.153
   185.199.109.153
   185.199.110.153
   185.199.111.153
   ```

2. **CNAME Record** - For the subdomain:
   ```
   calculatemydahej.publicvm.com CNAME myorg259.github.io
   ```

3. **GitHub Pages Settings**:
   - Go to [repository settings](https://github.com/myorg259/calculate-my-dahej/settings/pages)
   - Under "Custom domain", enter: `calculatemydahej.publicvm.com`
   - Enable "Enforce HTTPS" once DNS propagation is complete

### Deployment Commands

```bash
# Build and deploy in one command
npm run deploy

# Just build (without deploying)
npm run build

# Development server
npm start

# Use deployment script
./deploy.sh
```

**Note**: The `npm run deploy` command automatically builds the project and pushes it to the `gh-pages` branch.

## 📱 Usage

### For Individual Users
1. **Complete the Form**: Go through each step selecting appropriate options
2. **Watch Progress**: See your "matrimonial portfolio" build up
3. **Calculate**: Click the big red "Calculate My Dahej!" button
4. **View Results**: See your satirical "market value" with commentary
5. **Share & Discuss**: Use results to start conversations about dowry culture

### For Presentations & Theatre
1. **Project on Screen**: The design is optimized for projection
2. **Audience Interaction**: Let audience members call out choices
3. **Build Suspense**: Use the loading animation and confetti for drama
4. **Educational Moment**: Use the result to discuss the absurdity and harm of dowry

### For Workshops & Awareness
1. **Icebreaker Activity**: Use to start discussions about gender equality
2. **Comparative Analysis**: Show how different factors affect "valuation"
3. **Critical Thinking**: Encourage participants to question these parameters
4. **Action Planning**: Move from humor to serious discussion about change

## 🎭 Satirical Elements

### Tongue-in-Cheek Messaging
- "Fresh from college!" (for young age)
- "Job security = Gold" (for government jobs)
- "Rare find!" (for cooking skills)
- "Vintage collection" (for older age)

### Absurd Calculations
- Treating humans like products with features and bonuses
- Quantifying personality traits and skills
- Geographic "premiums" for location
- Height "advantages" with multipliers

### Visual Cues
- Auction-style terminology
- Market value language
- Product feature descriptions
- Warning badges and disclaimers

## 🛡️ Ethical Considerations

### What This Tool Does
- ✅ Exposes absurdity through humor
- ✅ Starts important conversations
- ✅ Educates about dowry illegality
- ✅ Promotes human dignity

### What This Tool Doesn't Do
- ❌ Promote or normalize dowry culture
- ❌ Provide actual financial advice
- ❌ Store or share personal data
- ❌ Endorse discriminatory practices

## 📊 Technical Details

### Built With
- **React 18**: Modern React with hooks
- **Lucide React**: Beautiful, customizable icons
- **Canvas Confetti**: Celebration animations
- **CSS3**: Custom styling with gradients and animations
- **JavaScript ES6+**: Modern JavaScript features

### Performance Features
- **Client-side Only**: No server dependencies
- **Responsive Design**: Mobile-first approach
- **Optimized Animations**: Smooth 60fps animations
- **Lazy Loading**: Efficient resource usage

## 🎬 Demo Scenarios

### Scenario 1: The "Premium Package"
- Age: 25-30, Government Job, High Salary, PhD, Abroad, Tall
- All bonus traits selected
- Result: ₹8-12 Crore range
- Message: "You've struck matrimonial gold!"

### Scenario 2: The "Modest Profile"
- Age: 35+, Private Job, Moderate Salary, Graduate, India, Average Height
- Few bonus traits
- Result: ₹50k-2 Lakh range
- Message: "Time to sharpen those negotiation skills!"

## 📈 Future Enhancements

### Potential Features
- **Regional Variations**: Different cultural contexts
- **Historical Data**: Show how "rates" have changed over time
- **Family Pressure Meter**: Additional satirical elements
- **Success Stories**: Fictional testimonials for added humor
- **Anti-Dowry Facts**: Educational popup with real statistics

### Technical Improvements
- **Voice Interface**: For accessibility
- **Multi-language Support**: Regional language options
- **Sharing Features**: Social media integration with disclaimers
- **Analytics**: Track usage for educational insights (anonymized)

## 🤝 Contributing

This project welcomes contributions that enhance its satirical impact while maintaining ethical standards:

1. **Fork the repository**
2. **Create feature branch**: `git checkout -b feature/AmazingFeature`
3. **Commit changes**: `git commit -m 'Add AmazingFeature'`
4. **Push to branch**: `git push origin feature/AmazingFeature`
5. **Open Pull Request**

### Contribution Guidelines
- Maintain satirical tone while being respectful
- Include appropriate disclaimers for new features
- Ensure accessibility standards
- Test across devices and browsers

## 📞 Contact & Support

For questions, suggestions, or collaboration opportunities:
- **Issues**: Use GitHub Issues for bug reports
- **Discussions**: GitHub Discussions for feature requests
- **Social Impact**: Contact for educational partnerships

## 📜 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- **Social Activists**: Who fight against dowry culture daily
- **Researchers**: Who provide data on dowry-related violence
- **Educators**: Who use innovative methods to teach social issues
- **Victims & Survivors**: Whose stories inspire change

---

**Remember**: This tool is designed to make you think, not to make you rich. Human worth cannot be calculated, quantified, or auctioned. Every person deserves respect, dignity, and love - regardless of their job, education, or any other factor. 

**Let's laugh at the absurdity, then work to change it.** 🎭✊ 