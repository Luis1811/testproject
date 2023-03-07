const { AuthServices } = require("../services");


const userLogin = async (req, res, next) => {
  try {
    const credentials = req.body;
    const result = await AuthServices.authenticate(credentials);
    if (result) {
      const { email, password, id } = result.result;
      const user = { email, password, id };
      const token = AuthServices.genToken(user);
      user.token = token;
      res.json({ ...user });
    } else {
      res.status(400).json({ message: "Wrong password or email" });
    }
  } catch (error) {
    next({
      status: 400,
      errorContent: error,
      message: "Wrong password or email",
    });
  }
};

module.exports = { userLogin };


// eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImNvcnBvcmF0aW9uZ2x5YUBnbWFpbC5jb20iLCJwYXNzd29yZCI6IiQyYiQwOCRUSFdxT1hMck9pQWtDclFwN1FlZDdPY3dGV2dxL1ZYOVZESFN1TVF0S3o1Y1BoUkdYNDZnSyIsImlkIjoxLCJpYXQiOjE2NzgxOTgzOTcsImV4cCI6MTY3ODM3MTE5N30.kCruixLCVkw6f4fp8EyLz5MFDqrxigIe5eZIsoN5i-YtbNEoJtFoiwDuZCCgzoFAnvf95g6GYCNj8VaHVD4nPA