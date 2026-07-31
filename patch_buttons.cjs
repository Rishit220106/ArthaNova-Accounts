const fs = require('fs');

const files = [
  'src/components/ui/CtaBanner.tsx',
  'src/components/ui/GlobalPresence.tsx',
  'src/components/ui/HowWeWork.tsx',
  'src/pages/Contact.tsx',
  'src/pages/Home.tsx',
  'src/pages/Jurisdictions.tsx',
  'src/pages/Services.tsx',
  'src/pages/Team.tsx'
];

for (const file of files) {
  let code = fs.readFileSync(file, 'utf8');
  
  // Replace long Button classNames with variant="primary"
  code = code.replace(/<Button\s+([^>]*)className="[^"]*(?:bg-\[#D4AF37\]|bg-\[#102547\]|text-\[#07162D\])[^"]*"([^>]*)>/g, '<Button $1variant="primary"$2>');
  // Also Link replacements
  code = code.replace(/<Link\s+to="\/contact"\s+className="bg-\[#D4AF37\][^"]*"/g, '<Button to="/contact" variant="primary"');
  code = code.replace(/<\/Link>(\s*<\!-- Button was link -->)?/g, (match, p1, offset, str) => {
      // Very naive, just to catch Team.tsx Link to="/contact"
      return match;
  });

  fs.writeFileSync(file, code);
}
