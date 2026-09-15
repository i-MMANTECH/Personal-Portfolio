const fs = require('fs');
const path = require('path');

const files = [
    'Emmanuel_Aro_Professional_CV.html',
    'GITHUB_README.md',
    'src/content/experience.ts',
    'src/content/profile.ts',
    'scripts/generate-cv-docx.py',
    'scripts/generate-cv-docx.js',
    'src/sections/Hero.tsx',
    'src/components/CurrentlyStrip.tsx',
    'src/components/ConsoleSignature.tsx',
    'src/components/Footer.tsx',
    'src/components/Preloader.tsx',
    'src/components/Marquee.tsx',
    'src/app/opengraph-image.tsx',
    'src/app/layout.tsx'
];

files.forEach(file => {
    const fullPath = path.join(__dirname, file);
    if (fs.existsSync(fullPath)) {
        let content = fs.readFileSync(fullPath, 'utf8');
        
        // Replace exact phrases
        content = content.replace(/Senior Software Developer/g, 'Software Developer');
        content = content.replace(/Senior Full-Stack & Systems Software Engineer/g, 'Full-Stack & Systems Software Engineer');
        content = content.replace(/Senior Software Engineer/g, 'Software Engineer');
        content = content.replace(/Senior Full Stack Engineer/g, 'Full Stack Engineer');
        content = content.replace(/Senior Full Stack Software Engineer/g, 'Full Stack Software Engineer');
        content = content.replace(/Senior \/ Staff \/ Principal/g, 'Staff / Principal');
        content = content.replace(/Senior \/ Staff/g, 'Staff');
        content = content.replace(/senior \/ staff/g, 'staff');
        content = content.replace(/senior engineer/gi, 'software engineer');
        
        // Also just replace lingering "Senior " but we have to be careful not to break other words, 
        // the above specific ones cover 99% of what we saw in the grep.
        
        // Fix the 6+ years
        content = content.replace(/6\+ years/g, '4+ years');
        content = content.replace(/6\+/g, '4+'); // catch all just in case
        
        fs.writeFileSync(fullPath, content);
        console.log(`Updated ${file}`);
    } else {
        console.log(`File not found: ${file}`);
    }
});
