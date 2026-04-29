import os
import re

tag_pattern = re.compile(r'<(button|a)\b([^>]*?)>', re.IGNORECASE)
class_attr_pattern = re.compile(r'className=(["\'])(.*?)\1', re.IGNORECASE)
rounded_pattern = re.compile(r'\brounded-(sm|md|lg|xl|2xl|3xl|none)\b')

def replace_rounded(match):
    tag_name = match.group(1)
    attrs = match.group(2)
    
    # Check if attrs have className
    def class_replacer(class_match):
        quote = class_match.group(1)
        classes = class_match.group(2)
        
        # If it has px- and py- or looks like a button class, we change rounded
        # Let's just aggressively change rounded-xxx to rounded-full for buttons and links that have background or border or padding.
        if 'px-' in classes or 'py-' in classes or 'bg-' in classes or 'border' in classes or 'w-' in classes:
            classes = rounded_pattern.sub('rounded-full', classes)
            # also just rounded without suffix
            classes = re.sub(r'\brounded\b', 'rounded-full', classes)
            
        return f'className={quote}{classes}{quote}'
        
    new_attrs = class_attr_pattern.sub(class_replacer, attrs)
    return f'<{tag_name}{new_attrs}>'

for root, _, files in os.walk('src/pages'):
    for file in files:
        if file.endswith('.tsx'):
            path = os.path.join(root, file)
            with open(path, 'r', encoding='utf-8') as f:
                content = f.read()
                
            new_content = tag_pattern.sub(replace_rounded, content)
            
            if new_content != content:
                with open(path, 'w', encoding='utf-8') as f:
                    f.write(new_content)
                print(f"Updated {path}")
