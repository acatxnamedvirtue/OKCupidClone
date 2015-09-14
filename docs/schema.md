# Schema Information

## profiles
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
user_id     | integer   | not null, foreign key
about_me    | string    |
interests   | string    |
looking_for | string    |

## user_statistics
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
user_id     | integer   | not null, foreign key
orientation | string    | not null
ethnicity   | string    | not null
height      | string    | not null
body_type   | string    | not null
diet        | string    | not null
smokes      | string    | not null
drinks      | string    | not null
drugs       | string    | not null
religion    | string    | not null
sign        | string    | not null
education   | string    | not null
job         | string    | not null
income      | string    | not null
status      | string    | not null
type        | string    | not null
offspring   | string    | not null
pets        | string    | not null


## likes
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
profile_id  | integer   | not null, foreign key
liker_id    | integer   | not null, foreign key

## questions
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
author_id   | integer   | not null, foreign key
title       | string    | not null
body        | string    | not null

## question_choices
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
user_id     | integer   | not null, foreign key
body        | string    | not null

## question_answers
column name        | data type | details
-------------------|-----------|-----------------------
id                 | integer   | not null, primary key
question_id        | integer   | not null, foreign key
question_choice_id | integer   | not null, foreign key
user_id            | integer   | not null, foreign key
importance         | integer   | not null

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
email           | string    | not null, unique
password_digest | string    | not null
session_token   | string    | not null, unique

## messages
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
sender_id       | integer   | not null, foreign key
recipient_id    | integer   | not null, foreign key
title           | string    | not null
body            | string    | not null
