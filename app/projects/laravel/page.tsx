export default function laravel() {
    return(
        <div>
            <section className="bg-linear-to-br text-white py-24">
                <div className="max-w-6xl mx-auto px-6 text-center">
                    <h1 className="text-5xl md:text-6xl font-bold mb-6">
                        Plataforma Educativa (Laravel)
                    </h1>
                    <p className="text-xl md:text-2xl text-blue-100 mb-10 max-w-3xl mx-auto">
                        Sistema de aprendizaje donde los usuarios 
                        <span className="font-semibold"> estudian</span>, 
                        <span className="font-semibold"> interactúan</span> y 
                        <span className="font-semibold"> acceden a cursos pagos</span>.
                    </p>
                </div>
            </section>

            <section className="py-20 text-white">
                <div className="max-w-5xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold mb-4">
                            ¿Qué es esta plataforma?
                        </h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            Plataforma educativa full-stack desarrollada con Laravel que permite gestionar cursos,
                            interacción en tiempo real y monetización mediante pagos online.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-10">
                        <div className="text-center">
                            <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 text-3xl">
                                📚
                            </div>
                            <h3 className="text-2xl font-semibold mb-3">Gestión de Cursos</h3>
                            <p className="text-gray-600">
                                Creación y administración de cursos con control de inscripción de estudiantes.
                            </p>
                        </div>
        
                        <div className="text-center">
                            <div className="w-16 h-16 bg-green-100 text-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6 text-3xl">
                                💬
                            </div>
                            <h3 className="text-2xl font-semibold mb-3">Chat en Tiempo Real</h3>
                            <p className="text-gray-600">
                                Comunicación instantánea entre usuarios mediante chats grupales y privados.
                            </p>
                        </div>
        
                        <div className="text-center">
                            <div className="w-16 h-16 bg-yellow-100 text-yellow-600 rounded-2xl flex items-center justify-center mx-auto mb-6 text-3xl">
                                💳
                            </div>
                            <h3 className="text-2xl font-semibold mb-3">Pagos con Mercado Pago</h3>
                            <p className="text-gray-600">
                                Integración de pagos online para inscripción a cursos, incluyendo manejo de estados
                                de transacción y validación desde el backend.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-20">
                <div className="max-w-5xl mx-auto px-6">
                    <h2 className="text-3xl font-bold text-center mb-12">
                        Tecnologías que utilicé
                    </h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                        <div className="bg-white p-6 rounded-2xl shadow-sm">
                            <p className="font-semibold text-zinc-500 text-lg">Laravel</p>
                            <p className="text-sm text-gray-500">Backend</p>
                        </div>
                        <div className="bg-white p-6 rounded-2xl shadow-sm">
                            <p className="font-semibold text-lg text-zinc-500">Livewire</p>
                            <p className="text-sm text-gray-500">Frontend dinámico</p>
                        </div>
                        <div className="bg-white p-6 rounded-2xl shadow-sm">
                            <p className="font-semibold text-lg text-zinc-500">MySQL</p>
                            <p className="text-sm text-gray-500">Base de datos</p>
                        </div>
                        <div className="bg-white p-6 rounded-2xl shadow-sm">
                            <p className="font-semibold text-lg text-zinc-500">Tailwind CSS</p>
                            <p className="text-sm text-gray-500">UI / Diseño</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-20 bg-linear-to-br text-white text-center">
                <div className="max-w-3xl mx-auto px-6">
                    <h2 className="text-4xl font-bold mb-6">
                        Experiencia en sistemas reales con monetización
                    </h2>
                    <p className="text-xl text-blue-100 mb-10">
                        Implementé lógica completa de inscripción a cursos pagos,
                        integrando APIs externas, validación de pagos y actualización
                        automática del acceso del usuario según el estado de la transacción.
                    </p>
                </div>
            </section>

            <footer className="bg-gray-900 text-gray-400 py-12">
                <div className="max-w-6xl mx-auto px-6 text-center">
                    <p>© 2026 Plataforma Educativa - Desarrollado por Claudio Paredes Arbelo</p>
                </div>
            </footer>
        </div>
    )
}