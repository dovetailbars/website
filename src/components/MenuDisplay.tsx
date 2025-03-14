import React, { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/esm/Page/TextLayer.css";
import styles from "./MenuDisplay.module.css";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url
).toString();

type MenuDisplayProps = {
  file: string;
};

const MenuDisplay: React.FC<MenuDisplayProps> = ({ file }) => {
  const [numPages, setNumPages] = useState<number | null>(null);
  const [pageNumber, setPageNumber] = useState(1);

  const onDocumentLoadSuccess = ({ numPages }: { numPages: number }) => {
    setNumPages(numPages);
  };

  return (
    <div className={styles.menuDisplay}>
      <Document file={file} onLoadSuccess={onDocumentLoadSuccess}>
        <Page 
          pageNumber={pageNumber} 
          scale={1.0} 
          renderAnnotationLayer={false} 
          renderTextLayer={false} 
        />
      </Document>
      <p>
        Page {pageNumber} of {numPages}
      </p>
      <div className={styles.pdfButtonContainer}>
        <button
          className={styles.pdfButton}
          onClick={() => setPageNumber((prev) => Math.max(prev - 1, 1))}
        >
          Previous
        </button>
        <button
          className={styles.pdfButton}
          onClick={() => setPageNumber((prev) => Math.min(prev + 1, numPages || 1))}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default MenuDisplay;
