import ContentBox from "./ContentBox";
import CustomNavbar from "./CustomNavbar";

export function Landing() {
  return (
    <div className="app-shell">
      <div className="page-panel">
        <CustomNavbar />
        <ContentBox />
      </div>
    </div>
  );
}

export default Landing;
