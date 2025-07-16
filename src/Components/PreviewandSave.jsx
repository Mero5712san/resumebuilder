import html2canvas from 'html2canvas';
import { useState } from 'react';
import jsPDF from 'jspdf';

export const PreviewandSave = ({ resumeRef }) => {
  const [isLoading, setIsLoading] = useState(false);


  const handleDownload = async () => {
    const canvas = await html2canvas(resumeRef.current, { scale: 2 });
    const imgData = canvas.toDataURL('image/png');
    const pdf = new jsPDF({
      orientation: 'portrait',
      unit: 'px',
      format: [canvas.width, canvas.height]
    });
    pdf.addImage(imgData, 'PNG', 0, 0);
    pdf.save('resume.pdf');
  };

  return (
    <>
      <div><h1>preview and save page</h1></div>
      <div>
        <button style={{ marginRight: "10px", padding: "5px 20px", marginTop: "10px", borderRadius: " 5px", color: "darkblue", cursor: "pointer", fontWeight: "bold" }} >Preview</button>
        <button style={{ marginRight: "10px", padding: "5px 20px", marginTop: "10px", borderRadius: " 5px", color: "darkblue", cursor: "pointer", fontWeight: "bold" }} onClick={() => setIsLoading(true)}>Download</button>
        {
          isLoading && <div style={{ color: "white", marginTop: "20px", fontSize: "12px", textAlign: "center" }}>
            Your resume will start downloading in a few seconds. <br />
            <span style={{ color: "red", cursor: "pointer", textDecoration: "underline", marginRight: "5px" }} onClick={handleDownload}>
              click here ...
            </span> for a direct download link
          </div>
        }
      </div>
    </>
  );
};
