# ASSESSMENT 6: Rails Commenting Challenge

# Add comments to the Rails Blog Post Challenge
# Explain the purpose and functionality of the code directly below the 10 comment tags


# FILE: app/controller/blog_posts_controller.rb

# ---1) The BlogPostsController is inheriting from the ApplicationController
class BlogPostsController < ApplicationController
  def index
    # ---2) The instance variable of posts is saving all of the blog posts in the application.
    @posts = BlogPost.all
  end

  # ---3) Using the method of show, we want to display a specific post by using its primary key.
  def show
    @post = BlogPost.find(params[:id])
  end

  # ---4) Use the method of new, a RESTful route, will send an HTML form for the user to fill out and sent to the database.
  def new
    @post = BlogPost.new
  end

  def create
    # ---5) This method only connects from the controller to the model. If the post that is created is validated by the blog post params, it will be able to be on the model. If not, the post will not be seen and will be redirected to the landing page.
    @post = BlogPost.create(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    end
  end

  def edit
    # ---6) The edit method will find the blog post based on its params[:id] and edit the data that is connected to that key.
    @post = BlogPost.find(params[:id])
  end

  def update
    @post = BlogPost.find(params[:id])
    # ---7) After validating the edited data, the blog post is updated in both the database and the view.
    @post.update(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    end
  end

  def destroy
    @post = BlogPost.find(params[:id])
    if @post.destroy
      # ---8) Once the blog post is updated, the application will confirm the deletion of its old data by redirecting the user to the landing page.
      redirect_to blog_posts_path
    end
  end

  # ---9) Private is information that is only accessible within the controller and cannot be modified.
  private
  def blog_post_params
    # ---10) Strong params that cannot be changed so that the information being sent is only relevant.
    params.require(:blog_post).permit(:title, :content)
  end
end
