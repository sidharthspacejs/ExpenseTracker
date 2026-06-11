export const generateInvitationLink = (token) => {
    return `${process.env.BASE_URL}/account-setup?token=${token}`
}