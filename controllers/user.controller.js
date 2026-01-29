import { supabase } from "../config/supabase.js";

export const signup = async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.status(400).json({ message: "All fields are required" });
  }

  const { data: existingUser } = await supabase
    .from("users")
    .select("*")
    .eq("email", email)
    .single();

  if (existingUser) {
    return res.status(409).json({ message: "Email already exists" });
  }

  const { data, error } = await supabase
    .from("users")
    .insert([{ name, email, password }]);

  if (error) {
    return res.status(500).json({ error: error.message });
  }

  res.status(201).json({ message: "User created successfully" });
};
