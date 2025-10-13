const { app } = require('@azure/functions');

app.http('booking-created', {
    methods: ['GET', 'POST'],
    authLevel: 'anonymous',
    handler: async (request, context) => {
        return { 
            status: 200,
            headers: {
                'location': '/bookings/confirmation',
            }
        };
    }
});


