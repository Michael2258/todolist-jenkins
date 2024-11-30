import axios from "axios";

export const handleGetNotes = async () => {
  try {
    const res = await axios.get(
      "https://crudcrud.com/api/bb47f103c7ed4afc91ef49e3f571d63c"
    );

    if (res.data) return res.data;
  } catch (error) {
    console.log({ error });
  }
};

export const handleGetNoteById = async (id: string) => {
  try {
    if (!id) throw new Error("Something wrong!");

    const res = await axios.get(
      `https://crudcrud.com/api/bb47f103c7ed4afc91ef49e3f571d63c/${id}`
    );

    if (res.data) return res.data;
  } catch (error) {
    console.log({ error });
  }
};
