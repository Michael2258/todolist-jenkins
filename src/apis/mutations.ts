import axios from "axios";

export const handleCreateNotes = async (body: unknown) => {
  try {
    const res = await axios.post(
      "https://crudcrud.com/api/bb47f103c7ed4afc91ef49e3f571d63c",
      body
    );

    if (res.data) return res.data;
  } catch (error) {
    console.log({ error });
  }
};

export const handleUpdateNote = async (id: string, body: unknown) => {
  try {
    if (!id) throw new Error("Something wrong!");

    const res = await axios.put(
      `https://crudcrud.com/api/bb47f103c7ed4afc91ef49e3f571d63c/${id}`,
      body
    );

    if (res.data) return res.data;
  } catch (error) {
    console.log({ error });
  }
};

export const handleDeleteNote = async (id: string) => {
  try {
    if (!id) throw new Error("Something wrong!");

    const res = await axios.delete(
      `https://crudcrud.com/api/bb47f103c7ed4afc91ef49e3f571d63c/${id}`
    );

    if (res.data) return res.data;
  } catch (error) {
    console.log({ error });
  }
};
