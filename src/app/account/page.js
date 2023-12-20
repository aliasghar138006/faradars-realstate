import Dashboard from "@/components/modules/Dashboard";
import AccountPage from "@/components/templates/AccountPage";

async function page(props) {
  return (
    <AccountPage>
      <Dashboard />
    </AccountPage>
  );
}

export default page;
