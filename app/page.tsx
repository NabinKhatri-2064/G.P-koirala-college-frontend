import { CarouselDemo } from "./Components/Caruosel";
import Caution from "./Components/Caution";
import Herosection from "./Components/Herosection";
import Testimonialsectionhero from "./Components/Testimonial-section";
import Whychooseus from "./Components/Whychooseus";

export default function Home() {
  return (
    <main>
      <Herosection/>
      <CarouselDemo/>
      <Testimonialsectionhero/>
      <Whychooseus/>
    </main>
  )
}