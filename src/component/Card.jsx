const Card = () => {

  const scores = [1, 2, 3, 4, 5]

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

          <p className="text-pure-white text-sm leading-22 mb-6">
            Please let us know how we did with your support request. All feedback is appreciated 
            to help us improve our offering!
          </p>

          <div className="score-container flex justify-between mb-6">
            
            {
              scores.map((score) => (
              <label key={score} className="flex items-center">
                <input type="radio" name="button-group" value={1} className="hidden peer"/>  
                <span className="text-sm text-light-grey bg-dark-blue w-42 h-42 rounded-full flex items-center justify-center cursor-pointer peer-checked:bg-pure-white peer-checked:text-dark-blue hover:bg-orange hover:text-dark-blue focus:bg-orange focus:text-dark-blue " tabIndex={0}>
                  {score}
                </span>
              </label>
            ))}

          </div>
        
          <button className="text-sm text-very-dark-blue leading-18 bg-orange w-full min-h-49 rounded-full uppercase tracking-1.87">
            Submit
          </button>
        </div>
      </section>
    </>
  )
}

export default Card