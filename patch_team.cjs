const fs = require('fs');
let code = fs.readFileSync('src/pages/Team.tsx', 'utf8');

// Remove fake quote
code = code.replace(/<p className="text-xl md:text-2xl text-\[#07162D\]\/70 leading-relaxed font-light italic">[\s\S]*?<\/p>/, '');

// Remove fields from founders
code = code.replace(/experience: "[^"]*",\s*specialization: "[^"]*",\s*description: "[^"]*",/g, '');

// Remove rendering of experience
code = code.replace(/<div className="inline-flex items-center gap-2 px-3 py-1\.5 rounded-lg bg-\[#F7F3EA\] border border-\[#07162D\]\/5 text-xs text-\[#07162D\]\/80 font-medium w-fit group-hover:border-\[#D4AF37\]\/20 transition-colors">\s*<Briefcase className="w-3\.5 h-3\.5 text-\[#D4AF37\]" \/>\s*\{founder\.experience\}\s*<\/div>/g, '');

// Remove rendering of specialization
code = code.replace(/<div className="text-xs font-semibold uppercase tracking-wider text-\[#07162D\]\/50 mb-2">Specialization<\/div>\s*<p className="text-sm text-\[#07162D\] font-medium mb-6">\s*\{founder\.specialization\}\s*<\/p>/g, '');

// Remove rendering of description
code = code.replace(/<p className="text-\[#07162D\]\/70 leading-relaxed text-sm font-light mt-auto">\s*\{founder\.description\}\s*<\/p>/g, '');

fs.writeFileSync('src/pages/Team.tsx', code);
