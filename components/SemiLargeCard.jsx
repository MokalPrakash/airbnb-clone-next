import Image from 'next/image'
function SemiLargeCard({img,title,description}) {
    return (
        <div>
            <div className='relative w-[380px] h-[380px]'>
                <Image 
                    src={img}
                    layout='fill'
                    className='rounded-lg'
                />
            </div>
            <div>
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
        </div>
    )
}

export default SemiLargeCard
