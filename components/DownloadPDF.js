import { tinaField } from "tinacms/dist/react";
import { useState } from "react";
import globalValues from "@/content/globals/global-values.json";

export const DownloadPDF = ({ downloads }) => {
  const [pdfToShow, setPdfToShow] = useState(downloads[0].pdf);

  return (
    <>
      <h3 className="pad-bottom-700">
        Download in{" "}
        {downloads.map((download) => {
          return (
            download.language &&
            download.pdf && (
              <span key={download.language}>
                &nbsp;&nbsp;&nbsp;
                <a
                  className="link-pointer-gold"
                  data-tina-field={tinaField(download)}
                  onClick={() => setPdfToShow(download.pdf)}
                >
                  {
                    globalValues.languages.find(
                      (language) => language.value === download.language
                    ).label
                  }
                </a>
              </span>
            )
          );
        })}
      </h3>
      <iframe
        title="Inline Frame Example"
        src={pdfToShow + "#view=fit&navpanes=0"}
        style={{ width: "100%", height: "100vh" }}
      />
    </>
  );
};
