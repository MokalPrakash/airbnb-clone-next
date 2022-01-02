import Image from 'next/image'
function LargeCard({img,title,description,buttonText}) {
    return (
        <section className='relative py-16 cursor-pointer'>
            <div className='relative h-96 min-w-[300px]'>
                <Image 
                    src={img} 
                    layout='fill'
                    objectFit='cover'
                    className='rounded-2xl'
                />
            </div>
            <div className='absolute top-32 left-20 pt-7'>
                <h3 className='text-4xl mb-3 w-64 text-white font-bold '>{title}</h3>
                <p className='text-white text-lg break-words w-[300px] mb-5'>{description}</p>
                <button className='bg-white text-gray rounded-lg px-5 py-3 text-md mt-5'>{buttonText}</button>
            </div>
        </section>
    )
}

export default LargeCard
