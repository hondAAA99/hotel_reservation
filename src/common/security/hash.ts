import { compareSync, hashSync } from 'bcrypt'

export function Globalhash({ plainText }: { plainText: string }) {
  return hashSync(plainText, 8)
}

export function GlobalCompare({
  plainText,
  hashText,
}: {
  plainText: string
  hashText: string
}) {

  return compareSync(plainText, hashText)
}
