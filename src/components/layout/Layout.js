import Header from "@/components/modules/Header";
import Footer from "@/components/modules/Footer";

function Layout({ children }) {
  return (
    <>
      <div>
        <Header />
      </div>
      <div>{children}</div>
      <div>
        <Footer />
      </div>
    </>
  );
}

export default Layout;
