const city = "Jakarta";
const street = "Jl Kebon jeruk";

interface ApiUser {
  name: string;
  email: string;
}

interface ApiPost {
  title: string;
  body: string;
}

export const getUsers = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const users: ApiUser[] = await response.json();
    return users.map((user) => ({
      name: user.name,
      email: user.email,
      city,
      street,
    }));
  } catch (error: any) {
    console.error("[Services] Gagal mengambil data:", error.message);
    throw error;
  }
};

export const getPosts = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const posts: ApiPost[] = await response.json();
    return posts.map((post) => ({
      title: post.title,
      body: post.body,
    }));
  } catch (error: any) {
    console.error("[Services] Gagal mengambil data:", error.message);
    throw error;
  }
};
