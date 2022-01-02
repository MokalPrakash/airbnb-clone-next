import { CameraIcon, FilmIcon, GlobeAltIcon, StarIcon } from "@heroicons/react/solid";

function FooterNavbar() {
    return (
        <div className=' flex items-center bg-gray-100 text-gray-600 px-32 mb-3'>
            <div className='flex space-x-6 flex-grow cursor-pointer'>
                <p>&copy;2021 Airbnb,Inc.</p>
                <p>. Privacy</p>
                <p>. Terms</p>
                <p>. Sitemap</p>
                <p>. Company details</p>
            </div>
            <div className='flex space-x-100 items-center space-x-2 mx-5 cursor-pointer'>
                <GlobeAltIcon  className='w-5 h-5'/>
                <p>English(IN)</p>
            </div>
            <div>
                <p>₹ INR</p>
            </div>
            <div className='flex items-center justify-items-end space-x-2 ml-10 cursor-pointer'>
                <StarIcon className='w-5 h-5 text-gray-700'/>
                <FilmIcon className='w-5 h-5'/>
                <CameraIcon className='w-5 h-5'/>
            </div>  
        </div>
    )
}

export default FooterNavbar
