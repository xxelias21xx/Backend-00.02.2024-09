import dotenv from 'dotenv'
import { GoogleGenerativeAI } from "@google/generative-ai"

dotenv.config()

const genAI = new GoogleGenerativeAI(process.env.BERT_API);
const model = genAI.getGenerativeModel({ 
    model: "gemini-1.5-flash",
    systemInstruction: "You are a Spanish shop assistant in the industry of care products for pets. You only talk Spanish."
});

const chat = model.startChat({
    history: [
        {
        role: "user",
        parts: [{ text: "Hola" }],
        },
        {
        role: "model",
        parts: [{ text: "Un gusto ¿Con que puedo ayudarte?" }],
        },
        {
        role: "user",
        parts: [{ text: "Tengo 2 perros de raza snauzer, que shampoo puedo comprar?" }],
        },
        { 
        role: "model",
        parts: [{ text: `¡Perfecto!  Para Schnauzers, lo ideal es un champú suave que no reseque su piel.  ¿Tienen la piel sensible o alguna alergia conocida?  Tenemos varias opciones:
                        * **Champú para cachorros:** Si son cachorros, este es ideal, ya que es muy suave.
                        * **Champú hipoalergénico:** Si tienen la piel sensible o alergias, esta es la mejor opción.  Evita irritaciones.
                        * **Champú para pelo corto:**  Los Schnauzers tienen un pelo un poco áspero, así que este champú ayudará a mantenerlo limpio y brillante sin dañarlo.

                        ¿Podría darme un poco más de información sobre sus perros para recomendarle el mejor champú?  ¿Qué edad tienen? ¿Suelen tener problemas de piel?` }],
        },
        {
        role: "user",
        parts: [{ text: "Preferiria un champú para pelo corto" }],
        },
        { 
        role: "model",
        parts: [{ text: `Excelente elección. Tenemos dos champús para pelo corto: uno con avena coloidal, que es muy hidratante y suavizante, ideal si notas su pelo un poco áspero; y otro con aloe vera, que 
                        es refrescante y ayuda a calmar posibles irritaciones.  ¿Cuál de las dos opciones le parece mejor? O ¿prefiere ver ambos y compararlos?` }],
        },
    ],
  });

let result = await chat.sendMessage("¿Cuantos perros tengo?");
console.log(result.response.text());