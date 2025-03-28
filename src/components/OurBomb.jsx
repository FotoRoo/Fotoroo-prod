import Ourbomb from "../Images/OurBomb.png";

const OurBomb = () => {
  return (
    <section className="flex lg:justify-between md:gap-20 lg:flex-row flex-col lg:items-center lg:px-24 w-full my-10">
      <div className="text-center md:text-start">
        {/* <h1 className="md:text-[55px] md:uppercase font-pinyon text-5xl md:font-rig-solid"> */}
        <h1 className="md:text-[55px] lg:text-[70px] xl:text-[85px] uppercase font-dhaks text-5xl">
          Freeze the Fun, Frame the Magic
        </h1>
        <p className="border-b border-black md:w-[640px] my-4" />
        <div className="text-textCol md:text-lg lg:text-xl xl:text-2xl text-base font-rische laywrite font-medium">
          <p className="my-4 ">
            At FotoRoo, we don’t just capture moments—we turn them into
            unforgettable masterpieces. Every click is a memory, every pose a
            story, and we’re here to help you relive it all, long after the
            party’s over.
          </p>
          <p className="my-4">
            With a passionate team and all-inclusive packages, we deliver a
            seamless, stress-free experience tailored just for you.
          </p>
          
          <p className="my-4">
            From elegant <span className="font-semibold">Mirror Booth</span> to dynamic <span className="font-semibold">DSLR</span> setups, immersive <span className="font-semibold">360</span>
            experiences, and our show-stopping <span className="font-semibold">Magazine Booth</span>, FotoRoo brings
            cutting-edge technology to your event, delivering high-definition
            imagery and interactive features that leave a lasting impression.
          </p>
        </div>
        {/* <button className="text-bgPrimary bg-textCol hover:text-textCol hover:bg-bgPrimary text-base px-8 rounded-sm py-2 border-4 font-medium border-transparent hover:border-textCol duration-300">Learn More</button> */}
      </div>
      <div className="lg:w-[1900px] mx-auto mt-10 md:my-0">
        <img src={Ourbomb} alt="Bomb Image" />
      </div>
    </section>
  );
};

export default OurBomb;
