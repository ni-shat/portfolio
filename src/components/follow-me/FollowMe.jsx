import fb from '../../assets/facebook-f.svg'
import ins from '../../assets/instagram.svg'
import li from '../../assets/linkedin-alt.svg'

const FollowMe = () => {
    return (
        <div className='absolute bottom-4 right-3'>

            <div className='flex flex-col gap-3 items-center relative'>
                <div className='flex flex-col rotate-90'>
                    <p className='text-white -top-3.5 right-0 opacity-60 absolute whitespace-nowrap'>Follow me</p>
                </div>
                <div className='  bg-white w-[1px]  h-[45px] '></div>
                <div className='p-2 rounded-full border flex items-center justify-center'>
                    <img className='w-6 h-6' src={fb} alt="" />
                </div>
                <div className='p-2 rounded-full border flex items-center justify-center'>
                    <img className='w-5 h-5' src={ins} alt="" />
                </div>
                <div className='p-2 rounded-full border flex items-center justify-center'>
                    <img className='w-5 h-5' src={li} alt="" />
                </div>
            </div>
        </div>
    );
};

export default FollowMe;