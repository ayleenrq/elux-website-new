import os
import re

pattern = re.compile(r'<(?:button|a)[^>]+className=[\'"][^\'"]*?rounded-[a-z0-9xl]+[^\'"]*?[\'"][^>]*>', re.IGNORECASE)
replace_pattern = re.compile(r'(rounded-[a-z0-9xl]+)')

for root, _, files in os.walk('src/pages'):
    for file in files:
        if file.endswith('.tsx'):
            path = os.path.join(root, file)
            with open(path, 'r', encoding='utf-8') as f:
                content = f.read()
            matches = pattern.findall(content)
            for m in matches:
                # only modify if it looks like a button
                if 'px-' in m and 'py-' in m:
                    print(f'{path}: {m[:120]}')
