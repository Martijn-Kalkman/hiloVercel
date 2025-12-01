import { BandsInTownEvent } from '@/app/types/bandsintown';

interface EventCardProps {
    event: BandsInTownEvent;
}

const formatDate = (datetime: string): string => {
    try {
        return new Date(datetime).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
        });
    } catch (e) {
        return 'Date TBA';
    }
};

export default function EventCard({ event }: EventCardProps) {
    const formattedDate = formatDate(event.datetime);
    const eventTitle = event.title || event.venue.location;

    return (
        <li key={event.url} className="list-none border-b border-gray-700 pb-4">
            <div className="flex flex-col xl:flex-row hover:bg-gray-100/10 p-4 rounded-lg transition duration-150 ease-in-out justify-between items-start">

                {/* Event Details Section */}
                <div className="flex flex-col w-full xl:w-8/12 mb-4 xl:mb-0">
                    <p className="text-gray-200 text-xl font-bold">
                        {eventTitle}
                    </p>
                    <p className="text-gray-400 mt-1">
                        {event.venue.location} - {formattedDate}
                    </p>
                </div>

                <div className="flex gap-x-3 w-full xl:w-4/12 justify-start xl:justify-end">

                    {event.rsvpUrl && (
                        <a
                            href={event.rsvpUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white border border-white hover:bg-white hover:text-black py-2 px-4 rounded-xl w-1/2 xl:w-auto font-bold text-center text-md transition duration-150 whitespace-nowrap"
                        >
                            RSVP
                        </a>
                    )}

                    {event.url && (
                        <a
                            href={event.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-white text-black border border-gray-300 hover:bg-transparent hover:text-white py-2 px-4 rounded-xl w-1/2 xl:w-auto font-bold text-center text-md transition duration-150 whitespace-nowrap"
                        >
                            TICKET
                        </a>
                    )}
                </div>
            </div>
        </li>
    );
}