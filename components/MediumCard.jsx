import Image from 'next/image'

function MediumCard({img,title}) {
    return (
        <div className='cursor-pointer hover:scale-105 transition transform duration-200 ease-out '>
            <div className='relative h-[272px] w-[272px]'>
                <Image className='rounded-lg' src={img} layout='fill'/>
            </div>
            <h3 className='text-2xl mt-3'>{title}</h3>
        </div>
    )
}

export default MediumCard
