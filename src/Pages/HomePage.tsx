import BoxReveal from "@/Components/magicui/box-reveal";
import SlightFlip from "@/Components/magicui/flip-text";
import Particles from "@/Components/magicui/particles";
import {motion} from "framer-motion";
function HomePage() {
  return (
    <div className="h-[calc(100vh-84px)] overflow-hidden">
      <Particles className="particles absolute" />
      <div className="w-[.2px] h-[70%] bg-white/20 absolute top-2/4 left-5 -translate-y-2/4"></div>
      <div

        className="container absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 gap-5 flex  flex-col items-center justify-center "
      >
        <SlightFlip
          word="Welcome Dear in my portfolio"
          className="lg:text-6xl tracking-normal"
        />
        {/* <BoxReveal boxColor="teal">
          <h1>hello</h1>
        </BoxReveal> */}
        <SlightFlip word="My Name Is " className="lg:text-5xl " />
        <SlightFlip
          word="Mohamed Salah"
          className="lg:text-6xl text-gradient font-bold"
        />
        <SlightFlip
          word="And I Work FrontEnd Developer"
          className="lg:text-4xl "
        />
      </div>
    </div>
  );
}

export default HomePage;
