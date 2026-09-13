export declare const roomTypeEnum: readonly ["classA", "classB", "classC"];
export type roomTypeEnumType = (typeof roomTypeEnum)[number];
export declare const roomAdvantagesEnum: readonly ["beds", "view", "area", "breakfast", "livingRoom"];
export type roomAdvantageEnumType = (typeof roomAdvantagesEnum)[number];
export type roomAdvantagesType = {
    beds: string;
    view: string;
    area: string;
    breakfast: string;
    livingRoom?: string | undefined;
};
export type RoomAdvantagesType = roomAdvantagesType;
export interface roomAdvantages {
    classA: RoomAdvantagesType & {
        livingRoom: string;
    };
    classB: RoomAdvantagesType;
    classC: RoomAdvantagesType;
}
//# sourceMappingURL=room.enum.d.ts.map