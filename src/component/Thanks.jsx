import PropTypes from 'prop-types';

const Thanks = ({ score }) => {
  return (
    <>
      <section className="card">
        <div className="card-container bg-pure-white w-327 h-360 rounded-[15px] px-6 pt-6 pb-8 flex flex-col justify-start items-center lg:w-412 lg:h-416 lg:py-[2.8125rem] lg:pr-10 lg:pl-8">
          
          <div className="image-container w-144 h-96 flex justify-center items-center mt-2.5 mb-6 lg:w-[162px] lg:h-[108px] lg:mt-0 lg:mb-8">
            <img className="smartphone w-full" src="./images/illustration-thank-you.svg" alt="smartphone" loading="lazy" decoding="async"/>
          </div>

          <p className="w-168 min-h-8 flex justify-center items-center bg-dark-blue rounded-full mb-6 lg:w-[12.0625rem] lg:mb-8">
            <span className="text-orange text-sm leading-22  lg:text-[0.9375rem] lg:leading-24">
              {`You selected ${score} out of 5`}
            </span>
          </p>

          <h1 className="text-pure-white text-2xl leading-37 font-bold mb-2.5 lg:text-[1.75rem] lg:mb-[0.9375rem] ">
            Thank you!
          </h1>

          <p className="text-light-grey text-sm leading-22 flex text-center lg:text-[0.9375rem] lg:leading-24">
            We appreciate you taking the time to give a rating. If you ever need more support, 
            don’t hesitate to get in touch!
          </p>

        </div>
      </section>    
    </>
  )
}

Thanks.propTypes = {
  score: PropTypes.string.isRequired,
};

export default Thanks