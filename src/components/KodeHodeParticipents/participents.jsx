function Participents() {
  const participents = [
    {
      name: "Bajan",
      isMale: true,
      quote: "I bent three barbells during biceps-curls, last week.",
    },
    {
      name: "Christian",
      isMale: true,
      quote: "If I can't lift it, it doesn't exist.",
    },
    {
      name: "Erik",
      isMale: true,
      quote: "I don't lift to live, I live to lift.",
    },
    { name: "Jorun", isMale: false, quote: "Your maxlift is my warmup." },
    {
      name: "John-Petter",
      isMale: true,
      quote:
        "All problems can be solved by making a new world record bench-press",
    },
    {
      name: "David",
      isMale: true,
      quote:
        "Eat, train, train some more, eat again, powernap, train, eat yet again, then sleep and repeat",
    },
    {
      name: "Lucas",
      isMale: true,
      quote:
        "I don't use a car, its too slow. I rather run where I need to go to get there quicker",
    },
    {
      name: "Therese",
      isMale: false,
      quote:
        "After destroying the roof of my last gym im no longer allowed to do high-jumps",
    },
    {
      name: "Kenneth",
      isMale: true,
      quote: "A brain is important, but a bigger biceps is more importener",
    },
    {
      name: "Joakim",
      isMale: true,
      quote:
        "If there's not enough weights, there is always people to add to the weightpile",
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
                  <figure>
                    <img src="https://placeimg.com/400/225/arch" alt="Shoes" />
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
                    <img
                      src="https://placeimg.com/400/225/people"
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
    </div>
  );
}

export default Participents;
