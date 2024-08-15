const Thanks = () => {
  return (
    <>
      <section className="card">
        <div className="card-container bg-pure-white w-327 min-h-360 rounded-[15px] px-6 pt-6 pb-8 flex flex-col justify-start items-center">
          
          <div className="star-container w-144 h-96 flex justify-center items-center mt-2.5 mb-6">
            <img className="star w-full" src="./images/illustration-thank-you.svg" alt="start" loading="lazy" decoding="async"/>
          </div>

          <p className="w-168 min-h-8 flex justify-center items-center bg-dark-blue rounded-full mb-6">
            <span className="text-orange text-sm leading-22">
              You selected 4 out of 5
            </span>
          </p>

          <h1 className="text-pure-white text-2xl leading-37 font-bold mb-2.5">
            Thank you!
          </h1>

          <p className="text-light-grey text-sm leading-22 flex text-center">
              Please let us know how we did with your support request. All feedback is appreciated 
              to help us improve our offering!
          </p>

        </div>
      </section>    
    </>
  )
}

export default Thanks