import { getBandsInTownEvents } from '@/app/services/bandsintown.service';
import Eventcard from './_components/eventcard';
import { unstable_cache } from 'next/cache';
import GlobeWrapper from './_components/globewrapper';
import EventStructuredData from './_components/event-structured-data';


const getCachedBandsInTownEvents = unstable_cache(
  async () => {
    try {
      const events = await getBandsInTownEvents();
      return events;
    } catch (error) {
      console.error('Failed to fetch events:', error);
      return [];
    }
  },
  ['bandsintown-events-data'],
  { revalidate: 3600 }
);

export default async function EventsSection() {
  const events = await getCachedBandsInTownEvents();

  return (
    <section className="w-11/12 mx-auto py-12">
      <EventStructuredData events={events} />
      <h2
        id="events"
        className="text-white lg:text-7xl text-4xl font-bold w-full flex justify-end mb-8"
      >
        EVENTS
      </h2>

      <div className="flex flex-col items-center xl:flex-row w-full mx-auto justify-between gap-8">
        <div className="xl:w-6/12 w-full max-h-[500px] overflow-y-auto overflow-x-hidden p-2 rounded-lg custom-scrollbar">
          {events.length === 0 ? (
            <div className="p-8 bg-gray-900/50 rounded-lg shadow-inner">
              <p className="text-gray-400 text-center font-medium">
                No upcoming events found at this time. Please check back later!
              </p>
            </div>
          ) : (
            <ul className="space-y-4">
              {events.map((event) => (
                <Eventcard key={event.id} event={event} />
              ))}
            </ul>
          )}
        </div>
        <div className="xl:w-6/12 h-screen xl:flex hidden justify-center">
                <GlobeWrapper /> 
            </div>
      </div>
    </section>
  );
}