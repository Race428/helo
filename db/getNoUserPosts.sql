select posts.*, users.username, users.profile_pic, users.id
from posts 
join users on posts.author_id = users.id
where author_id !=  ${user_id}