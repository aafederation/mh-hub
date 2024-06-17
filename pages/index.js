import { Layout } from "../components/Layout";
import { MainBody } from "../components/MainBody";

export default function Home() {
  return (
    <Layout>
      <div
        className="wrapper gap-top-1000 gap-bottom-1000"
        data-variant="no-padding"
      >
        <MainBody />
      </div>
      <div className="[  index-blurb flow ] [ pad-top-900 pad-right-500 pad-bottom-900 pad-left-500 bg-canvas ]">
        <p className="text-500 weight-bold ta-center">
          AAF's Mental Health Directory was made possible with support from
        </p>
        <div className="wrapper" data-variant="narrow">
          <div className="tiles" data-variant="two-per-row">
            <img
              src="/img/logo/Peloton_logo.png"
              style={{ marginBottom: "auto" }}
            />
            <img src="/img/logo/MotherCabriniLogo.png" />
          </div>
        </div>
        <p className="text-500 ta-center">
          and New York State Health Foundation
        </p>
        <span className="text-400 ta-center">
          <p>We thank our partners for their collaboration:</p>
          <p>
            <a href="https://www.arabamericanny.org/">
              Arab American Association of New York
            </a>
            ,{" "}
            <a href="http://www.hamiltonmadisonhouse.org/">
              Hamilton-Madison House
            </a>
          </p>
          <p>
            <a href="https://www.kcsny.org/">
              Korean Community Services of Metropolitan New York
            </a>
            , and <a href="http://sapnanyc.org/">Sapna NYC</a>
          </p>
        </span>
      </div>
    </Layout>
  );
}
