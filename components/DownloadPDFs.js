import { tinaField } from "tinacms/dist/react";
import { useState } from "react";
import globalValues from "@/content/globals/global-values.json";

export const DownloadPDFs = ({ downloads }) => {
  const [pdfToShow, setPdfToShow] = useState(downloads[0].pdf);

  return (
    <>
      <h3 className="pad-bottom-700" data-tina-field={tinaField(downloads)}>
        Download in{" "}
        {downloads.map((download) => (
          <span key={download.language}>
            &nbsp;&nbsp;&nbsp;
            <a
              className="link-pointer-gold"
              onClick={() => setPdfToShow(download.pdf)}
            >
              {
                globalValues.languages.find(
                  (language) => language.value === download.language
                ).label
              }
            </a>
          </span>
        ))}
      </h3>
      <iframe
        src={pdfToShow + "#view=fit"}
        style={{ width: "100%", height: "100vh" }}
      />
    </>
  );
};
