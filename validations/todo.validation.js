export const validateCreateTodo = (req, res, next) => {
    const { title, userId } = req.body;
  
    if (!title || !userId) {
      return res.status(400).json({
        message: "title and userId are required"
      });
    }
  
    next();
  };
  
  export const validateUpdateTodo = (req, res, next) => {
    const { title, description, is_completed } = req.body;
  
    if (
      title === undefined &&
      description === undefined &&
      is_completed === undefined
    ) {
      return res.status(400).json({
        message: "At least one field must be updated"
      });
    }
  
    next();
  };
  