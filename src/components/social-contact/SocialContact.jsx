import { Link } from 'react-router-dom';
import messenger from '../../assets/facebook-messenger.svg'
import wp from '../../assets/whatsapp.svg'
import mail from '../../assets/envelope-edit.svg'
import { FaDownload } from 'react-icons/fa';

const SocialContact = () => {
    return (
        <div className='absolute bottom-4 left-3'>
            <div className='flex gap-3 items-center mb-8'>
                <div className='h-fit mt-16 text-black text-sm uppercase w-fit font-extrabold  border-2 border-black px-2 py-2.5 rounded-ull flex gap-2 items-center shadow-lg shadow-[#B8FDE6]'>
                    <FaDownload />
                    <Link to='https://doc-0g-34-prod-03-apps-viewer.googleusercontent.com/viewer2/prod-03/pdf/oi6d06mh3d5l8ei1g9cqu1l8se67g3ku/mp55u1bom8j15h9phg3k2hufqcheics5/1688305200000/3/118104631658524346214/APznzaZSEi7jGexijwXu0XAgKbH1XE1J8ZIiwBLoEUg0hPyFdBouhUP09hUq0XnDH085CAyGBU-tDUgzbzQxxYLRfDZ1IKdE3RqTx1ZJRoCS0gorvH-NTl154i1HTtET5Jl1-HDXjXk2HFnEJbyGH3bMwPzU5SbGqgniQkl2wIiL1ORfXcQ3qSvYsBNtDvUZd4VD_e3mT9F8EYdAbshBCBim0w9qmM_NgFSgnoUQkgnHivFwv17OhOh3Z2SLNQjRxCich5EnNZ83oBZS8PNdQWFbgbH3hglLMJoqlZYGpprsyy0DLvgHKrOWeW2vWCbBEgtdanL8kcrrnEPsZMJIPyq2gOPB_KF3T77zXnwTKR_jv1a0FkYyy4f0sPG2hZbT7yN8PUfwWezksDjvbJ07stFBicshUvGfzw==?authuser=0&nonce=836u48p1p3ecg&user=118104631658524346214&hash=4o0s7d60j21nuel8fgqovnld6hdt5cnr'>Download Resume</Link>
                </div>
                {/* <div className='  bg-black w-[1px]  h-[200px] mb-0'></div> */}
            </div>

            <div className='flex items-center'>
                <div className=''>
                    <div className='flex gap-2 items-center'>
                        <div className="divider bg-black w-20 h-[1px]"></div>
                        <p className='text-sm'>Connect with</p>
                        <div className="divider bg-black w-20 h-[1px]"></div>
                    </div>
                    <div className='flex gap-6 items-center uppercase  text-black '>
                        <div className='flex items-center gap-1'>
                            <img className='w-6 h-6 rounded-full shadow-md shadow-[#B8FDE6]' src={messenger} alt="" />
                            <div className='font-extrabold text-sm'>
                                <Link to='https://m.me/100010105270770' target="_blank">Messenger</Link>
                                {/* <p className='text-xs font-medium'>m.me</p> */}
                            </div>
                        </div>
                        <div className='flex items-center gap-1'>
                            <img className='w-6 h-6 rounded-full shadow-md shadow-[#B8FDE6]' src={wp} alt="" />
                            <div className='font-extrabold text-sm'>
                                <Link to='https://m.me/100010105270770' target="_blank">What's app</Link>
                                {/* <p className='text-xs font-medium'>+8801635617278</p> */}
                            </div>
                        </div>
                        <div className='flex items-center gap-1'>
                            <img className='w-6 h-6 rounded-full shadow-md shadow-[#B8FDE6]' src={mail} alt="" />
                            <div className='font-extrabold text-sm'>
                                <Link to='https://m.me/100010105270770' target="_blank">Email</Link>
                                {/* <p className='text-xs font-medium'>nishat.tabassum301@gmail.com</p> */}
                            </div>
                        </div>
                    </div>


                </div>
            </div>

        </div>
    );
};

export default SocialContact;