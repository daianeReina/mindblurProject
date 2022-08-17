Models:

User
\_id: ObjectId
username: String | Unique | Require
email : String | Unique | Require
password: String
books: [ObjectId]

<!-- Forgot passaword? --> It´s a Implamentation

Book

\_id: ObjectId
title: String | Require
author: [String | required] | Required
publisher: String
nsfw: Boolean -> false (not safe World)
genre: [ObjectId]
description: String

Genre
\_id: ObjectId
title: String | Unique | RequireString
