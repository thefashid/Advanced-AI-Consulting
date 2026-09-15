import { Route, Switch } from "wouter";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { useScrollToHash } from "@/lib/reveal";
import Home from "@/pages/Home";
import AiConsulting from "@/pages/AiConsulting";
import Marketing from "@/pages/Marketing";
import Contatti from "@/pages/Contatti";
import NotFound from "@/pages/not-found";

export default function App() {
  useScrollToHash();
  return (
    <>
      <Nav />
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/ai-consulting" component={AiConsulting} />
        <Route path="/marketing" component={Marketing} />
        <Route path="/contatti" component={Contatti} />
        <Route component={NotFound} />
      </Switch>
      <Footer />
    </>
  );
}
