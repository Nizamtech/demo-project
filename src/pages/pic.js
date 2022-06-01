import Image from "next/image";

const pic = ({ data }) => {
  const { results } = data;
  console.log(results);
  return (
    <div>
      <h1>Hello PIC Section</h1>

      <div className="picCard">
        {results.map((item) => {
          return (
            <>
              <div className="picMainCard">
                <Image
                  src={item.image}
                  alt={item.name}
                  width="250px"
                  height="250px"
                />
                <h1>{item.name}</h1>
                <h1>{item.gender}</h1>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default pic;

export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(`https://rickandmortyapi.com/api/character`);
  const data = await res.json();

  // Pass data to the page via props
  return { props: { data } };
}

// https://rickandmortyapi.com/api/character
