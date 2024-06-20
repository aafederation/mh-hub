import { tinaField } from "tinacms/dist/react";

export const DownloadPDFs = ({ downloads }) => {
  return (
    <>
      <h3 className="pad-bottom-700" data-tina-field={tinaField(downloads)}>
        Download in{" "}
        {downloads.map((download) => download.language).join("    ")}
      </h3>
      <iframe
        src={downloads[0].pdf + "#view=fit"}
        style={{ width: "100%", height: "100vh" }}
      />
    </>
  );
};
