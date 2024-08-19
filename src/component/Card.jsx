import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Card = ({ handleChange }) => {

  const scores = [1, 2, 3, 4, 5]



  return (
    <>
      <section className="card">
        <div className="card-container bg-pure-white w-327 h-360 rounded-[15px] px-6 pt-6 pb-8 lg:w-412 lg:min-h-416 lg:pr-[39px]">
          
          <div className="star-container w-10 h-10 flex justify-center items-center mb-4 rounded-full bg-dark-blue lg:w-12 lg:h-12 lg:mb-46">
            <img className="star w-[13px] h-[13px] lg:w-4 lg:h-4" src="./images/icon-star.svg" alt="start" loading="lazy" decoding="async"/>
          </div>

          <h1 className="text-pure-white text-2xl leading-37 font-bold mb-2.5 lg:text-28 lg:leading-35 lg:mb-[15px]">
            How did we do?
          </h1>

          <p className="text-light-grey text-sm leading-22 mb-6 lg:text-15 lg:leading-24">
            Please let us know how we did with your support request. All feedback is appreciated 
            to help us improve our offering!
          </p>

          <div className="score-container flex justify-between mb-6 lg:mb-8">
            
            {
              scores.map((score) => (
              <label key={score} className="flex items-center">
                <input type="radio" name="button-group" value={score} onChange={handleChange} className="hidden peer"/>  
                <span className="text-sm text-light-grey bg-dark-blue w-42 h-42 rounded-full flex items-center justify-center leading-24 tracking-[0.17px] cursor-pointer peer-checked:bg-pure-white peer-checked:text-dark-blue hover:bg-orange hover:text-dark-blue focus:bg-orange focus:text-dark-blue lg:w-[51px] lg:h-[51px] lg:text-base lg:tracking-[0.2px]" tabIndex={0}>
                  {score}
                </span>
              </label>
            ))}

          </div>

          <Link to={'/interactiveRating/thanks'}>
            <button className="text-sm text-very-dark-blue leading-18 bg-orange w-full min-h-49 rounded-full uppercase tracking-1.87 lg:h-[45px]">
              Submit
            </button>
          </Link> 
        </div>
      </section>
    </>
  )
}

Card.propTypes = {
  handleChange: PropTypes.func.isRequired,
};

export default Card