export const generateInvitationLink = (token) => {
    return `${process.env.BASE_URL}/auth/account-setup?token=${token}`
}