# Todo-API
MongoDB, Mongoose, and REST APIs (Todo API) with Test Cases




To run the app:


$ git clone https://github.com/RiyaKapuria/Todo-API.git


$ npm install


$ npm start


You can run and check the app in Postman by using following comments:


GET localhost:3000/todos (header = x-auth)


GET localhost:3000/todos/:id   (:id = your_doc_existing_id , header = x-auth)


POST localhost:3000/todos  (with some body like {"text": "Something todo from Postman"} )


PATCH localhost:3000/todos/:id  (with some body like {"completed": true,"text": "Something todo from Postman Again"} )   (:id = your_doc_existing_id, header = x-auth)


DELETE localhost:3000/todos/:id   (:id = your_doc_existing_id, header = x-auth)


POST localhost:3000/users   (with some body like {"email": "riya@example.com","password": "abc123!"} )


GET localhost:3000/users/me    (header = x-auth)


POST localhost:3000/users/login   (with some body like {"email": "riya@example.com","password": "abc123!"}, header = x-auth )


DELETE localhost:3000/users/me/token    (header = x-auth)



For running the Test Cases:


$ npm run test-watch




Live with Heroku:


https://afternoon-dusk-30640.herokuapp.com/


You can run and check the app in Postman by using following comments:


GET https://afternoon-dusk-30640.herokuapp.com/todos    (header = x-auth)


GET https://afternoon-dusk-30640.herokuapp.com/todos/:id   (:id = your_doc_existing_id, header = x-auth)


POST https://afternoon-dusk-30640.herokuapp.com/todos  (with some body like {"text": "Something todo from Postman"} , header = x-auth)


PATCH https://afternoon-dusk-30640.herokuapp.com/todos/:id  (with some body like {"completed": true,"text": "Something todo from Postman Again"} )   (:id = your_doc_existing_id, header = x-auth)


DELETE https://afternoon-dusk-30640.herokuapp.com/todos/:id   (:id = your_doc_existing_id, header = x-auth)


POST https://afternoon-dusk-30640.herokuapp.com/users   (with some body like {"email": "riya@example.com","password": "abc123!"} )


GET https://afternoon-dusk-30640.herokuapp.com/users/me    (header = x-auth)


POST https://afternoon-dusk-30640.herokuapp.com/users/login   (with some body like {"email": "riya@example.com","password": "abc123!"}, header = x-auth )


DELETE https://afternoon-dusk-30640.herokuapp.com/users/me/token    (header = x-auth)
