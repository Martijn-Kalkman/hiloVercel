// import { NextResponse } from 'next/server';
// import { getBandsInTownEvents } from '@/lib/services/bandsintown.service';

// export async function GET(request: Request) {
//   try {
//     const events = await getBandsInTownEvents();
//     return NextResponse.json(events, { status: 200 });

//   } catch (error) {
//     console.error('Error in BandsInTown Route Handler:', error);
//     return NextResponse.json(
//       { message: 'Failed to retrieve bandsintown data.' },
//       { status: 500 }
//     );
//   }
// }