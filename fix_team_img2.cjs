const fs = require('fs');
let code = fs.readFileSync('src/pages/Team.tsx', 'utf8');

code = code.replace(
  /\{member\.imageSrc && <img loading="lazy"\s*src=\{founder\.imageSrc\}\s*alt=\{founder\.name\}\s*className="[^"]*"\s*onError=\{\(e\) => \{ e\.currentTarget\.style\.display = 'none'; \}\} \/>/,
  ''
);

fs.writeFileSync('src/pages/Team.tsx', code);
