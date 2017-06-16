/*
    Return list of last posts of a member, paginated (newest first, starts from 1, 10 bp)

    **Request:** ```{}```

    **Response:** ```{
        id: String,
        name: String,
        posts: [{
            id: String,
            name: String,
            created_at: Date,
            content: String,
            topic: {
                id: String,
                name: String
            }
        }]
    }```

    **Permissions:** null
*/
