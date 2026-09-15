import { registerRoot, Composition, Still } from "remotion";
import { HubLoop } from "./HubLoop";
import { OgImage } from "./OgImage";
import { FaviconIcon } from "./FaviconIcon";

const Root = () => (
  <>
    <Composition
      id="HubLoop"
      component={HubLoop}
      durationInFrames={240}
      fps={30}
      width={1920}
      height={1080}
    />
    <Still id="OgImage" component={OgImage} width={1200} height={630} />
    <Still id="FaviconIcon" component={FaviconIcon} width={512} height={512} />
  </>
);

registerRoot(Root);
