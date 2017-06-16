/*
    Return a given member public profile.

    **Request:** ```{}```

    **Response:** ```{
        id: String,
        name: String,
        color: String,
        vanity: String,
        group: String,
        avatar: String,
        title: String,
        description: String,
        email: String, // $(self, modo)
        ipAddress: String, // $(admin)
        registered_at: Date,
        last_connexion: Date,
        rpTopics: [{
            id: String,
            name: String,
            created_at: Date,
            authors: [{
                id: String,
                name: String,
                color: String
            }],
            state: ['active', 'terminated', 'abandonned'],
            displayed: Boolean, // $(self, modo)
            avatar: String // $(self, modo)
        }],
        watchedTopics: [{ // $(self, modo)
            id: String,
            name: String,
            created_at: Date,
            authors: [{
                id: String,
                name: String,
                color: String
            }],
            state: ['active', 'terminated', 'abandonned']
        }],
        otherAccounts: [{
            id: String,
            name: String,
            color: String,
            title: String,
            description: String
        }],
        referenceAccount: String // $(self, modo)
    }```

    **Permissions:** null
*/
