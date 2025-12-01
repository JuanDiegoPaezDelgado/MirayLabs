#!/usr/bin/env python3
import re
import glob

# Componentes a actualizar
components = [
    'components/WebsitesLanding.tsx',
    'components/CompanyLanding.tsx',
    'components/StaffingLanding.tsx',
    'components/CustomSoftwareLanding.tsx',
    'components/AutomationLanding.tsx',
    'components/ContactLanding.tsx',
]

# Reglas de reemplazo (buscar, reemplazar)
replacements = [
    # Textos
    (r'text-white(?![\w/-])', 'text-gray-900 dark:text-white'),
    (r'text-gray-400(?![\w/-])', 'text-gray-600 dark:text-gray-400'),
    (r'text-gray-300(?![\w/-])', 'text-gray-700 dark:text-gray-300'),
    (r'text-gray-500(?![\w/-])', 'text-gray-600 dark:text-gray-500'),
    (r'text-gray-600(?![\w/-])', 'text-gray-700 dark:text-gray-600'),
    
    # Fondos
    (r'bg-\[#050505\](?![\w/-])', 'bg-white dark:bg-[#050505]'),
    (r'bg-\[#0a0a0a\](?![\w/-])', 'bg-gray-50 dark:bg-[#0a0a0a]'),
    (r'bg-\[#111\]', 'bg-white dark:bg-[#111]'),
    (r'bg-\[#1a1a1a\](?![\w/-])', 'bg-gray-100 dark:bg-[#1a1a1a]'),
    (r'bg-\[#161616\]', 'bg-white dark:bg-[#161616]'),
    (r'bg-\[#252525\]', 'bg-gray-200 dark:bg-[#252525]'),
    
    # Bordes
    (r'border-white/10(?![\w/-])', 'border-gray-200 dark:border-white/10'),
    (r'border-white/5(?![\w/-])', 'border-gray-200 dark:border-white/5'),
    (r'border-white/20(?![\w/-])', 'border-gray-300 dark:border-white/20'),
]

for component in components:
    try:
        with open(component, 'r', encoding='utf-8') as f:
            content = f.read()
        
        original_content = content
        
        for search, replace in replacements:
            content = re.sub(search, replace, content)
        
        if content != original_content:
            with open(component, 'w', encoding='utf-8') as f:
                f.write(content)
            print(f"✓ Updated {component}")
        else:
            print(f"- No changes for {component}")
    except FileNotFoundError:
        print(f"✗ File not found: {component}")

print("\nDone!")
