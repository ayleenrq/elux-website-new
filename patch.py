import os

# Patch ServiceDetail.tsx
with open('src/pages/ServiceDetail.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

with open('services_out.txt', 'r', encoding='utf-8') as f:
    services = f.read()

if services not in content:
    content = content.replace("    },\n};\n\n// 2. DYNAMIC HERO", "    },\n" + services + "};\n\n// 2. DYNAMIC HERO")
    with open('src/pages/ServiceDetail.tsx', 'w', encoding='utf-8') as f:
        f.write(content)
    print("Patched ServiceDetail.tsx")

# Patch Industries.tsx
with open('src/pages/Industries.tsx', 'r', encoding='utf-8') as f:
    content2 = f.read()

with open('industries_out.txt', 'r', encoding='utf-8') as f:
    industries = f.read()

if industries not in content2:
    content2 = content2.replace("    },\n};\n\nfunction IndustryHighlight", "    },\n" + industries + "};\n\nfunction IndustryHighlight")
    with open('src/pages/Industries.tsx', 'w', encoding='utf-8') as f:
        f.write(content2)
    print("Patched Industries.tsx")

