# Messidor API 
## CATEGORIES

### GET /category/:categoryID/topics/:page
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

### GET /category
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

### POST /category/:categoryID/topic
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

## POSTS

### DELETE /post/:postID
Delete a given message.

**Request:** ```{}```

**Response:** ```{}```

**Permissions:** DELETE('POST', $postID)

### GET /post/:page
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

### PUT /post/:postID
Edit a given post.

**Request:** ```{
    content: String
}```

**Response:** ```{}```

**Permissions:** EDIT('POST', $postID)

## PRIVATES

### DELETE /private/:privateID
Delete a given private message.

**Request:** ```{}```

**Response:** ```{}```

**Permissions:** READ('PRIVATE', $privateID)

### GET /private
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

### POST /private
Send a private message to a list of recipients.

**Request:** ```{}```

**Response:** ```{
    content: String,
    recipients: [String]
}```

**Permissions:** IS_AUTH()

## TOPICS

### DELETE /topic/:topicID
Delete a given topic and all its posts.

**Request:** ```{}```

**Response:** ```{}```

**Permissions:** DELETE('TOPIC', $topicID)

### GET /topic/:topicID/:page
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

### GET /topic/unread
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

### PATCH /topic/:topicID/lock
Lock or unlock a given topic.

**Request:** ```{
    locked: Boolean
}```

**Response:** ```{}```

**Permissions:** IS_MODERATOR()

### PATCH /topic/:topicID/merge
Merge a topic with another specified one.

**Request:** ```{
    topic: String
}```

**Response:** ```{}```

**Permissions:** IS_MODERATOR()

### PATCH /topic/:topicID/move
Move a given topic to another category.

**Request:** ```{
    category: String
}```

**Response:** ```{}```

**Permissions:** IS_MODERATOR()

### PATCH /topic/:topicID/split
Split a topic in two separate parts starting from the specified post.

**Request:** ```{
    post: String
}```

**Response:** ```{
    topic1: String,
    topic2: String
}```

**Permissions:** IS_MODERATOR()

### PATCH /topic/:topicID/watch
Watch/Unwatch a given topic.

**Request:** ```{
    watch: Boolean
}```

**Response:** ```{}```

**Permissions:** IS_AUTH()

### POST /topic/:topicID/post
Create a message in the given category.

**Request:** ```{
    content: String
}```

**Response:** ```{
    id: String
}```

**Permissions:** POST('TOPIC', $topicID)

### PUT /topic/:topicID
Edit a given topic.

**Request:** ```{
    name: String
}```

**Permissions:** EDIT('TOPIC', $topicID)

## USERS

### GET /user/:userID/posts/:page
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

### GET /user/:userID
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

### GET /user
Return list of users connected since a specified time and what they are doing.

**Request:** ```{
    time: Number // in minutes
}```

**Response:** ```{
    users: [
        id: String,
        name: String,
        color: String,
        activity: String
    ]
}```

**Permissions:** null

### PATCH /user/:userID
Edit a given member profile.

**Request:** ```{
    &name: String,
    &vanity: String,
    &group: String,
    &avatar: String,
    &title: String,
    &description: String,
    &email: String,
    &rpTopics: [{
        id: String,
        displayed: Boolean,
        avatar: String
    }],
    &referenceAccount: String,
    &newPassword: String,
    &newPasswordConfirm: String
}```

**Response:** ```{}```

**Permissions:** IS_SELF() || IS_MODERATOR()

### POST /user
Edit a given member profile.

**Request:** ```{
    name: String,
    &email: String,
    &referenceAccount: String,
    password: String,
    passwordConfirm: String
}```

**Response:** ```{
    id: String
}```

**Permissions:** null

