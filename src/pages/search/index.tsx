import { ObjectData } from "@/data/object"
import { useRouter } from "next/router";
import Image from "next/image"
import starFull from "@/assets/star 1.png"
import starEmpty from "@/assets/star 5.png"
import styles from "@/styles/cards.module.css"
import { Helmet } from "react-helmet-async";

const Search = () => {
  const router = useRouter()
  const query = router?.query?.query;


  const filtered = ObjectData.filter(i => {
    if (typeof query === 'string') {
      return i.name.toLowerCase().includes(query) || i.category.toLowerCase().includes(query)
    } else if (Array.isArray(query)) {
      return query.some(q => i.name.toLowerCase().includes(q) || i.category.toLowerCase().includes(q))
    }
    return false;
  });


  return (
    <>
      <Helmet>
        <title>
          Search...
        </title>
      </Helmet>
      <div className="cont-y container-p">
        <h3>{`Search Results by Query "${query}"`}</h3>
        <div className={styles.body}>
          {filtered.map((i, index) => {
            return (
              <div onClick={() => router.push(`/${i.category}/${i.id}`)}
                key={`${i.id}${index}`}
                className={styles.innerDiv}
              >
                <Image src={i.photo} alt="cloth" className="relative" width={255} />
                {i.offer !== "" ? (
                  <div className="absolute bg-sale font-bold text-xs text-white p-2">
                    {i.offer}
                  </div>
                ) : (
                  <></>
                )}
                <h3 className="body-14-22 text-dark opacity-60">{i.name}</h3>
                <div key={`${i.id}-child`}>
                  {i.oldPrice !== "" ? (
                    <span className="body-bold text-dark float-left">
                      {i.price}{" "}
                      <del className="text-dark opacity-40">{i.oldPrice}</del>
                    </span>
                  ) : (
                    <span className="body-bold text-dark float-left">
                      {i.price}
                    </span>
                  )}
                  <div
                    className="float-right flex flex-row p-1"
                    key={`innerChild-${i.id}`}
                  >
                    {[...Array(5)].map((_, index) => (
                      <Image
                        key={index}
                        src={index < i.star.length ? starFull : starEmpty}
                        alt={index < i.star.length ? "star full" : "star empty"}
                      />
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Search;
