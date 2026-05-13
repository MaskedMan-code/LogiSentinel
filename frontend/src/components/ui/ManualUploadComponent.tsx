import { useState } from 'react';

export default function ManualUploadComponent() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploadStatus, setUploadStatus] = useState("");

  // 1. This grabs the file when the user selects it
  const handleFileChange = (event: any) => {
    setSelectedFile(event.target.files[0]);
  };

  // 2. This sends the file to your FastAPI backend
  const handleUpload = async () => {
    if (!selectedFile) {
      setUploadStatus("Please select a manual first.");
      return;
    }

    setUploadStatus("Uploading to Enterprise AI...");
    
    // Create the form data payload (just like the testing page did)
    const formData = new FormData();
    formData.append("file", selectedFile);

    try {
      const response = await fetch("http://127.0.0.1:8000/api/manuals/upload", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (response.ok) {
        setUploadStatus(`Success! Gemini URI: ${data.gemini_uri}`);
        console.log("Indexed Document Data:", data);
        // Bonus: Save this URI to your React state or a database so the chat can use it later!
      } else {
        setUploadStatus(`Error: ${data.detail || "Upload failed"}`);
      }
    } catch (error) {
      console.error("Upload error:", error);
      setUploadStatus("Backend connection failed.");
    }
  };

  return (
    <div className="p-4 border border-gray-700 rounded-lg text-white">
      <h3 className="text-xl font-bold mb-4">Upload New Fleet Manual</h3>
      
      <input 
        type="file" 
        accept=".pdf" 
        onChange={handleFileChange} 
        className="mb-4 block"
      />
      
      <button 
        onClick={handleUpload}
        className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Index Document
      </button>

      {uploadStatus && (
        <p className="mt-4 text-sm text-green-400">{uploadStatus}</p>
      )}
    </div>
  );
}