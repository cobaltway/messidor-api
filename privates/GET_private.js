/*
    Return a list of privates messages, paginated (newest first, starts from 1, 10 bp).

    **Request:** ```{}```

    **Response:** ```{
        privates: [{
            id: String,
            content: String,
            created_at: Date,
            author: {
                id: String,
                name: String,
                color: String,
                vanity: String,
                title: String,
            }
        }]
    }```

    **Permissions:** IS_AUTH()
*/
