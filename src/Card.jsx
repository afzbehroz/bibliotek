function Card({ imgSrc, imgAlt, href }) {
    return (
      <div className="p-3 m-5 border border-solid border-gray-300 rounded-lg shadow-md text-center max-w-xs w-64">
        <a href={href}>
          <div className="flex justify-center items-center ">
            <img className="w-40 rounded-3xl" src={imgSrc} alt={imgAlt} />
          </div>
        </a>
        <h2 className="p-3 text-lg">Happy</h2>
        <p className="pb-3 text-sm ">The curious dog</p>
      </div>
    );
  }
  
  export default Card;
  