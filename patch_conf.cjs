const fs = require('fs');
let code = fs.readFileSync('src/components/ui/ClientConfidence.tsx', 'utf8');

// Remove testimonials array
code = code.replace(/const testimonials = \[[\s\S]*?\];/g, '');

// Remove badges array
code = code.replace(/const badges = \[[\s\S]*?\];/g, '');

// Remove Testimonials Grid rendering
code = code.replace(/\{\/\* Testimonials Grid \*\/\}[\s\S]*?(?=\{\/\* Trust Badges \*\/\}|\{\/\* Industries We Support \*\/\}|<\/div>\s*<\/section>)/, '');

// Remove Trust Badges rendering
code = code.replace(/\{\/\* Trust Badges \*\/\}[\s\S]*?(?=\{\/\* Industries We Support \*\/\}|<\/div>\s*<\/section>)/, '');

fs.writeFileSync('src/components/ui/ClientConfidence.tsx', code);
