import { enviarMail } from "../../helpers/queries"

enviarMail()

const Contact = () => {
  return (
    <div className="w-full lg:w-2/3 flex flex-col justify-center items-center px-3">
      <h3 className="text-5xl lg:text-6xl text-purple-600 mb-3 dark:text-white">Contactame</h3>

      <form className="w-full flex flex-col gap-3">
        <div className="md:flex md:gap-4">
          <div className="flex flex-col w-full">
            <label htmlFor="nombre" className="mb-1 font-semibold dark:text-white">Nombre</label>
            <input type="text" name="nombre" id="nombre" placeholder="Tu nombre" className="border border-purple-400 rounded-lg p-2 shadow-sm shadow-purple-400"/>
          </div>

          <div className="flex flex-col w-full">
            <label htmlFor="remitente" className="mb-1 font-semibold dark:text-white">Correo</label>
            <input type="text" name="remitente" id="remitente" placeholder="correo@ejemplo.com" className="border border-purple-400 rounded-lg p-2 shadow-sm shadow-purple-400"/>
          </div>
        </div>
        

        <div className="flex flex-col w-full">
          <label htmlFor="asunto" className="mb-1 font-semibold dark:text-white">Asunto</label>
          <input type="text" name="asunto" id="asunto" placeholder="Entrevista para puesto de desarrollador web" className="border border-purple-400 rounded-lg p-2 shadow-sm shadow-purple-400"/>
        </div>

        <div className="flex flex-col w-full">
          <label htmlFor="mensaje" className="mb-1 font-semibold dark:text-white">Mensaje</label>
          <textarea rows={3} minLength={2} maxLength={500} name="mensaje" id="mensaje" placeholder="Una entrevista el dia..." className="border border-purple-400 rounded-lg p-2 shadow-sm shadow-purple-400"/>
        </div>

        <div className="w-full flex justify-end">
          <button className="bg-black text-white font-bold py-2 px-4 rounded border transition-all duration-300 hover:bg-white hover:text-black hover:border-purple-600">Enviar</button>
        </div>
      </form>
    </div>
  )
}

export default Contact