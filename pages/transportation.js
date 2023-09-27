import Head from 'next/head'
import { Inter } from '@next/font/google'
import Navbar from '../components/navbar'

const inter = Inter({ weight: 'variable', subsets: ['latin'] })

export default function transportation() {
  return (
    <>
        <Head>
          <title>CISTEE 2023</title>
          <link rel='icon' href='/favicon.ico' />
        </Head>
      <main className={inter.className}>
        <Navbar pageName='transportation' />

        <section className='py-10 w-full text-slate-800 min-h-max px-2 border-b'>
          <div className='container mx-auto max-w-6xl'>
            <h1 className='text-5xl font-extrabold mb-6 uppercase'>
              About Durgapur
            </h1>
            <p className='my-3 md:ml-6'>
              Durgapur better known as the steel city of West Bengal is located
              in the district of Paschim Burdwan, in the state of West Bengal,
              India. It is a well-planned industrial city on the banks of river
              Damodar. It was founded in the late fifties by the then Chief
              Minister of West Bengal Dr Bidhan Chandra Roy.
            </p>

            <p className='my-3 md:ml-6'>
              Durgapur houses a large number of manufacturing industries which
              includes Durgapur Steel Plant (DSP), Alloy Steel Plant (ASP),
              Alstom Power Boiler, Durgapur Project Ltd., Durgapur Thermal Power
              Corporation, Philips Carbon Black Ltd, Graphite India Ltd.
            </p>

            <p className='my-3 md:ml-6'>
              Durgapur is the preferred gateway to the districts of Bankura,
              Birbhum (Bolpur, Rampurhat, Suri), and Purulia. NH 19 (old
              numbering: NH 2) passes through the city jurisdiction and NH 19
              originates from Muchipara in the city. NH 14 (old numbering NH 60)
              passes through the north-western suburb of Pandabeswar and finally
              passes through Raniganj and heads away towards Odisha.
            </p>
          </div>
        </section>

        <section className='py-10 w-full text-slate-800 min-h-max px-2 border-b'>
          <div className='container mx-auto max-w-8xl'>
            <h2 className='text-5xl font-extrabold mb-6 uppercase'>
              Transportation in Durgapur
            </h2>
            <p className='my-3 md:ml-6'>
              The city has a good connectivity, with good roads like the GT road
              (NH2) running through it. It is well connected with the Indian
              Railways which helps you to reach almost all major cities or
              junctions in the country. Frequent bus services to almost all
              parts of West Bengal gives easy access for people visiting the
              city for work or vacation. There are long distance private buses
              like Volvo and there are Government buses too, which take you
              easily to Kolkata, the capital of West Bengal, and to other parts
              of the
            </p>
            <h3 className='my-3 text-2xl font-bold'>
              A. By Road (Bus/Volvo bus):
            </h3>
            <p className='my-3 md:ml-6'>
              From City Centre, Durgapur, SBSTC and various other private buses,
              ranging from sleepers to luxury Volvos, depart for Kolkata,
              Asansol, Barddhaman, Barakar, Bhubaneswar, Puri, Jamshedpur,
              Bokaro, Siliguri, and other nearby towns.
            </p>

            <h3 className='my-3 text-2xl font-bold'>B. By Air:</h3>

            <p className='my-3 md:ml-6'>
              <span className='font-bold'>
                Durgapur Airport (Kazi Nazrul Islam Airport):
              </span>{' '}
              The city is home to a domestic airport, the Kazi Nazrul Islam
              Airport. It is India&#39;s first private-sector Greenfield
              airport. It is located at a place called Andal which is roughly 15
              kilometres from Durgapur&#39;s City Center Bus Terminus. The
              airport has direct flights to New Delhi, Mumbai, Chennai,
              Bangalore and Hyderabad, Guwahati, Kolkata which are operated by
              IndiGo and Spicejet.
            </p>

            <p className='my-3 md:ml-6'>
              <span className='font-bold'>
                Kolkata Airport (Netaji Subhas Chandra Bose International
                Airport):
              </span>
              The distance between Durgapur to Kolkata Airport, capital city of
              West Bengal is about 180 KM. Travelling time may vary from 03.00
              hours to 04.30 hours, depending on the traffic.
            </p>
            <h3 className='my-3 text-2xl font-bold '>C. By Rail:</h3>
            <p className='my-3 md:ml-6'>
              Durgapur is served by Durgapur Railway station. It is one of the
              most important stations of Eastern Railways where almost all
              express trains halt.
            </p>
            <h3 className='my-3 text-2xl font-bold'>D. eCab Service</h3>
            <p className='my-3 md:ml-6'>
              Ola, Uber (Daily and Outstation), Ola Bike, Rapido Bike, Taxi
              &amp; Cab
            </p>
          </div>
        </section>

        <section className='py-10 w-full text-slate-800 min-h-max px-2'>
          <div className='container mx-auto max-w-8xl'>
            <h2 className='text-5xl font-extrabold mb-6 uppercase'>Climate</h2>
            <p className='my-3 md:ml-6'>
              Durgapur is surrounded by Asansol subdivision on the west,
              Bardhaman subdivision on the east, Bankura district (across
              Damodar River) in the south and Birbhum district (across Ajay
              River) to the north.
            </p>

            <p className='my-3 md:ml-6'>
              Durgapur has a transitional climate. The place is located at an
              elevation of about 65 m above sea level. Durgapur, much like the
              other parts of West Bengal, experiences three distinct seasons -
              summer, monsoon and winter. While summers may be extremely hot,
              winter are characterized by pleasant and cool temperatures.
            </p>

            <h4 className='text-2xl my-3 font-bold'>Summer</h4>
            <p className='my-3 md:ml-6'>
              The summer season in Durgapur is characterized by excessive heat.
              Mercury rises phenomenally, with a record of reaching even 45 °C
              mark. However, the average summer temperature lies somewhere
              between 28°C and 35°C. Humidity in the region is also high, as it
              is close to the Damodar River and Ajay River.
            </p>

            <h4 className='text-2xl my-3 font-bold'>Monsoon</h4>
            <p className='my-3 md:ml-6'>
              The arrival of July marks the onset of monsoon in Durgapur. Light
              showers in the initial days give way to heavy downpour. The
              average rainfall is about 150 millimeters, with the bulk occurring
              in the July-September period. The rest of the year is pretty dry,
              with little or almost no rainfall. The months from March to May
              are extremely dry. During monsoon, do not forget to carry
              umbrellas and raincoats.
            </p>

            <h4 className='text-2xl my-3 font-bold'>Winter</h4>
            <p className='my-3 md:ml-6'>
              Winters are marked by a pleasant and cool environment. The
              scorching heat of the area gives way to a more pleasing and
              satisfying stay. The minimum average temperature during the winter
              months goes down to about 10 °C. The level of humidity is
              extremely low in the cold season. It is also the best time to
              visit Durgapur, as travellers would experience a pleasant climate,
              devoid of both sunny scorching heat and heavy monsoons. Suitable
              winter clothings are required.
            </p>
          </div>
        </section>
      </main>
    </>
  )
}
