import crypto from "crypto"

export const generateInvitationToken = () => {
    return crypto.randomBytes(32).toString('hex');
}