# Schema Information

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
user_name       | string    | not null
avatar          | attachment|
email           | string    | not null, unique
password_digest | string    | not null
session_token   | string    | not null, unique

## posts
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
user_id     | integer   | not null, foreign key (references users)
drink       | string    | not null, Bonus(foreign key (references drinks))
venue       | string    | Bonus(add venue table and use as foreign key)
avatar      | attachment|
body        | text      |

## comments
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
user_id     | integer   | not null, foreign key (references users)
post_id     | integer   | not null, foreign key (references posts)
avatar      | attachment|
body        | text      |

## friendships
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
user_id     | integer   | not null, foreign key (references users)
friend_id   | integer   | not null, foreign key (references users)
status      | integer   | default: 0, not null, (options 'pending', 'accepted', 'denied')

*******BONUS*******

## toasts
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
toaster_id  | integer   | not null, foreign key (references users)
post_id     | integer   | not null, foreign key (references posts)

## drinks
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
distillery_id integer   | not null, foreign key (references distilleries)
name        | string    | not null
avatar      | attachment|
description | string    |

## distilleries
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
name        | string    | not null
description | string    |
address     | string    |
image_url   | string    |

## venues
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
name        | string    | not null
description | string    |
address     | string    |
image_url   | string    |


## wishlists
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
drinker_id  | integer   | not null, foreign key (references users)
drink_id    | integer   | not null, foreign key (references drinks)
