select posts.*, users.username, users.profile_pic, users.user_id
from posts 
join users on posts.author_id = users.user_id
