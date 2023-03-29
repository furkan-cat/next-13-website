import HomeContainer from "@/containers/home";
import Movies from "@/mocks/movies.json";

async function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export default async function HomePage({ params }) {
  await delay(1500);
  let selectedCategory;

  if (params.category?.length > 0) {
    selectedCategory = true;
  }

  return (
    <>
      <HomeContainer
        selectedCategory={{
          movies: selectedCategory ? Movies.results.slice(0, 7) : [],
          id: params.category?.[0] ?? "",
        }}
      />
    </>
  );
}
