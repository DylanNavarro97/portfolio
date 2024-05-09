import profilePicture from "../../assets/inicio/personalPic.png";
import CV from "../../pdf/Dylan-Navarro.pdf";

const Principal = () => {
  return (
    <section className="flex flex-wrap lg:w-full justify-center">
      <div className="flex flex-wrap lg:w-5/6 xl:w-2/3 justify-center">
        <div className="lg:w-1/2">
          <div className="flex justify-center">
            <img
              src={profilePicture}
              alt="Dylan Navarro img"
              className="w-2/3 md:w-4/12 lg:w-5/6"
            />
          </div>
        </div>

        <div className="mt-6 lg:mt-0 lg:w-1/2 flex items-center justify-center">
          <div className="flex flex-col text-center">
            <h2 className="text-5xl lg:text-6xl text-purple-600 mb-3 dark:text-white">Dylan Navarro</h2>
            <p className="text-2xl  lg:text-3xl font-semibold mb-5 dark:text-white">Desarrollador web</p>
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
      </div>
    </section>
  );
};

export default Principal;
