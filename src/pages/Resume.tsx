import { motion } from "framer-motion";
import { Download } from "lucide-react";
import { Viewer, SpecialZoomLevel, RenderError } from "@react-pdf-viewer/core";
import { Worker } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";
import { useState } from "react";
import resumeFile from '../pdf/Resume_Rafi.pdf';


const Resume = () => {
  // In a React app, paths are resolved relative to the public directory
  // Just use the absolute path from the root of your deployed site
  const resumeUrl = resumeFile; 
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleError = (error: Error) => {
    console.error("PDF rendering error:", error);
    setErrorMessage(`Could not load the PDF. Error: ${error.message}`);
  };

  // Custom renderer for error messages
  const renderError = (error: RenderError) => {
    return (
      <div className="p-8 text-center">
        <p className="text-red-500 font-medium text-lg">Error loading PDF</p>
        <p className="mt-2">{error.message}</p>
        <div className="mt-4 p-4 bg-gray-100 rounded text-left overflow-auto">
          <p className="font-mono text-sm break-all">{resumeUrl}</p>
        </div>
        <p className="mt-4 text-sm text-gray-600">
          Please verify that the PDF file exists at the correct location and is valid.
        </p>
      </div>
    );
  };

  // Alternative approach using iframe as a fallback
  const renderFallback = () => {
    return (
      <div className="bg-white rounded-xl shadow-lg overflow-hidden" style={{ height: "80vh" }}>
        <iframe 
          src={resumeUrl} 
          title="Resume" 
          className="w-full h-full" 
        />
      </div>
    );
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="max-w-4xl mx-auto mb-4"
    >
      <div className="flex justify-between items-center mb-8">
        <h1 className="page-title mb-0">Resume</h1>
        <a
          href={resumeUrl}
          download
          className="flex items-center space-x-2 bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors"
        >
          <Download size={20} />
          <span>Download PDF</span>
        </a>
      </div>

      {errorMessage && (
        <div className="bg-red-50 border border-red-200 text-red-700 p-4 mb-4 rounded-lg">
          {errorMessage}
          <button 
            onClick={() => setErrorMessage(null)}
            className="ml-4 underline text-sm text-red-700 hover:text-red-900"
          >
            Try again
          </button>
        </div>
      )}

      {/* PDF Viewer */}
      {!errorMessage ? (
        <div className="bg-white rounded-xl shadow-lg overflow-hidden p-4">
          <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js">
            <Viewer 
              fileUrl={resumeUrl} 
              defaultScale={SpecialZoomLevel.PageFit}
              onError={handleError}
              renderError={renderError}
            />
          </Worker>
        </div>
      ) : renderFallback()}
    </motion.div>
  );
};

export default Resume;