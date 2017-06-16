/*
    Create a topic in the given category.

    **Request:** ```{
        name: String,
        post: {
            content: String
        }
    }```

    **Response:** ```{
        id: String
    }```

    **Permissions:** POST('CATEGORY', $categoryID)
*/
