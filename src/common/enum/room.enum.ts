export const roomTypeEnum = ['classA', 'classB', 'classC'] as const
export type roomTypeEnumType = (typeof roomTypeEnum)[number]

export const roomAdvantagesEnum = [
  'beds',
  'view',
  'area',
  'breakfast',
  'livingRoom',
] as const
export type roomAdvantageEnumType = (typeof roomAdvantagesEnum)[number]

export type roomAdvantagesType = {
  beds: string
  view: string
  area: string
  breakfast: string
  livingRoom?: string | undefined
}

export type RoomAdvantagesType = roomAdvantagesType

export interface roomAdvantages {
  classA: RoomAdvantagesType & {
    livingRoom: string
  }
  classB: RoomAdvantagesType
  classC: RoomAdvantagesType
}
