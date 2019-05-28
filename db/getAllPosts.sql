select posts.*, users.*
from posts 
join users on posts.author_id = users.id
