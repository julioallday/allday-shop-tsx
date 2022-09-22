

export default function Carrossel() {
  return (
    <div id="default-carousel" className="relative" data-carousel="slide    ">
    {/* Carousel wrapper */}
    <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
      {/* Item 1 */}

      <div
        className="duration-700 ease-in-out absolute inset-0 transition-all transform translate-x-0 z-20"
        data-carousel-item="0"
      >
        <span className="absolute text-2xl font-semibold text-white -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 sm:text-3xl dark:text-gray-800">
          <span style={{ verticalAlign: "inherit" }}>
            <span style={{ verticalAlign: "inherit" }}>Primeiro slide</span>
          </span>
        </span>
        <img
          src="https://cdn.pixabay.com/photo/2017/05/23/22/36/vegetables-2338824__340.jpg"
          className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
          alt="..."
        />
      </div>
      {/* Item 2 */}
      <div
        className="duration-700 ease-in-out absolute inset-0 transition-all transform translate-x-full z-10"
        data-carousel-item="1"
      >
        <img
          src="https://cdn.pixabay.com/photo/2017/12/29/16/34/fruit-3048001__340.jpg"
          className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
          alt="..." 
        />
      </div>
      {/* Item 3 */}
      <div
        className="duration-700 ease-in-out absolute inset-0 transition-all transform -translate-x-full z-10"
        data-carousel-item="2"
      >
        <img
          src="https://cdn.pixabay.com/photo/2020/04/22/17/24/strawberry-5079237__340.jpg"
          className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
          alt="..."
        />
      </div>
    </div>
    {/* Slider indicators */}
    <div className="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2">
      <button
        type="button"
        className="w-3 h-3 rounded-full bg-white dark:bg-gray-800"
        aria-current="true"
        aria-label="Slide 1"
        data-carousel-slide-to={0}
      />
      <button
        type="button"
        className="w-3 h-3 rounded-full bg-white/50 dark:bg-gray-800/50 hover:bg-white dark:hover:bg-gray-800"
        aria-current="false"
        aria-label="Slide 2"
        data-carousel-slide-to={1}
      />
      <button
        type="button"
        className="w-3 h-3 rounded-full bg-white/50 dark:bg-gray-800/50 hover:bg-white dark:hover:bg-gray-800"
        aria-current="false"
        aria-label="Slide 3"
        data-carousel-slide-to={2}
      />
    </div>
    {/* Slider controls */}
    <button
      type="button"
      className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
      data-carousel-prev=""
    >
      <span className="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
        <svg
          aria-hidden="true"
          className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
        <span className="sr-only">
          <span style={{ verticalAlign: "inherit" }}>
            <span style={{ verticalAlign: "inherit" }}>Anterior</span>
          </span>
        </span>
      </span>
    </button>
    <button
      type="button"
      className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
      data-carousel-next=""
    >
      <span className="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
        <svg
          aria-hidden="true"
          className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
        <span className="sr-only">
          <span style={{ verticalAlign: "inherit" }}>
            <span style={{ verticalAlign: "inherit" }}>Próximo</span>
          </span>
        </span>
      </span>
    </button>
  </div>
  
  )
}