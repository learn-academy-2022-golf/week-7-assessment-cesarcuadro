# ASSESSMENT 6: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. As a developer, I am creating a Rails application with a model called Cohort that has_many students, but OOPS! I forgot to add the foreign key. How can I fix this mistake? What is the name of the foreign key? Would the foreign key be on the Cohort model or the Student model?

Your answer: In order to fix the mistake of forgetting to add  a foreign key, you would need to create a new database table and connect their associations. The foreign key would belong to the Cohort model.

Researched answer: If the model called Cohort has the has_many description, students should go after that, which means that the Cohort model has the primary key. The foreign key would then be in the Student model, since the Student model belongs_to the Cohort model. A good 

2. Which RESTful routes must always be passed params? Why?

Your answer: The RESTful routes create and update must have params because they have strong params that are created by using the keyword private.

Researched answer: The RESTful routes create and update must always be passed params because they have strong params that can only be changed by someone who has authorization. The strong params are under the private method, which is only created at the end of the controller because anything below it cannot be changed.

3. Name three rails generator commands. What is created by each?

Your answer: Three rails generator commands are model, rspec, and migration. Model created the table for the database. Rspec creates the testing environment for Rails. Migration moves data in the database.

Researched answer: Rails generate model creates a new model that generates the name of the model, associated column names, and their data types.When generate a new model, the name must always be uppercase and singluar. The rails generate Rspec command will generate spec files when commands like rails generate and controller are used. Rails generate migration is a tool that changes the application's database schema.

4. Consider the Rails routes below. What is the name of the controller method that would be called by each route? What action would each of the controller methods perform?

action: "GET" location: /students This is showing and/or retrieving all of the students

action: "POST" location: /students This is sending a new student to the database.

action: "GET" location: /students/new This sends an HTML form to the user to have their info sent to the database.

action: "GET" location: /students/2 This is sending back one instance of '2' of the students.

action: "GET" location: /students/2/edit This is updating the instance from the HTML form.

action: "PATCH" location: /students/2 This is overwriting student with an ID of 2.

action: "DELETE" location: /students/2 This is deleting the instance from the database.

1. As a developer, you are making an application to manage your to do list. Create 10 user stories that will help you get your application started. Read more about [user stories](https://www.atlassian.com/agile/project-management/user-stories).

To Do List
1 - Make a button to create a todo with a title.
2 - Give the ability to create a description on the todo.
3 - Give the ability to put in a a due date and/or time for the todo.
4 - When creating the todo, post a time and date stamp with the todo.
5 - After creating the todo, I want to all the posts in an ordered list.
6 - I would like to search through the list with a search bar.
7 - I would like to sort my todos with different search criteria.
8 - I would like to mark todos as completed.
9 - If the todo is completed, it will not be seen and be deleted.
10 - I would like to update or change information on my todo.