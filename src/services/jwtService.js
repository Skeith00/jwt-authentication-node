import jwt from 'jsonwebtoken'

const tokenKey = process.env.SECRET || '44ZemPIi31';

export function createToken(user) {

  // Create token
  return jwt.sign(
      { 
        'name': user.name + ' ' + user.last_name, 
        'email': user.email
      },
      tokenKey,
      {
        expiresIn: "2h",
      }
    );
}

export function verifyToken(token) {
  return jwt.verify(token, secret);
}