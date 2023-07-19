import React from "react";
import ContentLoader from "react-content-loader";

const Skeleton = () => (
  <ContentLoader
    speed={2}
    width={570}
    height={164}
    viewBox="0 0 570 164"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    style={{ marginBottom: "30px" }}
  >
    <rect x="178" y="14" rx="0" ry="0" width="251" height="25" />
    <rect x="352" y="108" rx="0" ry="0" width="190" height="41" />
    <rect x="0" y="0" rx="0" ry="0" width="163" height="164" />
  </ContentLoader>
);

export default Skeleton;
