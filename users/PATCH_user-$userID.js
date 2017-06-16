/*
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
*/
