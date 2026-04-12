import Hero from "../components/Hero";
import NavigationHub from "../components/NavigationHub";
import Publications from "../components/Publications";
import Awards from "../components/Awards";
import SectionWrapper from "../components/SectionWrapper";
import Divider from "../components/Divider";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Divider />
      <NavigationHub />
      <Divider />
      <SectionWrapper>
        <Publications />
      </SectionWrapper>
      <Divider />
      <SectionWrapper>
        <Awards />
      </SectionWrapper>
    </>
  );
}
