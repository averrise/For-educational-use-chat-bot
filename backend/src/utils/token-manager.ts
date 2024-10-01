import jwt from 'jsonwebtoken'

export const createToken = (id: string, email: string, expiresIn) => {
    const payload = { id, email };
    const token = jwt.sign(payload, process.env.JWT_SECRET,{
        expiresIn: "7d",

    });
    return token;
};