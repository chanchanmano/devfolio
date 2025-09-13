import ContentBox from "./ContentBox";
import CustomNavbar from "./CustomNavbar";

export function Landing() {
  return (
    <div className="mx-24 overflow-hidden min-h-screen">
      <CustomNavbar />
      <ContentBox />
    </div>
  );
}

export default Landing;
