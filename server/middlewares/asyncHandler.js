export const asyncHandler = (theFunction) => {
  return async (req, res, next) => {
    try {
      await theFunction(req, res, next);
    } catch (error) {
      next(error);
    }
  };
};