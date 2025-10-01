function HomeContent() {
  return (
    <div className="p-5 mt-10">
      <h1 className="text-3xl mb-10">Productos similares a los visitados</h1>
      <div className="flex flex-row gap-10">
        <div className="bg-neutral-700 h-110 w-80 rounded-lg"></div>
        <div className="bg-neutral-700 h-110 w-80 rounded-lg"></div>
        <div className="bg-neutral-700 h-110 w-80 rounded-lg"></div>
        <div className="bg-neutral-700 h-110 w-80 rounded-lg"></div>
      </div>
    </div>
  );
}

export default HomeContent;
