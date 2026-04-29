import re
import random

images = [
    '"https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop"',
    '"https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop"',
    '"https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop"',
    '"https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=1974&auto=format&fit=crop"',
    '"https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=2070&auto=format&fit=crop"',
    '"https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?q=80&w=2070&auto=format&fit=crop"',
    '"https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop"',
    '"https://images.unsplash.com/photo-1618761714954-0b8cd0026356?q=80&w=2070&auto=format&fit=crop"',
    '"https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop"',
    '"https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop"',
    '"https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=2070&auto=format&fit=crop"',
    '"https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2070&auto=format&fit=crop"'
]

with open('src/pages/ServiceDetail.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

# 1. Update ServiceDetailProps
props_search = "        imagePlaceholder?: boolean;"
props_replace = "        imagePlaceholder?: boolean;\n        image?: string;"
content = content.replace(props_search, props_replace)

# 2. Replace the true occurrences with an image URL
# It can be "imagePlaceholder": true or imagePlaceholder: true
def replace_placeholder(match):
    img = random.choice(images)
    return match.group(0).replace("true", "false") + f",\n                \"image\": {img}"

content = re.sub(r'["\']?imagePlaceholder["\']?:\s*true', replace_placeholder, content)

# 3. Update the Deliverables Component
comp_search = """                            {item.imagePlaceholder && (
                                <div className="mt-auto border-0 shadow-none">
                                    <div className="bg-gray-100 rounded-2xl w-full aspect-video border-0 shadow-none"></div>
                                </div>
                            )}"""

comp_replace = """                            {item.image ? (
                                <div className="mt-auto border-0 shadow-none pt-6">
                                    <img src={item.image} alt={item.title} className="rounded-2xl w-full aspect-video object-cover border-0 shadow-none" />
                                </div>
                            ) : item.imagePlaceholder ? (
                                <div className="mt-auto border-0 shadow-none pt-6">
                                    <div className="bg-gray-100 rounded-2xl w-full aspect-video border-0 shadow-none"></div>
                                </div>
                            ) : null}"""
content = content.replace(comp_search, comp_replace)

with open('src/pages/ServiceDetail.tsx', 'w', encoding='utf-8') as f:
    f.write(content)

print("Updated ServiceDetail.tsx with images for Deliverables.")
