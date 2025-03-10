import BlogPost from "../assets/BlogPosts";

const BlogCards = () => {
  return (
    <>
      {BlogPost.map((post) => (
        <div
          key={post.id}
          className="flex justify-between items-center border-b py-6 px-4 w-full max-w-4xl mx-auto"
        >
          <div className="text-left">
            <p className="text-gray-500">{post.date}</p>
          </div>

          <div className="flex-1 px-6">
            <a href={post.link}>
              <h2 className="text-3xl font-bold">{post.title}</h2>
            </a>
            <p className="text-gray-500 mt-4">{post.description}</p>
          </div>

          <div className="text-right">
            <a
              href={post.link}
              className="font-semibold flex items-center space-x-2"
            >
              <span>Read More</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      ))}
    </>
  );
};

export default BlogCards;
