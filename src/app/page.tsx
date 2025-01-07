import Link from "next/link";

const Home = () => {
  return (
    <div className="flex min-h-screen justify-center items-center">
      Click{" "}
      <Link href="/documents/123">
        &nbsp;
        <span className="text-blue-500 underline">here</span> &nbsp;{" "}
      </Link>{" "}
      to go to the documnet id page.
    </div>
  );
};

export default Home;
