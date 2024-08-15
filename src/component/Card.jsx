const Card = () => {
  return (
    <>
      <section className="card">
        <div className="card-container bg-pure-white w-327 min-h-360 rounded-[15px] px-6 pt-6 pb-8">
          
          <div className="star-container w-10 h-10 flex justify-center items-center mb-4 rounded-full bg-dark-blue">
            <img className="star w-[13px] h-[13px]" src="./images/icon-star.svg" alt="start" loading="lazy" decoding="async"/>
          </div>

          <h1 className="text-pure-white text-2xl leading-37 font-bold mb-2.5">
            How did we do?
          </h1>

          <p className="text-pure-white text-sm leading-22 w-full">
            Please let us know how we did with your support request. All feedback is appreciated 
            to help us improve our offering!
          </p>

          <div className="score-container">
            
          </div>

        </div>
      </section>
    </>
  )
}

export default Card