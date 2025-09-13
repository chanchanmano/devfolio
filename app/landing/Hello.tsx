import DynamicTitle from "./DynamicTitle";
import SocialLinks from "./SocialLinks";

function Hello() {
  return (
    <div className="">
      <div className="flex justify-between items-center">
        <div id="text-hello-landing">
          <p className="text-8xl font-jersey">hello !</p>
          <p className="text-8xl font-jersey">I am Aryan.</p>
        </div>
        <img src="/hello-appmoji.png" className="mr-10 w-1/5" />
      </div>
      <div className="flex items-baseline">
        <p className="text-8xl font-jersey">a</p>
        <DynamicTitle />
      </div>
      <div className="mt-20">
        <SocialLinks />
      </div>
    </div>
  );
}

export default Hello;
