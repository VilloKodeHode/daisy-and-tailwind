function Participents() {
  const participents = [
    {
      name: "Bajan",
      isMale: true,
      quote: "I bent three barbells during biceps-curls, last week.",
      img: "https://i.insider.com/62261331990863001998ad10?width=700",
    },
    {
      name: "Christian",
      isMale: true,
      quote: "If I can't lift it, it doesn't exist.",
      img: "https://i.guim.co.uk/img/media/c7017e77c9be1ebd9b311832df47b7c0f9667c3f/458_42_4409_2645/master/4409.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=5db29a3b9921e26d145d41d7056206a0",
    },
    {
      name: "Erik",
      isMale: true,
      quote: "I don't lift to live, I live to lift.",
      img: "https://people.southwestern.edu/~bednarb/su_netWorks/projects/psmith/cap.jpg",
    },
    {
      name: "Jorun",
      isMale: false,
      quote: "Your maxlift is my warmup.",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTr1eY-L8KuwbwCgomud2DkNqp8h-xlxtUD7Q&usqp=CAU",
    },
    {
      name: "John-Petter",
      isMale: true,
      quote:
        "All problems can be solved by making a new world record bench-press",
      img: "https://pbs.twimg.com/media/Dg-THQXWAAAC92N.jpg",
    },
    {
      name: "David",
      isMale: true,
      quote:
        "Eat, train, train some more, eat again, powernap, train, eat yet again, then sleep and repeat",
      img: "https://variety.com/wp-content/uploads/2022/10/Black-Adam-3.jpg?w=681&h=383&crop=1",
    },
    {
      name: "Lucas",
      isMale: true,
      quote:
        "I don't use a car, its too slow. I rather run where I need to go to get there quicker",
      img: "https://cdn.britannica.com/72/182872-050-914C987D/Hugh-Jackman-title-character-The-Wolverine-James.jpg",
    },
    {
      name: "Therese",
      isMale: false,
      quote:
        "After destroying the roof of my last gym im no longer allowed to do high-jumps",
      img: "https://womenwriteaboutcomics.com/wp-content/uploads/2018/11/she-hulk-3.jpg",
    },
    {
      name: "Kenneth",
      isMale: true,
      quote: "A brain is important, but a bigger biceps is more importener",
      img: "https://wegotthiscovered.com/wp-content/uploads/2022/06/image1-42.jpg",
    },
    {
      name: "Joakim",
      isMale: true,
      quote:
        "If there's not enough weights, there is always people to add to the weightpile",
      img: "https://images.thedirect.com/media/photos/thor-naked-1.jpg",
    },
  ];
  return (
    <div>
      <div>
        <h2>Male participents:</h2>
        <div className="flex gap-8 flex-wrap justify-center">
          {participents.map(
            (participent, key) =>
              participent.isMale && (
                <div className="card w-96 bg-neutral-100 shadow-xl">
                  <figure className="h-1/2">
                    <img
                      className="h-full w-full"
                      src={participent.img}
                      alt="Shoes"
                    />
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title">{participent.name}</h2>
                    <p>''{participent.quote}''</p>
                    <div className="card-actions justify-end">
                      <button className="btn btn-primary">Profile</button>
                    </div>
                  </div>
                </div>
              )
          )}
        </div>
      </div>
      <div>
        <h2>Female participents:</h2>
        <div className="flex gap-8 flex-wrap justify-center">
          {participents.map(
            (participent, key) =>
              !participent.isMale && (
                <div className="card w-96 bg-neutral-100 shadow-xl">
                  <figure>
                    <img src={participent.img} alt="Shoes" />
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title">{participent.name}</h2>
                    <p>''{participent.quote}''</p>
                    <div className="card-actions justify-end">
                      <button className="btn btn-primary">Profile</button>
                    </div>
                  </div>
                </div>
              )
          )}
        </div>
      </div>
    </div>
  );
}

export default Participents;
