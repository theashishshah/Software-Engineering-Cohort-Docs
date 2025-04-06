import Mailgen from "mailgen";
import nodemailer from "nodemailer";

const sendMail = async (options) => {
    const mailGenerator = new Mailgen({
        theme: "default",
        product: {
            name: "Task Manager",
            link: "https://mailgen.js/",
        },
    });
    const emailHtml = mailGenerator.generate(options.mainGenContent);
    const emailText = mailGenerator.generatePlaintext(options.mainGenContent);

    const transporter = nodemailer.createTransport({
        host: process.env.MAIL_TRAP_SMTP_HOST,
        port: process.env.MAIL_TRAP_SMTP_PORT,
        secure: false, 
        auth: {
            user: process.env.MAIL_TRAP_SMTP_USER,
            pass: process.env.MAIL_TRAP_SMTP_PASS,
        },
    });

    const mail = {
        from: '"Task manager 👻" <mail.taskmanager@example.com>', 
        to: options.email, 
        subject: options.subject, 
        text: emailText, 
        html: emailHtml, 
    };

    try {
        await transporter.sendMail(mail)
    } catch (error) {
        console.error("Email can't send, try again", error)
    }
};

const emailVerificationMainGenContent = (username, verificationURL) => {
    return {
        body: {
            name: username,
            intro: "Welcome to Task manager! We're very excited to have you on board.",
            action: {
                instructions: "To get started with Task manager, please click here:",
                button: {
                    color: "#22BC66", // Optional action button color
                    text: "Verify your email",
                    link: verificationURL,
                },
            },
            outro: "Need help, or have questions? Just reply to this email, we'd love to help.",
        },
    };
};

const forgotPasswordMailGenContent = (username, passwordResetURL) => {
    return {
        body: {
            name: username,
            intro: "We got request to reset your password.",
            action: {
                instructions: "To reset your password, please click here:",
                button: {
                    color: "#22BC66", // Optional action button color
                    text: "Reset password",
                    link: passwordResetURL,
                },
            },
            outro: "Need help, or have questions? Just reply to this email, we'd love to help.",
        },
    };
};

// sendMail({
//     email: user.email,
//     subject: "Email verification",
//     mainGenContent: emailVerificationMainGenContent(username, user)
// })
