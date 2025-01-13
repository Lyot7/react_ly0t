export default async function handler(req, res) {
  try {
    const response = await fetch(
      "https://api.notion.com/v1/databases/13c1d0ab15b280138346c435c6e7dc98",
      {
        headers: {
          Authorization:
            "Bearer ntn_b77958404347miKhTW8rgWkYYr4jESGHuwZv0uyUSWbd8R",
          "Content-Type": "application/json",
          "Notion-Version": "2021-05-13",
        },
      }
    );

    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch data" });
  }
}
