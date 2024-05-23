const Projects = () => {

  const projects = [
    {
      name: "Restaurante Lotus",
      description: "Aplicación para la gestión de un restaurante donde los usuarios registrados pueden realizar pedidos en línea. Los administradores tienen la capacidad de agregar, modificar y eliminar productos del menú, así como de supervisar y gestionar el estado de los pedidos en tiempo real, mejorando así la eficiencia del servicio y la experiencia del cliente.",
      github: "https://github.com/juanchyquintana/restauranteFrontend",
      deploy: "",
      stack: ["ReactJs", "Bootstrap", "React Leaflet", "NodeJs", "Express", "MongoDB"],
      img: "https://i.postimg.cc/vT4gbv63/Captura-de-pantalla-2024-05-23-133917.png"
    },
    {
      name: "Trueka",
      description: "Aplicación de intercambios entre usuarios donde estos pueden publicar artículos que desean intercambiar y recibir ofertas de otros usuarios. Esta plataforma facilita el trueque de bienes entre particulares. Actualmente, el despliegue de la aplicación no está disponible ya que se encuentra dentro de un repositorio de No Country.",
      github: "https://github.com/No-Country/s9-12-t-nest-react",
      deploy: "",
      stack: ["ReactJS", "Bootstrap", "React-Redux", "React Leaflet"],
      img: "https://camo.githubusercontent.com/98424198349e5efadc2890aa4db28c465774268b79c638889dca96c7c0f22fcf/68747470733a2f2f7265732e636c6f7564696e6172792e636f6d2f647069776d62736f672f696d6167652f75706c6f61642f76313639303530303536332f747275656b612f545255454b41484f4d453132335f71686e6431382e706e67"
    },
    {
      name: "Blog de recetas",
      description: "Blog de práctica CRUD basado en recetas culinarias. El blog contiene un solo usuario administrador con el correo admin@recetasrolling.com y la contraseña Recetas1024. Este administrador puede gestionar las recetas publicadas, proporcionando una plataforma práctica para el aprendizaje y la demostración de habilidades CRUD.",
      github: "https://github.com/DylanNavarro97/blogDeRecetasFront",
      deploy: "https://blog-de-recetas-dn.netlify.app/",
      stack: ["ReactJS", "Bootstrap", "NodeJs", "Express", "MongoDB"],
      img: "https://i.postimg.cc/J0JxcFNB/Captura-de-pantalla-2024-05-23-140738.png"
    },
    {
      name: "UpCicrle",
      description: "Plataforma que busca conectar fábricas, empresas y locales que generan residuos con diseñadores y artistas interesados en reutilizar esos materiales para crear productos únicos y sostenibles. La iniciativa promueve la economía circular y el aprovechamiento de materiales que de otro modo serían desechados. Actualmente, el despliegue de esta plataforma no está disponible ya que se encuentra dentro de un repositorio de No Country.",
      github: "https://github.com/No-Country/c11-19-m-javareact",
      deploy: "",
      stack: ["ReactJS", "Bootstrap", "Firebase", "Styled components"],
      img: "https://i.postimg.cc/3wM8Br6c/upcircle.png"
    }
  ]

  const classColors = ["bg-yellow-500", "bg-red-300", "bg-lime-400", "bg-emerald-400", "bg-red-400", "bg-violet-400"]


  return (
    <div className="w-full flex flex-col justify-center items-center px-3 lg:px-8">
      <h2 className="text-5xl lg:text-6xl text-purple-600 mb-3 dark:text-white">
        Proyectos
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 my-3">
        {projects.map((project, i) => (
          <article className="p-6 border rounded-lg border-purple-400 transition-all duration-500 shadow-sm shadow-purple-400 hover:shadow-purple-400 hover:shadow-md">
            <div className="py-2 px-8 rounded-lg bg-gradient-to-r from-purple-200 to-purple-500 dark:from-indigo-200 dark:to-sky-500 h-52">
              <img src={project.img} alt={`${project.name} img`} className="rounded-lg h-full object-cover"/>
            </div>
            <div className="mt-4">
              <div className="flex flex-wrap mb-4 gap-2">
                {project.stack.map((skill, j) => (
                <p className={`py-1 px-2 ${classColors[j]} rounded-md font-semibold`} key={j}>{skill}</p>
                ))}
                
              </div>
              <h3 className="text-xl text-purple-600 dark:text-white">{project.name}</h3>
              <p className="text-lg dark:text-white">{project.description}</p>
            </div>

            <div className="mt-4 flex justify-between">
              <a href={project.github} target="_blank" className="bg-black text-white font-bold py-2 px-4 rounded border transition-all duration-300 hover:bg-white hover:text-black hover:border-purple-600">Github</a>
              {project.deploy !== "" ? <a href={project.deploy} target="_blank" className="bg-black text-white font-bold py-2 px-4 rounded border transition-all duration-300 hover:bg-white hover:text-black hover:border-purple-600">Visit Page</a> : <></>}
              
            </div>
        </article>
        ))}

        


        
       
      </div>
    </div>
  );
};

export default Projects;
