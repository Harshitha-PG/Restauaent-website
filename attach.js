const express = require('express');
const path = require('path');
const app = express();
const menuRoutes = require('./routes/menu');
const orderRoutes = require('./routes/order');
const reservationRoutes = require('./routes/reservation');

app.use(express.json());
app.use(express.static(path.join(__dirname, 'frontend')));

app.use('/api/menu', menuRoutes);
app.use('/api/order', orderRoutes);
app.use('/api/reservation', reservationRoutes);

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
