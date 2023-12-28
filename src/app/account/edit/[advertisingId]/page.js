import AddPage from "@/components/templates/AddPage";
import Advertising from "@/models/Advertising";
import Connect from "@/utils/Connect";

async function Edit({ params: { advertisingId } }) {
  await Connect();
  const advertisingData = await Advertising.findOne({ _id: advertisingId });

  return <AddPage advertisingData={advertisingData} />;
}

export default Edit;
