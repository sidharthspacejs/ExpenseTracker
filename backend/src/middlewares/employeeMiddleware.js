
export const isEmployee = (req,res,next) => {

    if(req.user.role == "EMPLOYEE") {
        return next();
    }

    return res.status(403).json({
        message: "Access Denied"
    })
}