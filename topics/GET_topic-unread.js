/*
    Return a list of topics with unread messages since last connexion, paginated (default: newest first, starts from 1, 10 bp) and last post of each.

    **Request:** ```{
        orderBy: ['stars', 'views', 'postCount', 'created_at'] // can be prefixed with - to reverse order
    }```

    **Response:** ```{
        topics: [{
            id: String,
            name: String,
            authors: [{
                id: String,
                name: String,
                color: String
            }],
            locked: Boolean,
            stars: Number,
            views: Number,
            postCount: Number
            state: ['active', 'terminated', 'abandonned'],
            created_at: Date,
            lastPost: {
                id: String,
                created_at: Date,
                read: Boolean,
                author: {
                    id: String,
                    name: String,
                    color: String
                }
            }
        }]
    }```

    **Permissions:** IS_AUTH()
*/
