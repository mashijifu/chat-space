
## messagesテーブル

|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|
|body  |text|
|image |text|


### Association
- belongs_to :user

## groupsテーブル

|Column|Type|Options|
|------|----|-------|
|name|string|null: false|

## Association
- has_many :messages
- has_many :users
- has_many :users, through: :users_groups

## usersテーブル

|Column|Type|Options|
|------|----|-------|
|name  |string|null: false, index|
|email|string|null: false|
|password|string|null: false|

## Association
- has_many :members
- has_many :groups
- has_many :groups, through: :users_groups


## users_groupsテーブル

|Column|Type|Option|
|------|----|------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|


## Association
- belongs_to :user
- belongs_to :group








