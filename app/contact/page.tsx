import Link from "next/link"

export default function Contact() {
    return(
        <div className="min-h-screen px-6 py-20 flex flex-col items-center">


            <div className="text-center max-w-2xl mb-16">
                <h1 className="text-4xl md:text-6xl font-bold mb-6">
                    Contacto
                </h1>
                <p className="text-gray-400 text-lg">
                    Estoy disponible para trabajar inmediatamente.  
                    Si estás buscando un desarrollador full-stack que construya soluciones reales,
                    hablemos.
                </p>
            </div>


            <div className="grid md:grid-cols-2 gap-8 w-full max-w-4xl">


                <Link 
                    href="mailto:claudioparedesarbelo@gmail.com"
                    className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 hover:border-blue-500 hover:scale-105 transition-all duration-300"
                >
                    <h2 className="text-2xl font-bold mb-2">📧 Email</h2>
                    <p className="text-gray-400 break-all">
                        claudioparedesarbelo@gmail.com
                    </p>
                    <span className="text-blue-400 text-sm mt-4 inline-block">
                        Enviar email →
                    </span>
                </Link>

                
                <Link 
                    href="https://wa.me/5493413181379"
                    target="_blank"
                    className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 hover:border-green-500 hover:scale-105 transition-all duration-300"
                >
                    <h2 className="text-2xl font-bold mb-2">📱 WhatsApp</h2>
                    <p className="text-gray-400">
                        +54 9 341 318 1379
                    </p>
                    <span className="text-green-400 text-sm mt-4 inline-block">
                        Escribirme →
                    </span>
                </Link>

                
                <Link 
                    href="https://www.linkedin.com/in/claudioparedesarbelo/"
                    target="_blank"
                    className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 hover:border-blue-400 hover:scale-105 transition-all duration-300"
                >
                    <h2 className="text-2xl font-bold mb-2">💼 LinkedIn</h2>
                    <p className="text-gray-400">
                        Ver perfil profesional
                    </p>
                    <span className="text-blue-400 text-sm mt-4 inline-block">
                        Ir a LinkedIn →
                    </span>
                </Link>

                
                <Link 
                    href="https://github.com/ClaudioParedesArbeloDev"
                    target="_blank"
                    className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 hover:border-purple-500 hover:scale-105 transition-all duration-300"
                >
                    <h2 className="text-2xl font-bold mb-2">💻 GitHub</h2>
                    <p className="text-gray-400">
                        Ver mis proyectos
                    </p>
                    <span className="text-purple-400 text-sm mt-4 inline-block">
                        Ir a GitHub →
                    </span>
                </Link>

            </div>

            
            <div className="mt-20 text-center max-w-2xl">
                <h2 className="text-3xl font-bold mb-4">
                    ¿Trabajamos juntos?
                </h2>
                <p className="text-gray-400 mb-6">
                    Estoy abierto a oportunidades laborales y proyectos freelance.
                    Puedo integrarme rápidamente a equipos y aportar soluciones desde el primer día.
                </p>

                <Link 
                    href="https://wa.me/5493413181379"
                    target="_blank"
                    className="bg-green-500 hover:bg-green-600 text-black font-bold px-8 py-4 rounded-2xl transition"
                >
                    Contactar ahora
                </Link>
            </div>

            
            <div className="mt-16 text-gray-500 text-sm text-center">
                <p>Rosario, Argentina</p>
                <p>© 2026 Claudio Paredes Arbelo</p>
            </div>

        </div>
    )
}