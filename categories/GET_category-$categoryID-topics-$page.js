/*
    Return a category with list of children and list of topics, paginated (default: newest first, starts from 1, 10 bp) and last post of each.

    **Request:** ```{
        orderBy: ['stars', 'views', 'postCount', 'created_at'] // can be prefixed with - to reverse order
    }```

    **Response:** ```{
        id: String,
        name: String,
        image: String,
        description: String,
        rp: Boolean,
        children: [{
            id: String,
            name: String,
            image: String,
            rp: Boolean,
            lastTopic: {
                id: String,
                name: String,
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
            }
        }],
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
            },
            watched: Boolean
        }]
    }```

    **Permissions:** READ('CATEGORY', $categoryID)
*/
