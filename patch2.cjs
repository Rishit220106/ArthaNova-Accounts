const fs = require('fs');
let code = fs.readFileSync('src/components/layout/Header.tsx', 'utf8');

code = code.replace(
  /<Button to="\/contact" className="bg-\[#102547\][^>]*>\s*Get In Touch\s*<\/Button>/g,
  '<Button to="/contact" variant="primary" className="font-bold">\n              Get In Touch\n            </Button>'
);

fs.writeFileSync('src/components/layout/Header.tsx', code);
