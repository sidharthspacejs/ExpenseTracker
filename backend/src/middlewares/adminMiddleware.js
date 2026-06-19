

export const isAdmin = (req,res,next) => {
    if(req.user.role == "ADMIN") {
        next();
    }

    return res.status(401).json({
        message: "Access Denied: Admin Only"
    })
}