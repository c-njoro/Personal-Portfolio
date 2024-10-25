import CursorFollower from "./CursorFollower";
import Footer from "./Footer";
import Header from "./Header";

const Structure = ({ children }) => {
  return (
    <div>
      <div>
        <CursorFollower />
      </div>
      <div className="fixed top-0 left-0 z-50 sm:bg-transparent bg-black border-b border-gray-700 sm:border-b-0">
        <Header />
      </div>
      <div className="pt-[calc(10vh)] sm:pt-0">{children}</div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Structure;
