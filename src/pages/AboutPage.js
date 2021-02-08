import React from "react";

import axios from "axios";

const AboutPage = () => {
  const [version, setVersion] = React.useState("");

  const getData = async () => {
    const resp = await axios.get("https://api.codingthailand.com/api/version");
    // console.log(resp.data.version)
    setVersion(resp.data.data.version);
  };

  React.useEffect(() => {

    getData();
  }, []);

  return (
    <>
      <div className="container">
        <div className="row mt-100">
          <div className="col-12">About</div>
          <p />
          {version && <div className="col-12">Version {version}</div>}
        </div>
      </div>
    </>
  );
};
export default AboutPage;
