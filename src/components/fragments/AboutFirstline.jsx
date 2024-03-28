import Button from "../Elements/Button";
import myself from "../../images/Me.webp";
export const AboutFirst = () => {
  return (
    <div className="flex flex-col-reverse h-screen lg:flex-row items-center justify-between gap-10 ">
      <div className="w-full flex flex-col lg:justify-start gap-y-8 items-center lg:items-start lg:w-1/2 text-slate-200 dark:text-slate-950">
        <h2 className="text-4xl md:text-6xl font-bold mb-4 text-center dark:text-slate-950">
          About Me
        </h2>
        <p className="text-lg leading-relaxed mb-4">
          I&apos;m an aspiring front-end developer with a keen interest in
          crafting inspiring web designs. I believe that captivating and
          user-friendly design has the potential to transform the online user
          experience. With the knowledge and skills I&apos;m developing, I
          aspire to contribute to creating innovative and impactful web
          experiences in the future.
        </p>
        <Button />
      </div>
      <div className="w-full lg:w-1/2">
        <img
          src={myself} // Replace with your image path
          alt="Picture of me"
          className="max-w-xs md:max-w-sm mx-auto"
          loading="lazy"
        />
      </div>
    </div>
  );
};
