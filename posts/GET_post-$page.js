/*
    Return latest messages list, paginated (default: newest first, starts from 1, 10 bp), with its topic.

    **Request:** ```{}```

    **Response:** ```{
        posts: [{
            id: String,
            name: String,
            created_at: Date,
            updated_at: Date,
            content: String,
            author: {
                id: String,
                name: String,
                color: String
            },
        }],
        topics: [{
            id: String,
            name: String
        }]
    }```

    **Permissions:** null
*/
