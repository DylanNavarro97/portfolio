import { enviarMail } from "../../helpers/queries"
import { useForm } from "react-hook-form"

const Contact = () => {

  const {
    handleSubmit,
    register,
    formState: {errors},
    reset
  } = useForm()

  const contactForm = async (mail) => {
    try {
      const response = await enviarMail(mail)
      if (response.status === 200){
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Your work has been saved",
          showConfirmButton: false,
          timer: 1500
        });
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="w-full lg:w-2/3 flex flex-col justify-center items-center px-3">
      <h3 className="text-5xl lg:text-6xl text-purple-600 mb-3 dark:text-white">Contactame</h3>

      <form className="w-full flex flex-col gap-3" onSubmit={handleSubmit(contactForm)}>
        <div className="md:flex md:gap-4">
          <div className="flex flex-col w-full mb-3 md:mb-0">
            <label htmlFor="nombre" className="mb-1 font-semibold dark:text-white">Nombre</label>
            <input type="text" name="nombre" id="nombre" placeholder="Tu nombre" className="border border-purple-400 rounded-lg p-2 shadow-sm shadow-purple-400" minLength={2} maxLength={30} {...register("nombre", {
              required: true,
              minLength: {
                value: 2,
                message: "El nombre debe contener al menos 2 caracteres."
              },
              maxLength: {
                value: 30,
                message: "El nombre debe contener como máximo 30 caracteres."
              },
              pattern: {
                value: /^[a-zA-ZÁÉÍÓÚáéíóúÜü\s]+$/,
                message: "Por favor, ingresa un nombre válido."
              }
            })}/>
            <p className="text-red-600">{errors?.nombre?.message}</p>
          </div>
          

          <div className="flex flex-col w-full">
            <label htmlFor="remitente" className="mb-1 font-semibold dark:text-white">Tu correo</label>
            <input type="text" name="remitente" id="remitente" placeholder="correo@ejemplo.com" className="border border-purple-400 rounded-lg p-2 shadow-sm shadow-purple-400"
            minLength={2} maxLength={50}
            {...register("remitente", {
              required: true,
              minLength:{
                value: 2,
                message: "El mail debe contener al menos 2 caracteres."
              },
              maxLength:{
                value: 50,
                message: "El mail debe contener como máximo 50 caracteres."
              },
              pattern: {
                value:/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/,
                message: "Por favor, ingresa un mail válido"
              }
            })}
            />

            <p className="text-red-600">{errors?.remitente?.message}</p>
          </div>
        </div>
        

        <div className="flex flex-col w-full">
          <label htmlFor="asunto" className="mb-1 font-semibold dark:text-white">Asunto</label>
          <input type="text" name="asunto" id="asunto" placeholder="Entrevista para puesto de desarrollador web" className="border border-purple-400 rounded-lg p-2 shadow-sm shadow-purple-400"
          minLength={2} maxLength={50}
          {...register("asunto", {
            required: true,
            minLength: {
              value: 2,
              message: "El asunto debe contener al menos 2 caracteres."
            },
            maxLength: {
              value: 50,
              message: "El asunto debe contener como máximo 50 caracteres."
            }
          })}
          />
          <p className="text-red-600">{errors?.asunto?.message}</p>
        </div>

        <div className="flex flex-col w-full">
          <label htmlFor="mensaje" className="mb-1 font-semibold dark:text-white">Mensaje</label>
          <textarea rows={3}  name="mensaje" id="mensaje" placeholder="Una entrevista el dia..." className="border border-purple-400 rounded-lg p-2 shadow-sm shadow-purple-400"
          minLength={2} maxLength={500}
          {...register("mensaje", {
            required: true,
            minLength: {
              value: 2,
              message: "El mensaje debe contener al menos 2 caracteres."
            },
            maxLength: {
              value: 500,
              message: "El mensaje debe contener como máximo 50 caracteres."
            }
          })}
          />
          <p className="text-red-600">{errors?.mensaje?.message}</p>
        </div>

        <div className="w-full flex justify-end">
          <button type="submit" className="bg-black text-white font-bold py-2 px-4 rounded border transition-all duration-300 hover:bg-white hover:text-black hover:border-purple-600">Enviar</button>
        </div>
      </form>
    </div>
  )
}

export default Contact