import os

def list_files_in_directory(directory):
    try:
        # List all files in the given directory
        files = os.listdir(directory)
        
        # Start the JavaScript code format
        print("const pdfFiles = [")
        
        for file in files:
            if file.endswith('.pdf'):  # Only include PDF files
                file_name = file.rsplit('.', 1)[0]  # Get the file name without extension
                file_path = os.path.join('/pdf_files', file)  # Construct the file path
                print(f"    {{ name: '{file_name}', path: '{file_path}' }},")
        
        # End the JavaScript code format
        print("];")
    except FileNotFoundError:
        print(f"The directory {directory} does not exist.")

# Replace 'your_directory_path' with the path of your directory
directory_path = 'public/pdf_files/'
list_files_in_directory(directory_path)
