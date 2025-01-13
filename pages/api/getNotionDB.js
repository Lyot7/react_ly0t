// filepath: /c:/react_ly0t/pages/api/getNotionDB.js
import notion from "../../src/libs/notion";

export default async function handler(req, res) {
  try {
    const response = await notion.databases.query({
      database_id: "13c1d0ab15b280138346c435c6e7dc98",
    });

    res.status(200).json(response);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to fetch data" });
  }
}
