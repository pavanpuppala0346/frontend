app.get("/books/", async (request, response) => {
    const {
      offset = 2,
      limit = 5,
      order = "ASC",
      order_by = "book_id",
      search_q = "",
    } = request.query;
    const getBooksQuery = `
      SELECT
        *
      FROM
       book
      WHERE
       title LIKE '%${search_q}%'
      ORDER BY ${order_by} ${order}
      LIMIT ${limit} OFFSET ${offset};`;
    const booksArray = await db.all(getBooksQuery);
    response.send(booksArray);
  });




  