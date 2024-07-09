

export const StreamPage = () => {
  return (
    <div className="flex items-center justify-center h-full pt-14">
      <div className="w-full max-w-4xl bg-white shadow-md rounded overflow-hidden">
        <div className="aspect-w-16 aspect-h-9 h-96">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ" // Reemplaza esto con la URL de tu video educativo
            title="Educational Stream"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div className="p-4">
          <h2 className="text-2xl font-bold mb-2">Clase en Vivo</h2>
          <p className="text-gray-600">Disfruta de la clase en vivo con tu profesor.</p>
        </div>
      </div>
    </div>
  );
};

export default StreamPage;
