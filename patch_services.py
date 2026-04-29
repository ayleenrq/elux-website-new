import json
import re

with open('src/pages/ServiceDetail.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

# Load the dict from generate_services.py
# The simplest is to just extract it from the file since it's valid python code
import importlib.util
spec = importlib.util.spec_from_file_location("generate_services", "generate_services.py")
module = importlib.util.module_from_spec(spec)
spec.loader.exec_module(module)

data = module.data

new_data_str = "export const serviceDataMap: Record<string, Omit<ServiceDetailProps, 'serviceHash'>> = {\n"

match = re.search(r"(    '#services': \{.*?)    '#services-seed-mvp':", content, flags=re.DOTALL)
if match:
    new_data_str += match.group(1)
else:
    print("Could not find the original top-level services.")
    exit(1)

for key, value in data.items():
    val_str = json.dumps(value, indent=4)
    val_str = val_str.replace('\n', '\n    ')
    new_data_str += f"    '{key}': {val_str},\n"

new_data_str += "};\n"

start_idx = content.find("export const serviceDataMap")
end_idx = content.find("};", start_idx) + 2
content = content[:start_idx] + new_data_str + content[end_idx:]

# Add framer-motion animations
if "framer-motion" not in content:
    content = content.replace("import { ServiceDetailProps }", "import { motion } from 'framer-motion';\nimport { ServiceDetailProps }")
    if "framer-motion" not in content:
        content = "import { motion } from 'framer-motion';\n" + content

# Animate DynamicHero
content = content.replace("<section className=\"min-h-[90vh]", "<section className=\"min-h-[90vh]")
content = content.replace("<div className=\"max-w-7xl mx-auto w-full pt-20 border-0 shadow-none\">", 
    "<motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className=\"max-w-7xl mx-auto w-full pt-20 border-0 shadow-none\">")
content = content.replace("</section>\n    );\n}\n\n// 3. THE CONTEXT", "</motion.div>\n        </section>\n    );\n}\n\n// 3. THE CONTEXT")

# Animate TheContext
content = content.replace("<div className=\"md:col-span-5 h-fit sticky top-32 border-0 shadow-none\">",
    "<motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className=\"md:col-span-5 h-fit sticky top-32 border-0 shadow-none\">")
content = content.replace("</h2>\n                </div>", "</h2>\n                </motion.div>")

content = content.replace("<div key={index} className=\"border-t border-gray-200 py-8 shadow-none\">",
    "<motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} className=\"border-t border-gray-200 py-8 shadow-none\">")
content = content.replace("</p>\n                        </div>", "</p>\n                        </motion.div>")

# Animate Deliverables
content = content.replace("<h2 className=\"text-[48px] font-medium tracking-tighter text-gray-900 mb-16 border-0 shadow-none font-display\">What You Get</h2>",
    "<motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className=\"text-[48px] font-medium tracking-tighter text-gray-900 mb-16 border-0 shadow-none font-display\">What You Get</motion.h2>")

content = content.replace("<div key={index} className={`bg-white border border-gray-200 rounded-3xl p-10 shadow-none flex flex-col hover:border-gray-300 hover:shadow-sm transition-all duration-300",
    "<motion.div key={index} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} className={`bg-white border border-gray-200 rounded-3xl p-10 shadow-none flex flex-col hover:border-gray-300 hover:shadow-sm transition-all duration-300")
content = content.replace("</div>\n                    ))}", "</motion.div>\n                    ))}")

# Animate PragmaticProcess
content = content.replace("<h2 className=\"text-[64px] font-medium tracking-tighter text-gray-900 text-center mb-16 border-0 shadow-none font-display\">How We Ship It.</h2>", 
    "<motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className=\"text-[64px] font-medium tracking-tighter text-gray-900 text-center mb-16 border-0 shadow-none font-display\">How We Ship It.</motion.h2>")
content = content.replace("<div key={index} className=\"border-t border-gray-200 py-12 flex flex-col md:flex-row gap-8 shadow-none\">", 
    "<motion.div key={index} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} className=\"border-t border-gray-200 py-12 flex flex-col md:flex-row gap-8 shadow-none\">")
content = content.replace("</p>\n                            </div>\n                        </div>", "</p>\n                            </div>\n                        </motion.div>")

# Animate FeaturedProof
content = content.replace("<div className=\"w-full border-0 shadow-none overflow-hidden rounded-3xl\">",
    "<motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className=\"w-full border-0 shadow-none overflow-hidden rounded-3xl\">")
content = content.replace("/>\n                </div>\n                <div className=\"mt-12 text-center\">", "/>\n                </motion.div>\n                <div className=\"mt-12 text-center\">")

with open('src/pages/ServiceDetail.tsx', 'w', encoding='utf-8') as f:
    f.write(content)

print("Successfully replaced and animated!")
