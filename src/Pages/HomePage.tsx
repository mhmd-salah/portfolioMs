import SlightFlip from "@/Components/magicui/flip-text";
import Particles from "@/Components/magicui/particles";
function HomePage() {
  return (
    <div className="h-[calc(100vh-84px)] overflow-hidden">
      <Particles className="particles absolute" />
      <div className="py-10 bg-teal-600 container absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 gap-5 flex  flex-col items-center justify-center ">
      <div className="w-[.2px] h-[70%] border-l-2 border-white/45 absolute top-2/4 left-5 -translate-y-2/4">
      <h1 className="px-3">hello</h1>
      <h1 className="px-3">hello</h1>
      <h1 className="px-3">hello</h1>
      </div>
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
          className="lg:text-6xl font-bold"
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
