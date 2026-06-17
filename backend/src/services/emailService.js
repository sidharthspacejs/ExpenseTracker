import nodemailer from 'nodemailer'

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
});

export const sendInvitationEmail = async(employeeEmail,invitationLink) => {
    await transporter.sendMail({
        from: process.env.EMAIL_USER,
        to: employeeEmail,
        subject: "N3GlobalTech Account Activation",
        html: `<h2>Welcome to N3GlobalTech</h2>

               <p>Click the link below to activate</p>

               <a href= "${invitationLink}">Activate Account</a>
               `
    })
}