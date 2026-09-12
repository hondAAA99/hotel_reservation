import jsonwebtoken from 'jsonwebtoken'
export function generateToken(
  payload: { userId: string; role: string },
  secret: string,
  options: any = { expiresIn: 3 * 60 * 1000 },
) {
  return jsonwebtoken.sign(payload, secret, options)
}

export const TokenVerify = ({
  token,
  secret,
}: {
  token: string
  secret: string
}): any => {
  return jsonwebtoken.verify(token, secret)
}
