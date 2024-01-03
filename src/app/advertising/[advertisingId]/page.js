import DetailPage from "@/components/templates/DetailPage";
import Advertising from "@/models/Advertising";
import React from "react";

async function page({ params: { advertisingId } }) {
  const advertisingData = await Advertising.findOne({ _id: advertisingId });

  return <DetailPage advertisingData={advertisingData} />;
}

export default page;
