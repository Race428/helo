select posts.*, users.username, users.profile_pic, users.id
from posts 
join users on posts.author_id = users.id
