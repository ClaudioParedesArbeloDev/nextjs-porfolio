export default function ReactJs() {
    return(
        <div>
            <section className="bg-linear-to-br text-white py-24">
                <div className="max-w-6xl mx-auto px-6 text-center">
                    <h1 className="text-5xl md:text-6xl font-bold mb-6">
                        Plataforma de Estudio (ReactJs)
                    </h1>
                    <p className="text-xl md:text-2xl text-blue-100 mb-10 max-w-3xl mx-auto">
                        La plataforma educativa donde
                        <span className="font-semibold"> aprendes</span> y 
                        <span className="font-semibold"> colaboras</span> en tiempo real.
                    </p>
                    
                </div>
            </section>

  
            <section className="py-20 text-white">
                <div className="max-w-5xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold mb-4">
                            ¿Qué es Plataforma de Estudio?
                        </h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            Una plataforma educativa full-stack diseñada para facilitar el aprendizaje interactivo 
                            y la colaboración entre estudiantes.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-10">
                        <div className="text-center">
                            <div className="w-16 h-16  rounded-2xl flex items-center justify-center mx-auto mb-6 text-3xl">
                                📚
                            </div>
                            <h3 className="text-2xl font-semibold mb-3">Contenido Educativo</h3>
                            <p className="text-gray-600">Accede a cursos y material de estudio organizado por categorías.</p>
                        </div>
        
                        <div className="text-center">
                            <div className="w-16 h-16 bg-green-100 text-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6 text-3xl">
                                💬
                            </div>
                            <h3 className="text-2xl font-semibold mb-3">Chat en Tiempo Real</h3>
                            <p className="text-gray-600">Comunícate instantáneamente con otros estudiantes y resuelve dudas juntos.</p>
                        </div>
        
                        <div className="text-center">
                            <div className="w-16 h-16 bg-purple-100 text-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 text-3xl">
                                👥
                            </div>
                            <h3 className="text-2xl font-semibold mb-3">Colaboración</h3>
                            <p className="text-gray-600">Trabaja en grupo, comparte conocimiento y aprende de forma dinámica.</p>
                        </div>
                    </div>
                </div>
            </section>

  
            <section className="py-20 bg">
                <div className="max-w-5xl mx-auto px-6">
                    <h2 className="text-3xl font-bold text-center mb-12">Tecnologías que usamos</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                        <div className="bg-white p-6 rounded-2xl shadow-sm">
                            <p className="font-semibold text-zinc-500 text-lg">React.js</p>
                            <p className="text-sm text-gray-500">Frontend</p>
                        </div>
                        <div className="bg-white p-6 rounded-2xl shadow-sm">
                            <p className="font-semibold text-lg text-zinc-500">Express.js</p>
                            <p className="text-sm text-gray-500">Backend</p>
                        </div>
                        <div className="bg-white p-6 rounded-2xl shadow-sm">
                            <p className="font-semibold text-lg text-zinc-500">MongoDB</p>
                            <p className="text-sm text-gray-500">Base de datos</p>
                        </div>
                        <div className="bg-white p-6 rounded-2xl shadow-sm">
                            <p className="font-semibold text-lg text-zinc-500">WebSockets</p>
                            <p className="text-sm text-gray-500">Chat en tiempo real</p>
                        </div>
                    </div>
                </div>
            </section>

  
            <section className="py-20 bg-linear-to-br  text-white text-center">
                <div className="max-w-3xl mx-auto px-6">
                    <h2 className="text-4xl font-bold mb-6">¿Listo para empezar a aprender?</h2>
                    <p className="text-xl text-blue-100 mb-10">
                        Únete a una comunidad de estudiantes que aprenden juntos en tiempo real.
                    </p>
                    
                </div>
            </section>

            <footer className="bg-gray-900 text-gray-400 py-12">
                <div className="max-w-6xl mx-auto px-6 text-center">
                    <p>© 2026 Study Platform - Desarrollado por Claudio Paredes Arbelo</p>
                </div>
            </footer>
        </div>

    )
}