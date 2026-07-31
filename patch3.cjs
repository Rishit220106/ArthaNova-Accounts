const fs = require('fs');
let code = fs.readFileSync('src/components/ui/HowWeWork.tsx', 'utf8');

code = code.replace(/<CountUp end=\{24\} suffix="h" \/>/, '<CountUp isString={true} stringVal="1 Day" />');
code = code.replace(/Average Response Time/, 'Response Time');
code = code.replace(/<CountUp end=\{99\} suffix="\.8%" \/>/, '<CountUp isString={true} stringVal="Full" />');
code = code.replace(/Accuracy Review/, 'Quality Review');

fs.writeFileSync('src/components/ui/HowWeWork.tsx', code);
