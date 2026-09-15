import { registerRoot, Composition } from "remotion";
import { HubLoop } from "./HubLoop";

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
  </>
);

registerRoot(Root);
