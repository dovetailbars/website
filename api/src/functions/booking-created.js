const { app } = require('@azure/functions');

// DesignMyNight's return-url POSTs here after a booking. It can't POST straight to
// /bookings/confirmation because SWA's static host only answers GET/HEAD/OPTIONS.
app.http('booking-created', {
    methods: ['GET', 'POST'],
    authLevel: 'anonymous',
    handler: async (request, context) => {
        return { 
            status: 303,
            headers: {
                'location': '/bookings/confirmation',
            }
        };
    }
});
