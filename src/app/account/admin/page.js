import AdminPage from "@/components/templates/AdminPage";
import Advertising from "@/models/Advertising";
import Connect from "@/utils/Connect";

async function page() {
  await Connect();
  const advertisingData = await Advertising.findOne({ published: false });
  return <AdminPage advertisingData={advertisingData} />;
}

export default page;
