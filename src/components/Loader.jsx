

export const Loader = () => {
    return (
        <section className="flex items-center justify-center min-h-screen bg-white">
            <div className="relative">  
                <div className="absolute inset-0 flex items-center justify-center text-black animate-pulse">
                    Cargando...
                </div>
            </div>
        </section>
    )
}

export default Loader;
