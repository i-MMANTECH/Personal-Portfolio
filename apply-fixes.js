const fs = require('fs');

const file = 'Emmanuel_Aro_Professional_CV.html';
let content = fs.readFileSync(file, 'utf8');

// 1. Mandatory Casing & Token Replacements
content = content.replace(/ Al /g, ' AI ');
content = content.replace(/ Al</g, ' AI<'); // Just in case it's at the end of a tag
content = content.replace(/Al dubbing/g, 'AI dubbing');
content = content.replace(/Al-powered/g, 'AI-powered');
content = content.replace(/Sovereign Al/g, 'Sovereign AI');
content = content.replace(/legal Al/g, 'legal AI');
content = content.replace(/Gemini Al/g, 'Gemini AI');
content = content.replace(/Applied Al/g, 'Applied AI');

content = content.replace(/Llamalndex/g, 'LlamaIndex');
content = content.replace(/Llamaindex/g, 'LlamaIndex');
content = content.replace(/frontend Ul/g, 'frontend UI');
content = content.replace(/ES4\+/g, 'ES6+');

// 2. Standardize All Job Dates to the requested format on a single line
content = content.replace(
    /<div class="flex-row">\s*<div class="company-name">LunarTech<\/div>\s*<div class="location">Austin, TX \(Remote\)<\/div>\s*<\/div>\s*<div class="flex-row">\s*<div class="role-title">Software Engineer – AI Systems & Platform Engineering<\/div>\s*<div class="date">May 2026 – Present<\/div>\s*<\/div>/g,
    `<div class="company-name">LunarTech</div>
            <div class="flex-row">
                <div class="role-title">Software Engineer – AI Systems & Platform Engineering</div>
                <div class="date">May 2026 – Present | Austin, TX (Remote)</div>
            </div>`
);

content = content.replace(
    /<div class="flex-row">\s*<div class="company-name">Boxonia Blueprint<\/div>\s*<div class="location">Lagos, NG<\/div>\s*<\/div>\s*<div class="flex-row">\s*<div class="role-title">Software Engineer \(Platform & Ecosystem Architecture\)<\/div>\s*<div class="date">Oct 2024 – Present \(Contract \/ Concurrent\)<\/div>\s*<\/div>/g,
    `<div class="company-name">Boxonia Blueprint</div>
            <div class="flex-row">
                <div class="role-title">Software Engineer (Platform & Ecosystem Architecture)</div>
                <div class="date">Oct 2024 – Present | Lagos, NG (Contract / Concurrent)</div>
            </div>`
);

content = content.replace(
    /<div class="flex-row">\s*<div class="company-name">Tech4mation \(NativeTalk\)<\/div>\s*<div class="location">Lagos, NG<\/div>\s*<\/div>\s*<div class="flex-row">\s*<div class="role-title">Software Developer, Platform Engineering<\/div>\s*<div class="date">Feb 2026 – Jun 2026<\/div>\s*<\/div>/g,
    `<div class="company-name">Tech4mation (NativeTalk)</div>
            <div class="flex-row">
                <div class="role-title">Software Developer, Platform Engineering</div>
                <div class="date">Feb 2026 – Jun 2026 | Lagos, NG</div>
            </div>`
);

content = content.replace(
    /<div class="flex-row">\s*<div class="company-name">Ornament & Crime<\/div>\s*<div class="location">Birmingham, AL, US<\/div>\s*<\/div>\s*<div class="flex-row">\s*<div class="role-title">Frontend Engineer \(Shopify Developer\)<\/div>\s*<div class="date">Aug 2024 – Mar 2026<\/div>\s*<\/div>/g,
    `<div class="company-name">Ornament & Crime</div>
            <div class="flex-row">
                <div class="role-title">Frontend Engineer (Shopify Developer)</div>
                <div class="date">Aug 2024 – Mar 2026 | Birmingham, AL, US</div>
            </div>`
);

content = content.replace(
    /<div class="flex-row">\s*<div class="company-name">Bincom Dev Center<\/div>\s*<div class="location">Lagos, NG<\/div>\s*<\/div>\s*<div class="flex-row">\s*<div class="role-title">Full Stack Developer<\/div>\s*<div class="date">Sep 2025 – Jan 2026<\/div>\s*<\/div>/g,
    `<div class="company-name">Bincom Dev Center</div>
            <div class="flex-row">
                <div class="role-title">Full Stack Developer</div>
                <div class="date">Sep 2025 – Jan 2026 | Lagos, NG</div>
            </div>`
);

