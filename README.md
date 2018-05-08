
## messagesテーブル

|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|
|body  |text|
|image |text|


### Association
- belongs_to :group
- belongs_to :user


## groupsテーブル

|Column|Type|Options|
|------|----|-------|
|message_id|integer|null: false, foreign_key: true|
|user_id|integer|null: false, foreign_key: true|
|name|string|null: false|

## Association
-has_many :members
-has_many :users

## usersテーブル

|Column|Type|Options|
|------|----|-------|
|message_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_ksy: true|
|name  |string|null: false, index|
|email|string|null: false|
|password|string|null: false|

## Association
-has_many :members
-belongs_to :group


## messages_usersテーブル

|Column|Type|Option|
|------|----|------|
|-message_id|integer|null: false, foreign_key: true|
|-user_id|integer|null: false, foreign_key: true|


## Association
-has_many :messages, through: :users
-has_many :users, through: :messages








