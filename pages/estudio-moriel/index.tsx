import Link from "next/link";
import Image from "next/image";
import { useAuth } from "../../context/auth.context";

const posts = [
  {
    id: 0,
    slug: "administrative",
    title: "Administrative",
  },
  {
    id: 1,
    slug: "raw-resources",
    title: "Raw Resources",
  },
  {
    id: 2,
    slug: "design",
    title: "Design",
  },
  {
    id: 3,
    slug: "marketing",
    title: "Marketing Content",
  },
];

const Upload = () => {
  const { user } = useAuth();
  console.log(user);
  return (
    <div className="min-h-screen bg-black FileManager">
      {posts.map((post) => (
        <Link
          href={`/estudio-moriel/${encodeURIComponent(post.slug)}`}
          key={post.id}
        >
          <div className="FileManager-Card">
            <Image
              src="/img/file.png"
              alt=""
              width={300}
              height={300}
              className="FileManager-File"
            />
            <h2 className="FileManager-h2">{post.title}</h2>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Upload;
