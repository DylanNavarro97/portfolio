const Projects = () => {

  const projects = [
    {
      name: "Integración de Mercado Pago",
      description: `App web donde se integra Mercado Pago para realizar cobros utilizando la version checkout Pro. Tiene un "producto" predefinido junto con su precio, sin embargo puede realizarse modificaciones para que dependa de una seleccion de productos previa al pago.`,
      github: "https://github.com/DylanNavarro97/mp-checkout-int",
      deploy: "https://mp-checkout-int.vercel.app/",
      stack: ["NextJS", "TailwindCSS", "MP Checkout Pro"],
      img: "https://i.postimg.cc/054gCL4Z/mp-int-1.png"
    },
    {
      name: "NodeJS - Nodemailer - Google Oauth 2.0",
      description: "Este proyecto es un backend creado con Node.js y Express que permite el envío de correos electrónicos utilizando Nodemailer junto con Google OAuth 2 para la autenticación. Es ideal para aplicaciones que necesitan una funcionalidad de envío de emails segura, como formularios de contacto o notificaciones.",
      github: "https://github.com/DylanNavarro97/portfolioBack",
      deploy: "",
      stack: ["NodeJS", "Express", "Nodemailer", "Google Oauth 2.0"],
      img: "https://i.postimg.cc/cCGY5cK6/1-A8dzt-L-AUWb5-RLSx94ac0-A.png"
    },
    {
      name: "Restaurante Lotus",
      description: "Aplicación para la gestión de un restaurante donde los usuarios registrados pueden realizar pedidos en línea. Los administradores tienen la capacidad de agregar, modificar y eliminar productos del menú, así como de supervisar y gestionar el estado de los pedidos en tiempo real, mejorando así la eficiencia del servicio y la experiencia del cliente.",
      github: "https://github.com/juanchyquintana/restauranteFrontend",
      deploy: "https://lotusrestaurante.netlify.app",
      stack: ["ReactJs", "Bootstrap", "React Leaflet", "NodeJs", "Express", "MongoDB"],
      img: "https://i.postimg.cc/sDKh84pn/lotus.png"
    },
    {
      name: "Blog de recetas",
      description: "Blog de práctica CRUD basado en recetas culinarias. El blog contiene un solo usuario administrador con el correo admin@recetasrolling.com y la contraseña Recetas1024. Este administrador puede gestionar las recetas publicadas, proporcionando una plataforma práctica para el aprendizaje y la demostración de habilidades CRUD.",
      github: "https://github.com/DylanNavarro97/blogDeRecetasFront",
      deploy: "https://blog-de-recetas-dn.netlify.app/",
      stack: ["ReactJS", "Bootstrap", "NodeJs", "Express", "MongoDB"],
      img: "https://i.postimg.cc/3Jryg0P2/recetas-1.png"
    }
  ]

  const classColors = ["bg-yellow-500", "bg-red-300", "bg-lime-400", "bg-emerald-400", "bg-red-400", "bg-violet-400"]


  return (
    <div className="w-full flex flex-col justify-center items-center px-3 lg:px-8">
      <h2 className="text-4xl sm:text-5xl lg:text-6xl text-purple-600 mb-3 dark:text-white">
        Proyectos
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 my-3">
        {projects.map((project, i) => (
          <article className="p-6 border rounded-lg border-purple-400 transition-all duration-500 shadow-sm shadow-purple-400 hover:shadow-purple-400 hover:shadow-md flex flex-col" key={i}>
            <div className="py-2 px-8 rounded-lg bg-gradient-to-r from-purple-200 to-purple-500 dark:from-indigo-200 dark:to-sky-500 h-60 md:h-52">
              <img src={project.img} alt={`${project.name} img`} className="rounded-lg w-full h-full object-cover"/>
            </div>
            <div className="mt-4 flex-grow">
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
              {project.deploy !== "" ? <a href={project.deploy} target="_blank" className="bg-black text-white font-bold py-2 px-4 rounded border transition-all duration-300 hover:bg-white hover:text-black hover:border-purple-600">Ver Página</a> : <></>}             
            </div>
        </article>
        ))}

        


        
       
      </div>
    </div>
  );
};

export default Projects;
