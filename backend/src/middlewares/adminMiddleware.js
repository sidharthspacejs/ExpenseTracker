

export const isAdmin = (req,res,next) => {
    if(req.user.role == "ADMIN") {
       return next();
    }

    return res.status(403).json({
        message: "Access Denied: Admin Only"
    })
}