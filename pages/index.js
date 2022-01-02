import Head from 'next/head'
import Banner from '../components/Banner'
import Footer from '../components/Footer'
import FooterNavbar from '../components/FooterNavbar'
import Header from '../components/Header'
import LargeCard from '../components/LargeCard'
import MediumCard from '../components/MediumCard'
import SemiLargeCard from '../components/SemiLargeCard'
import SmallCard from '../components/SmallCard'

export default function Home({exploreData,cardData}) {
  return (
    <div>
      <Head>
        <title>Airbnb Clone</title>
        <link rel="icon" href="/favicon.png" />
      </Head>

      <div>
        <Header/>
        <Banner/>
      </div>

      <main className='max-w-7xl mx-auto px-8 sm:px-16'>
        <section className='pt-6'>
        <h2 className='text-4xl font-semibold pb-5'>Explore nearby</h2>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
            {exploreData?.map((item,id)=>(
              <SmallCard
                key={id} 
                img={item.img}
                location={item.location}
                distance={item.distance}
                />
            ))}
          </div>
        </section>

        <section>
          <h2 className='text-4xl font-semibold py-8'>Live anywhere</h2>
          <div className='flex  space-x-3 p-5 -ml-3'>
              {cardData?.map((item,id)=>(
                <MediumCard key ={id}img={item.img} title={item.title}/>
              ))}
          </div>
        </section>

        <section>
          <h2 className='text-4xl font-semibold py-8'>Discover things to do</h2>
          <div className='flex space-x-3 p-5 -ml-6 cursor-pointer'>
            <SemiLargeCard 
              img={'/images/discover/3.jpg'} 
              title={'Experiences'}
              description={'Find unforgettable activities near you'}
              />
            <SemiLargeCard
              img={'/images/discover/2.jpg'} 
              title={'Online experiences'}
              description={'Find unforgettable activities near you'}
            />
            <SemiLargeCard
              img={'/images/discover/1.jpg'} 
              title={'Featured collection:Wanderlust'}
              description={'Find unforgettable activities near you'}
            />
          </div>
        </section>

        <LargeCard 
          img={'/images/host.jpg'}
          title={'Try hosting'}
          description={'Earn extra income and unlock new opportunities by sharing your space.'}
          buttonText={'Learn more'}
        />

        <Footer/>
        <FooterNavbar/>
      </main>

      
    </div>
  )
}

export async function getStaticProps() {
  const exploreData = await fetch('https://links.papareact.com/pyp')
  .then(
    response => response.json()
  )
  const cardData = await fetch('https://links.papareact.com/zp1')
  .then(
    response => response.json()
  )
  return {
    props:{
      exploreData,
      cardData
    }
  }
}
