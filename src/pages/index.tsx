import Header from "@/sections/header";
import Navigation from "@/sections/navigation";
import Landing from "@/sections/landing";
import About from "@/sections/about";
import DividerOne from "@/sections/dividers/one";

export default function Home() {
  return (
    <div>
      <Header />
      <Navigation />
      <Landing />
      <About />
      <DividerOne />
    </div>
  );
}
