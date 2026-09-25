import { schedule } from 'node-cron';
import roomRepo from '../../database/repo/room.repo.js';
import { ObjectId } from 'mongodb';
export function roomAvailable() {
    schedule('0 * * * *', async () => {
        const roomsIns = roomRepo;
        const today = new Date();
        const [updatedDate, allRooms] = await Promise.all([
            roomsIns.findManyAndUpdate({
                filter: {
                // reservationTo: { $lte: today },
                },
                update: {
                    $set: {
                        available: true,
                        reservationFrom: null,
                        reservationTo: null,
                    },
                },
            }),
            roomsIns.findAll(),
        ]);
        for (let room of allRooms) {
            if (typeof room['roomType'] == 'string') {
                room['roomType'] = new ObjectId(room['roomType']);
                console.log(room);
                room.save();
            }
        }
    });
}
//# sourceMappingURL=roomAvailiabilty.cron.js.map