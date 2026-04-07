import Headings from './theme/Headings';
import Container from './Container';
import { features, pricing } from '../constants';
import { icoCheck } from '../assets';
import Button from './Button';

const Pricing = () => {
  return (
    <div id='pricing'>
        <Headings title={"Foxart"} subtitle={"Pricing"}/>
      <Container className="py-5 lg:py-10  items-center justify-center ">
          <p className=' body-1 text-n-3 text-center max-w-2xl mx-auto'>
              Choose the plan that fits your needs. No hidden fees, no surprises. Just straightforward pricing for everyone.
            </p>
          <div className=' grid grid-cols-1 gap-10 lg:grid-cols-3 max-w-6xl w-full mx-auto text-center  lg:gap-10 lg:mb-16 mt-10 '>
            {pricing.map((price) => (
              <div key={price.id} className={`${price.featured ? "" : " lg:mt-14"}   max-w-96 lg:w-80 sm:w-96 mx-auto`}>
                <div className={`${price.featured ? " bg-gradient-to-tl from-p-3 to-p-4 p-6 " : " bg-n-8"} rounded-xl lg:rounded-2xl p-6 lg:p-12 space-y-5 text-center lg:text-left`}>
                  <h3 className=' text-caption-1 text-n-3 uppercase'>{price.plan}</h3>
                  <div className=' body-1 text-n-3'>
                    <span className=' '>€</span>
                    <span className=' h2'>{price.amount}</span>
                  </div>
                  <hr className={` border-n-6 mt-7 mb-4 lg:mt-16 md:mb-8 ${price.featured ? "border-n-6" : " border-stroke-1"}`} />
                  <div className=' space-y-4 pb-8 justify-start '>
                    {price.features.map((feature, index) => (
                      <div key={index} className=' w-full flex items-center lg:justify-start sm:justify-start md:justify-center gap-3'>
                        <img className={` ${price.featured ? " color-blue-950" : "border-n-6"}`} src={icoCheck} alt="Icon Check" width={24} height={24} />
                        <div className='body-2 ' >{feature}</div>
                        <div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className=' items-center justify-center lg:justify-start flex'>
                    <Button theme={price.featured ? "secondary" : "primary"}>
                      {price.amount > 0 ? "Buy this Plan" : "Get started for Free" }
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
    </div>
  ) 
}



export default Pricing;
