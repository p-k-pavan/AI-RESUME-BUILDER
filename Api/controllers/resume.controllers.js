import Resume from "../models/resume.model.js";


export const Create = async (req, res) => {
  const { title, username, email } = req.body;


  if (!title || !username || !email) {
    return res.status(400).json({ message: "All fields are required" });
  }

  try {
    const newResume = new Resume({
      title,
      username,
      email,
    });

    const savedResume = await newResume.save();
    res.status(201).json(savedResume);
  } catch (error) {
    console.error("Error creating resume:", error);
    res.status(500).json({ message: "Server error. Could not create resume." });
  }
};
