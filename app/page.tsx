import createPost from "@/server/actions/create-posts";
import getPosts from "@/server/actions/get-posts";

export default async function Home() {
  const { error, success } = await getPosts();
  if (error) {
    throw new Error(error);
  }

  if (success) {
    return (
      <main>
        {success.map((post, index) => (
          <div key={index}>{post.title}</div>
        ))}
        <form action={createPost}>
          <input
            className="bg-black"
            type="text"
            name="title"
            placeholder="Title"
          />
          <button type="submit">Submit</button>
        </form>
      </main>
    );
  }
}
