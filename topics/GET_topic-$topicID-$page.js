/*
    Return a topic with list of posts, paginated (oldest first, starts from 1, 10 bp).

    **Request:** ```{}```

    **Response:** ```{
        id: String,
        name: String,
        rp: Boolean,
        state: ['active', 'terminated', 'abandonned'],
        authors: [{
            id: String,
            name: String,
            color: String
        }],
        tags: [{
            id: String,
            name: String,
            color: String
        }],
        locked: Boolean,
        stars: Number,
        postCount: Number,
        posts: [{
            id: String,
            name: String,
            created_at: Date,
            updated_at: Date,
            content: String,
            author: {
                id: String,
                name: String,
                color: String,
                vanity: String,
                group: String,
                avatar: String,
                title: String,
                description: String
            }
        }]
    }```

    **Permissions:** READ('TOPIC', $topicID)
*/
