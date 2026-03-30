import Link from "next/link"

const projects = [
    {
        title: "Plataforma de Estudio ReactJs",
        description: "App educativa con chat en tiempo real y colaboración entre estudiantes.",
        href: "/projects/reactjs",
        icon: "⚛️"
    },
    {
        title: "E-commerce",
        description: "Plataforma de servicios digitales con pagos integrados y panel administrativo.",
        href: "/projects/ecommerce",
        icon: "🛒"
    },
    {
        title: "Plataforma de Estudio Laravel",
        description: "Sistema educativo con roles, chat y monetización mediante Mercado Pago.",
        href: "/projects/laravel",
        icon: "📚"
    }
]

export default function Projects() {
    return(
        <div className="min-h-screen flex flex-col items-center px-6 py-20">
            
            
            <h1 className="text-4xl md:text-6xl mb-16 font-bold text-center">
                Mis Proyectos
            </h1>

            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl w-full">
                
                {projects.map((project, index) => (
                    <Link 
                        key={index}
                        href={project.href}
                        className="group bg-zinc-900 border border-zinc-800 rounded-2xl p-6 hover:border-blue-500 transition-all duration-300 hover:scale-105 hover:shadow-xl"
                    >
                        <div className="flex flex-col h-full">
                            
                            
                            <div className="text-4xl mb-4">
                                {project.icon}
                            </div>

                            
                            <h2 className="text-xl md:text-2xl font-bold mb-3 group-hover:text-blue-400 transition">
                                {project.title}
                            </h2>

                           
                            <p className="text-gray-400 grow">
                                {project.description}
                            </p>

                            
                            <span className="mt-6 text-sm text-blue-400 group-hover:underline">
                                Ver proyecto →
                            </span>

                        </div>
                    </Link>
                ))}

            </div>
        </div>
    )
}