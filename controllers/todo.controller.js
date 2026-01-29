import { supabase } from "../config/supabase.js";

export const addTodo = async (req, res) => {
  const { title, description, userId } = req.body;

  await supabase.from("todos").insert([
    { title, description, user_id: userId }
  ]);

  res.status(201).json({ message: "Todo added" });
};

export const getTodos = async (req, res) => {
  const { userId } = req.params;

  const { data } = await supabase
    .from("todos")
    .select("*")
    .eq("user_id", userId);

  res.json(data);
};

export const updateTodo = async (req, res) => {
  const { todoId } = req.params;

  await supabase
    .from("todos")
    .update(req.body)
    .eq("id", todoId);

  res.json({ message: "Todo updated" });
};

export const deleteTodo = async (req, res) => {
  const { todoId } = req.params;

  await supabase
    .from("todos")
    .delete()
    .eq("id", todoId);

  res.json({ message: "Todo deleted" });
};