content = content.replace(
    /<div class="flex-row">\s*<div class="company-name">CyberBuddies<\/div>\s*<div class="location">Ibadan, NG<\/div>\s*<\/div>\s*<div class="flex-row">\s*<div class="role-title">Frontend Engineer<\/div>\s*<div class="date">Apr 2024 – Aug 2024<\/div>\s*<\/div>/g,
    `<div class="company-name">CyberBuddies</div>
            <div class="flex-row">
                <div class="role-title">Frontend Engineer</div>
                <div class="date">Apr 2024 – Aug 2024 | Ibadan, NG</div>
            </div>`
);

content = content.replace(
    /<div class="flex-row">\s*<div class="company-name">SafeSpace\.org Association<\/div>\s*<div class="location">California, US \(Remote\)<\/div>\s*<\/div>\s*<div class="flex-row">\s*<div class="role-title">Operations QA & Automation Engineer<\/div>\s*<div class="date">May 2023 – Feb 2024<\/div>\s*<\/div>/g,
    `<div class="company-name">SafeSpace.org Association</div>
            <div class="flex-row">
                <div class="role-title">Operations QA & Automation Engineer</div>
                <div class="date">May 2023 – Feb 2024 | California, US (Remote)</div>
            </div>`
);

content = content.replace(
    /<div class="flex-row">\s*<div class="company-name">Fiatci\.io<\/div>\s*<div class="location">Brussels, BE \(Remote\)<\/div>\s*<\/div>\s*<div class="flex-row">\s*<div class="role-title">Lead Full Stack Engineer<\/div>\s*<div class="date">Sep 2022 – Mar 2023<\/div>\s*<\/div>/g,
    `<div class="company-name">Fiatci.io</div>
            <div class="flex-row">
                <div class="role-title">Lead Full Stack Engineer</div>
                <div class="date">Sep 2022 – Mar 2023 | Brussels, BE (Remote)</div>
            </div>`
);

// 3. Enforce 100% Consistent Bullet Hierarchy
// Note: In HTML, the <li> inherently has a bullet because of the ::before { content: "•" } in CSS.
// However, the user explicitly asked for: "In 'FLAGSHIP SYSTEMS...', ensure all 4 projects begin with '• ':"
// Because they are in an <ul><li>, the bullet will render. But they might be reading the raw text in some parser. Let's make sure the text itself doesn't contain a literal bullet if the CSS provides it, or if they want the literal bullet in the text, we should just let CSS handle it. Actually, I put `li::before { content: "•"; }` in the CSS, so the rendered PDF *will* have the bullet.
// But they explicitly said: "fix the missing bullet point under CyberBuddies" -> Wait, they sent me a plain text block earlier, and maybe they didn't see a bullet because of a typo.
// Let's ensure the HTML has <li> elements for CyberBuddies.
content = content.replace(
    /<li>Supported the migration of production workloads to AWS infrastructure/g,
    '<li>Supported the migration of production workloads to AWS infrastructure'
);

// Let's actually add the physical bullet text directly into the HTML just in case the ATS parser strips CSS generated content.
// ATS parsers only read DOM text, not CSS `::before` pseudo-elements! 
// This is a crucial ATS tip! I should strip the `li::before` from CSS and just put `• ` inside the `<li>`.
content = content.replace(/li::before\s*\{[^}]+\}/g, '');
content = content.replace(/list-style:\s*none;/g, 'list-style: none;'); // Keep no default bullet
content = content.replace(/padding-left:\s*0\.15in;/g, 'padding-left: 0;'); // Remove indent since bullet is in text now

// Now prefix every <li> with • 
content = content.replace(/<li>(?!• )/g, '<li>• ');
content = content.replace(/<li><strong>(?!• )/g, '<li>• <strong>');

// Clean up Education & Certification Block
// Ensure em-dash "—"
content = content.replace(/&mdash;/g, '—');
content = content.replace(/<li>• <strong>B\.Sc\. in Computer Science<\/strong> — Federal University Oye-Ekiti, Nigeria \(2025\)<\/li>/g, '<li>• B.Sc. in Computer Science — Federal University Oye-Ekiti, Nigeria (2025)</li>');
content = content.replace(/<li>• <strong>Full Stack Engineer Certification<\/strong> — Google Developer Student Clubs \(2024\)<\/li>/g, '<li>• Full Stack Engineer Certification — Google Developer Student Clubs (2024)</li>');
content = content.replace(/<li>• <strong>Advanced Software Engineering Certification<\/strong> — GB-Tech Learning Centre, Nigeria \(2023\)<\/li>/g, '<li>• Advanced Software Engineering Certification — GB-Tech Learning Centre, Nigeria (2023)</li>');

// Save the fixed HTML
fs.writeFileSync(file, content);
console.log("Replacements applied successfully!");
