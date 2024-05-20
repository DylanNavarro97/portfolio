const mailerURL = import.meta.env.VITE_API_MAILER

export const enviarMail = async (mail) => {
    try {
        const response = await fetch(mailerURL, {
            method: 'POST',
            headers: {
                'Content-Type': 'Application/json'
            }, 
            body: JSON.stringify(mail)
        })
        return response
    } catch (error) {
        console.log(error)
    }
}