/*
    Return a list of categories organized in sections, with their child categories & the last active topic of each.

    **Request:** ```{}```

    **Response:** ```{
        sections: {
            id: String,
            name: String,
            categories: [{
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
                },
                children: [{
                    id: String,
                    name: String
                }]
            }]
        }
    }```

    **Permissions:** null
*/
