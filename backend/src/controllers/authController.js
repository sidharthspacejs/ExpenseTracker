import prisma from "../config/prisma.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const login = async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({
      message: "All fields are required",
    });
  }

  try {
    const user = await prisma.user.findUnique({
      where: {
        username,
      },
    });

    if (!user) {
      return res.status(400).json({
        message: "User not found",
      });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(401).json({
        message: "Invalid Password",
      });
    }

    const token = jwt.sign(
      {
        id: user.id,
        role: user.role,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "7d",
      },
    );
    return res.status(200).json({
      token,
      user: {
        id: user.id,
        username: user.username,
        role: user.role,
      },
    });
  } catch (error) {
    console.log(error);

    return res.status(500).json({
      message: "Internal Server Error",
    });
  }
};

export const accountSetupPage = async (req, res) => {
  //account setup page

  const token = req.query.token;

  try {
    const user = await prisma.user.findUnique({
      where: {
        invitationToken: token,
      },
    });

    if (!user) {
      return res.status(404).json({
        message: "Invalid invitation link",
      });
    }

    if (user.invitationExpiry < new Date()) {
      return res.status(400).json({
        message: "Invitation link expired",
      });
    }

    return res.send(`

    <h1>Account Setup</h1>

    <form method="POST" action="/auth/account-setup?token=${token}">
        <input
            type="text"
            name="username"
            placeholder="Username"
        />

        <input
            type="password"
            name="password"
            placeholder="Password"
        />

        <button type="submit">
            Create Account
        </button>
    </form>
`);
  } catch (error) {
    console.log(error);

    return res.status(500).json({
      message: "Internal server error occured",
    });
  }
};

export const accountSetup = async (req, res) => {
  const token = req.query.token;
  const { username, password } = req.body;

  try {
    const user = await prisma.user.findUnique({
      where: {
        invitationToken: token,
      },
    });

    if (!user) {
      return res.status(404).json({
        message: "Invalid Invitation Link",
      });
    }

    if (user.invitationExpiry < new Date()) {
      return res.status(400).json({
        message: "Invitation link expired",
      });
    }

    await prisma.user.update({
      where: {
        id: user.id,
      },

      data: {
        username: username,
        password: await bcrypt.hash(password, 10),
        isActive: true,
        invitationToken: null,
        invitationExpiry: null,
      },
    });

    return res.status(200).json({
      message: "Account created successfully",
    });
  } catch (error) {
    console.log(error);

    return res.status(500).json({
      message: "Internal server error",
    });
  }
};

export const getCurrentUser = async (req, res) => {
  try {
    const user = await prisma.user.findUnique({
      where: {
        id: req.user.id,
      },

      select: {
        id: true,
        role: true,
        username: true,
      },
    });

    if (!user) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    return res.status(200).json(user);
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: "Internal Server Error",
    });
  }
};
