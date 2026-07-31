import os
import glob
import re

def update_file(filepath):
    with open(filepath, 'r') as f:
        content = f.read()

    # Section backgrounds
    content = content.replace('bg-white', 'bg-surface')
    content = content.replace('bg-surface/80', 'bg-surface/40')
    content = content.replace('bg-surface/95', 'bg-surface/60')
    
    # Text colors
    content = content.replace('text-primary', 'text-text-primary')
    content = content.replace('text-text-primary/80', 'text-text-primary')
    content = content.replace('text-slate-500', 'text-text-secondary')
    content = content.replace('text-slate-700', 'text-text-secondary')
    content = content.replace('text-slate-600', 'text-text-secondary')
    content = content.replace('text-blue-900', 'text-text-primary')
    content = content.replace('text-[#040F2D]', 'text-text-primary')
    content = content.replace('text-silver-dark', 'text-text-secondary')
    
    # Backgrounds and borders
    content = content.replace('bg-slate-50/50', 'bg-surface/40')
    content = content.replace('bg-slate-50', 'bg-surface/50')
    content = content.replace('border-slate-100', 'border-white/10')
    content = content.replace('border-slate-200', 'border-white/10')
    content = content.replace('border-border/60', 'border-white/10')
    content = content.replace('border-border/50', 'border-white/10')
    content = content.replace('border-blue-100', 'border-white/10')
    content = content.replace('bg-blue-300', 'bg-accent')
    content = content.replace('bg-blue-400', 'bg-accent')
    
    # Hover effects
    content = content.replace('hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.08)]', 'hover:shadow-premium-hover')
    content = content.replace('shadow-[0_8px_30px_rgb(0,0,0,0.04)]', 'shadow-premium')
    content = content.replace('shadow-[0_4px_20px_rgb(0,0,0,0.03)]', 'shadow-premium')
    content = content.replace('hover:shadow-[0_15px_35px_-10px_rgba(0,0,0,0.07)]', 'hover:shadow-premium-hover')
    content = content.replace('shadow-sm', 'shadow-premium')
    content = content.replace('shadow-xl', 'shadow-premium')

    with open(filepath, 'w') as f:
        f.write(content)

tsx_files = glob.glob('src/**/*.tsx', recursive=True)
for file in tsx_files:
    update_file(file)

print("Updated theme colors in all TSX files")
