import { Link } from 'react-router-dom';
import messenger from '../../assets/facebook-messenger.svg'
import wp from '../../assets/whatsapp.svg'
import mail from '../../assets/envelope-edit.svg'


const SocialMobie = () => {
    return (
        <div className='md:hidden block overflow-hidden'>
            {/* <p className='mt-8 ml-[70px]'>Connect</p> */}
            <div className='flex flex-col gap-3 items-center uppercase mt-0 mr-[160px] text-white absolute top-32 left-1'>
                <div className='flex items-center gap-1'>
                    <div className='font-extrabold text-sm block '>
                        <Link to='https://m.me/100010105270770' target="_blank">
                            <img className='w-9 h-9 rounded-full shadow-md shadow-[#B8FDE6] bg-white' src={messenger} alt="" />
                        </Link>
                    </div>
                </div>
                <div className='flex items-center gap-1'>
                    <div className='font-extrabold text-sm block '>
                        <Link to='https://m.me/100010105270770' target="_blank">
                            <img className='w-9 h-9 rounded-full shadow-md shadow-[#B8FDE6] bg-white' src={wp} alt="" />
                        </Link>
                    </div>
                </div>
                <div className='flex items-center gap-1'>
                    <div className='font-extrabold text-sm block '>
                        <Link to='https://m.me/100010105270770' target="_blank">
                            <img className='w-9 h-9 rounded-full shadow-md shadow-[#B8FDE6] bg-white' src={mail} alt="" />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SocialMobie;