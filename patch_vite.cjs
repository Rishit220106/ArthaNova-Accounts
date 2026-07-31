const fs = require('fs');
let code = fs.readFileSync('vite.config.ts', 'utf8');

const buildConfig = `
    build: {
      rollupOptions: {
        output: {
          manualChunks(id) {
            if (id.includes('node_modules')) {
              if (id.includes('react') || id.includes('react-dom') || id.includes('react-router')) {
                return 'vendor-react';
              }
              if (id.includes('motion')) {
                return 'vendor-motion';
              }
              if (id.includes('lucide')) {
                return 'vendor-icons';
              }
              return 'vendor';
            }
          }
        }
      }
    },
`;

code = code.replace(/server: {/, `${buildConfig}    server: {`);
fs.writeFileSync('vite.config.ts', code);
