import profilePicture from "../../assets/inicio/personalPic.png";
import CV from "../../pdf/Dylan-Navarro.pdf";
import Github from "../svg/Github";
import Linkedin from "../svg/Linkedin";

const Principal = () => {
  return (
    <section className="flex flex-wrap">
      <div className="flex w-full justify-center py-5 inset-0 bg-purple-100 backdrop-filter backdrop-blur-lg bg-opacity-50">
        <div className="flex space-x-10"> 
          <a href="https://github.com/DylanNavarro97" target="_blank">
            <Github />
          </a>
          <a href="https://www.linkedin.com/in/dylan-navarro/" target="_blank">
            <Linkedin />
          </a>
        </div>
      </div>

      <div className="w-full md:w-1/2">
        <div>
          <img src={profilePicture} alt="Dylan Navarro img" />
        </div>
      </div>
      <div className="border border-gray-500 w-full md:w-1/2">
        <div className="flex flex-col text-center">
          <h2 className="text-6xl text-purple-600 mb-3">Dylan Navarro</h2>
          <p className="text-2xl font-semibold mb-5">Web developer</p>
          <div className="d-flex py-2">
            <div></div>
            <a
              href="mailto:dylanrubennavarro@gmail.com"
              className="bg-blue-500 transition-all duration-300 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded me-3"
            >
              Contactar
            </a>
            <a
              href={CV}
              download
              className="bg-black text-white font-bold py-2 px-4 rounded border transition-all duration-300 hover:bg-white hover:text-black hover:border-purple-600"
            >
              Descagar CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Principal;
