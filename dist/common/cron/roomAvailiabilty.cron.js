import { schedule } from 'node-cron';
import roomRepo from '../../database/repo/room.repo.js';
export function roomAvailable() {
    schedule('* * * * *', async () => {
        const roomsIns = roomRepo;
        const today = new Date();
        await roomsIns.findManyAndUpdate({
            filter: {
                reservationTo: { $lte: today },
            },
            update: {
                $set: {
                    available: true,
                    reservationFrom: null,
                    reservationTo: null,
                },
            },
        });
    });
}
//# sourceMappingURL=roomAvailiabilty.cron.js.map