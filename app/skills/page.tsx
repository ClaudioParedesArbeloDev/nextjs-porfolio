export default function Skills() {
    return(
        <div className="min-h-screen px-6 py-20 max-w-6xl mx-auto">

            <div className="text-center mb-16">
                <h1 className="text-4xl md:text-6xl font-bold mb-6">
                    Skills & Tecnologías
                </h1>
                <p className="text-gray-400 max-w-2xl mx-auto">
                    Experiencia desarrollando aplicaciones full-stack, integrando APIs, sistemas en tiempo real y soluciones escalables en producción.
                </p>
            </div>


            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">


                <div className="bg-zinc-900 p-6 rounded-2xl border border-zinc-800">
                    <h2 className="text-2xl font-bold mb-4">⚙️ Backend</h2>
                    <ul className="text-gray-400 space-y-2">
                        <li>PHP / Laravel</li>
                        <li>Node.js / Express</li>
                        <li>Java / Spring Boot</li>
                        <li>Python</li>
                        <li>APIs REST (CRUD, validaciones)</li>
                        <li>Autenticación (JWT, sesiones, Auth0)</li>
                        <li>Roles y permisos (RBAC)</li>
                        <li>Webhooks y eventos</li>
                        <li>Colas y procesos en background</li>
                    </ul>
                </div>


                <div className="bg-zinc-900 p-6 rounded-2xl border border-zinc-800">
                    <h2 className="text-2xl font-bold mb-4">🎨 Frontend</h2>
                    <ul className="text-gray-400 space-y-2">
                        <li>JavaScript / TypeScript</li>
                        <li>React.js / Next.js</li>
                        <li>Angular</li>
                        <li>Tailwind CSS / SASS</li>
                        <li>UI responsive</li>
                        <li>Optimización de performance</li>
                    </ul>
                </div>


                <div className="bg-zinc-900 p-6 rounded-2xl border border-zinc-800">
                    <h2 className="text-2xl font-bold mb-4">🗄️ Base de Datos</h2>
                    <ul className="text-gray-400 space-y-2">
                        <li>MySQL</li>
                        <li>MongoDB</li>
                        <li>Diseño de relaciones complejas</li>
                        <li>Consultas optimizadas</li>
                        <li>Migraciones y seeds</li>
                    </ul>
                </div>


                <div className="bg-zinc-900 p-6 rounded-2xl border border-zinc-800">
                    <h2 className="text-2xl font-bold mb-4">⚡ Tiempo Real</h2>
                    <ul className="text-gray-400 space-y-2">
                        <li>WebSockets</li>
                        <li>Socket.io</li>
                        <li>Chats en tiempo real</li>
                        <li>Eventos y notificaciones</li>
                    </ul>
                </div>


                <div className="bg-zinc-900 p-6 rounded-2xl border border-zinc-800">
                    <h2 className="text-2xl font-bold mb-4">☁️ DevOps</h2>
                    <ul className="text-gray-400 space-y-2">
                        <li>Linux (servidores)</li>
                        <li>Nginx</li>
                        <li>Deploy en producción</li>
                        <li>Configuración de dominios y SSL</li>
                    </ul>
                </div>


                <div className="bg-zinc-900 p-6 rounded-2xl border border-zinc-800">
                    <h2 className="text-2xl font-bold mb-4">💳 Integraciones</h2>
                    <ul className="text-gray-400 space-y-2">
                        <li>Mercado Pago</li>
                        <li>APIs externas</li>
                        <li>Manejo de errores y estados de transacción</li>
                    </ul>
                </div>

            </div>


            <div className="mt-20 text-center max-w-3xl mx-auto">
                <h2 className="text-3xl font-bold mb-6">
                    Perfil Profesional
                </h2>
                <p className="text-gray-400">
                    Desarrollo aplicaciones completas de forma independiente, abarcando desde la arquitectura backend
                    hasta la implementación frontend y despliegue en producción. Tengo experiencia integrando servicios externos,
                    manejando lógica de negocio compleja y construyendo sistemas escalables.
                </p>
            </div>

        </div>
    )
}