
// General error-handling middleware
export const errorHandler = (err, req, res, next) => {
  console.error(err.stack);
  res
    .status(res.statusCode || 500)
    .json({ message: err.message || err || "An unexpected error occurred" });
};