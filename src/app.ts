import bootstrap from './app.controller.js'

bootstrap()
;(() => {
//   db.users.insertMany([
//     {
//       userName: 'admin_omar',
//       role: 'admin',
//       email: 'admin@hotel.test',
//       password: 'Password123!',
//       phoneNumber: '+966500000001',
//       DateOfBirth: ISODate('1988-06-15T00:00:00.000Z'),
//       nationality: 'Saudi',
//     },
//     {
//       userName: 'guest_ahmed',
//       role: 'user',
//       email: 'ahmed.guest@hotel.test',
//       password: 'Password123!',
//       phoneNumber: '+966500000002',
//       DateOfBirth: ISODate('1995-01-12T00:00:00.000Z'),
//       nationality: 'Jordanian',
//     },
//     {
//       userName: 'guest_sara',
//       role: 'user',
//       email: 'sara.guest@hotel.test',
//       password: 'Password123!',
//       phoneNumber: '+966500000003',
//       DateOfBirth: ISODate('1992-08-07T00:00:00.000Z'),
//       nationality: 'Egyptian',
//     },
//     {
//       userName: 'guest_nora',
//       role: 'user',
//       email: 'nora.guest@hotel.test',
//       password: 'Password123!',
//       phoneNumber: '+966500000004',
//       DateOfBirth: ISODate('1990-10-18T00:00:00.000Z'),
//       nationality: 'Emirati',
//     },
//   ])

//   db.roomstypes.insertMany([
//     {
//       name: 'classA',
//       roomAdvantages: {
//         beds: 'King Size Bed',
//         view: 'Sea View',
//         area: '45 sqm',
//         breakfast: 'Included',
//         livingRoom: 'Balcony',
//       },
//     },
//     {
//       name: 'classB',
//       roomAdvantages: {
//         beds: 'Queen Size Bed',
//         view: 'City View',
//         area: '35 sqm',
//         breakfast: 'Included',
//         livingRoom: 'No',
//       },
//     },
//     {
//       name: 'classC',
//       roomAdvantages: {
//         beds: 'Twin Bed',
//         view: 'Garden View',
//         area: '30 sqm',
//         breakfast: 'No',
//         livingRoom: 'No',
//       },
//     },
//   ])

//   // ---------- 3) Rooms ----------

//   db.rooms.insertMany([
//     {
//       roomNumber: 101,
//       roomType: "6aa570687578a6eaac2cfae1",
//       reservoirId: null,
//       reservationFrom: null,
//       reservationTo: null,
//       price: 250,
//       roomCapacity: 2,
//       available: true,
//     },
//     {
//       roomNumber: 102,
//       roomType: "6aa570687578a6eaac2cfae1",
//       reservoirId: null,
//       reservationFrom: null,
//       reservationTo: null,
//       price: 260,
//       roomCapacity: 2,
//       available: true,
//     },
//     {
//       roomNumber: 201,
//       roomType: "6aa570687578a6eaac2cfae1",
//       reservoirId: null,
//       reservationFrom: null,
//       reservationTo: null,
//       price: 180,
//       roomCapacity: 2,
//       available: true,
//     },
//     {
//       roomNumber: 202,
//       roomType: "6aa570687578a6eaac2cfae1",
//       reservoirId: null,
//       reservationFrom: null,
//       reservationTo: null,
//       price: 190,
//       roomCapacity: 2,
//       available: true,
//     },
//     {
//       roomNumber: 301,
//       roomType: "6aa570687578a6eaac2cfae1",
//       reservoirId: null,
//       reservationFrom: null,
//       reservationTo: null,
//       price: 150,
//       roomCapacity: 1,
//       available: true,
//     },
//   ])

  // ---------- 4) Reservations ----------
//   db.reservations.insertMany([
//     {
//       guestId: "6aa570417578a6eaac2cfadd",
//       roomId: "6aa571277578a6eaac2cfae4",
//       nights: 3,
//       nightPrice: 250,
//       total: 690, // 3*250 + 190 discount = 690
//       guests: 2,
//       discount: 60,
//       paid: 'pending',
//     },
//     {
//       guestId: "6aa570417578a6eaac2cfade",
//       roomId: "6aa571277578a6eaac2cfae5",
//       nights: 2,
//       nightPrice: 180,
//       total: 360, // 2*180 = 360
//       guests: 1,
//       discount: 0,
//       paid: 'paid',
//     },
//     {
//       guestId: "6aa570417578a6eaac2cfadf",
//       roomId: "6aa571277578a6eaac2cfae6",
//       nights: 4,
//       nightPrice: 150,
//       total: 570, // 4*150 = 600 - 30 discount
//       guests: 1,
//       discount: 30,
//       paid: 'failed',
//     },
//   ])

  // ---------- Quick Verification ----------
//   print('Fake seed data inserted successfully.')
//   printjson({
//     users: db.users.countDocuments(),
//     roomtypes: db.roomstypes.countDocuments(),
//     rooms: db.rooms.countDocuments(),
//     reservations: db.reservations.countDocuments(),
//   })
})()
