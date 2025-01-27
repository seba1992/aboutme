import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-gray-900 flex justify-center items-center bg-gray-200 w-full min-h-screen flex-col">
      <div className="max-w-md text-left w-full">
        <h1 className="text-white text-xl mt-5 mb-5"><b>{"<"}IndieSev{"/>"}</b>  About me</h1>
      </div>
      <main className="items-center sm:items-start max-w-md">   
       <div className="rounded-lg border-3 p-4 bg-gray-100">
        <div className="text-blue-500">26 de enero de 2025</div>
        <div className="font-bold text-xl">aijs.io + p5.js</div>
        <div>En ratos de ocio, suelo utilizar p5.js ya sea desde su propio editor o desde openProcessing, sin embargo, mientras realizaba un framework para realizar animaciones de forma práctica e intuitiva en python, en el que me terminé topando con una sintaxis similar a la usada por p5play.js, y volver a p5play, me términe topando con aijs, que no es otra cosa más que un editor cuasi IDE con un chat ai integrado. Les dejo una mini muestra de una animación que realicé a modo de prueba... <b>Continuará</b></div>
        <Image
          className="dark:invert mx-auto rounded-lg m-5"
          src="/images/engranajes_1.png"
          alt="Engranajes captura aijs.io"
          width={300}
          height={200}
          priority
        />
       </div>  
      </main>
    </div>
  );
}
