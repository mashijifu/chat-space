
## messagesテーブル

|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|
|body  |text|null: false, foreign_key: true|
|image |text|null: false, foreign_key: true|


### Association
- belongs_to :group
- belongs_to :user


## groupsテーブル

|Column|Type|Options|
|------|----|-------|
|message_id|integer|null: false, foreign_key: true|
|user_id|integer|null: false, foreign_key: true|
|group_name|string|null: false, foreign_key: true|

## Association
-has_many :members
-has_many :usrs







