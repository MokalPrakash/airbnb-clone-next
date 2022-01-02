import { useRouter } from 'next/dist/client/router';
import Footer from '../components/Footer';
import FooterNavbar from '../components/FooterNavbar';
import Header from "../components/Header";
import InfoCard from '../components/InfoCard';
import format from 'date-fns/format'


function search({searchResults}) {
    const Router = useRouter()
    const { location,startDate,endDate,noOfGuests } = Router.query
    const formattedStartDate = format(new Date(), "dd MMMM yy")
    const formattedEndDate = format(new Date(endDate),'dd MMMM yy')
    const range = `${formattedStartDate } - ${formattedEndDate}`
    return (
        <div className='h-screen'>
            <Header placeholder={`${location} | ${range} | ${noOfGuests} guest${noOfGuests > 1 && 's' || ''}`} collapsed/>
            <main className='flex'>
                <section className='flex-grow pt-14 px-6'>
                    <p className='text-sm'> 300+ rooms for {noOfGuests}</p>
                    <h1 className='text-3xl font-semibold mt-2 mb-6'>Stays in {location}</h1>

                    <div className='hidden lg:inline-flex space-x-3 text-gray-800 mb-5 whitespace-nowrap'>
                        <p className='button'>Cancellation Flexibility</p>
                        <p className='button'>Type of Place</p>
                        <p className='button'>Price</p>
                        <p className='button'>Rooms and Beds</p>
                        <p className='button'>More filters</p>
                    </div>

                    <div>
                        {searchResults?.map(({img,title,description,location,star,price,total})=> (
                            <InfoCard
                                key={title}
                                img={img}
                                title={title}
                                description={description}
                                location={location}
                                star={star}
                                price={price}
                                total={total}
                            />
                        ))}
                    </div>
                </section>
            </main>
            <Footer/>
            <FooterNavbar/>
        </div>
    )
}

export default search

export async function getServerSideProps () {
    const searchResults = await fetch('https://links.papareact.com/isz')
    .then(res => res.json())
    return {
        props:{
            searchResults,
        }
    }
}
