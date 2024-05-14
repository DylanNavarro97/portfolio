const Skills = () => {
    const skills = [
        { nombre: "HTML", urlImage: "https://cdn-icons-png.flaticon.com/512/174/174854.png" },
        { nombre: "CSS", urlImage: "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/css-icon.png" },
        { nombre: "SASS", urlImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Sass_Logo_Color.svg/2560px-Sass_Logo_Color.svg.png" },
        { nombre: "Styled Components", urlImage: "https://miro.medium.com/v2/resize:fit:1358/1*Iohnw2aOQ5EBghVoqKA7VA.png" },
        { nombre: "Bootstrap", urlImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/2560px-Bootstrap_logo.svg.png" },
        { nombre: "TailwindCSS", urlImage: "https://static-00.iconduck.com/assets.00/tailwind-css-icon-512x307-1v56l8ed.png" },
        { nombre: "JavaScript", urlImage: "https://cdn.icon-icons.com/icons2/2415/PNG/512/javascript_original_logo_icon_146455.png" },
        { nombre: "TypeScript", urlImage: "https://cdn-icons-png.flaticon.com/512/5968/5968381.png" },
        { nombre: "ReactJs", urlImage: "https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png" },
        { nombre: "Angular", urlImage: "https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/21_Angular_logo_logos-512.png" },
        { nombre: "Redux Toolkit", urlImage: "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/redux-icon.png" },
        {nombre: "C", urlImage: "https://upload.wikimedia.org/wikipedia/commons/1/19/C_Logo.png"},
        { nombre: "Java", urlImage: "https://cdn-icons-png.flaticon.com/512/226/226777.png" },
        { nombre: "NodeJs", urlImage: "https://static-00.iconduck.com/assets.00/node-js-icon-1817x2048-g8tzf91e.png" },
        { nombre: "MySQL", urlImage: "https://cdn.icon-icons.com/icons2/2415/PNG/512/mysql_original_wordmark_logo_icon_146417.png" },
        { nombre: "MongoDB", urlImage: "https://cdn.icon-icons.com/icons2/2415/PNG/512/mongodb_original_wordmark_logo_icon_146425.png" },
        { nombre: "Express", urlImage: "https://www.orafox.com/wp-content/uploads/2019/01/expressjs.png" },
        { nombre: "Git", urlImage: "https://cdn.iconscout.com/icon/free/png-256/free-git-17-1175218.png" },
        { nombre: "Github", urlImage: "https://cdn.icon-icons.com/icons2/1476/PNG/512/github_101792.png" },
        { nombre: "Netlify", urlImage: "https://static-00.iconduck.com/assets.00/netlify-icon-511x512-idkvcd89.png" },
        { nombre: "Vercel", urlImage: "https://miro.medium.com/v2/resize:fit:723/1*fz3mMf1sZ_JMy-x44E1uLg.png" },
        { nombre: "Github Pages", urlImage: "https://cdn.icon-icons.com/icons2/1476/PNG/512/github_101792.png" }
    ];
    

  return (
    <article className="w-full flex flex-col items-center my-3 px-3 lg:px-8">
      <h2 className="text-5xl lg:text-6xl text-purple-600 mb-3 dark:text-white">
        Mis skills
      </h2>

      <div className="">
        <div className="w-full flex flex-col justify-center items-center border rounded-lg p-3 border-purple-400 transition-all duration-500 shadow-sm shadow-purple-400 hover:shadow-purple-400 hover:shadow-md">
          <div className="mt-2 flex flex-wrap justify-center gap-2">
            {skills.map((skill, i) => (
                <div className="gap-2 p-2 flex items-center border border-sky-400 shadow-sm shadow-sky-400 rounded-lg">
                    <img src={skill.urlImage} alt={`${skill.nombre} logo`} className="h-8 mx-2"/>
                    <p className="dark:text-white">{skill.nombre}</p>
                </div>
                
            ))}
          </div>
        </div>
      </div>
    </article>
  );
};

export default Skills;
