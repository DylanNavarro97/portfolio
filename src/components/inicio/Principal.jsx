import profilePicture from "../../assets/inicio/personalPic.png";
import CV from "../../pdf/Dylan-Navarro.pdf";

const Principal = () => {
  return (
    <section className="flex flex-wrap">
      <div className="h-100 items-center">
        <div className="w-full md:w-1/2">
          <div className="flex justify-center">
            <img
              src={profilePicture}
              alt="Dylan Navarro img"
              className="w-2/3"
            />
          </div>
        </div>

        <div className="w-full mt-6 md:w-1/2">
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
      </div>
    </section>
  );
};

export default Principal;
