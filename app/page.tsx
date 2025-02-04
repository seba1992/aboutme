import Link from "next/link";

import imgEngranajes from "../public/images/engranajes_1.png"
import imgCactusBoyTinkercad from "../public/images/cactusboy_tinkercad_screenshot.png"

import Article from "./Article"

export default function Home() {
  return (
    <div className="bg-gray-900 flex justify-center items-center bg-gray-200 w-full min-h-screen flex-col">
      <div className="max-w-md text-left w-full">
        <h1 className="text-white text-xl mt-5 mb-5"><b>{"<"}IndieSev{"/>"}</b>  About me</h1>
      </div>
      <main className="items-center sm:items-start max-w-md space-y-4">    
       <Article 
          date = "26 de enero de 2025" 
          title="aijs.io + p5.js" 
          description = {
            <p>En ratos de ocio, <b>suelo utilizar</b> p5.js ya sea desde su propio editor o desde openProcessing, sin embargo, mientras realizaba un framework para realizar animaciones de forma práctica e intuitiva en python, en el que me terminé topando con una sintaxis similar a la usada por p5play.js, y volver a p5play, me términe topando con aijs, que no es otra cosa más que un editor cuasi IDE con un chat ai integrado. Les dejo una mini muestra de una animación que realicé a modo de prueba... <b>Continuará</b></p>}
          image = {imgEngranajes}
        />
      <Article
          date = "04 de febrero de 2025"
          title="CactusBoy - Tinkercad connectors!"
          description={
            <p>
              Diseñando un modelo propio con tinkercad, y agregándole conectores para las ruedas y para el arrastre del cartel. Nada mal para un prototipado rapido!
              <Link href="https://www.tinkercad.com/things/9jYp6U591gZ-cactus-boy" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline ml-2">Ver en Tinkercad</Link>
             </p>
          }
          image={imgCactusBoyTinkercad}
        />
      </main>
    </div>
  );
}
