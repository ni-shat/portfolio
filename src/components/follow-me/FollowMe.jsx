import fb from '../../assets/facebook-f.svg'
import ins from '../../assets/instagram.svg'
import li from '../../assets/linkedin-alt.svg'

const FollowMe = () => {
    return (
        <div className='absolute md:block md:left-auto md:top-auto md:bottom-4 md:right-3  top-[690px]  left-1'>
            {/* md:bottom-4 md:right-3 -bottom-64 */}

            <div className='flex md:flex-col md:gap-3 gap-1.5 md:items-center items-center relative'>
                <div className='flex flex-col md:rotate-90'>
                    <p className='text-white md:-top-3.5 md:right-0 -right-24 top-[18px] opacity-60 absolute whitespace-nowrap  md:block'>Follow me</p>
                </div>
                <div className='  bg-white w-[1px]  h-[45px] md:block md:rotate-0 rotate-90 ml-5 mr-6 hidden'></div>
                <div className='md:p-2 p-2 rounded-full border md:border flex items-center justify-center'>
                    <img className='md:w-6 md:h-6 w-5 h-5' src={fb} alt="" />
                </div>
                <div className='md:p-2 p-2 rounded-full border md:border flex items-center justify-center'>
                    <img className='md:w-5 md:h-5 w-5 h-5' src={ins} alt="" />
                </div>
                <div className='md:p-2 p-2 rounded-full border md:border flex items-center justify-center'>
                    <img className='md:w-5 md:h-5 w-5 h-5' src={li} alt="" />
                </div>
                <div className='  bg-white w-[1px] h-[45px] md:hidden rotate-90 ml-7 mt-2 mr-4 block'></div>
            </div>
        </div>
    );
};

export default FollowMe;