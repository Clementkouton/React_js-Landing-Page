
import Container from './Container';
import { branding } from '../constants/index';

const Branding = () => {
    return (
        <Container>
            <div className='flex flex-wrap items-center justify-between lg:gap-1 max-w-5xl w-full mx-auto py-5 lg:py-10'>
                {branding.map((brand, index) => (
                    <img key={brand.id} src={brand.image} width={180} height={96} alt={brand.alt} className={`w-1/2 flex justify-center sm:w-1/4 md:w-1/4 lg: ${branding.length % 2 !== 0 && index === branding.length - 1 ? "hidden lg:flex"
                        : ""
                        }`} />
                ))}
            </div>
        </Container>
    );
};

export default Branding;
