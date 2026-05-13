import os
import google.generativeai as genai
from app.core.config import get_settings
from dotenv import load_dotenv

# 1. Force Python to read the .env file you just updated
load_dotenv()

# 2. Grab the exact key the Google SDK is looking for
genai.configure(api_key=os.environ.get("AIzaSyA3ZiFQsrPg0GA6_cWk1isFhUt7vIyqbJo"))

class FleetIntelligenceAgent:
    @staticmethod
    def index_manual(file_path: str, display_name: str):
        """Uploads a document to Gemini's File API for processing."""
        print(f"Uploading {display_name} to Gemini...")
        
        try:
            # Upload the file to Google's servers
            uploaded_file = genai.upload_file(path=file_path, display_name=display_name)
            print(f"Successfully indexed! URI: {uploaded_file.uri}")
            return uploaded_file
        except Exception as e:
            print(f"Failed to upload to Gemini: {e}")
            raise e
    @staticmethod
    def ask_diagnostics(prompt: str, file_uri: str = None):
        """Asks Gemini a question, optionally referencing an uploaded manual."""
        try:
            model = genai.GenerativeModel('gemini-2.5-flash')
            content = []

            # If the user selected a manual, grab it from Google's servers
            if file_uri:
                # Extract the exact file ID from the long URI
                file_id = file_uri.split('/')[-1]
                file_name = f"files/{file_id}"
                
                # Fetch the document so Gemini can read it
                document = genai.get_file(file_name)
                content.append(document)

            # Add the user's question
            content.append(prompt)
            
            # Get the answer!
            response = model.generate_content(content)
            return response.text
            
        except Exception as e:
            print(f"AI Generation Error: {e}")
            return "Error: Could not process diagnostics at this time."    
  