export default function GLDServices() {
    return(
        <div>
            <section className="bg-linear-to-br text-white py-24">
                <div className="max-w-6xl mx-auto px-6 text-center">
                    <h1 className="text-5xl md:text-6xl font-bold mb-6">
                        GLD Services (E-commerce)
                    </h1>
                    <p className="text-xl md:text-2xl text-blue-100 mb-10 max-w-3xl mx-auto">
                        Plataforma de servicios digitales donde los usuarios 
                        <span className="font-semibold"> compran</span> y 
                        <span className="font-semibold"> gestionan</span> servicios de forma segura y eficiente.
                    </p>
                </div>
            </section>

            
            <section className="py-20 text-white">
                <div className="max-w-5xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold mb-4">
                            ¿Qué es GLD Services?
                        </h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            Plataforma e-commerce full-stack desarrollada desde cero para la venta de productos importados,
                            con foco en escalabilidad, experiencia de usuario y procesamiento de pagos online.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-10">
                        <div className="text-center">
                            <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 text-3xl">
                                🛒
                            </div>
                            <h3 className="text-2xl font-semibold mb-3">Compra de Servicios</h3>
                            <p className="text-gray-600">
                                Sistema de compra intuitivo que permite a los usuarios adquirir servicios digitales fácilmente.
                            </p>
                        </div>
        
                        <div className="text-center">
                            <div className="w-16 h-16 bg-green-100 text-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6 text-3xl">
                                💳
                            </div>
                            <h3 className="text-2xl font-semibold mb-3">Pagos Integrados</h3>
                            <p className="text-gray-600">
                                Integración real con Mercado Pago y Zipnova, incluyendo manejo de transacciones,
                                confirmaciones de pago y lógica backend para estados de compra.
                            </p>
                        </div>
        
                        <div className="text-center">
                            <div className="w-16 h-16 bg-purple-100 text-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 text-3xl">
                                ⚙️
                            </div>
                            <h3 className="text-2xl font-semibold mb-3">Panel Administrativo</h3>
                            <p className="text-gray-600">
                                Panel completo para gestión de servicios, usuarios y operaciones del sistema.
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
                            <p className="font-semibold text-zinc-500 text-lg">ReactJs</p>
                            <p className="text-sm text-gray-500">Frontend</p>
                        </div>
                        <div className="bg-white p-6 rounded-2xl shadow-sm">
                            <p className="font-semibold text-lg text-zinc-500">ExpressJs</p>
                            <p className="text-sm text-gray-500">Backend</p>
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
                        Experiencia real en integraciones de pago
                    </h2>
                    <p className="text-xl text-blue-100 mb-10">
                        Implementé flujos completos de pago online, incluyendo comunicación con APIs externas,
                        validación de transacciones y actualización del estado de órdenes en tiempo real.
                    </p>
                </div>
            </section>

            
            <footer className="bg-gray-900 text-gray-400 py-12">
                <div className="max-w-6xl mx-auto px-6 text-center">
                    <p>© 2026 GLD Services - Desarrollado por Claudio Paredes Arbelo</p>
                </div>
            </footer>
        </div>
    )
}