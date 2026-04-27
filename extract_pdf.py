import fitz
import sys

def extract_text_from_pdf(pdf_path, output_path):
    try:
        doc = fitz.open(pdf_path)
        with open(output_path, 'w', encoding='utf-8') as f:
            for page_num in range(len(doc)):
                page = doc.load_page(page_num)
                f.write(f"--- Page {page_num + 1} ---\n")
                f.write(page.get_text())
                f.write("\n")
    except Exception as e:
        print(f"Error: {e}")

if __name__ == "__main__":
    if len(sys.argv) > 1:
        extract_text_from_pdf(sys.argv[1], "pdf_text.txt")
    else:
        print("Please provide a PDF file path.")
