import BoxReveal from "@/Components/magicui/box-reveal";

function AboutPage() {
  return (
    <div className="container  mx-auto absolute min-h-[calc(100vh-82px)]  text-5xl overflow-hidden">
      <div className=" mt-10">
        <BoxReveal boxColor="white">
          <h3 className="text-2xl sm:text-5xl mb-5 border-b-4 pb-2 border-[#353535] w-fit">
          About Me
        </h3>
        </BoxReveal>
        <div className="text-lg leading-8 sm:*:text-3xl sm:*:leading-relaxed w-[86%]">
          <p >
            I am passionate about and committed to front-end website
            development, and I am looking forward to joining an internship
            opportunity that will help me develop my skills and knowledge in
            this exciting and evolving field. I realized that design, engaging
            experience, and a friendly user play a crucial role in creating
            unique and successful digital experiences.
          </p>
          <p >
            During my studies and work experience, I have gained extensive
            knowledge in front-end technologies and best practices in designing
            and implementing attractive and responsive user interfaces. I have
            experience using core web languages such as HTML and CSS, as well as
            proficiency in popular frameworks such as Bootstrap and Tailwind
            CSS. I am familiar with JavaScript technologies and have a good
            background in front-end frameworks such as React.js and Next js
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
